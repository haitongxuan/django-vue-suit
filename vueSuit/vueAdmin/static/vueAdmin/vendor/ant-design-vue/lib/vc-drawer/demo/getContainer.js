'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = require('../src');

var _index2 = _interopRequireDefault(_index);

var _index3 = require('../../menu');

var _index4 = _interopRequireDefault(_index3);

var _index5 = require('../../icon');

var _index6 = _interopRequireDefault(_index5);

require('../assets/index.less');

require('../../menu/style');

require('../../icon/style');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var SubMenu = _index4['default'].SubMenu;
var MenuItemGroup = _index4['default'].ItemGroup;

exports['default'] = {
  methods: {
    getContainer: function getContainer() {
      return this.$refs.container;
    }
  },
  render: function render() {
    var h = arguments[0];

    return h('div', [h('div', { ref: 'container' }), h(
      _index2['default'],
      {
        attrs: { width: '20vw', getContainer: this.getContainer }
      },
      [h(
        _index4['default'],
        {
          attrs: { defaultSelectedKeys: ['1'], defaultOpenKeys: ['sub1'], mode: 'inline' }
        },
        [h(
          SubMenu,
          {
            key: 'sub1',
            attrs: { title: h('span', [h(_index6['default'], {
                attrs: { type: 'mail' }
              }), h('span', ['Navigation One'])])
            }
          },
          [h(
            MenuItemGroup,
            { key: 'g1', attrs: { title: 'Item 1' }
            },
            [h(
              _index4['default'].Item,
              { key: '1' },
              ['Option 1']
            ), h(
              _index4['default'].Item,
              { key: '2' },
              ['Option 2']
            )]
          ), h(
            MenuItemGroup,
            { key: 'g2', attrs: { title: 'Item 2' }
            },
            [h(
              _index4['default'].Item,
              { key: '3' },
              ['Option 3']
            ), h(
              _index4['default'].Item,
              { key: '4' },
              ['Option 4']
            )]
          )]
        ), h(
          SubMenu,
          {
            key: 'sub2',
            attrs: { title: h('span', [h(_index6['default'], {
                attrs: { type: 'appstore' }
              }), h('span', ['Navigation Two'])])
            }
          },
          [h(
            _index4['default'].Item,
            { key: '5' },
            ['Option 5']
          ), h(
            _index4['default'].Item,
            { key: '6' },
            ['Option 6']
          ), h(
            SubMenu,
            { key: 'sub3', attrs: { title: 'Submenu' }
            },
            [h(
              _index4['default'].Item,
              { key: '7' },
              ['Option 7']
            ), h(
              _index4['default'].Item,
              { key: '8' },
              ['Option 8']
            )]
          )]
        ), h(
          SubMenu,
          {
            key: 'sub4',
            attrs: { title: h('span', [h(_index6['default'], {
                attrs: { type: 'setting' }
              }), h('span', ['Navigation Three'])])
            }
          },
          [h(
            _index4['default'].Item,
            { key: '9' },
            ['Option 9']
          ), h(
            _index4['default'].Item,
            { key: '10' },
            ['Option 10']
          ), h(
            _index4['default'].Item,
            { key: '11' },
            ['Option 11']
          ), h(
            _index4['default'].Item,
            { key: '12' },
            ['Option 12']
          )]
        )]
      )]
    )]);
  }
};