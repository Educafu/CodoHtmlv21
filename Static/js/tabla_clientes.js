const { createApp } = Vue

  createApp({
    data() {
      return {
        url:"https://traslados.pythonanywhere.com/clientes", // url de la api, Retorna registro de la tabla clientes
        clientes:[],
        error:false,
        cargando:true
      }
    },
    
    created() {
        this.fetchData(this.url)  // Invocando al método
    },
    methods: {
        fetchData(url) {
            // para obtener la Api  /productos
            fetch(url)
                .then(response => response.json())
                .then(data => {
                    this.clientes = data;
                    this.cargando=false
                })
                .catch(err => {
                    console.error(err);
                    this.error=true              
                });
        },
        // el id se necesita para buscar en la DB y eliminarlo
        eliminar(id) {
            
            const url = 'https://traslados.pythonanywhere.com/borrar/'+id;
            var options = {
                method: 'DELETE',
                
            }
            fetch(url, options)
                .then(res => res.text()) // or res.json()
                .then(res => {
                    alert("Eliminado correctamente")
                    location.reload();
                })
        }


    },
    



  }).mount('#app')