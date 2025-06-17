# MaxMarketing Total 🚀

> Seu especialista de marketing digital com IA, pronto para transformar ideias em resultados.

## Sobre o Projeto

O **MaxMarketing Total** é o primeiro módulo comercial da suíte Max IA Empresarial. Nosso objetivo é democratizar o acesso a ferramentas de marketing digital de alta performance para Pequenas e Médias Empresas (PMEs) no Brasil, combinando uma interface intuitiva com o poder da Inteligência Artificial generativa do Google.

Este projeto é desenvolvido de forma modular para garantir agilidade, qualidade e entrega de valor contínua aos nossos clientes.

## 🎯 Principais Funcionalidades (MVP)

* **🤖 Criador de Posts para Redes Sociais:** Gera conteúdo completo (texto, título, hashtags, sugestão de imagem) para Instagram, Facebook e outras redes.
* **✉️ Gerador de Campanhas Completas:** Cria um pacote de criativos (posts, e-mails, etc.) para campanhas com um objetivo estratégico.
* **🛍️ Construtor de Ofertas:** Cria um catálogo visual de produtos e ofertas, com exportação para PDF e compartilhamento em redes sociais.
* **📊 Estrategista de Mídia Digital:** Fornece análises e sugestões para otimização de anúncios e conteúdo (GEO).
* **🎓 Max Trainer (Integrado):** Uma área de aprendizado com tutoriais e dicas para ajudar o usuário a extrair o máximo de cada ferramenta.
* **🔐 Autenticação Segura:** Sistema completo de login, cadastro com chave de ativação e gerenciamento de contas de usuário.

## 🛠️ Tecnologias Utilizadas

* **Backend & Frontend:** Python 3.11+ com [Streamlit](https://streamlit.io/)
* **Inteligência Artificial:** Google Gemini API
* **Containerização:** [Docker](https://www.docker.com/)
* **Hospedagem (Planejada):** [Google Cloud Run](https://cloud.google.com/run)

---

## 🚀 Como Começar (Setup do Ambiente)

Para configurar o ambiente de desenvolvimento localmente, siga estes passos:

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/Yaakov-Israel/MaxMarketing-Total.git](https://github.com/Yaakov-Israel/MaxMarketing-Total.git)
    cd MaxMarketing-Total
    ```

2.  **Crie e ative um ambiente virtual:**
    ```bash
    # Para Linux/macOS
    python3 -m venv venv
    source venv/bin/activate

    # Para Windows
    python -m venv venv
    .\venv\Scripts\activate
    ```

3.  **Instale as dependências:**
    ```bash
    pip install -r requirements.txt
    ```

4.  **Configure as chaves secretas:**
    * Na raiz do projeto, crie uma pasta chamada `.streamlit`.
    * Dentro da pasta `.streamlit`, crie um arquivo chamado `secrets.toml`.
    * Preencha o `secrets.toml` com suas chaves do Firebase e do Google AI, seguindo o modelo que definimos.
    * **Importante:** O arquivo `.gitignore` que criamos garantirá que este arquivo nunca seja enviado para o GitHub.

## ▶️ Como Executar o Projeto

### Localmente

Após instalar as dependências, execute o seguinte comando no seu terminal:

```bash
streamlit run app.py
