import { addAsset } from "../../components/utilities";

export const FilterComponent = {
    root: document.querySelector('#component-products-filter-root'),
    mobileButton: document.querySelector('#open-filter-mobile'),
    settings: window.filterSettings || false,
    showPriceSlider: false,
    instance: false,

    sortArrayValues: function(array, property) {
      let sortedArray = array.sort((a, b) => {
        if (a[property] < b[property]) return -1
        if (b[property] > b[property]) return 1
        return 0
      })
  
      // Define ordenação dos tamanhos
      const customOrder = ['pp','p','m','g','gg','xg','xgg']
      sortedArray.forEach(item => {
        item.sort = 99
        customOrder.forEach((order, index) => {
          if (item[property].toLowerCase() === order) item.sort = index
        })
      })
  
      return sortedArray.sort((a, b) => {
        if (a.sort < b.sort) return -1
        if (b.sort > b.sort) return 1
        return 0
      })
    },  
  
    setTagTypes: function() {
      const { settings } = FilterComponent;
      const tags = [];
  
      if (settings.aggregations) {
        const aggregations = settings.aggregations
  
        // Filtro de categoria
        if (aggregations.types.categoria) tags.push({
          title: 'Categoria',
          type: 'categoria',
          style: 'list',
          options: FilterComponent.sortArrayValues(aggregations.types.categoria, 'title')
        })
      }
  
      return tags
    },
  
    setPropeties: function() {
      const { settings } = FilterComponent;
      const properties = [];
  
      if (settings.aggregations) {
        const aggregations = settings.aggregations
  
        // Filtros Atributo 1
        if (aggregations.properties.property1.length > 0) properties.push({
          title: 'Cor',
          property: 'property1',
          style: 'colors',
          colorsProps: {
            showTitle: true,
            showColor: true,
          },
          options: FilterComponent.sortArrayValues(aggregations.properties.property1, 'value'),
          patterns: settings.patterns
        })
  
        // Filtros Atributo 2
        if (aggregations.properties.property2.length > 0) properties.push({
          title: 'Tamanho',
          property: 'property2',
          style: 'grid',
          options: FilterComponent.sortArrayValues(aggregations.properties.property2, 'value'),
          patterns: settings.patterns
        });
  
        // Filtros Atributo 3
        if (aggregations.properties.property3.length > 0) properties.push({
          title: 'Fragrância',
          property: 'property3',
          style: 'list',
          options: FilterComponent.sortArrayValues(aggregations.properties.property3, 'value'),
          patterns: settings.patterns
        });
  
      }
  
      return properties
    },
  
    setPricesRanges: function() {
      const { settings, showPriceSlider } = FilterComponent
      let priceSettings = {
        price: false,
        priceProps: false
      }
  
      // Exibe o slider de preço. Caso tenha faixas de preço,
      // preferência fica para as faixas (abaixo)
      if (showPriceSlider) {
        priceSettings.price = [
          settings.aggregations.min_price,
          settings.aggregations.max_price
        ]
      }
  
      // Exibe as opções de faixa de preço
      if (settings.prices_range.length > 0) {
        priceSettings.priceProps = {
          mode: 'options',
          options: settings.prices_range
        }
        priceSettings.price = [
          settings.aggregations.min_price,
          settings.aggregations.max_price
        ]
      }
  
      return priceSettings
    },
  
    setFilters: function() {
      const { root } = FilterComponent;
      const tags = FilterComponent.setTagTypes()
      const properties = FilterComponent.setPropeties()
      const priceSettings = FilterComponent.setPricesRanges()
      const mode = (window.innerWidth <= 1024) ? 'drawer' : 'vertical'
  
      const componentFilters = new Vnda.Component.ProductsFilter({
        mode,
        hasSort: true,
        filterOnClick: false,
        resetMode: 'all',
        tags,
        properties,
        price: priceSettings.price,
        priceProps: priceSettings.priceProps
      });
  
      // Renderiza o componente
      componentFilters.render(root);
      FilterComponent.instance = componentFilters
      root.dispatchEvent(new Event('vnda:filter-component-loaded'))
    },
  
    loadFilters: function() {
      const { settings } = FilterComponent;
      if (!settings) return;
      addAsset(settings.script, FilterComponent.setFilters)
      addAsset(settings.styles)
    },
  
    show: function() {
      const { root } = FilterComponent;
  
      if (!FilterComponent.instance) {
        FilterComponent.loadFilters()
        root.addEventListener('vnda:filter-component-loaded', () => {
          FilterComponent.instance.toggle()
        })
      } else {
        FilterComponent.instance.toggle()
      }
    },
  
    init: function() {
  
      const { root, mobileButton } = FilterComponent
  
      if (!root) return
  
      // mobile: monta ao clicar no botão
      // desktop: monta ao carregar a página
      if (window.innerWidth <= 1024) {
        if (mobileButton) mobileButton.addEventListener('click', () => {
          FilterComponent.show()
        })
  
      } else {
        FilterComponent.loadFilters()
      }
    }
  }