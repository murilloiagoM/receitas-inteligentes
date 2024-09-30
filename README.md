Receitas inteligentes - Teste Murillo Moreira

  Aplicativo de receitas e ingredientes. “Gostaria de um aplicativo onde eu soubesse de forma rápida e fácil o que posso fazer com os ingredientes que tenho.”

Utilização

Instalar o app receitas-inteligentes pelo arquivo .apk no diretório /apk/receitas-inteligentes.apk

ou

Clonar o Repositório, Instalar dependências com: npm install, iniciar o servidor de Desenvolvimento com: npx expo start.

Para construir o Aplicativo (produção): eas build --platform android --profile development para criar uma versão do aplicativo que pode ser instalada em dispositivos Android.


Funcionalidades

Usuários: Cadastrar usuários, Login, Logout.

Ingredientes: Listar todos os ingredientes disponíveis, Adicionar ingredientes a lista para buscar receitas compatíveis.

Receitas: Lista de Receitas, Lista de todas as receitas disponíveis, Visualização de uma receita específica.

Busca de Receitas: Permitir que o usuário busque receitas com base nos ingredientes selecionados, Nível de compatibilidade das receitas com base nos ingredientes (ex.: 80% compatível).

Requisitos de Arquitetura e Estruturação

  Definiu-se que o código do projeto será organizado e estruturado da seguinte forma: Utilização do Banco de Dados não relacional Firebase;
  
  Arquitetura MVC (Model-View-Controller) para uma separação de responsabilidades:
  
  Models: Modelos que representam classes ou objetos, no caso do projeto os tipos de dados, interfaces;
  
  Screens (ou View): Interface do aplicativo, telas que exibem os dados e permitem a interação do usuário, atuando como a “View” do MVC.
  
  Services (ou Controller): Controla a interação entre o Model e a View. Responsáveis pela manipulação dos dados externos (como o Firebase).
  
  Assets: Diretório definido para conter imagens, ícones e logos do projeto.
  
  Components: Componentes reutilizáveis da interface do usuário.
  
  A estrutura do MVC segue um padrão de camadas, sendo elas:
  
  Camada de Apresentação (Screens e Components): lida com o que o usuário vê e com as interações, Camada de Lógica (Services, Models): lida com a manipulação de dados e interações com o ambiente de persistência de dados (Firebase);
  
  Utilização do Expo para o desenvolvimento do aplicativo mobile;
  
  Firebase para persistência dos dados e autenticação de usuário;

  Utilização do padrão de design SOLID a fim de garantir a facilidade de manutenção e futuras extensões.

Comandos utilizados para criar o projeto

  npx create-expo-app@latest --template blank-typescript

  npm install -g eas-cli

  eas login

  eas build:configure

  eas build --platform android --profile development

  npx expo start
