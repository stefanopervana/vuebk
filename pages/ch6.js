import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch6'>
 <div>
    
     
                <style jsx>{`

                    .col-md-6 {
                        border-radius: 4px;
                        overflow: hidden;
                        box-shadow: 0 9px 9px rgba(0, 0, 0, 0.9);
                        display: block;
                        min-height: 70%;
                        font-family: Verdana;
                        max-width: 1100px;
                        background-color: #E8EDEE;
                        margin: auto;
                        margin-top: auto;
                        margin-right: auto;
                        margin-bottom: auto;
                        margin-left: auto;
                        white-space: pre-wrap;
                        border: none;
                        box-sizing: border-box;
                        color: #2D0D0D;
                        line-height: 1.1;
                        padding: 4.7em;

                    }

                    .home {
                        margin: 1.5em 0;
                        
                    }

                    h1 {
                        color: #867452;
                        font-size: 60px;
                    }

                    h2 {
                        color: #867452;
                        font-size: 40px;
                    }
                        h3 {
                        color: #867452;
                        font-size: 30px;
                    }


                    .it, .listit {
                        color: brown;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }
                    .p, .listitem {
                        color: #75AFAD;
                        font-size: 24px;
                        font-style: italic;
                        letter-spacing: 0.04em;
                    }

                    pre {display: block;
                    font-family: monospace;
                    white-space: pre;
                    margin: 1em 0;
                    font-size: 16px


                    }

                    code
                    {margin: auto,
                        font-family:"Lucida Console";
                        "Andale Mono";
                        "Courier New";
                        Courier;
                        monospace;
                        font-style:normal;
                        color:#395C73;}
                    
                    code strong
                    {color:#000;
                        background:#F5FD11;
                        padding:1px;
                        font-weight:normal;
                    }

                    .interno {
                    font-family: verdana;
                    font-style: italic;
                    color: #395C73;
                    font-size: 24px;    
                    }

                `}</style>
    
    <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Chapter 6. Plugins - Building Your House with Your Own Bricks</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div class="chapter" title="Chapter 6. Plugins - Building Your House with Your Own Bricks" id="aid-1Q5IA1"><div className="titlepage"><div><div><h1 className="title"><a id="ch06"></a>Chapter 6. Plugins - Building Your House with Your Own Bricks</h1></div></div></div>



<p className="it">En el capítulo anterior, que ha aprendido cómo manejar la tienda de aplicaciones global utilizando la arquitectura Vuex. Que ha aprendido una gran cantidad de nuevos conceptos y las aplicó. También ha aprendido cómo crear una tienda, la forma de definir su estado y las mutaciones, y cómo utilizar las acciones y captadores. Nos llevamos nuestra lista de compras y aplicaciones Pomodoro a la vida usando los conocimientos adquiridos durante el capítulo.</p>

<p className="p">In the previous chapter, you learned how to manage the global application store using the Vuex architecture. You learned a lot of new concepts and applied them. You also learned how to create a store, how to define its state and mutations, and how to use actions and getters. We brought our shopping list and Pomodoro applications to life using the knowledge acquired during the chapter.</p>



<p className="it">En este capítulo, vamos a revisar los plugins Vue, ver cómo funcionan, y cómo se debe crear. Vamos a utilizar algunos plugins existentes y crear nuestro propio.</p>

<p className="p">In this chapter, we will revisit Vue plugins, see how they work, and how they must be created. We will use some existing plugins and create our own.</p>

<p className="it">Sumando hasta que, en este capítulo, vamos a hacer lo siguiente:</p>

<p className="p">Summing it up, in this chapter, we are going to do the following:</p><div class="itemizedlist"><ul className="itemizedlist">
 <li className="listit">Entender la naturaleza de los plugins Vue</li>

 <li className="listitem">Understand the nature of Vue plugins</li>
 <li className="listit">Utilizar el plugin de recursos en la aplicación de listas de compras</li>

 <li className="listitem">Use the resource plugin in the shopping lists application</li>
 <li className="listit">Creá un plugin que produce el blanco, rosa, marrón y ruidos y aplicarlo a nuestra aplicación Pomodoro</li>

 <li className="listitem">Create a plugin that produces white, pink, and brown noises and apply it to our Pomodoro application</li></ul></div><div className="section" title="The nature of Vue plugins"><div className="titlepage"><div><div><h1 className="title"><a id="ch06lvl1sec52"></a>The nature of Vue plugins</h1></div></div></div>

<p className="it">Plugins en Vue.js se utilizan para exactamente el mismo propósito que se utilizan en cualquier otro ámbito: añadí alguna funcionalidad agradable que, debido a su naturaleza, no se podes lograr con la funcionalidad básica del sistema. Plugins escritos para Vue pueden proporcionar varias funcionalidades, a partir de la definición de algunos métodos Vue globales o incluso los métodos de instancia y moviéndose hacia la provisión de nuevas directivas, filtros o transiciones.</p>

<p className="p">Plugins in Vue.js are used for exactly the same purpose as they are used in any other scope: to add some nice functionality that, due to its nature, cannot be achieved with the core functionality of the system. Plugins written for Vue can provide various functionalities, starting from the definition of some global Vue methods or even the instance methods and moving toward providing some new directives, filters, or transitions.</p>



<p className="it">Con el fin de poder utilizar un plugin existente, debe instalarlo primero:</p>

<p className="p">In order to be able to use an existing plugin, you must first install it:</p>

<pre className="programlisting"><code>{`
<span class="strong"><strong>npm install some-plugin --save-dev 
</strong></span>
`}</code></pre>



<p className="it">Y luego, dirá Vue utilizarlo en su aplicación:</p>

<p className="p">And then, tell Vue to use it in your application:</p>


<pre className="programlisting"><code>{`var Vue = require('vue') 
var SomePlugin = require('some-plugin') 
 
<span class="strong"><strong>Vue.use(SomePlugin) 
</strong></span>
`}</code></pre>


<p className="it">También podemos crear nuestros propios plugins. Esto también es fácil. Tu lector debe proporcionar un <code className="literal">install</code> método en el que se definen los métodos globales o de instancias, o directivas personalizadas:</p>

<p className="p">We can also create our own plugins. This is also easy. Your plugin must provide an <code class="literal">install</code> method where you define any global or instance methods, or custom directives:</p>

<pre className="programlisting"><code>{`MyPlugin.<span class="strong"><strong>install</strong></span> = function (Vue, options) { 
  // 1. add global method or property 
  Vue.<span class="strong"><strong>myGlobalMethod</strong></span> = ... 
  // 2. add a global asset 
  Vue.<span class="strong"><strong>directive</strong></span>('my-directive', {}) 
  // 3. add an instance method 
  Vue.prototype.<span class="strong"><strong>$myMethod</strong></span> = ... 
} 
`}</code></pre>



<p className="it">A continuación, se podes utilizar como cualquier otro plugin existente. En este capítulo, vamos a utilizar el vigente <code className="literal">resource</code> plug-in para Vue (<a className="ulink" href="https://github.com/vuejs/vue-resource">https://github.com/vuejs/vue-resource</a> ) y crear nuestro propio plugin que genera ruidos blancos, rosados y marrones.</p>

<p className="p">Then it can be used just like any other existing plugin. In this chapter, we will use the existing <code class="literal">resource</code> plugin for Vue (
<a class="ulink" href="https://github.com/vuejs/vue-resource">https://github.com/vuejs/vue-resource</a>
) and create our own plugin that generates white, pink, and brown noises.</p></div></div>

</div></div>
<div className='col-md-3'></div>
 <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Using the vue-resource plugin in the shopping list application</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Using the vue-resource plugin in the shopping list application"><div class="titlepage" id="aid-1R42S2"><div><div><h1 className="title"><a id="ch06lvl1sec53"></a>Using the vue-resource plugin in the shopping list application</h1></div></div></div>



<p className="p">Open the shopping list application (the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter6/shopping-list">chapter6/shopping-list</a> folder) and run <code class="literal">npm install</code> and <code class="literal">npm run dev</code>. It's nice and clean, but it still uses the hardcoded list of the shopping lists. It would be really nice if we were able to add new shopping lists, delete them, and store the information on updated shopping lists so that when we restart the application, the displayed information corresponds to the last we saw before restarting. In order to be able to do that, we will use the <code class="literal">resource</code> plugin, which allows us to easily create REST resources and call REST methods on them. Before starting, let's summarize everything that we need to do in order to achieve this:</p>



<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">First of all, we need to have a simple server that contains some storage from where we can retrieve and where we can store our shopping lists. This server must provide the needed endpoints for all this functionality.</li></ul></div><div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">After creating our server and all needed endpoints, we should install and use the <code class="literal">vue-resource</code> plugin to create a resource and actions that will call the methods on the provided endpoints.</li><li className="listitem">In order to guarantee the data integrity, we should call actions that update server's state on each shopping lists update.</li><li className="listitem">On the application start, we should fetch shopping lists from the server and assign them to our store's state.</li><li className="listitem">We should also provide a mechanism to create new shopping lists and delete the existing ones.</li></ul></div>



<p className="p">Doesn't sound too difficult, right? Let's start then!</p>



<div className="section" title="Creating a simple server"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec64"></a>Creating a simple server</h2></div></div></div>



<p className="p">For the sake of simplicity, we will use a very basic and easy-to-use HTTP server that stores data inside a regular JSON file. It is called <code class="literal">json-server</code> and it is hosted at <a class="ulink" href="https://github.com/typicode/json-server">https://github.com/typicode/json-server</a>. Install it in the shopping list application's directory:</p>



<pre className="programlisting"><code>{`
<span class="strong"><strong>cd shopping-list 
npm install --save-dev json-server 
</strong></span>
`}</code></pre>



<p className="p">Create a <code class="literal">server</code> folder with the <code class="literal">db.json</code> file inside it with the following content:</p>



<pre className="programlisting"><code>{`//shopping-list/server/db.json 
{ 
  "shoppinglists": [ 
  ] 
} 
`}</code></pre>



<p className="p">This will be our database. Let's add the script entry to our <code class="literal">package.json</code> file so that we can easily start our server:</p>



<pre className="programlisting"><code>{`  "scripts": { 
    "dev": "node build/dev-server.js ", 
    <span class="strong"><strong>"server": "node_modules/json-server/bin/index.js --watch  
    server/db.json"</strong></span>, 
    &lt;...&gt; 
  }, 
`}</code></pre>



<p className="p">Now, to start a server, just run the following:</p>



<pre className="programlisting"><code>{`
<span class="strong"><strong>cd shopping-list 
npm run server 
</strong></span>
`}</code></pre>



<p className="p">Open the browser page at <code class="literal">http://localhost:3000/shoppinglists</code>. You will see an empty array as a result. This is because our database is still empty. Try to insert some data using <code class="literal">curl</code>:</p>



<pre className="programlisting"><code>{`
<span class="strong"><strong>curl -H "Content-Type:application/json" -d '{"title":"new","items":[]}' http://localhost:3000/shoppinglists 
</strong></span>
`}</code></pre>



<p className="p">If you refresh the page now, you will see your new inserted value.</p>







<p className="p">Now that we have our simple REST server up and running, let's use it in our shopping list application with the help of the <code class="literal">vue-resource</code> plugin!</p>



</div><div className="section" title="Installing vue-resource, creating resources, and its methods"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec65"></a>Installing vue-resource, creating resources, and its methods</h2></div></div></div>



<p className="p">Before going deeper into the usage of the <code class="literal">vue-resource</code> plugin, check out its documentation at 
<a class="ulink" href="https://github.com/vuejs/vue-resource/blob/master/docs/resource.md">https://github.com/vuejs/vue-resource/blob/master/docs/resource.md</a>
. Basically, the documentation provides an easy way of creating resources based on the given URL (in our case, it will be <code class="literal">http://localhost:3000/shoppinglists</code>). After the resource is created, we can call <code class="literal">get</code>, <code class="literal">delete</code>, <code class="literal">post</code>, and <code class="literal">update</code> methods on it.</p>







<p className="p">Install it in the project's folder:</p>



<pre className="programlisting"><code>{`
<span class="strong"><strong>cd shopping-list 
npm install vue-resource --save-dev 
</strong></span>
`}</code></pre>



<p className="p">Now let's create the entry point for our API. Inside an <code class="literal">src</code> folder of the shopping list application, create a subfolder and call it <code class="literal">api</code>. Create an <code class="literal">index.js</code> file inside it. In this file, we will import the <code class="literal">vue-resource</code> plugin and tell <code class="literal">Vue</code> to use it:</p>



<pre className="programlisting"><code>{`
<span class="strong"><strong>//api/index.js</strong></span> 
import Vue from 'vue' 
import VueResource from 'vue-resource' 
 
Vue.use(VueResource) 
`}</code></pre>



<p className="p">Nice! Now we are ready to create <code class="literal">ShoppingListsResource</code> and attach some methods to it. To create a resource using the <code class="literal">vue-resource</code> plugin, we just call a <code class="literal">resource</code> method on <code class="literal">Vue</code> and pass the URL to it:</p>



<pre className="programlisting"><code>{`const ShoppingListsResource = Vue.resource(<span class="strong"><strong>'http://localhost:3000/' + 'shoppinglists{/id}'</strong></span>) 
`}</code></pre>



<p className="p">The <code class="literal">ShoppingListsResource</code> constant now exposes all the methods needed for the implementation of <span class="strong"><strong>CRUD</strong></span> (<span class="strong"><strong>Create, Read, Update, and Delete</strong></span>) operations. It is so easy to use that we could basically export the resource itself. But let's export nice methods for each of the CRUD operations:</p>



<pre className="programlisting"><code>{`export default { 
  fetchShoppingLists: () =&gt; { 
    return <span class="strong"><strong>ShoppingListsResource.get()</strong></span> 
  }, 
  addNewShoppingList: (data) =&gt; { 
    return <span class="strong"><strong>ShoppingListsResource.save(data)</strong></span> 
  }, 
  updateShoppingList: (data) =&gt; { 
    return <span class="strong"><strong>ShoppingListsResource.update({ id: data.id }, data)</strong></span> 
  }, 
  deleteShoppingList: (id) =&gt; { 
    return <span class="strong"><strong>ShoppingListsResource.remove({ id: id })</strong></span> 
  } 
} 
`}</code></pre>



<p className="p">The full code for the <code class="literal">api/index.js</code> file can be seen in this gist at 
<a class="ulink" href="https://gist.github.com/chudaol/d5176b88ba2c5799c0b7b0dd33ac0426">https://gist.github.com/chudaol/d5176b88ba2c5799c0b7b0dd33ac0426</a>
.</p>







<p className="p">That's it! Our API is ready to be used and to populate our reactive Vue data!</p>



</div><div className="section" title="Fetching all the shopping lists the application starts"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec66"></a>Fetching all the shopping lists the application starts</h2></div></div></div>



<p className="p">Let's start by creating an action that will fetch and populate store's <code class="literal">shoppinglists</code> state. After its creation, we can call it on the main <code class="literal">App.vue</code> ready state.</p>







<p className="p">Define a constant in the <code class="literal">mutation_types.js</code> file as follows:</p>



<pre className="programlisting"><code>{`//mutation_types.js 
export const POPULATE_SHOPPING_LISTS = 'POPULATE_SHOPPING_LISTS' 
`}</code></pre>



<p className="p">Now create a mutation. This mutation will just receive an array of <code class="literal">shoppinglists</code> and assign it to the <code class="literal">shoppinglists</code> state:</p>



<pre className="programlisting"><code>{`//mutations.js 
export default { 
  [types.CHANGE_TITLE] (state, data) { 
    findById(state, data.id).title = data.title 
  }, 
  <span class="strong"><strong>[types.POPULATE_SHOPPING_LISTS] (state, lists) { 
    state.shoppinglists = lists 
  }</strong></span> 
} 
`}</code></pre>



<p className="p">Ok then! Now we just need an action that will use the API's <code class="literal">get</code> method and dispatch the populating mutation. Import the API in the <code class="literal">actions.js</code> file and create a corresponding action method:</p>



<pre className="programlisting"><code>{`import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS } from './mutation_types' 
<span class="strong"><strong>import api from '../api'</strong></span> 
 
export default { 
  changeTitle: ({ commit }, data) =&gt; { 
    commit(CHANGE_TITLE, data) 
  }, 
  <span class="strong"><strong>populateShoppingLists: ({ commit }) =&gt; { 
    api.fetchShoppingLists().then(response =&gt; { 
      commit(POPULATE_SHOPPING_LISTS, response.data) 
    })</strong></span> 
  } 
} 
`}</code></pre>



<p className="p">In the preceding lines of code, we perform a very simple task&mdash;we call the <code class="literal">fetchShoppingLists</code> API's method that, in turn, calls the <code class="literal">get</code> method of the resource. This method performs an <code class="literal">http GET</code> call and returns a promise that is resolved when the data is back from the server.</p>







<p className="p">This data is then used to dispatch the populating mutation with it. This method will assign this data to the store's state <code class="literal">shoppinglists</code> property. This property is reactive; do you remember? This means that all the views that rely on the <code class="literal">shoppinglists</code> property getter will be updated. Let's now use this action in the main <code class="literal">App.vue</code> component on its <code class="literal">mounted</code> state. Check more about <code class="literal">mounted</code> state hook in the official Vue documentation page at 
<a class="ulink" href="https://vuejs.org/v2/api/#mounted">https://vuejs.org/v2/api/#mounted</a>
.</p>







<p className="p">Open the <code class="literal">App.vue</code> component, import the <code class="literal">mapActions</code> object, map the <code class="literal">populateShoppingLists</code> action inside the component's <code class="literal">methods</code> property, and call it inside the <code class="literal">mounted</code> handler. So, after the changes, the <code class="literal">script</code> tag of <code class="literal">App.vue</code> looks like the following:</p>



<pre className="programlisting"><code>{`&lt;script&gt; 
  import ShoppingListComponent from './components/ShoppingListComponent' 
  import ShoppingListTitleComponent from   
  './components/ShoppingListTitleComponent' 
  import store from './vuex/store' 
  import { mapGetters, <span class="strong"><strong>mapActions</strong></span> } from 'vuex' 
 
  export default { 
    components: { 
      ShoppingListComponent, 
      ShoppingListTitleComponent 
    }, 
    computed: mapGetters({ 
      shoppinglists: 'getLists' 
    }), 
    <span class="strong"><strong>methods: mapActions(['populateShoppingLists']),</strong></span> 
    store, 
    <span class="strong"><strong>mounted () { 
      this.populateShoppingLists() 
    }</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="p">If you open the page now, you will see the only shopping list that we created using <code class="literal">curl</code>, as shown in the following screenshot:</p>







<p className="p">
</p>



<div class="mediaobject"><img src="/static/image00295.jpeg" width="100%" alt="Fetching all the shopping lists the application starts"/></div>



<p className="p">
</p>







<p className="p">The displayed shopping lists are being served by our simple server!</p>







<p className="p">Try to insert more items using <code class="literal">curl</code> or even directly modifying the <code class="literal">db.json</code> file. Refresh the page and look how it works like a charm!</p>



</div><div className="section" title="Updating server status on changes"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec67"></a>Updating server status on changes</h2></div></div></div>



<p className="p">Very well, now we have our shopping lists being served by our REST API and everything works and looks nice. Try to add some shopping list items or change the titles of the shopping lists and check or uncheck items. After all these interactions, refresh the page. Whoops, the lists are empty, nothing happened. That's absolutely correct, we have an API method for updating the given shopping list but we don't call it anywhere, so our server is not aware of the applied changes.</p>







<p className="p">Let's start by defining what components do something with our shopping lists so that these changes are sent to the server. The following three things can happen to the shopping lists and their items:</p>



<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">The title of the list can be changed in <code class="literal">ChangeTitleComponent</code></li><li className="listitem">The new item can be added to the shopping list in <code class="literal">AddItemComponent</code></li><li className="listitem">The item of the shopping list can be checked or unchecked in <code class="literal">ItemComponent</code></li></ul></div>



<p className="p">We must create an action that must be triggered on all these changes. Within this action, we should call the <code class="literal">update</code> API's method. Have a close look at the update method inside the <code class="literal">api/index.js</code> module; it must receive the whole shopping list object as a parameter:</p>



<pre className="programlisting"><code>{`//api/index.js 
updateShoppingList: (<span class="strong"><strong>data</strong></span>) =&gt; { 
  return ShoppingListsResource.update(<span class="strong"><strong>{ id: data.id }, data</strong></span>) 
} 
`}</code></pre>



<p className="p">Let's create an action that receives an <code class="literal">id</code> as a parameter, retrieves the shopping list by its ID, and calls the API's method. Before doing this, create a <code class="literal">getListById</code> method in the <code class="literal">getters.js</code> file and import it into the actions:</p>



<pre className="programlisting"><code>{`//getters.js 
<span class="strong"><strong>import _ from 'underscore'</strong></span> 
 
export default { 
  getLists: state =&gt; state.shoppinglists, 
  <span class="strong"><strong>getListById: (state, id) =&gt; { 
    return _.findWhere(state.shoppinglists, { id: id }) 
  }</strong></span> 
} 
 
//actions.js 
<span class="strong"><strong>import getters from './getters' 
</strong></span>
`}</code></pre>



<p className="p">Now we are ready to define the action for updating the shopping list:</p>



<pre className="programlisting"><code>{`//actions.js 
&lt;...&gt; 
export default { 
  &lt;...&gt; 
  updateList: (store, id) =&gt; { 
    let shoppingList = <span class="strong"><strong>getters.getListById</strong></span>(store.state, id) 
 
    <span class="strong"><strong>api.updateShoppingList(shoppingList)</strong></span> 
  } 
} 
`}</code></pre>



<p className="p">Actually, we can now delete the <code class="literal">findById</code> method from <code class="literal">mutations.js</code> and just reuse this one from <code class="literal">getters.js</code>:</p>



<pre className="programlisting"><code>{`//mutations.js 
import * as types from './mutation_types' 
<span class="strong"><strong>import getters from './getters'</strong></span> 
 
export default { 
  [types.CHANGE_TITLE] (state, data) { 
    <span class="strong"><strong>getters.getListById</strong></span>(state, data.id).title = data.title 
  }, 
  [types.POPULATE_SHOPPING_LISTS] (state, lists) { 
    state.shoppinglists = lists 
  } 
} 
`}</code></pre>



<p className="p">Well, now we have defined the action that calls the <code class="literal">updateList</code> method of our API. Now we just have to call the action on each change that happens inside the components!</p>







<p className="p">Let's start with <code class="literal">AddItemComponent</code>. We must dispatch the <code class="literal">updateList</code> action inside the <code class="literal">addItem</code> method using the <code class="literal">this.$store.dispatch</code> method with the action's name. However, there's a small problem&mdash;we must pass the list item ID to the <code class="literal">updateList</code> method and we do not have a reference to it inside this component. But it's actually an easy fix. Just add the ID inside the component's <code class="literal">props</code> and bind it to the component on its invocation inside <code class="literal">ShoppingListComponent</code>. So our <code class="literal">AddItemComponent</code> component's <code class="literal">script</code> tag looks like the following:</p>



<pre className="programlisting"><code>{`//AddItemComponent.vue 
&lt;script&gt; 
  export default { 
    <span class="strong"><strong>props: ['id']</strong></span>, 
    data () { 
      return { 
        newItem: '' 
      } 
    }, 
    methods: { 
      addItem () { 
        var text 
 
        text = this.newItem.trim() 
        if (text) { 
          this.$emit('add', this.newItem) 
          this.newItem = '' 
          <span class="strong"><strong>this.$store.dispatch('updateList', this.id)</strong></span> 
        } 
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="p">And, inside <code class="literal">ShoppingListComponent</code>, on the <code class="literal">add-item-component</code> invocation, bind the ID to it:</p>



<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;template&gt; 
  &lt;...&gt; 
    &lt;add-item-component <span class="strong"><strong>:id="id"</strong></span> @add="addItem"&gt;&lt;/add-item-component&gt; 
  &lt;...&gt; 
&lt;/template&gt; 
`}</code></pre>



<p className="p">Now, if you try to add items to the shopping lists and refresh the page, the newly added items appear in the list!</p>







<p className="p">Now we should do the same for <code class="literal">ChangeTitleComponent</code>. Open the <code class="literal">ChangeTitleComponent.vue</code> file and check the code. Right now, it calls the <code class="literal">changeTitle</code> action on input:</p>



<pre className="programlisting"><code>{`//ChangeTitleComponent.vue 
&lt;template&gt; 
  &lt;div&gt; 
    &lt;em&gt;Change the title of your shopping list here&lt;/em&gt; 
    &lt;input :value="title" <span class="strong"><strong>@input="onInput({ title: 
      $event.target.value, id: id })"</strong></span>/&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
  <span class="strong"><strong>import { mapActions } from 'vuex'</strong></span> 
 
  export default { 
    props: ['title', 'id'], 
    <span class="strong"><strong>methods: mapActions({ 
      onInput: 'changeTitle'</strong></span> 
    }) 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="p">We could, of course, import the <code class="literal">updateList</code> action and call it right after calling the <code class="literal">changeTitle</code> action. But it might be easier to do it inside the action itself. You may remember that in order to dispatch the store's action, we should call the <code class="literal">dispatch</code> method applied to the store with the action's name as a parameter. So we can do it inside the <code class="literal">changeTitle</code> action. Just open the <code class="literal">action.js</code> file, find our <code class="literal">changeTitle</code> action, and add the call to <code class="literal">updateList</code>:</p>



<pre className="programlisting"><code>{`//actions.js 
export default { 
  changeTitle: (store, data) =&gt; { 
    store.commit(CHANGE_TITLE, data) 
    <span class="strong"><strong>store.dispatch('updateList', data.id)</strong></span> 
  }, 
  &lt;...&gt; 
} 
`}</code></pre>



<p className="p">It's done! Open the page, modify the titles of the pages, and refresh the page. The titles should maintain their modified state!</p>







<p className="p">The last change that we need to guarantee to be persisted is the change in the shopping list's items <code class="literal">checked</code> property. Let's look at <code class="literal">ItemComponent</code> and decide where we should call the <code class="literal">updateList</code> action.</p>







<p className="p">Let's start by adding the ID inside the <code class="literal">props</code> attribute, just like we did with <code class="literal">AddItemComponent</code>:</p>



<pre className="programlisting"><code>{`//ItemComponent.vue 
&lt;script&gt; 
  export default { 
    props: ['item', <span class="strong"><strong>'id'</strong></span>] 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="p">We must also bind the <code class="literal">id</code> property to the component's invocation, which is done inside <code class="literal">ItemsComponent</code>:</p>



<pre className="programlisting"><code>{`//ItemsComponent.vue 
&lt;template&gt; 
  &lt;ul&gt; 
    &lt;item-component v-for="item in items" :item="item" <span class="strong"><strong>:id="id"</strong></span>&gt;
    &lt;/item-component&gt; 
  &lt;/ul&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
  import ItemComponent from './ItemComponent' 
 
  export default { 
    components: { 
      ItemComponent 
    }, 
    props: ['items', 'id'] 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="p">This also means that we must bind the <code class="literal">id</code> property to <code class="literal">item-component</code> inside <code class="literal">ShoppingListComponent</code>:</p>



<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;template&gt; 
  &lt;...&gt; 
    &lt;items-component :items="items" <span class="strong"><strong>:id="id"</strong></span>&gt;&lt;/items-component&gt; 
  &lt;...&gt; 
&lt;/template&gt; 
`}</code></pre>



<p className="p">We should also import the <code class="literal">mapActions</code> object inside <code class="literal">ItemComponent</code> and export the <code class="literal">updateList</code> method inside the <code class="literal">methods</code> property:</p>



<pre className="programlisting"><code>{`//ItemComponent.vue 
&lt;script&gt; 
  <span class="strong"><strong>import { mapActions } from 'vuex'</strong></span> 
 
  export default { 
    props: ['item', 'id'], 
    <span class="strong"><strong>methods: mapActions(['updateList'])</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="p">Okay then, everything is bound to everything; now we just have to find the right place inside <code class="literal">ItemComponent</code> to call the <code class="literal">updateList</code> action.</p>







<p className="p">And this turns out to be not such as easy task, because unlike in the other components where we had event handlers dealing with changes and calling the corresponding functions, here we just have class and model bindings attached to the checkbox element. Luckily for us, <code class="literal">Vue</code> provides a <code class="literal">watch</code> option that allows us to attach listeners to any of the component's data and bind the handlers to them. In our case, we want to watch the <code class="literal">item.checked</code> property and call the action. So, just add the <code class="literal">watch</code> attribute to the components options as follows:</p>



<pre className="programlisting"><code>{`//ItemComponent.vue 
&lt;script&gt; 
  import { mapActions } from 'vuex' 
 
  export default { 
    props: ['item', 'id'], 
    methods: mapActions(['updateList']), 
    <span class="strong"><strong>watch: { 
      'item.checked': function () { 
        this.updateList(this.id) 
      } 
    }</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="p">And...we are done! Try to add items to the shopping lists, check, uncheck, and check them again. Refresh the page. Everything looks like it was before refreshing!</p>



</div><div className="section" title="Creating a new shopping list"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec68"></a>Creating a new shopping list</h2></div></div></div>



<p className="p">Okay then, we are already fetching the shopping lists from the server; we also store applied changes, so we are fine. But wouldn't it also be nice if we could create the shopping lists using the user interface of our application instead of modifying the <code class="literal">db.json</code> file or using <code class="literal">curl post</code> requests? Of course, it would be nice. And, of course, we can do it with few lines of code!</p>







<p className="p">Let's start by adding the action that calls the corresponding API method, as follows:</p>



<pre className="programlisting"><code>{`//actions.js 
export default { 
  &lt;...&gt; 
  <span class="strong"><strong>createShoppingList: ({ commit }, shoppinglist) =&gt; { 
    api.addNewShoppingList(shoppinglist) 
  }</strong></span> 
} 
`}</code></pre>



<p className="p">Now we have to provide a visual mechanism for calling this action. For that, we can create an extra tab in the tab list with the plus button, which will call the action when it is clicked. We will do it inside the <code class="literal">App.vue</code> component. We have already imported the <code class="literal">mapActions</code> object. Let's just add the <code class="literal">createShoppingList</code> method to the exported <code class="literal">methods</code> property:</p>



<pre className="programlisting"><code>{`//App.vue 
&lt;script&gt; 
  import ShoppingListComponent from './components/ShoppingListComponent' 
  import ShoppingListTitleComponent from 
  './components/ShoppingListTitleComponent' 
  import store from './vuex/store' 
  import { mapGetters, mapActions } from 'vuex' 
 
  export default { 
    components: { 
      ShoppingListComponent, 
      ShoppingListTitleComponent 
    }, 
    computed: mapGetters({ 
      shoppinglists: 'getLists' 
    }), 
    methods: mapActions(['populateShoppingLists', 
    <span class="strong"><strong>'createShoppingList'</strong></span>]), 
    store, 
    mounted () { 
      this.populateShoppingLists() 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="p">At this moment, our <code class="literal">App.vue</code> component has access to the <code class="literal">createShoppingList</code> action and can call it on an event handler. The question is&mdash;with what data? The <code class="literal">createShoppingList</code> method is waiting to receive an object that will then be sent to the server. Let's create a method that will generate a new list with a hardcoded title, and within this method, call the action with this new object. But where should it put this method? The <code class="literal">methods</code> property of the component is already occupied by the invocation of the <code class="literal">mapActions</code> helper. Well, the <code class="literal">mapActions</code> method returns a map of methods. We can simply <span class="emphasis"><em>extend</em></span> this map with our local method:</p>



<pre className="programlisting"><code>{`//App.vue 
methods: _.<span class="strong"><strong>extend</strong></span>({}, 
    mapActions(['populateShoppingLists', 'createShoppingList']), 
    { 
      <span class="strong"><strong>addShoppingList ()</strong></span> { 
        let list = { 
          title: 'New Shopping List', 
          items: [] 
        } 
 
        <span class="strong"><strong>this.createShoppingList(list)</strong></span> 
      } 
    }), 
`}</code></pre>



<p className="p">Now we just need to add a button and bind the <code class="literal">addShoppingList</code> method to its <code class="literal">click</code> event. You can create your own button anywhere on the page. My button's code looks like the following:</p>



<pre className="programlisting"><code>{`App.vue 
&lt;template&gt; 
  &lt;div id="app" class="container"&gt; 
    &lt;ul class="nav nav-tabs" role="tablist"&gt; 
      &lt;li :class="index===0 ? 'active' : ''" v-for="(list, index) in 
        shoppinglists" role="presentation"&gt; 
        &lt;shopping-list-title-component :id="list.id" 
          :title="list.title"&gt;&lt;/shopping-list-title-component&gt; 
      &lt;/li&gt; 
      <span class="strong"><strong>&lt;li&gt; 
        &lt;a href="#" @click="addShoppingList"&gt; 
          &lt;i class="glyphicon glyphicon-plus-sign"&gt;&lt;/i&gt; 
        &lt;/a&gt; 
      &lt;/li&gt;</strong></span> 
    &lt;/ul&gt; 
    &lt;div class="tab-content"&gt; 
      &lt;div :class="index===0 ? 'active' : ''" v-for="(list, index) in 
      shoppinglists" class="tab-pane" role="tabpanel" :id="list.id"&gt; 
        &lt;shopping-list-component :id="list.id" :title="list.title" 
        :items="list.items"&gt;&lt;/shopping-list-component&gt; 
      &lt;/div&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>



<p className="p">Look at the page; now we have a nice plus button on the last tab, which clearly indicates that there is a possibility of adding a new shopping list, as shown in the following screenshot:</p>







<p className="p">
</p>



<div class="mediaobject"><img src="/static/image00296.jpeg" width="100%" alt="Creating a new shopping list"/></div>



<p className="p">
</p>







<p className="p">Now we can add new shopping lists using this nice plus button</p>







<p className="p">Try to click on the button. Whoops, nothing happens! However, if we look at the Network panel, we can see the request was actually performed and that succeeded:</p>







<p className="p">
</p>



<div class="mediaobject"><img src="/static/image00297.jpeg" width="100%" alt="Creating a new shopping list"/></div>



<p className="p">
</p>







<p className="p">The creation request was performed successfully; however, nothing changed on the page</p>







<p className="p">Actually, this makes perfect sense. We updated the information on the server, but the client side is not aware of these changes. If we could populate shopping lists after the successful shopping list creation, it would be nice, wouldn't it? Did I say "if we could"? Of course we can! Just go back to <code class="literal">actions.js</code> and call the <code class="literal">populateShoppingLists</code> action on the promise's <code class="literal">then</code> callback using the <code class="literal">store.dispatch</code> method:</p>



<pre className="programlisting"><code>{`//actions.js 
createShoppingList: (<span class="strong"><strong>store</strong></span>, shoppinglist) =&gt; { 
  api.addNewShoppingList(shoppinglist).<span class="strong"><strong>then</strong></span>(() =&gt; { 
    <span class="strong"><strong>store.dispatch('populateShoppingLists')</strong></span> 
  }) 
}  
`}</code></pre>



<p className="p">Now, if you click on the plus button, you will immediately see the newly created list appearing in the tab pane, as shown in the following screenshot:</p>







<p className="p">
</p>



<div class="mediaobject"><img src="/static/image00298.jpeg" width="100%" alt="Creating a new shopping list"/></div>



<p className="p">
</p>







<p className="p">Newly added shopping list after repopulating our lists</p>







<p className="p">You can now click on the new shopping list, change its name, add its items, and check and uncheck them. When you refresh the page, everything is just like it was before the refreshing. Amazing work!</p>



</div><div className="section" title="Deleting existing shopping lists"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec69"></a>Deleting existing shopping lists</h2></div></div></div>



<p className="p">We are already able to create and update our shopping lists. Now we just need to be able to delete them. After all the things that we have learned in this chapter, this will be the easiest part. We should add the action that will call the <code class="literal">deleteShoppingList</code> method of our API, add the remove button to each of the shopping list, and call the action on the button click.</p>



<p className="p">Let's start by adding the action. Similarly, as we did with the creation of shopping lists, we will call the <code class="literal">populate</code> method right after removing the shopping list, so our action will look like the following:</p>



<pre className="programlisting"><code>{`//action.js 
deleteShoppingList: (store, id) =&gt; { 
 <span class="strong"><strong> api.deleteShoppingList(id)</strong></span>.then(() =&gt; { 
    store.dispatch('populateShoppingLists') 
  }) 
} 
`}</code></pre>



<p className="p">Now let's think where we should add the remove button. I would like to see it near the shopping list title in the tab header. This is the component called <code class="literal">ShoppingListTitleComponent</code>. Open it and import the <code class="literal">mapActions</code> helper. Export it in the <code class="literal">methods</code> property. So, the code inside the <code class="literal">script</code> tag of this component looks like the following:</p>



<pre className="programlisting"><code>{`//ShoppingListTitleComponent.vue 
&lt;script&gt; 
  <span class="strong"><strong>import { mapActions } from 'vuex'</strong></span> 
 
  export default{ 
    props: ['id', 'title'], 
    computed: { 
      href () { 
        return '#' + this.id 
      } 
    }, 
    <span class="strong"><strong>methods: mapActions(['deleteShoppingList'])</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="p">Now let's add the remove button and bind the <code class="literal">deleteShoppingList</code> method to its <code class="literal">click</code> event listener. We should pass the ID to this method. We can do it directly inside the template:</p>



<pre className="programlisting"><code>{`//ShoppingListTitleComponent.vue 
&lt;template&gt; 
  &lt;a :href="href" :aria-controls="id" role="tab" data-toggle="tab"&gt;
    {{ title }} 
    <span class="strong"><strong>&lt;i class="glyphicon glyphicon-remove" 
      @click="deleteShoppingList(id)"&gt;&lt;/i&gt;</strong></span> 
  &lt;/a&gt; 
&lt;/template&gt; 
`}</code></pre>



<p className="p">I also added a little bit of styling to the remove icon so that it looks a bit smaller and a bit more elegant:</p>



<pre className="programlisting"><code>{`&lt;style scoped&gt; 
  i { 
    font-size: x-small; 
    padding-left: 3px; 
    cursor: pointer; 
  } 
&lt;/style&gt; 
`}</code></pre>



<p className="p">That's it! Open the page and you'll see a tiny <strong class="userinput"><code>x</code></strong> button near each shopping list title. Try clicking on it and you will immediately see the changes, as shown in the following screenshot:</p>










<div class="mediaobject"><img src="/static/image00299.jpeg" width="100%" alt="Deleting existing shopping lists"/></div>








<p className="p">Shopping lists with the remove X button that allows us to delete unused shopping lists</p>







<p className="p">Congratulations! Now we have a fully functional application that allows us to create shopping lists for any occasion, remove them, and manage the items on each of them! Good work! The final code for this section can be found in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter6/shopping-list2">chapter6/shopping-list2</a> folder.</p>



</div><div className="section" title="Exercise"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec70"></a>Exercise</h2></div></div></div>



<p className="p">Our shopping lists are all very similar to each other. I would like to propose a small styling exercise in which you should attach coloring to your lists in order to make them differ one from another. It will require you to add one more field for the background color on the shopping list creation and to use it inside the component to paint your lists with the given color.</p>



</div></div>
</div></div>
<div className='col-md-3'></div>
 <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Creating and using a plugin in the Pomodoro application</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Creating and using a plugin in the Pomodoro application"><div class="titlepage" id="aid-1S2JE2"><div><div><h1 className="title"><a id="ch06lvl1sec54"></a>Creating and using a plugin in the Pomodoro application</h1></div></div></div>



<p className="it">Ahora que sabemos cómo utilizar plugins existentes con nuestra aplicación Vue, por qué no crear nuestro propio plugin? Ya tenemos un poco de animación en nuestra aplicación Pomodoro, y la pantalla cambia por completo cuando el estado se cambia a partir del intervalo de trabajo Pomodoro al intervalo de descanso. Sin embargo, si no estamos buscando en la pestaña, no tenemos idea de si debemos trabajar o descansar. Sería bueno añadí algunos sonidos a nuestro Pomodoro!</p>

<p className="p">Now that we know how to use existing plugins with our Vue application, why not create our own plugin? We already have a little bit of animation in our Pomodoro application, and the screen changes completely when the state is changed from the working Pomodoro interval to the resting interval. However, if we are not looking at the tab, we have no idea if we should work or rest. It would be nice to add some sounds to our Pomodoro!</p>




<p className="it">Al pensar en los sonidos en una aplicación de gestión del tiempo, me gustaría pensar en el sonido que es agradable para trabajar. Cada uno de nosotros tiene su propia lista de reproducción favorita para el trabajo. Por supuesto, se diferencia de acuerdo a las preferencias musicales de cada persona. Es por eso que he decidido añadí un sonido neutro para nuestra aplicación durante el período de trabajo de tiempo. Se ha comprobado en algunos estudios que los diferentes ruidos (blanco, rosa, marrón, etc.) son buenos para el tipo de trabajo que se requiere un alto nivel de concentración. La entrada de Wikipedia sobre estos estudios se podes encontrar en <a className="ulink" href="https://en.wikipedia.org/wiki/Sound_masking">https://en.wikipedia.org/wiki/Sound_masking</a> . Y algunos expertos Quora están hablando de esto se podes encontrar en <a className="ulink" href="http://bit.ly/2cmRVW2">http://bit.ly/2cmRVW2</a> .</p>

<p className="p">When thinking about sounds in a time management application, I would like to think about the sound that is nice for working. Every one of us has our own favorite playlist for work. Of course, it differs according to each person's musical preferences. That's why I decided to add some neutral sound to our application during the working period of time. It was proven by some studies that different noises (white, pink, brown, and so on) are good for the kind of work where a high level of concentration is required. The Wikipedia entry about these studies can be found at 
<a class="ulink" href="https://en.wikipedia.org/wiki/Sound_masking">https://en.wikipedia.org/wiki/Sound_masking</a>
. And some Quora experts talking about this can be found at 
<a class="ulink" href="http://bit.ly/2cmRVW2">http://bit.ly/2cmRVW2</a>
.</p>




<p className="it">En esta sección, vamos a utilizar la API de Web Audio (<a className="ulink" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API</a> ) para crear un plugin para Vue que genera ruidos blancos, rosados y marrones. Vamos a proporcionar un mecanismo para crear instancias de un ruido o otro usando directivas Vue y también vamos a proporcionar métodos Vue globales que iniciar o detener estos sonidos. Después de eso, vamos a utilizar este plugin para cambiar entre un estado en silencio mientras descansa y mirando a los gatos y un estado ruidosa durante el trabajo. ¿Suena desafiante e interesante? Realmente espero que lo hace! Vamos a empezar entonces!</p>

<p className="p">In this section, we will use the Web Audio API (
<a class="ulink" href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API">https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API</a>
) to create a plugin for Vue that generates white, pink, and brown noises. We will provide a mechanism to instantiate one noise or another using Vue directives and we will also provide global Vue methods that will start and pause these sounds. After that, we will use this plugin to switch between a silent state while resting and looking at cats and a noisy state while working. Does it sound challenging and interesting? I really hope it does! Let's start then!</p>




<div className="section" title="Creating the NoiseGenerator plugin"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec71"></a>Creating the NoiseGenerator plugin</h2></div></div></div>



<p className="it">Nuestro plugin se podes almacenar en un único archivo JavaScript. Contendrá tres métodos, uno para la generación de cada ruido y proporcionar un <code className="literal">Vue.install</code> método en el que se definirán las directivas y métodos Vue necesarios. Utilizar el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter6/pomodoro">Capítulo 6 / pomodoro</a> carpeta como punto de partida. Para comenzar, cree una <code className="literal">plugins</code> subcarpeta en la <code className="literal">src</code> carpeta y añadí el <code className="literal">VueNoiseGeneratorPlugin.js</code> archivo allí. Ahora vamos a crear los tres métodos siguientes:</p>

<p className="p">Our plugin will be stored in a single JavaScript file. It will contain three methods, one for the generation of each noise and provide a <code class="literal">Vue.install</code> method where the directives and needed Vue methods will be defined. Use the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter6/pomodoro">chapter6/pomodoro</a> folder as a starting point. Start by creating a <code class="literal">plugins</code> subfolder in the <code class="literal">src</code> folder and adding the <code class="literal">VueNoiseGeneratorPlugin.js</code> file there. Now let's create the following three methods:</p>




<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem"><code class="literal">generateWhiteNoise</code></li><li className="listitem"><code class="literal">generatePinkNoise</code></li><li className="listitem"><code class="literal">generateBrownNoise</code></li></ul></div>



<p className="it">No voy a reinventar la rueda y a sólo debes copiar y pegar el código ya existente que he encontrado en Internet. Por supuesto, me gustaría darle gran crédito por el gran recurso que he encontrado en <a className="ulink" href="http://noisehack.com/generate-noise-web-audio-api/">http://noisehack.com/generate-noise-web-audio-api/</a> . Dicho esto, nuestro plugin después de copiar el código y organizarla de las funciones debe ser similar a la siguiente:</p>

<p className="p">I will not reinvent the wheel and will just copy and paste the already existing code that I found on the Internet. Of course, I would like to give huge credit to the great resource that I found at 
<a class="ulink" href="http://noisehack.com/generate-noise-web-audio-api/">http://noisehack.com/generate-noise-web-audio-api/</a>
. That being said, our plugin after copying the code and organizing it in the functions should look like the following:</p>




<pre className="programlisting"><code>{`// plugins/VueNoiseGenerator.js 
import _ from 'underscore' 
 
// Thanks to this great tutorial: 
//http://noisehack.com/generate-noise-web-audio-api/ 
var audioContext, bufferSize, noise 
audioContext = new (window.AudioContext || window.webkitAudioContext)() 
 
function <span class="strong"><strong>generateWhiteNoise</strong></span> () { 
  var noiseBuffer, output 
 
  bufferSize = 2 * audioContext.sampleRate 
  noiseBuffer = audioContext.createBuffer(1, bufferSize, 
    audioContext.sampleRate) 
 
  output = noiseBuffer.getChannelData(0) 
  _.times(bufferSize, i =&gt; { 
    output[i] = Math.random() * 2 - 1 
  }) 
 
  noise = audioContext.createBufferSource() 
  noise.buffer = noiseBuffer 
  noise.loop = true 
  noise.start(0) 
 
  return noise 
} 
 
function <span class="strong"><strong>generatePinkNoise</strong></span> () { 
  bufferSize = 4096 
  noise = (function () { 
    var b0, b1, b2, b3, b4, b5, b6, node 
    b0 = b1 = b2 = b3 = b4 = b5 = b6 = 0.0 
    node = audioContext.createScriptProcessor(bufferSize, 1, 1) 
    node.onaudioprocess = function (e) { 
      var output 
 
      output = e.outputBuffer.getChannelData(0) 
      _.times(bufferSize, i =&gt; { 
        var white = Math.random() * 2 - 1 
        b0 = 0.99886 * b0 + white * 0.0555179 
        b1 = 0.99332 * b1 + white * 0.0750759 
        b2 = 0.96900 * b2 + white * 0.1538520 
        b3 = 0.86650 * b3 + white * 0.3104856 
        b4 = 0.55000 * b4 + white * 0.5329522 
        b5 = -0.7616 * b5 - white * 0.0168980 
        output[i] = b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362 
        output[i] *= 0.11 // (roughly) compensate for gain 
        b6 = white * 0.115926 
      }) 
    } 
    return node 
  })() 
 
  return noise 
} 
 
function <span class="strong"><strong>generateBrownNoise</strong></span> () { 
  bufferSize = 4096 
 
  noise = (function () { 
    var lastOut, node 
 
    lastOut = 0.0 
    node = audioContext.createScriptProcessor(bufferSize, 1, 1) 
    node.onaudioprocess = function (e) { 
      var output = e.outputBuffer.getChannelData(0) 
      _.times(bufferSize, i =&gt; { 
        var white = Math.random() * 2 - 1 
        output[i] = (lastOut + (0.02 * white)) / 1.02 
        lastOut = output[i] 
        output[i] *= 3.5 // (roughly) compensate for gain 
      }) 
    } 
    return node 
  })() 
 
  return noise 
} 
`}</code></pre>



<p className="it">Podes probar todos estos ruidos en el jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/7tuewm5z/">https://jsfiddle.net/chudaol/7tuewm5z/</a> .</p>

<p className="p">You can test all these noises in the JSFiddle at 
<a class="ulink" href="https://jsfiddle.net/chudaol/7tuewm5z/">https://jsfiddle.net/chudaol/7tuewm5z/</a>
.</p>





<p className="it">Bueno, por lo que hemos implementado todos los tres ruidos. Ahora tenemos que exportar el <code className="literal">install</code> método que será llamado por <code className="literal">Vue</code>. Este método recibe el <code className="literal">Vue</code> ejemplo y podes crear directivas y métodos en él. Vamos a crear una directiva y lo llaman <code className="literal">noise</code>. Esta directiva podes tener uno de tres valores, <code className="literal">white</code>, <code className="literal">pink</code>, o <code className="literal">brown</code>, y de acuerdo con el valor recibido será una instancia de la <code className="literal">noise</code>variable de llamando al método de creación de ruido correspondiente. Por lo tanto, nuestra creación Directiva dentro de un <code className="literal">install</code> método se verá como la siguiente:</p>

<p className="p">Okay, so we have all the three noises implemented. Now we must export the <code class="literal">install</code> method that will be called by <code class="literal">Vue</code>. This method receives the <code class="literal">Vue</code> instance and can create directives and methods on it. Let's create a directive and call it <code class="literal">noise</code>. This directive can have one of three values, <code class="literal">white</code>, <code class="literal">pink</code>, or <code class="literal">brown</code>, and according to the received value will instantiate the <code class="literal">noise</code> variable by calling the corresponding noise creation method. So, our directive creation within an <code class="literal">install</code> method will look like the following:</p>




<pre className="programlisting"><code>{`// plugins/VueNoiseGeneratorPlugin.js 
export default { 
  install: function (Vue) { 
   <span class="strong"><strong> Vue.directive('noise'</strong></span>, (value) =&gt; { 
      var noise 
 
      switch (value) { 
        case <span class="strong"><strong>'white'</strong></span>: 
          noise = <span class="strong"><strong>generateWhiteNoise</strong></span>() 
          break 
        case <span class="strong"><strong>'pink'</strong></span>: 
          noise = <span class="strong"><strong>generatePinkNoise</strong></span>() 
          break 
        case <span class="strong"><strong>'brown'</strong></span>: 
          noise = <span class="strong"><strong>generateBrownNoise</strong></span>() 
          break 
        default: 
          noise = generateWhiteNoise() 
      } 
      noise.connect(audioContext.destination) 
      audioContext.suspend() 
    }) 
  } 
} 
`}</code></pre>



<p className="it">Después de la creación de instancias, conectamos el <code className="literal">noise</code> de la ya instancia <code className="literal">audioContext</code> y <code className="literal">suspend</code> porque no queremos que se inicie la producción del ruido de la derecha en la unión Directiva. Queremos que se pueden crear instancias de algunos eventos (por ejemplo, al hacer clic en el botón de inicio) y se detuvo en otros eventos (por ejemplo, cuando alguien hace clic en el botón de pausa). Por eso, vamos a proporcionar métodos para iniciar, pausar y detener nuestra <code className="literal">audioContext</code>. Vamos a poner estos tres métodos en la propiedad Vue global llamada <code className="literal">noise</code>. Vamos a llamar a estos métodos <code className="literal">start</code>, <code className="literal">pause</code> y <code className="literal">stop</code>. Dentro del <code className="literal">start</code> método, queremos retomar <code className="literal">audioContext</code> y suspenderlo en ambos <code className="literal">pause</code> y <code className="literal">stop</code> métodos. Por lo tanto, nuestros métodos se verá como la siguiente:</p>

<p className="p">After the instantiation, we connect the <code class="literal">noise</code> to the already instantiated <code class="literal">audioContext</code> and <code class="literal">suspend</code> it because we don't want it to start producing the noise right on the directive binding. We want it to be instantiated on some events (for example, clicking on the start button) and paused on other events (for example, when someone clicks on the pause button). For that, let's provide methods for starting, pausing, and stopping our <code class="literal">audioContext</code>. We will put these three methods on the global Vue property called <code class="literal">noise</code>. We will call these methods <code class="literal">start</code>, <code class="literal">pause</code>, and <code class="literal">stop</code>. Within the <code class="literal">start</code> method, we want to resume <code class="literal">audioContext</code> and suspend it on both the <code class="literal">pause</code> and <code class="literal">stop</code> methods. So, our methods will look like the following:</p>




<pre className="programlisting"><code>{`// plugins/VueNoiseGeneratorPlugin.js 
export default { 
  install: function (Vue) { 
    Vue.directive('noise', (value) =&gt; { 
      &lt;...&gt; 
    }) 
    <span class="strong"><strong>Vue.noise</strong></span> = { 
      <span class="strong"><strong>start</strong></span> () { 
        audioContext.resume() 
      }, 
      <span class="strong"><strong>pause</strong></span> () { 
        audioContext.suspend() 
      }, 
      <span class="strong"><strong>stop</strong></span> () { 
        audioContext.suspend() 
      } 
    } 
  } 
} 
`}</code></pre>



<p className="it">¡Eso es! Nuestro plug-in está completamente listo para ser utilizado. No es perfecto, por supuesto, porque sólo tenemos una <code className="literal">audioContext</code>, que se crea una instancia de una vez y luego se llena por uno de los ruidos elegidos, lo que significa que no será capaz de utilizar la <code className="literal">noise</code> directiva más de una vez en la página, pero de nuevo, esto es sólo un prototipo y que son más que bienvenidos para mejorar y hacerlo perfecto y público!</p>

<p className="p">That's it! Our plugin is completely ready to be used. It's not perfect, of course, because we only have one <code class="literal">audioContext</code>, which is being instantiated once and then populated by one of the chosen noises, meaning we will not be able to use the <code class="literal">noise</code> directive more than once on the page, but again, this is just a prototype and you are more than welcome to enhance it and make it perfect and public!</p>




</div><div className="section" title="Using the plugin in the Pomodoro application"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec72"></a>Using the plugin in the Pomodoro application</h2></div></div></div>



<p className="it">Bien entonces, ahora tenemos nuestro buen complemento que producen ruido, y lo único que falta es usarlo! Usted ya sabe cómo hacerlo. Abrir el <code className="literal">main.js</code> archivo, importar <code className="literal">VueNoiseGeneratorPlugin</code>, y decirle a <code className="literal">Vue</code> utilizarlo:</p>

<p className="p">Fine then, now we have our nice noise-producing plugin, and the only thing that is missing is using it! You already know how to do it. Open the <code class="literal">main.js</code> file, import <code class="literal">VueNoiseGeneratorPlugin</code>, and tell <code class="literal">Vue</code> to use it:</p>




<pre className="programlisting"><code>{`import VueNoiseGeneratorPlugin from 
'./plugins/VueNoiseGeneratorPlugin' 
 
Vue.use(VueNoiseGeneratorPlugin) 
`}</code></pre>



<p className="it">A partir de ahora, podemos unir la <code className="literal">noise</code>Directiva y utilizar el <code className="literal">Vue.noise</code> método en cualquier parte de nuestra aplicación Pomodoro. Vamos a obligar a éste a nuestra plantilla principal dentro del <code className="literal">App.vue</code> componente:</p>

<p className="p">From now on, we can attach the <code class="literal">noise</code> directive and use the <code class="literal">Vue.noise</code> method in any part of our Pomodoro application. Let's bind it to our main template inside the <code class="literal">App.vue</code> component:</p>




<pre className="programlisting"><code>{`//App.vue 
&lt;template&gt; 
  &lt;div id="app" class="container" <span class="strong"><strong>v-noise="'brown'"</strong></span>&gt; 
    &lt;...&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>



<p className="it">En cuenta que utilizamos <code className="literal">v-noise</code> en el nombre de la directiva y no sólo <code className="literal">noise</code>. Ya hemos hablado de que cuando aprendimos directivas personalizadas. Para utilizar una directiva, siempre debemos anteponer el <code className="literal">v-</code> prefijo a su nombre. También tenga en cuenta que utilizamos comillas dobles dentro de las comillas simples para envolver la <code className="literal">brown </code> cuerda. Si nosotros no lo hicimos, Vue sería buscar la propiedad de datos llamado <code className="literal">brown</code>, porque así es como funciona el Vue. Como podemos escribir cualquier declaración JavaScript dentro de la asignación de la unión Directiva, hay que pasar la cadena con comillas dobles. Podes ir más allá y crear una propiedad llamada de datos <code className="literal">noise</code> y asignarle el valor que desee ( <code className="literal">white</code>, <code className="literal">brown</code> o <code className="literal">pink</code>) y volver a utilizarlo dentro de la sintaxis de enlace de la Directiva.</p>

<p className="p">Note that we use <code class="literal">v-noise</code> in the name of the directive and not just <code class="literal">noise</code>. We already talked about it when we learned custom directives. To use a directive, we should always prepend the <code class="literal">v-</code> prefix to its name. Also note that we used double quotes inside the single quotes to wrap the <code class="literal">brown </code> string. If we didn't do it, Vue would search for the data property called <code class="literal">brown</code>, because that's how the Vue works. As we can write any JavaScript statement inside the directive binding assignment, we must pass the string with double quotes. You can go further and create a data property called <code class="literal">noise</code> and assign to it the value you want (<code class="literal">white</code>, <code class="literal">brown</code>, or <code class="literal">pink</code>) and reuse it inside the directive binding syntax.</p>



<p className="it">Después de que se está haciendo, vamos a llamar al <code className="literal">Vue.noise.start</code> método en nuestra <code className="literal">start</code> mutación:</p>

<p className="p">After that being done, let's call the <code class="literal">Vue.noise.start</code> method in our <code class="literal">start</code> mutation:</p>




<pre className="programlisting"><code>{`//mutations.js 
<span class="strong"><strong>import Vue from 'vue'</strong></span> 
&lt;...&gt; 
 
export default { 
  [types.START] (state) { 
    &lt;...&gt; 
    <span class="strong"><strong>if (state.isWorking) { 
      Vue.noise.start() 
    }</strong></span> 
  }, 
&lt;...&gt; 
`}</code></pre>



<p className="it">Comproba la página y hacer clic en el botón de inicio. Va a escuchar un ruido marrón agradable. Tenga cuidado, sin embargo, para no despertar a sus compañeros de trabajo ni para asustar a su familia (o viceversa). Intente cambiar el valor de la Directiva sobre el ruido y elegir su favorita ruido para trabajar.</p>

<p className="p">Check the page and click on the start button. You will listen to a nice brown noise. Be careful, however, to not to wake up your coworkers nor to scare your family (or vice versa). Try changing the value of the noise directive and choose your favorite noise to work with.</p>


<p className="it">Sin embargo, no hemos terminado. Hemos creado un mecanismo para que se inicie el ruido, pero está resultando ser un ruido interminable. Vamos a llamar a la <code className="literal">Vue.noise.pause</code> y <code className="literal">Vue.noise.stop</code> métodos en los <code className="literal">pause</code> y <code className="literal">stop</code> las mutaciones, respectivamente:</p>

<p className="p">Still, we are not done. We created a mechanism so that the noise is started, but it's turning out to be a never-ending noise. Let's call the <code class="literal">Vue.noise.pause</code> and <code class="literal">Vue.noise.stop</code> methods on the <code class="literal">pause</code> and <code class="literal">stop</code> mutations, respectively:</p>


<pre className="programlisting"><code>{`//mutations.js 
export default { 
  &lt;...&gt; 
  [types.PAUSE] (state) { 
    &lt;...&gt; 
    <span class="strong"><strong>Vue.noise.pause()</strong></span> 
  }, 
  [types.STOP] (state) { 
    &lt;...&gt; 
    <span class="strong"><strong>Vue.noise.stop()</strong></span> 
  } 
} 
`}</code></pre>



<p className="it">Mira la página. Ahora bien, si se hace clic en el botón de pausa o parada, el ruido se suspende! Todavía no hemos terminado todavía. Recuerde que nuestro objetivo era tener el ruido sólo durante el tiempo de trabajo y no durante el tiempo de descanso. Por lo tanto, vamos a echar un vistazo al <code className="literal">tooglePomodoro</code> método en el interior <code className="literal">mutations.js</code> y añadí un mecanismo que inicia o detiene el ruido de acuerdo con el estado actual del Pomodoro:</p>

<p className="p">Look at the page. Now if you click on the pause or stop button, the noise is suspended! We are still not done yet. Remember that our purpose was to have the noise only during working time and not during resting time. So, let's have a look at the <code class="literal">tooglePomodoro</code> method inside <code class="literal">mutations.js</code> and add a mechanism that starts or stops the noise according to the Pomodoro's current state:</p>


<pre className="programlisting"><code>{`//mutations.js 
function togglePomodoro (state, toggle) { 
  if (_.isBoolean(toggle) === false) { 
    toggle = !state.isWorking 
  } 
  state.isWorking = toggle 
  <span class="strong"><strong>if (state.isWorking) { 
    Vue.noise.start() 
  } else { 
    Vue.noise.pause() 
  }</strong></span> 
  state.counter = state.isWorking ? WORKING_TIME : RESTING_TIME 
} 
`}</code></pre>



<p className="it">El código de la aplicación Pomodoro después de todas estas modificaciones se podes encontrar en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter6/pomodoro2">Capítulo 6 / pomodoro2</a> carpeta. Comproba cómo se inicia el ruido cuando comenzamos la aplicación, cómo se pausa cuando se complete el trabajo Pomodoro, y cómo se reinicia de nuevo cuando hay que volver a trabajar. También puedes ver cómo el inicio, pausa y detener botones de activación del ruido también. ¡Buen trabajo!</p>

<p className="p">The code of the Pomodoro application after all these modifications can be found in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter6/pomodoro2">chapter6/pomodoro2</a> folder. Check how the noise is started when we start the application, how it's pausing when the working Pomodoro is completed, and how it restarted again when we should be back to work. Check also how the start, pause, and stop buttons trigger the noise as well. Nice work!</p>


</div><div className="section" title="Creating a button to toggle the sound"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec73"></a>Creating a button to toggle the sound</h2></div></div></div>



<p className="it">Es muy bueno que tenemos el sonido de ruido unido al estado de trabajo de la aplicación Pomodoro. También es bueno que el sonido se detuvo cuando nos detenemos la aplicación. Sin embargo, podría ser también útil ser capaz de hacer una pausa en el sonido sin tener que hacer una pausa en toda la aplicación. Pensar en esas situaciones en las que desee trabajar en completo silencio, o es posible que desee recibir una llamada de Skype. En estas situaciones, con un ruido en el fondo, incluso si es bonito y rosa, no es en absoluto agradable. Vamos a añadí un botón para nuestra aplicación para cambiar el sonido. Comience por la que se declara una propiedad tienda llamada <code className="literal">soundEnabled</code> e inicializar con <code className="literal">true</code>. También, crear <code className="literal">getter</code> de esta propiedad. Por lo tanto <code className="literal">store.js</code> y <code className="literal">getters.js</code> empezar a buscar el siguiente aspecto:</p>

<p className="p">It's really nice that we have the noise sound bound to the working state of the Pomodoro application. It's also nice that the sound is paused when we pause the application. However, it might be also useful to be able to pause the sound without having to pause the whole application. Think about those situations when you want to work in complete silence, or you might want to receive a Skype call. In these situations, having a noise in background, even if it's nice and pink, is not nice at all. Let's add a button to our application to toggle the sound. Start by declaring a store property called <code class="literal">soundEnabled</code> and initialize it with <code class="literal">true</code>. Also, create <code class="literal">getter</code> for this property. So <code class="literal">store.js</code> and <code class="literal">getters.js</code> start looking like the following:</p>


<pre className="programlisting"><code>{`//store.js 
&lt;...&gt; 
const state = { 
  &lt;...&gt; 
  <span class="strong"><strong>soundEnabled: true</strong></span> 
} 
 
//getters.js 
export default { 
  &lt;...&gt; 
  <span class="strong"><strong>isSoundEnabled: state =&gt; state.soundEnabled</strong></span> 
} 
`}</code></pre>



<p className="it">Ahora hay que proporcionar un mecanismo para cambiar el sonido. Vamos a crear un método de mutación para esto y añadí una acción que envía esta mutación. Para empezar, se declara un tipo de mutación llamada <code className="literal">TOGGLE_SOUND</code>:</p>

<p className="p">Now we must provide a mechanism to toggle the sound. Let's create a mutation method for this and add an action that dispatches this mutation. Start by declaring a mutation type called <code class="literal">TOGGLE_SOUND</code>:</p>




<pre className="programlisting"><code>{`//mutation_types.js 
&lt;...&gt; 
<span class="strong"><strong>export const TOGGLE_SOUND = 'TOGGLE_SOUND' 
</strong></span>
`}</code></pre>



<p className="it">Ahora vamos a abrir <code className="literal">mutations.js</code> y añadí el método de mutación que cambia la <code className="literal">soundEnabled</code> propiedad de la tienda:</p>

<p className="p">Now let's open <code class="literal">mutations.js</code> and add the mutation method that toggles the <code class="literal">soundEnabled</code> store property:</p>




<pre className="programlisting"><code>{`//mutations.js 
[types.TOGGLE_SOUND] (state) { 
  state.soundEnabled = !state.soundEnabled 
  if (state.soundEnabled) { 
    Vue.noise.start() 
  } else { 
    Vue.noise.pause() 
  } 
} 
`}</code></pre>



<p className="it">Ahora vamos a añadí la acción que envía esta mutación:</p>

<p className="p">Now let's add the action that dispatches this mutation:</p>




<pre className="programlisting"><code>{`//actions.js 
export default { 
  &lt;...&gt; 
  toggleSound: ({ commit }) =&gt; { 
    <span class="strong"><strong>commit(types.TOGGLE_SOUND)</strong></span> 
  } 
} 
`}</code></pre>



<p className="it">Está bien, entonces, ahora tenemos todo lo que necesitamos para crear un botón de sonido de palanca! Vamos a hacerlo en nuestro <code className="literal">ControlsComponent</code>. Comience por la adición de un captador y la acción necesaria para el mapa de métodos:</p>

<p className="p">Okay then, now we have everything we need to create a toggle sound button! Let's do it in our <code class="literal">ControlsComponent</code>. Start by adding a necessary getter and action to the map of methods:</p>




<pre className="programlisting"><code>{`//ControlsComponent.vue 
&lt;script&gt; 
  import { mapGetters, mapActions } from 'vuex' 
 
  export default { 
    computed: mapGetters(['isStarted', 'isPaused', 'isStopped', 
    <span class="strong"><strong>'isSoundEnabled'</strong></span>]), 
    methods: mapActions(['start', 'stop', 'pause', <span class="strong"><strong>'toggleSound'</strong></span>]) 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="it">Ahora podemos añadí el botón a nuestra plantilla. Sugiero que será el icono con la <code className="literal">glyphicon</code> clase que se alinea a la derecha.</p>

<p className="p">Now we can add the button to our template. I suggest that it will be the icon with the <code class="literal">glyphicon</code> class that will be aligned to the right.</p>



<p className="it">Vamos a sólo muestra este icono cuando la aplicación es <code className="literal">started</code> y <code className="literal">not paused</code>, y sólo cuando el estado Pomodoro <span className="emphasis"><em>es</em></span> <code className="literal">working</code> por lo que nosotros no estropear el botón de sonido de palanca en un estado en el que no se supone que tiene sonido en absoluto. Esto significa que nuestra <code className="literal">v-show</code> directiva sobre este elemento se verá como la siguiente:</p>

<p className="p">Let's only show this icon when the application is <code class="literal">started</code> and <code class="literal">not paused</code>, and only when the Pomodoro state <span class="emphasis"><em>is</em></span>
<code class="literal">working</code> so that we don't mess up the toggle sound button in a state where it is not supposed to have sound at all. This means that our <code class="literal">v-show</code> directive on this element will look like the following:</p>


<pre className="programlisting"><code>{`v-show="isStarted &amp;&amp; !isPaused &amp;&amp; isWorking" 
`}</code></pre>



<p className="it">Tenga en cuenta que estamos usando la <code className="literal">isWorking</code> propiedad aquí, que aún no ha sido importado. Añadir al mapa de <code className="literal">methods</code>:</p>

<p className="p">Note that we are using the <code class="literal">isWorking</code> property here, which has not yet been imported. Add it to the map of <code class="literal">methods</code>:</p>



<pre className="programlisting"><code>{`//ControlsComponents.vue 
&lt;script&gt; 
  import { mapGetters, mapActions } from 'vuex' 
 
  export default { 
    computed: mapGetters(['isStarted', 'isPaused', 'isStopped', 
    <span class="strong"><strong>'isWorking'</strong></span>, 'isSoundEnabled']), 
    methods: mapActions(['start', 'stop', 'pause', 'toggleSound']) 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="it">También vamos a utilizar el <code className="literal">glyphicon-volume-off</code> y <code className="literal">glyphicon-volume-on</code> clases en este elemento. Se indicarán llamando a la acción para cambiar el estado del sonido. Esto significa que la <code className="literal">glyphicon-volume-off</code> clase debe ser aplicada cuando el sonido está <span className="emphasis"><em>activado</em></span> y la <code className="literal">glyphicon-volume-on</code> clase debe ser aplicada cuando el sonido está <span className="emphasis"><em>desactivado</em></span> . Ponerlo en el código, nuestra directiva clase debe tener el siguiente aspecto:</p>

<p className="p">Let's also use the <code class="literal">glyphicon-volume-off</code> and <code class="literal">glyphicon-volume-on</code> classes on this element. They will indicate calling for the action to toggle the sound's state. This means that the <code class="literal">glyphicon-volume-off</code> class should be applied when the sound is <span class="emphasis"><em>enabled</em></span> and the <code class="literal">glyphicon-volume-on</code> class should be applied when the sound is <span class="emphasis"><em>disabled</em></span>. Putting it in the code, our class directive should look like the following:</p>




<pre className="programlisting"><code>{`:class="{ 'glyphicon-volume-off': <span class="strong"><strong>isSoundEnabled</strong></span>, 'glyphicon-volume-up': <span class="strong"><strong>!isSoundEnabled</strong></span> }" 
`}</code></pre>



<p className="it">Por último, pero no menos importante, hay que llamar a la <code className="literal">toggleSound</code> acción cuando se hace clic en el botón. Esto significa que también hay que unir el <code className="literal">click</code> detector de eventos para este elemento, que se verá como la siguiente:</p>

<p className="p">Last but not least, we should call the <code class="literal">toggleSound</code> action when the button is clicked. This means that we should also bind the <code class="literal">click</code> event listener to this element, which will look like the following:</p>




<pre className="programlisting"><code>{`@click='<span class="strong"><strong>toggleSound</strong></span>' 
`}</code></pre>



<p className="it">Por lo tanto, todo el código de jade markup para este botón será como el siguiente:</p>

<p className="p">So, the whole jade markup code for this button will be like the following:</p>




<pre className="programlisting"><code>{`//ControlsComponent.vue 
&lt;template&gt; 
  &lt;span&gt; 
    &lt;...&gt; 
    <span class="strong"><strong>&lt;i class="toggle-volume glyphicon" v-show="isStarted &amp;&amp; </strong></span>
<span class="strong"><strong>    !isPaused &amp;&amp; isWorking" :class="{ 'glyphicon-volume-off':   </strong></span>
<span class="strong"><strong>    isSoundEnabled, 'glyphicon-volume-up': !isSoundEnabled }" </strong></span>
<span class="strong"><strong>    @click="toggleSound"&gt;&lt;/i&gt;</strong></span> 
  &lt;/span&gt; 
&lt;/template&gt; 
`}</code></pre>



<p className="it">Vamos a añadí un poco de estilo a este botón para que aparezca alineado a la derecha:</p>

<p className="p">Let's just add a bit of styling to this button so that it appears aligned to the right:</p>




<pre className="programlisting"><code>{`&lt;style scoped&gt; 
  &lt;...&gt; 
  <span class="strong"><strong>.toggle-volume { 
    float: right; 
    cursor: pointer; 
  }</strong></span> 
&lt;/style&gt; 
`}</code></pre>



<p className="it">Abra la página e iniciar la aplicación Pomodoro. Ahora se podes ver este bonito botón en la esquina superior derecha que le permitirá a su vez el sonido, como se muestra en la siguiente captura de pantalla:</p>

<p className="p">Open the page and start the Pomodoro application. Now you can see this nice button on the top-right corner that will allow you to turn the sound off, as shown in the following screenshot:</p>




<div class="mediaobject"><img src="/static/image00300.jpeg" width="100%" alt="Creating a button to toggle the sound"/></div>


<p className="it">Ahora podemos apagar el sonido mientras se trabaja!</p>

<p className="p">Now we can turn the sound off while working!</p>



<p className="it">Si hace clic en este botón, se transformará en otro botón, cuyo propósito es activar el sonido de nuevo, como se muestra en la siguiente captura de pantalla:</p>

<p className="p">If you click on this button, it will transform into another button, whose purpose is to turn the sound on again, as shown in the following screenshot:</p>



<div class="mediaobject"><img src="/static/image00301.jpeg" width="100%" alt="Creating a button to toggle the sound"/></div>



<p className="it">Y podemos encenderla de nuevo!</p>

<p className="p">And we can turn it on again!</p>



<p className="it">Ahora consideremos el siguiente escenario: se inicia la aplicación, apagar el sonido, hacer una pausa en la aplicación, y reanudar la aplicación. Nuestra lógica actual sugiere que el sonido se inicia cada vez que se inicia la aplicación. Vamos a estar en un estado inconsistente, la aplicación ha comenzado, el sonido se reproduce, pero el botón de sonido alternar está sugiriendo a activar el sonido. Eso no está bien, ¿verdad? Pero esto tiene una solución fácil, sólo tiene que añadí una condición más a la mutación de inicio, no sólo se debe comprobar si <code className="literal">isWorking</code> es <code className="literal">true</code>, sino también que el sonido está habilitado:</p>

<p className="p">Now consider the following scenario: we start the application, turn off the sound, pause the application, and resume the application. Our current logic suggests that the sound is started each time the application is started. We will be in an inconsistent state&mdash;the application has started, the sound is playing, but the toggling sound button is suggesting to turn the sound on. That's not right, is it? But this has an easy fix&mdash;just add one more condition to the start mutation, not only it should check if <code class="literal">isWorking</code> is <code class="literal">true</code>, but also that the sound is enabled:</p>



<pre className="programlisting"><code>{`//mutations.js 
[types.START](state) { 
  &lt;...&gt; 
  if (state.isWorking &amp;&amp; <span class="strong"><strong>state.soundEnabled</strong></span>) { 
    Vue.noise.start() 
  } 
}, 
`}</code></pre>



<p className="it">Ahora estamos bien. El código después de todas estas modificaciones se podes encontrar en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter6/pomodoro3">Capítulo 6 / pomodoro3</a> carpeta.</p>

<p className="p">Now we are fine. The code after all these modifications can be found in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter6/pomodoro3">chapter6/pomodoro3</a> folder.</p>


<p className="it">Comproba el código, ejecute la aplicación, disfrutar del sonido, y no se olvide de tener un descanso!</p>

<p className="p">Check the code, run the application, enjoy the sound, and do not forget to have a break!</p>




</div><div className="section" title="Exercise"><div className="titlepage"><div><div><h2 class="title"><a id="ch06lvl2sec74"></a>Exercise</h2></div></div></div>



<p className="it">Sería bueno si durante los intervalos Pomodoro también pudimos disfrutar de buena música feliz mientras mira a los gatos. Creá un plugin que reproduce un archivo MP3 elegido y usarlo en los intervalos Pomodoro.</p>

<p className="p">It would be nice if during our Pomodoro intervals we could also enjoy some happy nice music while looking at cats. Create a plugin that plays a chosen mp3 file and use it on the Pomodoro intervals.</p>




</div></div>
</div></div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Summary</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Summary" id="aid-1T1401"><div className="titlepage"><div><div><h1 className="title"><a id="ch06lvl1sec55"></a>Summary</h1></div></div></div>


<p className="it">Mientras escribía las últimas líneas de código para este capítulo y en el control de la página, en un momento me quedé atrapado buscando en esta imagen:</p>
<p className="p">While I was writing the last lines of code for this chapter and checking the page, at one point I got stuck looking at this picture:</p>

<div class="mediaobject"><img src="/static/image00302.jpeg" width="100%" alt="Summary"/></div>


<p className="it">Una gran cantidad de gatos que me miran y preguntan: este capítulo será llegar a su fin en algún momento?</p>
<p className="p">A lot of cats looking at me and asking: will this chapter get to its end at some point?</p>


<p className="it">Incluso hice una pausa de la aplicación para tener una mejor visión de esta imagen (sí, cuando se detiene la aplicación Pomodoro durante el tiempo de descanso, la película se detendrá así debido a que la fecha y hora de romper caché no se actualiza más). ¿No parece como estos gatos están pidiendo que descansar un poco? Además, la cantidad de ellos se acerca bastante a la cantidad de cosas que hemos aprendido en este capítulo!</p>
<p className="p">I even paused the application to have a better look at this picture (yes, when you pause the Pomodoro application during resting time, the picture will pause as well because the cache-buster timestamp is not being updated anymore). Doesn't it seem like these cats are asking us to get some rest? Also, the amount of them is pretty close to the number of things that we've learned in this chapter!</p>


<p className="it">En este capítulo, usted aprendió cómo funciona el sistema de plugins con Vue.js. Se utilizó una ya existente <code className="literal">resource</code> plugin para adjuntar el comportamiento de servidor para nuestra aplicación de lista de la compra. Ahora podemos crear, eliminar y actualizar nuestras listas de compras.</p>
<p className="p">In this chapter, you learned how the plugins system work with Vue.js. We used an existing <code class="literal">resource</code> plugin to attach the server-side behavior to our shopping list application. Now we can create, delete, and update our shopping lists.</p>


<p className="it">También hemos creado nuestro propio plug-in! Nuestro plugin es capaz de producir un sonido que podes ayudar en la concentración durante el período de trabajo. No sólo hemos creado, pero también hemos utilizado en nuestra aplicación Pomodoro! Ahora podemos concentrarnos mejor, mientras Pomodoro está funcionando y activar o desactivar el sonido en cualquier momento!</p>
<p className="p">We have also created our own plugin! Our plugin is able to produce sound that can help in concentrating during the working period. Not only have we created it, but we have also used it in our Pomodoro application! Now we can concentrate better while Pomodoro is working and toggle the sound at any time!</p>

<p className="it">Ahora tenemos dos aplicaciones muy agradables en nuestras manos. ¿Sabe lo que es mejor que una aplicación agradable?</p>
<p className="p">Now we have two really nice applications in our hands. Do you know what is better than a nice application?</p>



<p className="it"> <span className="emphasis"><em>La única cosa que es mejor que una buena aplicación es una aplicación muy bien probado!</em></span> </p>
<p className="p">
<span class="emphasis"><em>The only thing that is better than a nice application is a nicely tested application!</em></span>
</p>



<p className="it">Con esto en mente, que es hora de que probamos nuestras aplicaciones. En el siguiente capítulo, vamos a comprobar y aplicar algunas técnicas de prueba. Vamos a escribir pruebas unitarias utilizando corredor de prueba Karma y Jasmine como una biblioteca afirmación. También vamos a escribir pruebas de extremo a extremo utilizando sombra de la noche. Me encanta probar las aplicaciones y espero que le va a encantar también. ¡Vamonos!</p>
<p className="p">With that in mind, it's about time we tested our applications. In the next chapter, we will check and apply some testing techniques. We will write unit tests using Karma test runner and Jasmine as an assertion library. We will also write end-to-end tests using Nightwatch. I love to test applications and I hope that you will love it as well. Let's go!</p>


</div>


</div></div>
<div className='col-md-3'></div>


</div>  
   
  
  
  </Layout>
  )