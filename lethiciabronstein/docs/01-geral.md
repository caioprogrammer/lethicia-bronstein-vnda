


- ![Computer](../images/prints/computer.png)
  - ![Print](../images/prints/01-geral.png)

# GERAL

| Ícone               | Legenda                                            |
| ------------------- | -------------------------------------------------- |
| :large_blue_circle: | Campo funcional                                    |
| :no_entry:          | Não possui o campo ou apenas para controle interno |
| :black_circle:      | Campo obrigatório no admin                         |

&nbsp;

## POPUP DE NEWSLETTER

**_Observações:_**

Criar formulário no [Admin](https://template1.vnda.dev/admin/config/mensagens-e-avisos/forms) com o assunto `newsletter`. Serve para o popup e a newsletter do rodapé.

&nbsp;

**_Informações:_**

| Dúvida                | Instrução                                              |
| --------------------- | ------------------------------------------------------ |
| **Onde cadastrar**    | Banners                                                |
| **Onde será exibido** | Popup com newsletter que aparece uma vez a cada 7 dias |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/midias/16)    |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                                 |
| ------------- | ------------------- | ---------------------------------------------------------- |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 550x680 pixels                           |
| **Título**    | :black_circle:      | Controle interno                                           |
| **Subtítulo** | :no_entry:          |                                                            |
| **Descrição** | :large_blue_circle: | Texto da popup                                             |
| **Externo?**  | :no_entry:          |                                                            |
| **URL**       | :no_entry:          |                                                            |
| **Posição**   | :black_circle:      | `newsletter-popup`                                         |
| **Cor**       | :large_blue_circle: | Opcional, se selecionado irá mudar a cor de fundo da popup |

**Obs**: Caso deseje trocar o texto após o envio do formulário, separar os dois textos com `---` o campo descrição. O segundo texto (abaixo da divisão) será exibido somente se o formulário de newsletter for enviado corretamente.

&nbsp;

### HEADER

## BANNER FAIXA TOPO

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Banner faixa a cima do header                                 |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/midias/editar?id=44) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação            |
| ------------- | ------------------- | --------------------- |
| **Imagem**    | :no_entry:          |                       |
| **Título**    | :black_circle:      | Controle interno      |
| **Subtítulo** | :large_blue_circle: | Cor do texto em hex   |
| **Descrição** | :large_blue_circle: | Texto do banner faixa |
| **Externo?**  | :no_entry:          |                       |
| **URL**       | :no_entry:          |                       |
| **Posição**   | :black_circle:      | `geral-faixa-topo`    |
| **Cor**       | :large_blue_circle: | Cor do fundo          |

&nbsp;

## MENU PRINCIPAL

**_Informações:_**

| Dúvida                | Instrução                                           |
| --------------------- | --------------------------------------------------- |
| **Onde cadastrar**    | Menu                                                |
| **Onde será exibido** | Menus principal do site                             |
| **Níveis**            | 3 níveis                                            |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/navegacao) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                                     |
| ------------- | ------------------- | -------------------------------------------------------------- |
| **Título**    | :black_circle:      | Título do menu                                                 |
| **Tooltip**   | :black_circle:      | Cor do texto do menu                                           |
| **Descrição** | :no_entry:          |                                                                |
| **Posição**   | :black_circle:      | `principal`                                                    |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba           |
| **URL**       | :black_circle:      | Link de direcionamento, se for `#` o menu não vai ser clicável |

&nbsp;

## BANNER DO SUBMENU

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Banners no submenu do header                                  |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/midias/editar?id=37) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                              |
| ------------- | ------------------- | --------------------------------------- |
| **Imagem**    | :large_blue_circle: | Tamanho máximo 620 largura x 480 altura |
| **Título**    | :black_circle:      | Alt da imagem                           |
| **Subtítulo** | :no_entry:          |                                         |
| **Descrição** | :no_entry:          |                                         |
| **Externo?**  | :no_entry:          |                                         |
| **URL**       | :no_entry:          |                                         |
| **Posição**   | :black_circle:      | `banner-menu-` + título do menu         |
| **Cor**       | :no_entry:          |                                         |

&nbsp;

### RODAPÉ

## LOGO PRINCIPAL

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Imagem no topo do rodapé                                      |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/midias/editar?id=11) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                           |
| ------------- | ------------------- | ---------------------------------------------------- |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 200x200                            |
| **Título**    | :black_circle:      | Alt da imagem                                        |
| **Subtítulo** | :no_entry:          |                                                      |
| **Descrição** | :no_entry:          |                                                      |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba |
| **URL**       | :large_blue_circle: | Link de direcionamento                               |
| **Posição**   | :black_circle:      | `rodape-logo-principal`                              |
| **Cor**       | :no_entry:          |                                                      |

&nbsp;

## NEWSLETTER

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Texto do bloco de newsletter do rodapé                        |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/midias/editar?id=16) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação           |
| ------------- | ------------------- | -------------------- |
| **Imagem**    | :large_blue_circle: |                      |
| **Título**    | :black_circle:      | Não exibido no front |
| **Subtítulo** | :large_blue_circle: | Título da newsletter |
| **Descrição** | :large_blue_circle: | Breve descrição      |
| **Externo?**  | :no_entry:          |                      |
| **URL**       | :no_entry:          |                      |
| **Posição**   | :black_circle:      | `newsletter-rodape`  |
| **Cor**       | :no_entry:          |                      |

&nbsp;

## LOGO SECUNDÁRIO

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Imagem a cima das informações do rodapé                       |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/midias/editar?id=81) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                           |
| ------------- | ------------------- | ---------------------------------------------------- |
| **Imagem**    | :large_blue_circle: | Dimensão sugerida 190x50                             |
| **Título**    | :black_circle:      | Não exibido no front                                 |
| **Subtítulo** | :no_entry:          |                                                      |
| **Descrição** | :no_entry:          |                                                      |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba |
| **URL**       | :large_blue_circle: | Link de direcionamento                               |
| **Posição**   | :black_circle:      | `rodape-logo-secundario`                             |
| **Cor**       | :no_entry:          |                                                      |

&nbsp;

## REDES SOCIAIS

**_Informações:_**

| Dúvida                | Instrução                                           |
| --------------------- | --------------------------------------------------- |
| **Onde cadastrar**    | Menu                                                |
| **Onde será exibido** | Links de redes sociais do rodapé                    |
| **Níveis**            | 1 nível                                             |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/navegacao) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                           |
| ------------- | ------------------- | ---------------------------------------------------- |
| **Título**    | :black_circle:      | Título do menu                                       |
| **Tooltip**   | :black_circle:      | nome do icone                                        |
| **Descrição** | :no_entry:          |                                                      |
| **Posição**   | :black_circle:      | `social`                                             |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba |
| **URL**       | :black_circle:      | Link de direcionamento                               |

&nbsp;

**_Opções de redes sociais_**

- facebook
- instagram
- youtube
- whatsapp
- vsco
- vimeo
- twitter
- swarm
- rss
- pinterest
- messenger
- flickr
- linkedin
- tiktok

&nbsp;

## INFORMAÇÕES DE CONTATO

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Informações de contato                                        |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/midias/editar?id=60) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                    |
| ------------- | ------------------- | --------------------------------------------- |
| **Imagem**    | :no_entry:          |                                               |
| **Título**    | :black_circle:      | Alt da imagem                                 |
| **Subtítulo** | :no_entry:          |                                               |
| **Descrição** | :large_blue_circle: | Texto com informações conforme exemplo abaixo |
| **Externo?**  | :no_entry:          |                                               |
| **URL**       | :no_entry:          |                                               |
| **Posição**   | :black_circle:      | `rodape-texto`                                |
| **Cor**       | :no_entry:          |                                               |

&nbsp;

**_Observações_**

Exemplo de markdown na descrição do banner:

```md
#### Espaço para curta descrição do negócio, não permitir que sejam escritas muitas coisas aqui pra não deixar o rodapé muito grande.

Av. Cândido Hartmann - Mercês - Curitiba - Paraná - Brasil

**email@dominio.com.br**
```

&nbsp;

## MENU FOOTER

**_Informações:_**

| Dúvida                | Instrução                                           |
| --------------------- | --------------------------------------------------- |
| **Onde cadastrar**    | Menu                                                |
| **Onde será exibido** | Menu do rodapé                                      |
| **Níveis**            | 2 níveis                                            |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/navegacao) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                           |
| ------------- | ------------------- | ---------------------------------------------------- |
| **Título**    | :black_circle:      | Título do menu                                       |
| **Tooltip**   | :no_entry:          |                                                      |
| **Descrição** | :no_entry:          |                                                      |
| **Posição**   | :black_circle:      | `footer`                                             |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba |
| **URL**       | :black_circle:      | Link de direcionamento                               |

&nbsp;

## BANNER SELOS (até 4)

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Banner abaixo das infos de contato                            |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/midias/editar?id=54) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                           |
| ------------- | ------------------- | ---------------------------------------------------- |
| **Imagem**    | :black_circle:      | Dimensão sugerida 150 x 50 pixels                    |
| **Título**    | :black_circle:      | Alt da imagem                                        |
| **Subtítulo** | :no_entry:          |                                                      |
| **Descrição** | :no_entry:          |                                                      |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba |
| **URL**       | :large_blue_circle: | Link de direcionamento                               |
| **Posição**   | :black_circle:      | `rodape-selos`                                       |
| **Cor**       | :no_entry:          |                                                      |

&nbsp;

## ASSINATURA LOJA

**_Informações:_**

| Dúvida                | Instrução                                                     |
| --------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**    | Banners                                                       |
| **Onde será exibido** | Assinatura da loja no fim do rodapé                           |
| **Cadastro exemplo**  | [Admin](https://template5.vnda.dev/admin/midias/editar?id=13) |

&nbsp;

**_Orientações sobre os campos:_**

| Campo         | Funcional?          | Orientação                                    |
| ------------- | ------------------- | --------------------------------------------- |
| **Imagem**    | :no_entry:          |                                               |
| **Título**    | :black_circle:      | Alt da imagem                                 |
| **Subtítulo** | :no_entry:          | Texto com informações conforme exemplo abaixo |
| **Descrição** | :large_blue_circle: |                                               |
| **Externo?**  | :no_entry:          |                                               |
| **URL**       | :no_entry:          |                                               |
| **Posição**   | :black_circle:      | `rodape-infos-loja`                           |
| **Cor**       | :no_entry:          |                                               |

**_Observações_**

Exemplo de texto:

```md
© Nome da loja – CNPJ 00.000.000/0000-00
```

***
