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

Criar formulário no [Admin](https://template4.vnda.dev/admin/config/mensagens-e-avisos/forms) com o assunto `newsletter`. Serve para o popup e a newsletter do rodapé.

&nbsp;

**_Informações:_**

| Dúvida                | Instrução                                              |
| --------------------- | ------------------------------------------------------ |
| **Onde cadastrar**    | Banners                                                |
| **Onde será exibido** | Popup com newsletter que aparece uma vez a cada 7 dias |
| **Cadastro exemplo**  | [Admin](https://template4.vnda.dev/admin/banner/editar?id=29)    |

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
| **Cadastro exemplo**  | [Admin](https://template4.vnda.dev/admin/banner/editar?id=57) |

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
| **Cadastro exemplo**  | [Admin](https://template4.vnda.dev/admin/navegacao) |

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

### RODAPÉ

## MENU FOOTER

***Informações:***

| Dúvida                          | Instrução                                           |
| ------------------------------- | --------------------------------------------------- |
| **Onde cadastrar**              | Menu                                                |
| **Onde será exibido**           | Menu do header                                      |
| **Níveis**                      | 2 níveis                                            |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.dev/admin/navegacao) |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                           |
| ------------- | ------------------- | ---------------------------------------------------- |
| **Título**    | :black_circle:      | Título do menu                                       |
| **Tooltip**   | :no_entry:          | Não utilizado.                                       |
| **Descrição** | :no_entry:          | Não utilizado                                        |
| **Posição**   | :black_circle:      | `rodape`                                             |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba |
| **URL**       | :black_circle:      | Link de direcionamento                               |

## MENU REDES SOCIAIS

***Informações:***

| Dúvida                          | Instrução                                           |
| ------------------------------- | --------------------------------------------------- |
| **Onde cadastrar**              | Menu                                                |
| **Onde será exibido**           | Menu do header                                      |
| **Níveis**                      | 1 níveis                                            |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.dev/admin/navegacao) |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                                                                                                           |
| ------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Título**    | :black_circle:      | Título do menu                                                                                                                       |
| **Tooltip**   | :large_blue_circle: | Deve ser colocado no tooltip uma das seguintes opções: instagram, twitter, facebook e youtube, para que puxe o icone correspondente. |
| **Descrição** | :no_entry:          | Não utilizado                                                                                                                        |
| **Posição**   | :black_circle:      | `social`                                                                                                                             |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do menu deve abrir em outra aba                                                                                 |
| **URL**       | :black_circle:      | Link de direcionamento                                                                                                               |

## ENDEREÇO DO RODAPÉ

***Informações:***

| Dúvida                          | Instrução                                                     |
| ------------------------------- | ------------------------------------------------------------- |
| **Onde cadastrar**              | Banners                                                       |
| **Onde será exibido**           | Copyright no rodapé                                           |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.dev/admin/midias/editar?id=17) |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :large_blue_circle: | Não utilizado.                                         |
| **Título**    | :no_entry:          | Não utilizado.                                         |
| **Subtítulo** | :no_entry:          | Não utilizado.                                         |
| **Descrição** | :large_blue_circle: | Texto do endereço com markdown.                        |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :no_entry:          | Não utilizado.                                         |
| **Posição**   | :black_circle:      | `geral-endereco`                                       |
| **Cor**       | :no_entry:          | Não utilizado.                                         |

**Exemplo descrição**
```
**Endereço**
Rua, nº 0000 - Bairro. Cidade/Estado
```

## BANNER COPYRIGHT ASSINATURA VNDA

***Informações:***

| Dúvida                          | Instrução                                                    |
| ------------------------------- | ------------------------------------------------------------ |
| **Onde cadastrar**              | Banners                                                      |
| **Onde será exibido**           | Copyright no rodapé                                          |
| **Cadastro exemplo em staging** | [Admin](https://template4.vnda.dev/admin/midias/editar?id=2) |

***Orientações sobre os campos:***

| Campo         | Funcional?          | Orientação                                             |
| ------------- | ------------------- | ------------------------------------------------------ |
| **Imagem**    | :large_blue_circle: | Não utilizado.                                         |
| **Título**    | :no_entry:          | Não utilizado.                                         |
| **Subtítulo** | :no_entry:          | Não utilizado.                                         |
| **Descrição** | :large_blue_circle: | Texto do endereço com markdown.                        |
| **Externo?**  | :large_blue_circle: | Selecionar se o link do banner deve abrir em outra aba |
| **URL**       | :no_entry:          | Não utilizado.                                         |
| **Posição**   | :black_circle:      | `geral-copyright`                                      |
| **Cor**       | :no_entry:          | Não utilizado.                                         |

**Exemplo descrição**
```
CNPJ: 00.000.000/0000-00 | `[`template4@vnda.com.br`](`mailto:template4@vnda.com.br`)` | (00) 00000-0000`
```

## FORMAS DE PAGAMENTO
- Serão mostradas as bandeiras de cartão cadastradas nas configurações do admin.

***
