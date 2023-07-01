window.google;
window.geocoder;
window.bounds;
window.mapPlaces;
window.searchBox;
window.initialLatLang = { lat: -14.2400732, lng: -53.1805017 };

window.statesInfo = {
  AC: {
    name: 'Acre',
    sigla: 'AC',
    metropolis: 'Rio Branco',
    latitude: -8.77,
    longitude: -70.5,
  },
  AL: {
    name: 'Alagoas',
    sigla: 'AL',
    metropolis: 'Maceió',
    latitude: -9.71,
    longitude: -35.73,
  },
  AM: {
    name: 'Amazonas',
    sigla: 'AM',
    metropolis: 'Manaus',
    latitude: -3.07,
    longitude: -61.66,
  },
  AP: {
    name: 'Amapá',
    sigla: 'AP',
    metropolis: 'Macapá',
    latitude: 1.41,
    longitude: -51.77,
  },
  BA: {
    name: 'Bahia',
    metropolis: 'Salvador',
    latitude: -12.96,
    longitude: -38.51,
  },
  CE: {
    name: 'Ceará',
    sigla: 'CE',
    metropolis: 'Fortaleza',
    latitude: -3.71,
    longitude: -38.54,
  },
  DF: {
    name: 'Distrito Federal',
    sigla: 'DF',
    metropolis: 'Brasília',
    latitude: -15.83,
    longitude: -47.86,
  },
  ES: {
    name: 'Espírito Santo',
    sigla: 'ES',
    metropolis: 'Vitória',
    latitude: -19.19,
    longitude: -40.34,
  },
  GO: {
    name: 'Goiás',
    sigla: 'GO',
    metropolis: 'Goiânia',
    latitude: -16.64,
    longitude: -49.31,
  },
  MA: {
    name: 'Maranhão',
    sigla: 'MA',
    metropolis: 'São Luís',
    latitude: -2.55,
    longitude: -44.3,
  },
  MG: {
    name: 'Minas Gerais',
    sigla: 'MG',
    metropolis: 'Belo Horizonte',
    latitude: -18.1,
    longitude: -44.38,
  },
  MS: {
    name: 'Mato Grosso do Sul',
    sigla: 'MS',
    metropolis: 'Campo Grande',
    latitude: -20.51,
    longitude: -54.54,
  },
  MT: {
    name: 'Mato Grosso',
    sigla: 'MT',
    metropolis: 'Cuiabá',
    latitude: -12.64,
    longitude: -55.42,
  },
  PA: {
    name: 'Pará',
    sigla: 'PA',
    metropolis: 'Belém',
    latitude: -5.53,
    longitude: -52.29,
  },
  PB: {
    name: 'Paraíba',
    sigla: 'PB',
    metropolis: 'João Pessoa',
    latitude: -7.06,
    longitude: -35.55,
  },
  PE: {
    name: 'Pernambuco',
    sigla: 'PE',
    metropolis: 'Recife',
    latitude: -8.28,
    longitude: -35.07,
  },
  PI: {
    name: 'Piauí',
    sigla: 'PI',
    metropolis: 'Teresina',
    latitude: -8.28,
    longitude: -43.68,
  },
  PR: {
    name: 'Paraná',
    sigla: 'PR',
    metropolis: 'Curitiba',
    latitude: -24.89,
    longitude: -51.55,
  },
  RJ: {
    name: 'Rio de Janeiro',
    sigla: 'RJ',
    metropolis: 'Rio de Janeiro',
    latitude: -22.84,
    longitude: -43.15,
  },
  RN: {
    name: 'Rio Grande do Norte',
    sigla: 'RN',
    metropolis: 'Natal',
    latitude: -5.22,
    longitude: -36.52,
  },
  RO: {
    name: 'Rondônia',
    sigla: 'RO',
    metropolis: 'Porto Velho',
    latitude: -11.22,
    longitude: -62.8,
  },
  RR: {
    name: 'Roraima',
    sigla: 'RR',
    metropolis: 'Boa Vista',
    latitude: -1.89,
    longitude: -61.22,
  },
  RS: {
    name: 'Rio Grande do Sul',
    sigla: 'RS',
    metropolis: 'Porto Alegre',
    latitude: -30.01,
    longitude: -51.22,
  },
  SC: {
    name: 'Santa Catarina',
    sigla: 'SC',
    metropolis: 'Florianopolis',
    latitude: -27.33,
    longitude: -49.44,
  },
  SE: {
    name: 'Sergipe',
    sigla: 'SE',
    metropolis: 'Aracaju',
    latitude: -10.9,
    longitude: -37.07,
  },
  SP: {
    name: 'São Paulo',
    sigla: 'SP',
    metropolis: 'São Paulo',
    latitude: -23.55,
    longitude: -46.64,
  },
  TO: {
    name: 'Tocantins',
    sigla: 'TO',
    metropolis: 'Palmas',
    latitude: -10.25,
    longitude: -48.25,
  },
};

window.storeFinder = {
  origPlaces: [],
  origPlacesSortedByState: [],
  quantityPlaces: 0,
  states: {},
  distance: function (lat1, lon1, lat2, lon2, unit) {
    if (lat1 == lat2 && lon1 == lon2) {
      return 0;
    } else {
      var radlat1 = (Math.PI * lat1) / 180;
      var radlat2 = (Math.PI * lat2) / 180;
      var theta = lon1 - lon2;
      var radtheta = (Math.PI * theta) / 180;
      var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);

      if (dist > 1) {
        dist = 1;
      }

      dist = Math.acos(dist);
      dist = (dist * 180) / Math.PI;
      dist = dist * 60 * 1.1515;

      if (unit == 'K') {
        dist = dist * 1.609344;
      }
      if (unit == 'N') {
        dist = dist * 0.8684;
      }

      return dist;
    }
  },
  getPlaceById: function (id) {
    var _this = this;
    var place;

    for (var i = 0; i < _this.origPlaces.length; i++) {
      if (_this.origPlaces[i].id == id) {
        place = _this.origPlaces[i];
        break;
      }
    }

    return place;
  },
  sortPlacesByState: function () {
    // Ordena os places por estado
    var _this = this;

    _this.origPlacesSortedByState.sort((a, b) => {
      var stateA = a.state.toLowerCase();
      var stateB = b.state.toLowerCase();

      if (stateA < stateB) {
        return -1;
      }
      if (stateA > stateB) {
        return 1;
      }

      return 0;
    });
  },
  renderPlacesByState: function (filter) {
    var _this = this;

    if (filter == 'all') {
      _this.emptyPlaces();

      _this.origPlaces.forEach((place, index) => {
        _this.renderPlace(place, index + 1);
      });

      _this.setPlaceMap(false, true, 4);
      _this.setQuantityPlaces(_this.origPlaces);
    } else {
      if (filter.state) {
        // pegando as infos do estado
        var state = statesInfo[filter.state];

        // filtrando places
        var resultsPlaces = _this.origPlaces.filter((place) => {
          return place.state == filter.state;
        });

        _this.emptyPlaces();

        resultsPlaces.forEach((place, index) => {
          _this.renderPlace(place, index + 1);
        });

        _this.setPlaceMap(state, false, 6);
        _this.setQuantityPlaces(resultsPlaces);
      }
    }
  },
  listAllStates: function () {
    var _this = this;
    var states = _this.states;
    var boxStates = document.querySelector('[data-select-states]');

    // Cria o elemente selecionar todos
    var selectAll = document.createElement('option');
    selectAll.value = 'all';
    selectAll.innerHTML = 'Selecionar Estado';

    boxStates.append(selectAll);

    // Percorre o json dos locais
    _this.origPlacesSortedByState.forEach((place, index) => {
      // Pega o estado atual
      var state = place.state;

      // Verifica se existe o estado dentro do objeto
      if (!states[state]) {
        // Cria o objeto dentro do objeto de estados
        states[state] = {};

        // Monta o HTML do box do estado
        var optionState = document.createElement('option');
        optionState.value = state;
        optionState.innerHTML = statesInfo[state].name;

        // Adiciona o html no select
        boxStates.append(optionState);
      }
    });
  },
  resetStateSelection: function () {
    var boxStates = document.querySelector('[data-select-states]');
    var options = boxStates.querySelectorAll('option');

    options.forEach((option) => {
      if (option.selected && option.value != 'All') {
        option.selected = false;
        options[0].selected = true;
      }
    });
  },
  setQuantityPlaces: function (_places) {
    // Seta a quntidade de itens encontrados ho cabeçalho da lista
    var quantityPlaces = _places.length;

    var boxQuantity = document.querySelector('[data-results-places-count]');

    console.info('_places', _places);
    console.info('_places.length', _places.length);

    if (quantityPlaces > 1) {
      boxQuantity.innerHTML = `${_places.length} Lojas encontradas`;
    } else if (quantityPlaces == 1) {
      boxQuantity.innerHTML = `${_places.length} Loja encontrada`;
    } else if (quantityPlaces <= 0) {
      boxQuantity.innerHTML = 'Nenhuma loja encontrada';
    }
  },
  emptyPlaces: function () {
    const boxPlaces = document.querySelector('[data-results-places-list]');
    boxPlaces.innerHTML = '';
  },
  renderPlace: function (_place, _index) {
    var _this = this;
    const boxPlaces = document.querySelector('[data-results-places-list]');
    var htmlPlace = document.createElement('li');

    htmlPlace.innerHTML = `
        <div class="address-column">
          <p class="address-title">${_place.name}</p>
          <p class="address-line"> ${_place.address_line_1}, ${_place.neighborhood} - ${_place.city} - ${_place.state} </p>
          <p class="address-phone">${_place.first_phone}</p>
          <a class="address-website" href="${_place.home_page}" aria-label="Website ${_place.name}" >Website</p>
          <a class="address-focus-map button-default" aria-label="Ver localização ${_place.name}" type="button" data-place data-place-id="${_place.id}"><svg class="icon"><use xlink:href="#arrow-next"/></svg> Mostrar no mapa</a>
        </div>
    `;

    htmlPlace.classList.add('store-list-item');

    boxPlaces.append(htmlPlace);
    boxPlaces.scroll({ top: 0, left: 0, behavior: 'smooth' });
  },
  setPlaceMap: function (_options, initial, zoom) {
    if (initial) {
      window.mapPlaces.setZoom(zoom);
      window.mapPlaces.setCenter(initialLatLang);
    } else {
      window.mapPlaces.setCenter({
        lat: Number(parseFloat(_options.latitude)),
        lng: Number(parseFloat(_options.longitude)),
      });
      window.mapPlaces.setZoom(zoom);
    }
  },
  initMap: function () {
    var _this = this;

    // Create a map object and specify the DOM element for display.
    window.geocoder = new google.maps.Geocoder();
    window.mapPlaces = new google.maps.Map(document.getElementById('map-canvas'), {
      // Centro do Brasil
      center: initialLatLang,
      scrollwheel: true,
      mapTypeId: 'roadmap',
      zoom: 4,
      zoomControlOptions: {
        position: google.maps.ControlPosition.RIGHT_TOP,
        style: google.maps.ZoomControlStyle.LARGE,
      },
    });

    // Seta o campo de busca
    const input = document.getElementById('pac-input');

    window.searchBox = new google.maps.places.SearchBox(input);

    window.mapPlaces.addListener('bounds_changed', function () {
      window.searchBox.setBounds(window.mapPlaces.getBounds());
    });

    window.searchBox.addListener('places_changed', function () {
      var places = window.searchBox.getPlaces();
      var resultsPlaces = [];
      var bounds;

      // Se não tem lugar retorna ao estado inicial do mapa
      if (places.length == 0) {
        _this.setPlaceMap(false, true, 4);

        return;
      }

      // Se tem lugar seta no mapa
      if (places.length == 1) {
        bounds = new google.maps.LatLngBounds();

        places.forEach((place) => {
          if (place.geometry.viewport) {
            // Only geocodes have viewport.
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }

          resultsPlaces = _this.findPlacesInMap(place);

          _this.emptyPlaces();

          resultsPlaces.forEach((place, index) => {
            _this.renderPlace(place, index + 1);
          });

          _this.setQuantityPlaces(resultsPlaces);
        });
      }

      window.mapPlaces.fitBounds(bounds);
    });

    // reseta o mapa se o input fica vazio
    input.addEventListener('change', function () {
      if (this.value == '') {
        _this.renderPlacesByState('all');
        _this.setQuantityPlaces(_this.origPlaces);
        _this.setPlaceMap(false, true, 4);
      }
    });

    _this.setMarkersAndClusters(_this.origPlaces);
  },
  setMarkersAndClusters: function (_places) {
    var _this = this;

    var markers = _places.map(function (place, i) {
      // Posiciona o texto do label de acordo com a quantidade de caracteres
      var point = i + 1 < 9 ? [4, 33] : i + 1 < 100 ? [8, 33] : [12, 33];

      var marker = new MarkerWithLabel({
        position: { lat: Number(parseFloat(place.latitude)), lng: Number(parseFloat(place.longitude)) },
        map: window.mapPlaces,
        draggable: false,
        placeId: place.id,
        labelContent: '<span data-pin-place-id="' + place.id + '">' /*+ (i + 1).toString()*/ + '</span>',
        labelAnchor: new google.maps.Point(point[0], point[1]),
        labelClass: 'pin-label',
        labelInBackground: false,
        icon: {
          url: "../images/pin.svg",
          scaledSize: new google.maps.Size(32, 32),
        },
      });

      // Quando clica no pin do mapa aproxima
      google.maps.event.addListener(marker, 'click', function (e) {
        var place = _this.getPlaceById(this.placeId);

        _this.setPlaceMap(place, false, 17);
      });

      return marker;
    });

    new MarkerClusterer(window.mapPlaces, markers, {
      styles: [
        {
          url: '/images/cluster.svg',
          height: 50,
          width: 50,
          textColor: '#da9d00',
          textSize: 22,
        },
      ],
      maxZoom: 15,
    });
  },
  findPlaceLocation: function (position) {
    var _this = this;
    var resultsPlaces = [];

    var coordinates = {
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    };

    // console.info('buscando por', coordinates);

    window.geocoder.geocode({ location: coordinates, region: 'BR' }, function (results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        resultsPlaces = _this.findPlacesInMap(results[0], status);

        _this.emptyPlaces();

        resultsPlaces.forEach((place, index) => {
          _this.renderPlace(place, index + 1);
        });

        _this.setQuantityPlaces(resultsPlaces);
        _this.setPlaceMap({ latitude: coordinates.lat, longitude: coordinates.lng }, false, 11);
        _this.resetStateSelection();
      }
    });
  },
  findPlacesInMap: function (_placeMap) {
    var _this = this;

    var point = _placeMap.geometry.location;
    var pointLit = { lat: point.lat(), lng: point.lng() };

    const getPlacesByState = (_state) => {
      // Busca places com o mesmo estado selecionado
      var places = _this.origPlaces.filter(function (curr, i) {
        if (curr.state == _state) {
          return curr;
        }
      });

      return places;
    };

    const getPlacesByCity = (_city) => {
      // Busca places com a mesma cidade selecionada
      var places = _this.origPlaces.filter(function (curr, i) {
        if (curr.city.toLowerCase() == _city.toLowerCase()) {
          return curr;
        }
      });

      return places;
    };

    const getPlacesByDistance = (_lat1, _lng1, _lat2, _lng2, _raio) => {
      // Busca places pela distancia entre os pontos considerando o raio em Km passados por parametro
      var distanceKm = _this.distance(_lat1, _lng1, _lat2, _lng2, 'K');

      // console.info('distance', parseFloat(distanceKm), parseFloat(_raio));

      if (parseFloat(distanceKm) < parseFloat(_raio)) {
        return true;
      } else {
        return false;
      }
    };

    if (_placeMap.types[0] == 'administrative_area_level_1') {
      // Busca para estados
      closest = getPlacesByState(_placeMap.address_components[0].short_name);
    } else if (_placeMap.types[0] == 'locality') {
      // Busca para cidades

      closest = getPlacesByCity(_placeMap.address_components[0].long_name);
    } else if (_placeMap.types[0] == 'sublocality_level_1') {
      // Busca para bairros e distritos (proximidade de 10Km)
      closest = _this.origPlaces.filter(function (curr, i) {
        if (getPlacesByDistance(pointLit.lat, pointLit.lng, curr.latitude, curr.longitude, 10)) {
          return curr;
        }
      });
    } else {
      // Busca para o restante dos lugares (proximidade de 20Km)
      closest = _this.origPlaces.filter((curr) => {
        if (getPlacesByDistance(pointLit.lat, pointLit.lng, curr.latitude, curr.longitude, 20)) {
          return curr;
        }
      });
    }

    return closest;
  },
  init: function (_places) {
    var _this = this;

    const mapWrapper = document.querySelector('[data-results-map]');
    const listWrapper = document.querySelector('[data-results-places]');

    _this.origPlaces = JSON.parse(JSON.stringify(_places));
    _this.origPlacesSortedByState = JSON.parse(JSON.stringify(_this.origPlaces));
    _this.quantityPlaces = _this.origPlaces;

    _this.sortPlacesByState();
    _this.initMap();
    _this.listAllStates();
    _this.renderPlacesByState('all');

    // Quando clica no botão mostrar no mapa
    var places = document.querySelectorAll('[data-place]');

    // usando jquery pq os elementos sao criados e excluidos do dom
    $(document).on('click', '[data-place]', function (event) {
      event.preventDefault();

      // Fecha a lista e abre o mapa no mobile
      listWrapper.classList.remove('open');
      mapWrapper.classList.add('open');

      var place = _this.getPlaceById($(this).data('place-id'));

      _this.setPlaceMap(place, false, 17);
    });

    // Quando seleciona o estado
    document.querySelector('[data-select-states]').addEventListener('change', (e) => {
      e.preventDefault();

      const state = e.target.value;

      if (state == 'all') {
        _this.renderPlacesByState('all');
      } else {
        _this.renderPlacesByState({ state: state });
      }
    });

    // Quando usa geolocalização
    document.querySelector('[data-geolocation]').addEventListener('click', (e) => {
      e.preventDefault();

      const getLocation = () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(getPosition);
        } else {
          x.innerHTML = 'Geolocation is not supported by this browser.';
        }
      };

      const getPosition = (position) => {
        _this.findPlaceLocation(position);
      };

      getLocation();
    });

    // Lida com a abertura e fechamento da lista e do mapa no mobile
    document.querySelector('[data-open-list]').addEventListener('click', (e) => {
      e.preventDefault();

      if (!listWrapper.classList.contains('open')) {
        listWrapper.classList.add('open');
      }
      if (mapWrapper.classList.contains('open')) {
        mapWrapper.classList.remove('open');
      }
    });

    document.querySelector('[data-open-map]').addEventListener('click', (e) => {
      e.preventDefault();

      if (!mapWrapper.classList.contains('open')) {
        mapWrapper.classList.add('open');
      }
      if (listWrapper.classList.contains('open')) {
        listWrapper.classList.remove('open');
      }
    });
  },
};

const loadShops = (places) => {
  storeFinder.init(places);
};

document.addEventListener('DOMContentLoaded', () => {
  $.getJSON('/locais', function (data) {
    loadShops(data);
  });
});
