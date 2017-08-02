window.onload = function() {
  Vue.use(VueMaterial);

  Vue.material.registerTheme({
    default: {
      primary: 'blue',
      accent: 'red'
    },
    green: {
      primary: 'green',
      accent: 'pink'
    },
    orange: {
      primary: 'orange',
      accent: 'green'
    },
  });

  var app = new Vue({
    el: '#app',
    data: {
      asd: "Hello, World!",
      dt: ""
    },
    methods: {
      toggleSidenav() {
        this.$refs.sidenav.toggle();
      },
      send() {
        var data = {
          msg: app.asd
        };
        socket.emit("cs", JSON.stringify(data));
      }
    }
  });
  var socket = io();
  socket.on("sc", function(data) {
    var obj = JSON.parse(data);
    app.dt = obj.date;
  });
};
