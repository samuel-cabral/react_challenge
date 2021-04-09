# **Teste React**

### Objetivo 
Construir um site que exiba um catálogo de produtos do Supermercado Show!

### Instruções:

Você deverá fazer um fork neste repositório. A entrega deverá ser efetuada até às 23:59 do dia combinado (verificar com seu entrevistador). **O prazo não deverá passar 3 dias!** Disponibilizar o link do projeto hospedado em plataformas como o Heroku e o código fonte deve ser hosperado no seu repositório (após feito o Fork). Faça uma branch separada e crie um pull request mirando na master.

A organização e estrutura da interface para a exibição dos dados ficam a seu critério. Lembrando que na avaliação levaremos em consideração os aspectos visuais e quão "fácil" é de entender a disposição dos elementos nas telas. É importante que o seu código seja compreensível, busque fazer uso otimizado da tecnologia e seja de fácil manutenção.

**OBS:** desde que a essência dos requisitos básicos sejam respeitados, aceitamos mudanças na arquitetura da informação proposta e nas disposições das telas.


### API dos produtos
```
https://run.mocky.io/v3/29c9fcde-549f-49fc-9021-a85660530cef
```


### Requisitos:

- O código deverá ser escrito em inglês;
- Os commits deverão estar no imperativo, primeira letra maiúscula e em inglês;
- Caso exista algum preço de oferta, exibir o preço antigo cortado `<s></s>` e o preço da oferta mais destacado;
- A primeira tela `(1)`, a Home do site, deverá exibir todos os produtos, suas fotos, descrições, preços, preço de oferta (se houver) e uma tag indicando se há uma promoção no produto; Ao clicar no produto, deverá redirecionar o usuário para a segunda tela `(2)`.
- A segunda tela `(2)` do site deverá exibir o produto com a sua foto (tamanho maior do que a tela `(1)`), descrição, preço, preço da oferta (se houver) e detalhar a promoção (se houver). Para detalhar a promoção, basta escrever uma descrição dela abaixo das informações do produto. Fique a vontade para definir a forma de detalhar o funcionamento da promoção para o usuário;
- Na segunda tela `(2)`, deve haver um botão para adicionar/remover unitariamente quantidades desse produto no carrinho (tela `3`). A quantidade a ser adicionada no carrinho deve ser limitada por valor MÁXIMO, este informado pelo atributo `stock` que vem da API.  Ao adicionar no carrinho, **o preço deve ir já com os valores de oferta e/ou promoção calculados, tanto na adição quanto na remoção de quantidades do produto**.
- Em ambas telas (`1` e `2`) deverá haver um símbolo de um carrinho na parte superior direita da tela. Clicando nele, irá para uma a tela 3 (carrinho) que deverá apenas mostrar todos os produtos que foram adicionados no carrinho, as quantidades e preços totais de cada produto já com o preço da oferta e promoções aplicado (caso houver).


### Informações da promoção:
Ela virá dentro de um objeto de um item na API. Só será enviado a promoção do tipo `buy-x-take-y`, que significa a promoção "Compre 3 e leve 4", por exemplo. O atributo `base` representa o `X` (no caso do exemplo, 3), e o atributo `value` representa o `Y` (no caso do exemplo, 4). Ou seja, usando o exemplo, ao adicionar 4 unidades do produto, a quarta unidade sairá "de graça".

- Tag da promoção:
```
https://merconnect.s3.amazonaws.com/uploads/offer_badges/ccabc737cba8fac5b9000324b9e9726e6362f394.png
```


Estaremos a disposição para tirar dúvidas sobre o projeto pelo Telegram: @phxev ou @lorranmonteiro.

**Boa sorte!**
