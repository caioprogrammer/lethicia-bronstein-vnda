# Template 3

## Como iniciar um projeto a partir desse template?

- Crie o repositório no grupo Setup no GitLab da Vnda e clone-o localmente
- No diretório do repositório execute o comando:

```bash
git pull git@gitlab.com:vnda/setup/template4.git --allow-unrelated-histories
```
- Altere o *name* do package.json e no .gitmodules com o nome do projeto
- Crie uma página na Wiki do repositório do projeto no GitLab
- Verifique se o `.gitmodules` está com o caminho relativo (ex.: `../../setup/template4.wiki.git`)
- Execute o comando para adicionar a Wiki:

```bash
npm run wiki
```

- Dê **push** no projeto.
