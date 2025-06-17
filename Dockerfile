# Etapa 1: Usar uma imagem base oficial do Python. A versão "slim" é leve e boa para produção.
FROM python:3.11-slim

# Etapa 2: Definir o diretório de trabalho dentro do contêiner.
WORKDIR /app

# Etapa 3: Instalar dependências de sistema (como a lib para fontes).
COPY packages.txt .
RUN apt-get update && xargs -a packages.txt apt-get install -y --no-install-recommends && apt-get clean && rm -rf /var/lib/apt/lists/*

# Etapa 4: Copiar e instalar as dependências do Python.
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Etapa 5: Copiar TODO o resto do código e pastas do seu projeto para o contêiner.
COPY . .

# Etapa 6: Expor a porta que o Streamlit usa.
EXPOSE 8501

# Etapa 7: Adicionar uma "verificação de saúde" para o Google Cloud Run.
HEALTHCHECK --interval=30s --timeout=10s --start-period=5s --retries=3 \
  CMD curl --fail http://localhost:8501/_stcore/health || exit 1

# Etapa 8: O comando para iniciar seu aplicativo, apontando para o app.py.
CMD ["streamlit", "run", "app.py", "--server.port=8501", "--server.address=0.0.0.0", "--server.headless=true"]
