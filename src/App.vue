<template>
  <v-app>
    <!--NavBar-->
    <v-app-bar app color="light-blue darken-1">
      <v-app-bar-nav-icon @click="estadoNav=!estadoNav"></v-app-bar-nav-icon>
      <v-toolbar-title><strong>Servify</strong></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-card-actions xs12 sm3>
        <v-flex style="margin-right: 10px">
          <v-btn color="black" dark>Iniciar Sesión</v-btn>
        </v-flex>
        <v-flex style="margin-right: 10px">
          <v-btn color="black" dark>Regístrate</v-btn>
        </v-flex>
      </v-card-actions>
    </v-app-bar>

    <body>
    <!--SideBar-->
    <v-navigation-drawer app v-model="estadoNav" temporary dark>
      <!--SideBar del CLIENTE-->
      <!--SideBar - Identificación del Cliente-->
      <div v-if="rolCliente">
        <v-layout mt-4 column align-center>
          <v-flex>
            <v-list-item style="margin-right:6px">
              <p class="white--text mt-3" headline><strong>CLIENTE</strong></p>
            </v-list-item>
          </v-flex>
          <v-flex>
            <v-list-item-avatar>
              <v-icon size="40px">
              {{ iconProfile }}
              </v-icon>
            </v-list-item-avatar>
          </v-flex>
          <v-flex>
            <v-list-item-content>
              <p class="white--text mt-3" headline>Nombre del Usuario</p>
            </v-list-item-content>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>

        <!--SideBar - Items del Cliente-->
        <v-list dense>

          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ iconSaldo }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <p class="white--text mt-1" headline>Mi saldo:</p>
            </v-list-item-content>
            <v-list-item-content>
              <p class="blue--text mt-1" headline><strong>$0</strong></p>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <router-link to="/catalogo">
            <v-list-item link style="margin-top:5px"> 
              <v-list-item-icon>
                <v-icon>{{ iconOfert }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <p class="white--text mt-1" headline>Catálogo de Servicios</p>
              </v-list-item-content>
            </v-list-item> 
          </router-link>
          <v-divider></v-divider>

          <v-list-item link style="margin-top:5px">
            <v-list-item-icon>
              <v-icon>{{ iconServicio }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <p class="white--text mt-1" headline>Servicios Adquiridos</p>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

          <v-list-item link style="margin-top:5px">
            <v-list-item-icon>
              <v-icon>{{ iconCarrito }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <p class="white--text mt-1" headline>Carrito de Compras</p>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

        </v-list>
      </div>

      <!--SideBar del PROVEEDOR-->
      <!--SideBar - Identificación del proveedor-->
      <div v-if="rolProveedor">
        <v-layout mt-4 column align-center>
          <v-flex>
            <v-list-item style="margin-right:6px">
              <p class="white--text mt-3" headline><strong>PROVEEDOR</strong></p>
            </v-list-item>
          </v-flex>
          <v-flex>
            <v-list-item-avatar>
              <v-icon size="40px">
              {{ iconProfile }}
              </v-icon>
            </v-list-item-avatar>
          </v-flex>
          <v-flex>
            <v-list-item-content>
              <p class="white--text mt-3" headline>Nombre del Usuario</p>
            </v-list-item-content>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>

        <!--SideBar - Items del Proveedor-->
        <v-list dense>

          <router-link to="/perfilProveedor">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon>{{ iconOfert }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <p class="white--text mt-1" headline>Servicios Ofertados</p>
            </v-list-item-content>
          </v-list-item>
          </router-link>
          <v-divider></v-divider>

          <v-list-item link style="margin-top:5px">
            <v-list-item-icon>
              <v-icon>{{ iconPrestados }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <p class="white--text mt-1" headline>Servicios Prestados</p>
            </v-list-item-content>
          </v-list-item>
          <v-divider></v-divider>

        </v-list>
      </div>
    </v-navigation-drawer>

    <!--Main, llamado de componentes y vistas-->
    
    <v-main>
        <router-view/>
    </v-main>
    </body>
    <!--Footer-->
    <Footer/>

  </v-app>
</template>

<script>
import Footer from './components/footer.vue'
export default {
  name: 'App',
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    estadoNav: false,
    iconProfile: 'mdi-account-circle',
    iconCarrito: 'mdi-cart',
    iconSaldo: 'mdi-cash-multiple',
    iconServicio: 'mdi-briefcase-variant',
    iconPrestados: 'mdi-clipboard-list',
    iconOfert: 'mdi-hammer-wrench',
    rolCliente: false,
    rolProveedor: true,
  }),

   components:{
    Footer
  }
}
</script>

<style>
body{
  background-color: #CFD8DC;
}
</style>
