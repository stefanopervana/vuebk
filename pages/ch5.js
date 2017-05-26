import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch5'>
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

<title>Chapter 5. Vuex - Managing State in Your Application</title>



<link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div class="chapter" title="Chapter 5. Vuex - Managing State in Your Application"><div class="titlepage" id="aid-1HIT82"><div><div><h1 className="title"><a id="ch05"></a>Chapter 5. Vuex - Managing State in Your Application</h1></div></div></div>

<p className="it">En el capítulo anterior, que ha aprendido uno de los conceptos más importantes de Vue.js: el enlace de datos. Que aprendió y aplicó una gran cantidad de formas de enlace de datos para nuestra aplicación. También ha aprendido a utilizar las directivas, cómo escuchar a los acontecimientos, y cómo crear e invocar métodos. En este capítulo, verá cómo manejar los datos que representa un estado de aplicación global. Vamos a hablar de Vuex, una arquitectura especial para los estados centralizados en aplicaciones Vue. Aprenderás cómo crear un almacén de datos global y cómo recuperar y cambiar el interior de los componentes. Vamos a definir qué datos es local y lo que debería ser global en nuestras aplicaciones, y utilizaremos la tienda Vuex trabajar con un estado global en ellos.</p>

<p className="p">In the previous chapter, you learned one of the most important concepts of Vue.js: data binding. You learned and applied a lot of ways of binding data to our application. You also learned how to use directives, how to listen to events, and how to create and invoke methods. In this chapter, you will see how to manage the data that represents a global application state. We will talk about Vuex, a special architecture for centralized states in Vue applications. You will learn how to create a global data store and how to retrieve and change it inside the components. We will define what data is local and what should be global in our applications, and we will use the Vuex store to work with a global state in them.</p>

<p className="it">Sumando hasta que, en este capítulo, vamos a:</p>

<p className="p">Summing it up, in this chapter, we are going to:</p><div class="itemizedlist"><ul className="itemizedlist">

<li className="listit">Entender la diferencia entre los estados de aplicaciones locales y globales</li>

<li className="listitem">Understand the difference between local and global application states</li>





<li className="listit">Entender lo Vuex es y cómo funciona</li>

<li className="listitem">Understand what Vuex is and how it works</li>





<li className="listit">Aprende a usar los datos desde el almacén global</li>

<li className="listitem">Learn how to use data from the global store</li>





<li className="listit">Aprender sobre captadores de tiendas, mutaciones y acciones</li>

<li className="listitem">Learn about store getters, mutations, and actions</li>





<li className="listit">Instalar y utilizar el almacén de Vuex en la lista de compras y aplicaciones Pomodoro</li>

<li className="listitem">Install and use the Vuex store in the shopping list and Pomodoro applications</li>

</ul></div><div className="section" title="Parent-child components' communication, events, and brain teaser"><div className="titlepage"><div><div><h1 className="title"><a id="ch05lvl1sec43"></a>Parent-child components' communication, events, and brain teaser</h1></div></div></div>







<p className="it">Recuerde nuestra aplicación de lista de la compra? ¿Recuerdas nuestra <code className="literal">ChangeTitleComponent</code> y cómo nos aseguramos de que escribir en su caja de entrada afectaría el título de la lista de compras que pertenece a la componente de los padres? Puedes recordar que cada componente tiene su propio ámbito y el alcance del componente padre no podes ser afectada por los componentes de los niños. Por lo tanto, con el fin de ser capaz de propagar los cambios desde el interior de los componentes de los niños a los componentes de los padres, se utilizó eventos. Poner de manera muy sencilla, se podes llamar al <code className="literal">$emit</code> método del componente secundario con el nombre del evento que se envió y escuchar a este evento dentro de la <code className="literal">v-on</code> directiva sobre el componente padre.</p>

<p className="p">Remember our shopping list application? Do you remember our <code class="literal">ChangeTitleComponent</code> and how we ensured that typing in its input box would affect the title of the shopping list that belongs to the parent component? You remember that each component has its own scope, and the scope of the parent component cannot be affected by children components. Thus, in order to be able to propagate the changes from inside the children components to the parent components, we used events. Putting it very simply, you can call the <code class="literal">$emit</code> method from the child component with the name of the event being dispatched and listen to this event within the <code class="literal">v-on</code> directive on the parent component.</p>


<p className="it">Si se trata de un evento nativo, tales como <code className="literal">input</code>, es aún más sencillo. Sólo unirse el atributo necesario para el componente de niño como <code className="literal">v-model</code> y luego llamar al <code className="literal">$emit</code> método con el nombre del evento (por ejemplo, <code className="literal">input</code>) desde el componente de niño.</p>

<p className="p">If it is a native event, such as <code class="literal">input</code>, it's even more simple. Just bind the needed attribute to the child component as a <code class="literal">v-model</code> and then call the <code class="literal">$emit</code> method with the name of the event (for example, <code class="literal">input</code>) from the child component.</p>

<p className="it">En realidad, esto es exactamente lo que hemos hecho con <code className="literal">ChangeTitleComponent</code>.</p>

<p className="p">Actually, this is exactly what we have done with <code class="literal">ChangeTitleComponent</code>.</p>

<p className="it">Abrir el código dentro del <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/shopping-list">Capítulo 5 / lista de compras</a> carpeta y comprobar si estoy en lo correcto. (También podes ser que desee ejecutar <code className="literal">npm install</code> y <code className="literal">npm run dev</code> si desea comprobar el comportamiento de la aplicación en su navegador.)</p>

<p className="p">Open the code inside the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/shopping-list">chapter5/shopping-list</a> folder and check if I'm right. (You might also want to run <code class="literal">npm install</code> and <code class="literal">npm run dev</code> if you want to check the application's behavior in your browser.)</p>


<p className="it">Atamos el título utilizando la <code className="literal">v-model</code> directiva para <code className="literal">ChangeTitleComponent</code> el interior de la <code className="literal">ShoppingListComponent</code> plantilla:</p>

<p className="p">We bound the title using the <code class="literal">v-model</code> directive to <code class="literal">ChangeTitleComponent</code> inside the <code class="literal">ShoppingListComponent</code> template:</p>

<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;template&gt; 
  &lt;div&gt; 
    &lt;...&gt; 
    &lt;div class="footer"&gt; 
      &lt;hr /&gt; 
      &lt;change-title-component <span class="strong"><strong>v-model="title"</strong></span>&gt;&lt;/change-title-component&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>

<p className="it">Después de eso, declaramos el valor del modelo de título dentro del <code className="literal">props</code> atributo de la <code className="literal">ChangeTitleComponent</code> y emiten el <code className="literal">input</code> caso de la <code className="literal">input</code> acción:</p>

<p className="p">After that, we declare the value of the title model inside the <code class="literal">props</code> attribute of the <code class="literal">ChangeTitleComponent</code> and emit the <code class="literal">input</code> event on the <code class="literal">input</code> action:</p>

<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div&gt; 
    &lt;em&gt;Change the title of your shopping list here&lt;/em&gt; 
    &lt;input <span class="strong"><strong>:value="value" @input="onInput"</strong></span>/&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
  export default { 
    props: [<span class="strong"><strong>'value'</strong></span>], 
    methods: { 
      onInput (event) { 
        <span class="strong"><strong>this.$emit('input', event.target.value)</strong></span> 
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="it">Parece bastante sencillo, ¿verdad?</p>

<p className="p">Seems pretty straightforward, right?</p>


<p className="it">Si tratamos de cambiar el título en el cuadro de entrada, el título de nuestra lista de la compra cambia en consecuencia:</p>

<p className="p">If we try to change the title in the input box, the title of our shopping list changes accordingly:</p>


<div class="mediaobject"><img src="/static/image00285.jpeg" width="100%" alt="Parent-child components' communication, events, and brain teaser"/></div>

<p className="it">Después de establecer la comunicación basadas eventos entre los componentes principales y secundarios, que son capaces de cambiar el título</p>

<p className="p">After establishing events-based communication between the parent and child components, we are able to change the title</p>


<p className="it">Parece que en realidad eran capaces de lograr nuestro propósito. Sin embargo, si abre sus devtools, verá un error feo:</p>

<p className="p">Looks like we were actually able to achieve our purpose. However, if you open your devtools, you will see an ugly error:</p>




<pre className="programlisting"><code>{`
<span class="strong"><strong>[Vue warn]: Avoid mutating a prop directly since the value will be overwritten whenever the parent component rerenders. Instead, use a data or computed property based on the prop's value. Prop being mutated: "title"</strong></span>
`}</code></pre>







<p className="it">¡Ay! Vue es realmente correcto, estamos mutando los datos que se contiene dentro de la <code className="literal">ShoppingList</code> del componente <code className="literal">props</code> atributo. Este atributo proviene de la array principal componente, <code className="literal">App.vue</code> que es, a su vez, el padre de nuestra <code className="literal">ShoppingListComponent</code>. Y ya sabemos que no podemos mutar los datos de los padres del componente secundario. Si el título pertenecía directamente a la <code className="literal">ShoppingListComponent</code>, todos estábamos bien, pero en este caso, definitivamente estamos haciendo algo mal.</p>

<p className="p">Ouch! Vue is actually right, we are mutating the data that is contained inside the <code class="literal">ShoppingList</code> component's <code class="literal">props</code> attribute. This attribute comes from the main parent component, <code class="literal">App.vue</code>, which is, in turn, the parent of our <code class="literal">ShoppingListComponent</code>. And we already know that we cannot mutate the parent's data from the child component. If the title belonged directly to the <code class="literal">ShoppingListComponent</code>, we were all good, but in this case, we are definitely doing something wrong.</p>







<p className="it">Además, si sos tá prestando suficiente atención, podrá darse cuenta de que hay un lugar más que contiene el mismo conjunto de datos que no cambian a pesar de nuestro esfuerzo. Mira el título de la pestaña. Se continúa mostrando la palabra <strong className="userinput"><code>Groceries</code></strong>. Pero queremos que cambie, así!</p>

<p className="p">Also, if you are paying enough attention, you probably noticed that there's one more place that contains the same piece of data that doesn't change despite our effort. Look at the tab's title. It continues to display the word <strong class="userinput"><code>Groceries</code></strong>. But we want it to change as well!</p>







<p className="it">Pequeña nota al margen: He añadido un nuevo componente, <code className="literal">ShoppingListTitleComponent</code>. Representa el título de la pestaña. ¿Recuerdas propiedades calculadas? Tenga en cuenta que este componente contiene una que simplemente antepone   <code className="literal">#</code> a la ID importados a través del <code className="literal">props</code> atributo para generar un ancla:</p>

<p className="p">Small side note: I've added a new component, <code class="literal">ShoppingListTitleComponent</code>. It represents the tab's title. Do you remember computed properties? Note that this component contains one that just prepends  <code class="literal">#</code> to the ID imported through the <code class="literal">props</code> attribute to generate an anchor:</p>






<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;a <span class="strong"><strong>:href="href"</strong></span> :aria-controls="id" role="tab" data-toggle="tab"&gt;
  {{ title }}&lt;/a&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  export default{ 
    props: ['id', <span class="strong"><strong>'title'</strong></span>], 
    <span class="strong"><strong>computed: { 
      href () { 
        return '#' + this.id 
      } 
    }</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>







<p className="it">El ancla que muestra el título de la ficha contiene una <code className="literal">href</code> directiva vinculante que se basa en esta propiedad calculada.</p>

<p className="p">The anchor that displays the tab's title contains an <code class="literal">href</code> binding directive that relies on this computed property.</p>







<p className="it">Así que, volviendo a la modificación del título. ¿Qué podemos hacer para cambiar el título de este componente cuando el título dentro de los <code className="literal">ChangeTitleComponent</code> cambios? Si pudiéramos propagar el caso de la principal <code className="literal">App.vue</code> componente, que podríamos resolver ambos problemas. Siempre que los datos de los cambios en los componentes de los padres, que afecta a todos los componentes de los niños.</p>

<p className="p">So, back to the title changing. What can we do to change the title of this component when the title inside the <code class="literal">ChangeTitleComponent</code> changes? If we could propagate the event to the main <code class="literal">App.vue</code> component, we could actually solve both problems. Whenever the data in the parent component changes, it affects all the children components.</p>







<p className="it">Por lo tanto, tenemos que hacer de alguna manera el flujo del evento a partir <code className="literal">ChangeTitleComponent</code> hasta que el principal <code className="literal">App</code> componente. Suena difícil, pero en realidad, sólo tenemos que registrar nuestro evento personalizado en tanto <code className="literal">ChangeTitleComponent</code> y su array y emiten hasta que se alcanza el <code className="literal">App</code> componente. El <code className="literal">App</code> componente debe manejar este caso, aplicando el cambio en el título correspondiente. Con el fin de <code className="literal">App.vue</code> saber exactamente qué lista de compras se está cambiando, su hijo <code className="literal">ShoppingListComponent</code> también debe pasar el ID de la lista de la compra que representa. Para que esto suceda, <code className="literal">App.vue</code> debe pasar el <code className="literal">id</code> alojamiento hasta el componente y el componente de lista de la compra debe registrarlo en su <code className="literal">props</code> atributo.</p>

<p className="p">So, we need to somehow make the event flow from <code class="literal">ChangeTitleComponent</code> until the main <code class="literal">App</code> component. Sounds difficult, but actually, we just need to register our custom event in both <code class="literal">ChangeTitleComponent</code> and its parent and emit it until it reaches the <code class="literal">App</code> component. The <code class="literal">App</code> component should handle this event by applying the change to the corresponding title. In order for <code class="literal">App.vue</code> to know exactly which shopping list is being changed, its child <code class="literal">ShoppingListComponent</code> should also pass the ID of the shopping list that it represents. For this to happen, <code class="literal">App.vue</code> should pass the <code class="literal">id</code> property to the component, and the shopping list component should register it in its <code class="literal">props</code> attribute.</p>







<p className="it">Por lo tanto, vamos a hacer lo siguiente:</p>

<p className="p">So, we will do the following:</p><div class="orderedlist"><ol class="orderedlist arabic">



<li className="listit">Obligar a la <code className="literal">id</code> propiedad a <code className="literal">ShoppingListComponent</code> su creación dentro de la <code className="literal">App</code> plantilla del componente.</li>

<li className="listitem">Bind the <code class="literal">id</code> property to <code class="literal">ShoppingListComponent</code> on its creation inside the <code class="literal">App</code> component's template.</li>





<li className="listit">La propiedad se unen <code className="literal">title</code> en lugar de <code className="literal">v-model</code> a la <code className="literal">change-title-component</code> de dentro del <code className="literal">ShoppingList</code> componente.</li>

<li className="listitem">Bind property <code class="literal">title</code> instead of <code class="literal">v-model</code> to the <code class="literal">change-title-component</code> from within the <code class="literal">ShoppingList</code> component.</li>





<li className="listit">Una el evento personalizado (vamos a llamarlo <code className="literal">changeTitle</code>) para <code className="literal">input</code> el interior de la <code className="literal">ChangeTitleComponent</code>.</li>

<li className="listitem">Attach the custom event (let's call it <code class="literal">changeTitle</code>) to <code class="literal">input</code> inside the <code class="literal">ChangeTitleComponent</code>.</li>





<li className="listit">Dile <code className="literal">ShoppingListComponent</code> a escuchar a la costumbre <code className="literal">changeTitle</code> evento que viene del <code className="literal">change-title-component</code> uso de la <code className="literal">v-on</code>Directiva y manejarlo mediante la emisión de otro evento (que también se podes llamar <code className="literal">changeTitle</code>) que debe ser capturado por el <code className="literal">App</code> componente.</li>

<li className="listitem">Tell <code class="literal">ShoppingListComponent</code> to listen to the custom <code class="literal">changeTitle</code> event coming from the <code class="literal">change-title-component</code> using the <code class="literal">v-on</code> directive and handle it by emitting another event (it can also be called <code class="literal">changeTitle</code>) that should be caught by the <code class="literal">App</code> component.</li>





<li className="listit">Adjuntar oyente al <code className="literal">changeTitle</code> evento para el <code className="literal">shopping-list-component</code> interior <code className="literal">App.vue</code> y manejarlo por cambiar realmente el título de la lista de la compra correspondiente.</li>

<li className="listitem">Attach listener to the <code class="literal">changeTitle</code> event to the <code class="literal">shopping-list-component</code> inside <code class="literal">App.vue</code> and handle it by actually changing the title of the corresponding shopping list.</li>

</ol></div>







<p className="it">Vamos a empezar por la modificación de la <code className="literal">App.vue</code> plantilla de archivo y encuadernación ID de la lista de compras para <code className="literal">shopping-list-component</code>:</p>

<p className="p">Let's start by modifying the <code class="literal">App.vue</code> file's template and binding the shopping list's ID to <code class="literal">shopping-list-component</code>:</p>






<pre className="programlisting"><code>{`//App.vue 
&lt;template&gt; 
  &lt;div id="app" class="container"&gt; 
    &lt;...&gt; 
        &lt;shopping-list-component <span class="strong"><strong>:id="list.id"</strong></span> : 
          :items="list.items"&gt;&lt;/shopping-list-component&gt; 
    &lt;...&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>







<p className="it">Ahora registrar el <code className="literal">id</code> atributo dentro del <code className="literal">ShoppingListComponent</code> componente de <code className="literal">props</code>:</p>

<p className="p">Now register the <code class="literal">id</code> attribute inside the <code class="literal">ShoppingListComponent</code> component's <code class="literal">props</code>:</p>






<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;script&gt; 
  &lt;...&gt; 
  export default { 
    &lt;...&gt; 
    props: [<span class="strong"><strong>'id'</strong></span>, 'title', 'items'], 
    &lt;...&gt; 
  } 
&lt;/script&gt; 
`}</code></pre>







<p className="it">Obligar a la <code className="literal">title</code> propiedad de datos en lugar de la <code className="literal">v-model</code> directiva al <code className="literal">change-title-component</code>:</p>

<p className="p">Bind the <code class="literal">title</code> data property instead of the <code class="literal">v-model</code> directive to the <code class="literal">change-title-component</code>:</p>






<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;template&gt; 
  &lt;...&gt; 
      &lt;change-title-component <span class="strong"><strong>:</strong></span>&gt;&lt;/change-title-component&gt; 
  &lt;...&gt; 
&lt;/template&gt; 
 
//ChangeTitleComponent.vue 
&lt;template&gt; 
  &lt;div&gt; 
    &lt;em&gt;Change the title of your shopping list here&lt;/em&gt; 
    &lt;input <span class="strong"><strong>:value="title"</strong></span> @input="onInput"/&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
  export default { 
    props: ['value', <span class="strong"><strong>'title'</strong></span>], 
    &lt;...&gt; 
  } 
&lt;/script&gt; 
`}</code></pre>







<p className="it">Emitir un evento personalizado en lugar de <code className="literal">input</code> desde el <code className="literal">ChangeTitleComponent</code> y escuchar a este evento en su componente principal:</p>

<p className="p">Emit a custom event instead of <code class="literal">input</code> from the <code class="literal">ChangeTitleComponent</code> and listen to this event in its parent component:</p>






<pre className="programlisting"><code>{`//ChangeTitleComponent.vue 
&lt;script&gt; 
  export default { 
    &lt;...&gt; 
    methods: { 
      onInput (event) { 
        this.$emit(<span class="strong"><strong>'changeTitle'</strong></span>, event.target.value) 
      } 
    } 
  } 
&lt;/script&gt; 
 
//ShoppingListComponent.vue 
&lt;template&gt; 
  &lt;...&gt; 
      &lt;change-title-component :  
        <span class="strong"><strong>v-on:changeTitle="onChangeTitle"</strong></span>&gt;&lt;/change-title-component&gt; 
  &lt;...&gt; 
&lt;/template&gt; 
`}</code></pre>







<p className="it">Creá el <code className="literal">onChangeTitle</code> método en el <code className="literal">ShoppingListComponent</code> que emitirá su propio <code className="literal">changeTitle</code> evento. Escuchar a este evento en el <code className="literal">App.vue</code> componente utilizando la <code className="literal">v-on</code> directiva. Tenga en cuenta que el <code className="literal">onChangeTitle</code> método de la lista de la compra de componentes debe enviar su ID con el fin de <code className="literal">App.vue</code> saber qué se está cambiando el título de la lista de compras. Por lo tanto, el <code className="literal">onChangeTitle</code> método y su manejo se verá de la siguiente manera:</p>

<p className="p">Create the <code class="literal">onChangeTitle</code> method in <code class="literal">ShoppingListComponent</code> that will emit its own <code class="literal">changeTitle</code> event. Listen to this event in the <code class="literal">App.vue</code> component using the <code class="literal">v-on</code> directive. Note that the <code class="literal">onChangeTitle</code> method of the shopping list component should send its ID in order for <code class="literal">App.vue</code> to know which shopping list's title is being changed. So, the <code class="literal">onChangeTitle</code> method and its handling will look as follows:</p>






<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;script&gt; 
  &lt;...&gt; 
 
  export default { 
    &lt;...&gt; 
    methods: { 
      &lt;...&gt; 
      <span class="strong"><strong>onChangeTitle (text) { 
        this.$emit('changeTitle', this.id, text) 
      }</strong></span> 
    } 
  } 
&lt;/script&gt; 
 
//App.vue 
&lt;template&gt; 
  &lt;...&gt; 
  &lt;shopping-list-component :id="list.id" : 
    :items="list.items" <span class="strong"><strong>v-on:changeTitle="onChangeTitle"</strong></span>&gt;
  &lt;/shopping-list-component&gt; 
  &lt;...&gt; 
&lt;/template&gt; 
`}</code></pre>







<p className="it">Por último, vamos a crear un <code className="literal">changeTitle</code> método en el interior <code className="literal">App.vue</code> que te encontras  una lista de compras en la <code className="literal">shoppinglists</code> gama por su ID y cambiar su título:</p>

<p className="p">Finally, let's create a <code class="literal">changeTitle</code> method inside <code class="literal">App.vue</code> that will find a shopping list in the <code class="literal">shoppinglists</code> array by its ID and change its title:</p>






<pre className="programlisting"><code>{`&lt;script&gt; 
  &lt;...&gt; 
  import _ from 'underscore' 
 
  export default { 
    &lt;...&gt; 
    methods: { 
      <span class="strong"><strong>onChangeTitle (id, text) { 
        _.findWhere(this.shoppinglists, { id: id }).title = text 
      }</strong></span> 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>







<p className="it">Note que hemos usado el <code className="literal">underscore</code> de la clase <code className="literal">findWhere</code> método (<a className="ulink" href="http://underscorejs.org/#findWhere">http://underscorejs.org/#findWhere</a> ) para hacer nuestra tarea de encontrar la lista de compras por su ID más fácil.</p>

<p className="p">Note that we have used the <code class="literal">underscore</code> class's <code class="literal">findWhere</code> method (
<a class="ulink" href="http://underscorejs.org/#findWhere">http://underscorejs.org/#findWhere</a>
) to make our task of finding the shopping list by its ID easier.</p>







<p className="it">Y ... hemos terminado! Comproba el código final para este desafío en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/shopping-list2">Capítulo 5 / compras-lista2</a> carpeta. Comproba la página en el navegador. Trate de cambiar el título en el cuadro de entrada. Verá que cambia todas partes!</p>

<p className="p">And ... we are done! Check the final code for this teaser in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/shopping-list2">chapter5/shopping-list2</a> folder. Check the page in the browser. Try to change the title in the input box. You will see that it changes everywhere!</p>

<p className="it">Admitir que esto era todo un reto. Trate de repetir todos los pasos por sí mismo. Mientras tanto, quiero ser al azar y te digo dos palabras: globales y locales. Piénsalo.</p>

<p className="p">Admit that this was quite challenging. Try to repeat all the steps by yourself. In the meantime, let me be random and tell you two words: global and local. Think about it.</p></div></div>





</div></div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Why do we need a global state store?</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Why do we need a global state store?" id="aid-1IHDQ1"><div className="titlepage"><div><div><h1 className="title"><a id="ch05lvl1sec44"></a>Why do we need a global state store?</h1></div></div></div>
<p className="it">Como desarrollador, que ya está familiarizado con los conceptos globales y locales. No son variables globales que son accesibles por cada sección de la aplicación, pero los métodos también tienen su propio ámbito (local) y su alcance no es accesible por otros métodos.</p>
<p className="p">As a developer, you are already familiar with global and local concepts. There are global variables that are accessible by each section of the application, but methods also have their own (local) scope and their scope is not accessible by other methods.</p>

<p className="it">Un sistema basado en componentes también tiene sus estados locales y globales. Cada componente tiene sus datos locales, pero la aplicación tiene un estado de la aplicación global que se podes acceder por cualquiera de los componentes de la aplicación. El reto al que nos hemos encontrado en el párrafo anterior se resuelve fácilmente si tuviéramos algún tipo de una tienda de las variables globales que contiene los títulos de las listas de la compra y cada componente podes acceder y modificar ellos. Afortunadamente para nosotros, el creador de Vue pensó en nosotros y creó la arquitectura Vuex. Esta arquitectura nos permite crear una aplicación global en la tienda el lugar donde el estado de la aplicación global podes ser almacenada y gestionada!</p>
<p className="p">A component-based system also has its local and global states. Each component has its local data, but the application has a global application state that can be accessed by any component of the application. The challenge that we have met in the previous paragraph would be easily solved if we had some kind of a global variables store containing the titles of the shopping lists and each component could access and modify them. Fortunately for us, Vue's creator thought about us and created Vuex architecture. This architecture allows us to create a global application store&mdash;the place where the global application state can be stored and managed!</p></div>





</div></div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>What is Vuex?</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="What is Vuex?" id="aid-1JFUC1"><div className="titlepage"><div><div><h1 className="title"><a id="ch05lvl1sec45"></a>What is Vuex?</h1></div></div></div><p className="it">Como se mencionó anteriormente, Vuex es una arquitectura de la aplicación para la gestión de estado centralizado. Fue inspirado por la fluctuación y Redux, pero es un poco más fácil de entender y de usar:</p>

<p className="p">As previously mentioned, Vuex is an application architecture for centralized state management. It was inspired by Flux and Redux, but it is a little bit easier to understand and to use:</p>



<div class="mediaobject"><img src="/static/image00286.jpeg"  alt="What is Vuex?"/></div>

<p className="it">Arquitectura Vuex; la imagen es tomada de la página Vuex GitHub en https://github.com/vuejs/vuex </p>

<p className="p">Vuex architecture; the image is taken from the Vuex GitHub page at https://github.com/vuejs/vuex
</p>

<p className="it">Mira en el espejo (no se olvide de sonreír a ti mismo). Ves un buen bastante humano. Sin embargo, hay un sistema complejo toda su interior. ¿Qué se hace cuando se siente frío? Y ¿cómo se siente cuando hace calor? ¿Cómo se siente tener hambre? Y muy hambriento? Y ¿cómo se siente al tocar a un gato mullido? El ser humano podes estar en diversos tipos de estados (feliz, hambre, sonriente, enojado, y así sucesivamente). El ser humano también tiene una gran cantidad de componentes, tales como las manos, los brazos, las piernas, el estómago, la cara, y así sucesivamente. ¿Podes usted imaginar cómo sería si, digamos, una mano fueron capaces de influir directamente en el estómago, haciendo que se sienta hambre, sin su conocimiento?</p>

<p className="p">Look in the mirror (do not forget to smile to yourself). You see a nice pretty human. However, there's a whole complex system inside it. What do you do when you feel cold? And how do you feel when it's hot? How does it feel to be hungry? And very hungry? And how does it feel to touch a fluffy cat? The human can be in various types of states (happy, hungry, smiley, angry, and so on). The human also has a lot of components, such as hands, arms, legs, stomach, face, and so on. Can you imagine how would it be if, let's say, a hand were able to directly influence your stomach, making you feel hungry, without your awareness?</p>

<p className="it">Nuestra forma de trabajar es muy similar al sistema de gestión centralizado del Estado. Nuestro cerebro contiene un estado inicial de las cosas (felices, no tiene hambre, satisfechos, y así sucesivamente). También proporciona el mecanismo que permite que mueve los hilos en los mismos que pueden afectar el estado. Por ejemplo, <span className="emphasis"><em>hacer una sonrisa</em></span> , <span className="emphasis"><em>se sienten satisfechos</em></span> , <span className="emphasis"><em>aplaudir sus manos</em></span> , y así sucesivamente. Nuestras manos, estómago, boca y otros componentes no pueden afectar directamente el estado. Sin embargo, pueden decirle a nuestro cerebro para despachar ciertos cambios, y estos cambios, a su vez, afectarán el estado.</p>

<p className="p">The way we work is very similar to the centralized state management system. Our brain contains an initial state of things (happy, not hungry, satisfied, and so on). It also provides the mechanism that allows pulling the strings in it that can affect the state. For example, <span class="emphasis"><em>make a smile</em></span>,<span class="emphasis"><em> feel satisfied</em></span>, <span class="emphasis"><em>clap your hands</em></span>, and so on. Our hands, stomach, mouth, and other components cannot directly affect the state. But they can tell our brain to dispatch certain changes, and these changes, in turn, will affect the state.</p>

<p className="it">Por ejemplo, cuando se tiene hambre, se come. Su estómago en algún momento dado le dice al cerebro que está lleno. La acción envía una mutación del estado de ser hambre para estar satisfecho. Su boca componente está unido a este estado y hace que expresa la sonrisa. De este modo, los componentes están unidos al estado del cerebro de sólo lectura y pueden despachar acciones cerebrales que alteran el estado. Los componentes no son conscientes el uno del otro y no pueden modificar el estado de cada uno directamente de ninguna manera. También tampoco pueden afectar directamente el estado inicial del cerebro. Sólo pueden llamar a las acciones. Acciones pertenecen al cerebro, y en sus devoluciones de llamada, el estado se pueden modificar. Por lo tanto, nuestro cerebro es una fuente única de verdad.</p>

<p className="p">For example, when you are hungry, you eat. Your stomach at some certain point tells the brain that it is full. The action dispatches a mutation of the state of being hungry to be satisfied. Your component mouth is bound to this state and it makes it express the smile. Thus, the components are bound to the read-only brain state and can dispatch brain actions that will alter the state. The components are not aware of each other and cannot modify each other's state directly in any way. They also can also not affect directly the brain's initial state. They can only call the actions. Actions belong to the brain, and in their callbacks, the state can be modified. Thus, our brain is a single source of truth.</p>

<div class="note" title="Note"><h3 class="title"><a id="tip35"></a>Tip</h3><p className="it">Una única fuente de la verdad en los sistemas de información es una manera de diseñar la arquitectura de la aplicación de tal manera que cada elemento de datos se almacena sólo una vez. Estos datos son de sólo lectura para evitar que los componentes de la aplicación de corromper el estado al que se accede por otros componentes. La tienda Vuex está diseñado de tal manera que no es posible cambiar su estado de cualquiera de los componentes.</p>

<p className="p">Single source of truth in information systems is a way of designing the architecture of the application in such a way that every data element is only stored once. This data is read-only to prevent the application's components from corrupting the state that is accessed by other components. The Vuex store is designed in such a way that it is not possible to change its state from any component.</p>

</div></div>

</div></div>
<div className='col-md-3'></div>

 <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>How does the store work and what is so special about it?</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="How does the store work and what is so special about it?" id="aid-1KEEU1"><div className="titlepage"><div><div><h1 className="title"><a id="ch05lvl1sec46"></a>How does the store work and what is so special about it?</h1></div></div></div>

<p className="it">La tienda Vuex contiene esencialmente dos cosas: <span className="strong"><strong>estatales</strong></span> y <span className="strong"><strong>mutaciones</strong></span> . Estado es un objeto que representa el estado inicial de los datos de aplicación. Las mutaciones también es un objeto que contiene funciones de acción que afectan el estado. Tienda Vuex es sólo una llanura archivo JavaScript que exporta estos dos objetos y le dice a Vue utilizar Vuex ( <code className="literal">Vue.use(Vuex)</code>). Entonces se podes importar a cualquier otro componente. Si se importa en el principal <code className="literal">App.vue</code> archivo y registra la tienda en la <code className="literal">Vue</code> inicialización de la aplicación, que se transmite a toda la cadena de los niños y se podes acceder a través de la <code className="literal">this.$store</code>variable. Así, a grandes rasgos, de una manera muy simplificada, crearíamos una tienda, importarlo en la aplicación principal, y utilizarlo en un componente de la siguiente manera:</p>

<p className="p">The Vuex store contains essentially two things: <span class="strong"><strong>state</strong></span> and <span class="strong"><strong>mutations</strong></span>. State is an object that represents the initial state of the application data. Mutations is also an object containing action functions that affect the state. Vuex store is just a plain JavaScript file that exports these two objects and tells Vue to use Vuex (<code class="literal">Vue.use(Vuex)</code>). Then it can be imported into any other component. If you import it in the main <code class="literal">App.vue</code> file and register the store on the <code class="literal">Vue</code> application initialization, it is passed to the whole children chain and can be accessed through the <code class="literal">this.$store</code> variable. So, very roughly, in a very simplified way, we would create a store, import it in the main app, and use it in a component in the following way:</p>


<pre className="programlisting"><code>{`
<span class="strong"><strong>//CREATE STORE</strong></span> 
//initialize state 
const state = { 
  msg: 'Hello!' 
} 
//initialize mutations 
const mutations = { 
  changeMessage(state, msg) { 
    state.msg = msg 
  } 
} 
//create store with defined state and mutations 
export default new Vuex.Store({ 
  state: state 
  mutations: mutations 
}) 
 
<span class="strong"><strong>//CREATE VUE APP</strong></span> 
&lt;script&gt; 
  <span class="strong"><strong>import store from './vuex/store'</strong></span> 
  export default { 
    components: { 
      SomeComponent 
    }, 
    <span class="strong"><strong>store: store</strong></span> 
  } 
&lt;/script&gt; 
 
<span class="strong"><strong>//INSIDE SomeComponent</strong></span> 
&lt;script&gt; 
  export default { 
    computed: { 
      msg () { 
        return <span class="strong"><strong>this.$store.state.msg</strong></span>; 
      } 
    }, 
    methods: { 
      changeMessage () { 
        <span class="strong"><strong>this.$store.commit('changeMessage', newMsg);</strong></span>      
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>

<p className="it">La pregunta muy lógica podría surgir: ¿por qué crear una tienda Vuex en lugar de sólo tener un archivo JavaScript compartida que importa cerca del estado? Puede, por supuesto, hacer eso, pero entonces debe asegurarse de que ninguno de los componentes podes mutar el estado directamente. Ser capaz de cambiar los atributos de la tienda directamente sería, por supuesto, mucho más fácil, pero entonces podría conducir a errores e inconsistencias. Vuex proporcionar una forma limpia de la protección implícita estado de la tienda de acceso directo. Y, es reactiva. Poniendo todo esto en los estados:</p>

<p className="p">The very logical question might arise: why create a Vuex store instead of just having a shared JavaScript file that imports some state? You can, of course, do that, but then you must make sure that none of the components can mutate the state directly. Being able to change the store attributes directly would, of course, be a lot easier, but then it might lead to errors and inconsistencies. Vuex provide a clean way of implicitly protecting the store's state of direct access. And, it's reactive. Putting all this in statements:</p>

<div class="itemizedlist"><ul className="itemizedlist">
<li className="listit">La tienda Vuex es reactivo. Una vez que los componentes de recuperar un estado de ella, van a actualizar de forma reactiva sus puntos de vista cada vez que cambia el estado.</li>

<li className="listitem">The Vuex store is reactive. Once components retrieve a state from it, they will reactively update their views every time the state changes.</li>
<li className="listit">Los componentes no son capaces de mutar directamente el estado de la tienda. En su lugar, tienen que enviar mutaciones declarados por la tienda, lo que facilita el seguimiento de los cambios.</li>

<li className="listitem">Components are not able to directly mutate the store's state. Instead, they have to dispatch mutations declared by the store, which allows easy tracking of changes.</li>
<li className="listit">por lo tanto nuestra tienda Vuex se convierte en una fuente única de verdad.</li>

<li className="listitem">Our Vuex store thus becomes a single source of truth.</li>

</ul></div>


<p className="it">Vamos a crear un ejemplo sencillo saludos para ver Vuex en acción.</p>

<p className="p">Let's create a simple greetings example to see Vuex in action.</p>


</div>

</div></div>
<div className='col-md-3'></div>




  <div className='col-md-3'></div>
<div className='col-md-6'>

  <title>Greetings with store</title><div class="titlepage" id="aid-1LCVG2"><div><div><h1 class="title"><a id="ch05lvl1sec47"></a>Greetings with store</h1></div></div></div><p>We will create a very simple Vue application with two components: one of them will contain the greetings message and the other one will contain&nbsp;<code class="literal">input</code> that will allow us to change this message. Our store will contain the initial state that will represent the initial greeting and the mutation that will be able to change the message. Let's start by creating a Vue application. We will use <code class="literal">vue-cli</code> and the&nbsp;<code class="literal">webpack-simple</code> template:</p>

<pre className="programlisting"><code>{`vue init webpack-simple simple-store`}</code></pre>


<p>Install the dependencies and run the application as follows:</p>
<pre className="programlisting"><code>{`cd simple-store npm install npm run dev`}</code></pre>

<p>The application is started! Open the browser in <code class="literal">localhost:8080</code>. Actually, the greeting is already there. Let's now add the necessary components:</p><div class="itemizedlist"><ul class="itemizedlist"><li class="listitem"><code class="literal">ShowGreetingsComponent</code> will just display the greetings message</li><li class="listitem"><code class="literal">ChangeGreetingsComponent</code> will display the input field that will allow to change the message</li></ul></div><p>In the <code class="literal">src</code> folder, create a <code class="literal">components</code> subfolder. Start by adding <code class="literal">ShowGreetingsComponent.vue</code> to this folder.</p><p>It will look as simple as the following:</p>

<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;h1&gt;<span class="strong"><strong>{{ msg }}</strong></span>&lt;/h1&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  export default { 
    <span class="strong"><strong>props: ['msg']</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>

<p>After that, add <code class="literal">ChangeGreetingsComponent.vue</code> to this folder. It has to contain the input with the <code>{`v-model='msg'`}</code> directive:</p>
<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;input <span class="strong"><strong>v-model='msg'</strong></span>&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  export default { 
    <span class="strong"><strong>props: ['msg']</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>

<p>Now open the <code class="literal">App.vue</code> file, import the components, and replace the markup with these two components. Do not forget to bind <code class="literal">msg</code> to both of them. So, your <code class="literal">App.vue</code> after the modifications will look like the following:</p>
<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div&gt; 
    <span class="strong"><strong>&lt;show-greetings-component :msg='msg'&gt;&lt;/show-greetings-component&gt; 
    &lt;change-greetings-component :msg='msg'&gt;&lt;/change-greetings-component&gt;</strong></span> 
  &lt;div&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue' 
import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue' 
 
export default { 
  <span class="strong"><strong>components: { ShowGreetingsComponent, ChangeGreetingsComponent }</strong></span>, 
  data () { 
    return { 
      msg: 'Hello Vue!' 
    } 
  } 
} 
&lt;/script&gt; 
`}</code></pre>


<p>Open the browser. You will see the input box with our greeting; however, typing in it will not change the message in the title. We were already expecting that because we know that components cannot directly affect each other's state. Let's now introduce the store! First of all, we must install <code class="literal">vuex</code>:</p>
<pre className="programlisting"><code>{`npm install vuex --save`}</code></pre>


<p>Create a folder named <code class="literal">vuex</code> in the <code class="literal">src</code> folder. Create a JavaScript file named <code class="literal">store.js</code>. This will be our state management entry. First of all, import both <code class="literal">Vue</code> and <code class="literal">Vuex</code> and tell <code class="literal">Vue</code> that we want to use <code class="literal">Vuex</code> in this application:</p><pre className="programlisting"><code>{`//store.js
import Vue from 'vue'
import Vuex from 'vuex'
  <span class="strong"><strong>Vue.use(Vuex)</strong></span>
`}</code></pre>



<p>Now create two constants, <code>{`state`}</code> and <code class="literal">mutations</code>. <code>{`State`}</code>&nbsp;will contain the message <code class="literal">msg</code> while <code class="literal">mutations</code> will export the method that will allow us to modify&nbsp;<code class="literal">msg</code>:</p>

<pre className="programlisting"><code>{`const state = { 
  msg: 'Hello Vue!' 
} 
 
const mutations = { 
  changeMessage(state, msg) { 
    state.msg = msg 
  } 
} 
`}</code></pre>


<p>Now initialize the Vuex store with the already created <code>{`state`}</code> and <code class="literal">mutations</code>:</p>
<pre className="programlisting"><code>{`export default new Vuex.Store({ 
  state: state, 
  mutations: mutations 
}) 
`}</code></pre>


<div class="note" title="Note"><h3 class="title"><a id="tip36"></a>Tip</h3><p>As we are using ES6, the notation&nbsp;<code>{`{state: state, mutations: mutations}`}</code> can be replaced with, simply,&nbsp;<code>{`{state, mutations}`}</code>
</p></div><p>Our whole store's code will thus look like the following:</p>
<pre className="programlisting"><code>{`//store.js 
import Vue from 'vue' 
import Vuex from 'vuex' 
 
Vue.use(Vuex) 
const state = { 
  <span class="strong"><strong>msg: 'Hello Vue!'</strong></span> 
} 
const mutations = { 
  <span class="strong"><strong>changeMessage(state, msg) { 
    state.msg = msg 
  }</strong></span> 
} 
export default new Vuex.Store({ 
  <span class="strong"><strong>state, 
  mutations</strong></span> 
}) 
`}</code></pre>


<p>We can now import the store in our <code class="literal">App.vue</code>. By doing this, we tell all the components that they can use the global store, and as a result, we can remove data from&nbsp;<code class="literal">App.vue</code>. Also, we do not need to bind data to the components anymore:</p>
<pre className="programlisting"><code>{`//App.vue 
&lt;template&gt; 
  &lt;div&gt; 
    &lt;show-greetings-component&gt;&lt;/show-greetings-component&gt; 
    &lt;change-greetings-component&gt;&lt;/change-greetings-component&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
import ShowGreetingsComponent from './components/ShowGreetingsComponent.vue' 
import ChangeGreetingsComponent from './components/ChangeGreetingsComponent.vue' 
<span class="strong"><strong>import store from './vuex/store'</strong></span> 
 
export default { 
  components: {ShowGreetingsComponent, ChangeGreetingsComponent}, 
  <span class="strong"><strong>store</strong></span> 
} 
&lt;/script&gt;    
`}</code></pre>



<p>Now let's go back to our components and reuse the data from the store. In order to be able to reuse reactive data from the store's state, we should use computed properties. Vue is so smart that it will do all the work for us to reactively update these properties whenever the state changes. And no, we do not need to import the store inside the components. We have access to it just by using the <code class="literal">this.$store</code> variable. So, our <code class="literal">ShowGreetingsComponent</code> will look like the following:</p>
<pre className="programlisting"><code>{`//ShowGreetingsComponent.vue 
&lt;template&gt; 
  &lt;h1&gt;{{ msg }}&lt;/h1&gt; 
&lt;/template&gt; 
&lt;style&gt; 
&lt;/style&gt; 
&lt;script&gt; 
  export default { 
    <span class="strong"><strong>computed: { 
      msg () { 
        return this.$store.state.msg 
      } 
    }</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>


<p>Follow the same logic to reuse the store's <code class="literal">msg</code> in the <code class="literal">ChangeGreetingsComponent</code>. Now we just have to dispatch the mutation on each <code class="literal">keyup</code> event. For this to happen, we just need to create a method that will commit the corresponding store's mutation and that we will call from the input's <code class="literal">keyup</code> listener:</p>
<pre className="programlisting"><code>{`//ChangeGreetingsComponent.vue 
&lt;template&gt; 
  &lt;input v-model='msg' <span class="strong"><strong>@keyup='changeMsg'</strong></span>&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  export default { 
    computed: { 
      msg() { 
        return this.$store.state.msg 
      } 
    }, 
    <span class="strong"><strong>methods: { 
      changeMsg(ev) { 
        this.$store.commit('changeMessage', ev.target.value) 
      } 
    }</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>



<p>Open the page. Try to change the title. Et voil&agrave;! It works!</p><p>
</p><div class="mediaobject"><img src="../Images/image00287.jpeg" alt="Greetings with store"/></div>



<p>Using the Vuex store to call the mutations and change the store's state propagating it through the components</p><p>We don't need to bind the <code class="literal">v-model</code>&nbsp;directive anymore because all the changes happen due to the calling store's mutation method. Thus, the <code class="literal">msg</code> property can be bound as the value's attribute to the input box:</p>
<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;input <span class="strong"><strong>:value='msg'</strong></span> @keyup='changeMsg'&gt; 
&lt;/template&gt; 
`}</code></pre>


<p>Check the code for this section in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/simple-store">chapter5/simple-store</a> folder. In this example, we have used a very simplified version of the store. However, complex <span class="strong"><strong>Single-Page Applications</strong></span> (<span class="strong"><strong>SPAs</strong></span>) require a more complex and modular structure. We can and should extract the store's getters and actions that dispatch mutations to separated files. We can also group these files according to the corresponding data's responsibilities. In the next sections, we will see how we can achieve such a modular structure by using getters and actions.</p><div class="section" title="Store state and getters"><div class="titlepage"><div><div><h2 class="title"><a id="ch05lvl2sec57"></a>Store state and getters</h2></div></div></div><p>It is, of course, good that we can reuse the <code>{`this.$store.state`}</code> keyword inside the components. But imagine the following scenarios:</p><div class="itemizedlist"><ul class="itemizedlist"><li class="listitem">In a large-scale app where different components access the state of the store using <code>{`$this.store.state.somevalue`}</code>, we decide to change the name of <code class="literal">somevalue</code>. This means that we have to change the name of the variable inside each and every component that uses it!</li><li class="listitem">We want to use a <span class="emphasis"><em>computed</em></span> value of state. For example, let's say we want to have a counter. Its initial state is "0". Each time we use it, we want to increment it. This means that each component has to contain a function that reuses the store's value and increments it, which means having repeated code in each component, which is not good at all!</li></ul></div><p>Sorry for the not-so-good scenarios, guys! Fortunately, there is a nice way not to fall into any of them. Imagine the centralized getter that accesses the store's state and provides a getter function to each of the state's items. If needed, this getter can apply some computation to the state's item. And if we need to change the name of some of the attributes, we only change it in one place, in this getter. It's rather a good practice or a convention than an architectural mandatory system, but I strongly recommend to use it even if you have only a couple of state items.</p><p>Let's create such a getter for our simple greetings application. Just create a <code class="literal">getters.js</code> file inside the <code class="literal">vuex</code> folder and export a <code class="literal">getMessage</code> function that will return <code class="literal">state.msg</code>:</p>
<pre className="programlisting"><code>{`//getters.js 
export default { 
  <span class="strong"><strong>getMessage(state) { 
    return state.msg 
  }</strong></span> 
} 
`}</code></pre>


<p>Then it should be imported by the store and exported in the new <code class="literal">Vuex</code> object, so the store knows what its getters are:</p>
<pre className="programlisting"><code>{`//store.js 
import Vue from 'vue' 
import Vuex from 'vuex' 
<span class="strong"><strong>import getters from './getters'</strong></span> 
 
Vue.use(Vuex) 
 
const state = { 
  msg: 'Hello Vue!' 
} 
 
const mutations = { 
  changeMessage(state, msg) { 
    state.msg = msg 
  } 
} 
 
export default new Vuex.Store({ 
  state, mutations, <span class="strong"><strong>getters</strong></span> 
}) 
`}</code></pre>


<p>And then, in our components, we use getters instead of directly accessing the store's state. Just replace your <code class="literal">computed</code> property in both the components with the following:</p>
<pre className="programlisting"><code>{`computed: { 
  msg () { 
    return <span class="strong"><strong>this.$store.getters.getMessage</strong></span> 
  } 
}, 
`}</code></pre>


<p>Open the page; everything works like a charm!</p><p>Still the <code>{`this.$store.getters`}</code> notation contains so many letters to write. We, programmers are lazy, right? Vue is nice enough to provide us with an easy way to support our laziness. It provides a <code class="literal">mapGetters</code> helper that does exactly as its name suggests&mdash;provides all the store's getters to our components. Just import it and use it in your <code class="literal">computed</code> properties as follows:</p>

<pre className="programlisting"><code>{`//ShowGreetingsComponent.vue 
&lt;template&gt; 
  &lt;h1&gt;<span class="strong"><strong>{{ getMessage }}</strong></span>&lt;/h1&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  <span class="strong"><strong>import { mapGetters } from 'vuex'</strong></span> 
 
  export default { 
    <span class="strong"><strong>computed: mapGetters(['getMessage'])</strong></span> 
  } 
&lt;/script&gt; 
 
//ChangeGreetingsComponent.vue 
&lt;template&gt; 
  &lt;input :value='<span class="strong"><strong>getMessage</strong></span>' @keyup='changeMsg'&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  <span class="strong"><strong>import { mapGetters } from 'vuex'</strong></span> 
 
  export default { 
    <span class="strong"><strong>computed: mapGetters(['getMessage'])</strong></span>, 
    methods: { 
      changeMsg(ev) { 
        this.$store.commit('changeMessage', ev.target.value) 
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>


<p>Note that we've changed the property used inside the template to have the same name as the getter's method name. However, it is also possible to map the corresponding getter method's name to the property name that we want to use in our component:</p>
<pre className="programlisting"><code>{`//ShowGreetingsComponent.vue 
&lt;template&gt; 
  &lt;h1&gt;<span class="strong"><strong>{{ msg }}</strong></span>&lt;/h1&gt; 
&lt;/template&gt; 
&lt;style&gt; 
&lt;/style&gt; 
&lt;script&gt; 
  <span class="strong"><strong>import { mapGetters } from 'vuex'</strong></span> 
 
  export default { 
    <span class="strong"><strong>computed: mapGetters({ 
      msg: 'getMessage' 
    })</strong></span> 
  } 
&lt;/script&gt; 
 
//ChangeGreetingsComponent.vue 
&lt;template&gt; 
  &lt;input :value='<span class="strong"><strong>msg</strong></span>' @keyup='changeMsg'&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  <span class="strong"><strong>import { mapGetters } from 'vuex'</strong></span> 
 
  export default { 
    <span class="strong"><strong>computed: mapGetters({ 
      msg: 'getMessage' 
    })</strong></span>, 
    methods: { 
      changeMsg(ev) { 
        this.$store.commit('changeMessage', ev.target.value) 
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>


<p>So, we were able to extract the getter for the <code class="literal">msg</code> property to the centralized store's getters file.</p><p>Now, if you decide to add some computation to the <code class="literal">msg</code> property, you only need to do it in one place. Just in one place!</p><p>
</p><div class="mediaobject"><img src="../Images/image00288.jpeg" alt="Store state and getters"/></div><p>
</p><p>Rick was always changing the code in all the components and just discovered that it is possible to only change it in one place</p><p>For example, if we want to reuse the uppercased message in all the components, we can apply the <code class="literal">uppercase</code> function inside the getter as follows:</p>
<pre className="programlisting"><code>{`//getters.js 
export default { 
  getMessage(state) { 
    <span class="strong"><strong>return (state.msg).toUpperCase()</strong></span> 
  } 
} 
`}</code></pre>


<p>From now on, each component that uses the getter to retrieve the state will have an uppercased message:</p><p>
</p><div class="mediaobject"><img src="../Images/image00289.jpeg" alt="Store state and getters"/></div><p>
</p><p>The ShowTitleComponent uppercased message. The toUpperCase function is applied inside the getters</p><p>Note also how smoothly the message is being changed to uppercase inside the input box while you're typing in it! Check the final code for this section inside the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/simple-store2">chapter5/simple-store2</a> folder.</p><p>If we decide to change the name of the state's attribute, we will only change it inside the getters function. For example, if we want to change the name of <code class="literal">msg</code> to <code class="literal">message</code>, we will do it inside our store:</p>
<pre className="programlisting"><code>{`const state = { 
  <span class="strong"><strong>message</strong></span>: 'Hello Vue!' 
} 
 
const mutations = { 
  changeMessage(state, msg) { 
    state.<span class="strong"><strong>message</strong></span> = msg 
  } 
} 
`}</code></pre>


<p>And then, we will also change it inside the corresponding getter<span class="emphasis"><em> function</em></span>:</p>
<pre className="programlisting"><code>{`export default { 
  getMessage(state) { 
    return (<span class="strong"><strong>state.message</strong></span>).toUpperCase() 
  } 
} 
`}</code></pre>


<p>That's it! The rest of the application is left completely untouched. This is the power of such architecture. In some very complex applications, we can have more than one getters files that export state for different kind of the application's properties. <span class="strong"><strong>Modularity</strong></span> is a power that drives the maintainability; use it!</p></div><div class="section" title="Mutations"><div class="titlepage"><div><div><h2 class="title"><a id="ch05lvl2sec58"></a>Mutations</h2></div></div></div><p>From the previous example, it should be clear that mutations are no more than simple event handler functions that are defined by <span class="strong"><strong>name</strong></span>. Mutation handler functions receive a <code class="literal">state</code> as a first argument. Other arguments can be used to pass different parameters to the handler function:</p>
<pre className="programlisting"><code>{`const mutations = { 
  <span class="strong"><strong>changeMessage</strong></span>(state, msg) { 
    state.message = msg 
  }, 
  <span class="strong"><strong>incrementCounter</strong></span>(state) { 
    state.counter ++; 
  } 
} 
`}</code></pre>


<p>A particularity of mutations is that they cannot be called directly. To be able to dispatch a mutation, we should call a method called <code class="literal">commit</code> with a name of the corresponding mutation and parameters:</p>
<pre className="programlisting"><code>{`store.commit('changeMessage', 'newMessage') 
store.commit('incrementCounter') 
</pre><div class="note" title="Note"><h3 class="title"><a id="tip37"></a>Tip</h3><p>Prior to Vue 2.0, a method to dispatch mutation was called "dispatch". So you would call it as follows:
<code class="literal">store.dispatch('changeMessage', 'newMessage')</code>
</p></div><p>You can create as many mutations as you wish. They can perform different operations on same-state items. You can go even further and declare mutation names as constants in a separated file. In this way, you can easily import them and use them instead of strings. So, for our example, we would create a file inside the <code class="literal">vuex</code> directory and call it <code class="literal">mutation_types.js</code>, and export all the constant names there:</p><pre class="programlisting">//mutation_types.js 
export const INCREMENT_COUNTER = '<span class="strong"><strong>INCREMENT_COUNTER</strong></span>' 
export const CHANGE_MSG = '<span class="strong"><strong>CHANGE_MSG</strong></span>' 
`}</code></pre>


<p>Then, in our store, we will import these constants and reuse them:</p>
<pre className="programlisting"><code>{`//store.js 
&lt;...&gt; 
<span class="strong"><strong>import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'</strong></span> 
   &lt;...&gt;     
const mutations = { 
  <span class="strong"><strong>[CHANGE_MSG]</strong></span>(state, msg) { 
    state.message = msg 
  }, 
  <span class="strong"><strong>[INCREMENT_COUNTER]</strong></span>(state) { 
    state.counter ++ 
  } 
} 
`}</code></pre>


<p>Inside the components that dispatch mutations, we will import the corresponding mutation type and dispatch it using the variable name:</p>
<pre className="programlisting"><code>{`this.$store.commit(<span class="strong"><strong>CHANGE_MSG</strong></span>, ev.target.value) 
`}</code></pre>


<p>This kind of structure makes a lot of sense in big applications. Again, you can group your mutation types according to the functionality they provide to the application and import only those mutations in the components that are needed for the specific component. This is, again, about best practices, modularity, and maintainability.</p></div><div class="section" title="Actions"><div class="titlepage"><div><div><h2 class="title"><a id="ch05lvl2sec59"></a>Actions</h2></div></div></div><p>When we dispatch a mutation, we basically perform an action. Saying that we <span class="emphasis"><em>commit</em></span> a <code>{`CHANGE_MSG`}</code> mutation is the same as saying that we <span class="emphasis"><em>perform an action</em></span> of changing the message. For the sake of beauty and total extraction, like we extract the store state's items into getters and mutations names constants to the <code class="literal">mutation_types</code> we can also extract the mutations to the actions.</p><div class="note" title="Note"><h3 class="title"><a id="note38"></a>Note</h3><p>Thus, action is no more than just a function that dispatches a mutation!</p>

<p>
<code>{`function changeMessage(msg) { store.commit(CHANGE_MSG, msg) }`}</code>
</p>

</div><p>Let's create a simple <code class="literal">actions</code> file for our change, message example. But before that, let's create one more item for the store's initial state, <code class="literal">counter</code>, and initialize it with a "0" value. So, our store will look like the following:</p>
<pre className="programlisting"><code>{`
<span class="strong"><strong>//store.js</strong></span> 
import Vue from 'vue' 
import Vuex from 'vuex' 
import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types' 
 
Vue.use(Vuex) 
 
const state = { 
  message: 'Hello Vue!', 
  <span class="strong"><strong>counter: 0</strong></span> 
} 
 
const mutations = { 
  [CHANGE_MSG](state, msg) { 
    state.message = msg 
  }, 
  <span class="strong"><strong>[INCREMENT_COUNTER](state) { 
    state.counter ++; 
  }</strong></span> 
} 
 
export default new Vuex.Store({ 
  state, 
  mutations 
}) 
`}</code></pre>

<p>Let's also add a counter getter to the getters file, so our <code class="literal">getters.js</code>&nbsp;file looks like the following:</p>
<pre className="programlisting"><code>{`
<span class="strong"><strong>//getters.js</strong></span> 
export default { 
  getMessage(state) { 
    return (state.message).toUpperCase() 
  }, 
  <span class="strong"><strong>getCounter(state)</strong></span>
<span class="strong"><strong>{</strong></span>
<span class="strong"><strong>return (state.counter) 
  }</strong></span> 
} 
`}</code></pre>


<p>And, finally, let's use the counter's getter inside <code class="literal">ShowGreetingsComponent</code> to show the amount of times the message <code class="literal">msg</code> was changed:</p>
<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div&gt; 
    &lt;h1&gt;{{ msg }}&lt;/h1&gt; 
    <span class="strong"><strong>&lt;div&gt;the message was changed {{ counter }} times&lt;/div&gt;</strong></span> 
  &lt;/div&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  import { mapGetters } from 'vuex' 
 
  export default { 
    computed: mapGetters({ 
      msg: 'getMessage', 
      <span class="strong"><strong>counter: 'getCounter'</strong></span> 
    }) 
  } 
&lt;/script&gt; 
`}</code></pre>


<p>Let's now create actions for both the mutations, for the counter and for the change message. Inside a <code class="literal">vuex</code> folder, create an <code class="literal">actions.js</code> file and export the <code class="literal">actions</code> functions:</p>
<pre className="programlisting"><code>{`
<span class="strong"><strong>//actions.js</strong></span> 
import { CHANGE_MSG, INCREMENT_COUNTER } from './mutation_types'

export const changeMessage = (store, msg) =&gt; { 
 store.commit(CHANGE_MSG, msg)
}
export const incrementCounter = (store) =&gt; { 
 store.commit(INCREMENT_COUNTER)
}
`}</code></pre>


<p>We can and should use ES2015 arguments destructuring and make our code more elegant. Let's also export all the actions in a single <code class="literal">export default</code> statement:</p>
<pre className="programlisting"><code>{`
<span class="strong"><strong>//actions.js</strong></span> 
import <span class="strong"><strong>{ CHANGE_MSG, INCREMENT_COUNTER }</strong></span> from './mutation_types' 
 
export default { 
  changeMessage (<span class="strong"><strong>{ commit }</strong></span>, msg) { 
    <span class="strong"><strong>commit(CHANGE_MSG, msg)</strong></span> 
  }, 
  incrementCounter (<span class="strong"><strong>{ commit }</strong></span>) { 
    <span class="strong"><strong>commit(INCREMENT_COUNTER)</strong></span> 
  } 
} 
`}</code></pre>


<p>Okay, now we have nice and beautiful actions. Let's use them in our <code class="literal">ChangeGreetingsComponent</code>! To be able to use actions inside components, we should first import them to our store and then export in the new <code class="literal">Vuex</code> object. Then actions can be dispatched using the <code class="literal">this.$store.dispatch</code> method inside the components:</p>
<pre className="programlisting"><code>{`// ChangeGreetingsComponent.vue 
&lt;template&gt; 
  &lt;input :value="msg" @keyup="changeMsg"&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  import { mapGetters } from 'vuex' 
 
  export default { 
    computed: mapGetters({ 
      msg: 'getMessage' 
    }), 
    methods: { 
      changeMsg(ev) { 
        <span class="strong"><strong>this.$store.dispatch('changeMessage', ev.target.value)</strong></span> 
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>


<p>So what's actually the difference? We continue to write <code class="literal">this.$store</code> code, the only difference is that instead of calling the <code class="literal">commit</code> method we call <code class="literal">dispatch</code>. Do you remember how we discovered <code class="literal">mapGetters</code> helper? Wasn't it nice? Actually Vue also provides a&nbsp;<code class="literal">mapActions</code> helper that allows us to avoid writing the extensive <code class="literal">this.$store.dispatch</code> something method. Just import <code class="literal">mapActions</code> in the same way as we import <code class="literal">mapGetters</code> and use it inside the component's methods property:</p>
<pre className="programlisting"><code>{`//ChangeGreetingsComponent.vue 
&lt;template&gt; 
  &lt;input :value="msg" @keyup="<span class="strong"><strong>changeMessage</strong></span>"&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  import { mapGetters } from 'vuex' 
  <span class="strong"><strong>import { mapActions } from 'vuex'</strong></span> 
 
  export default { 
    computed: mapGetters({ 
      msg: 'getMessage' 
    }), 
    methods:  mapActions([<span class="strong"><strong>'changeMessage'</strong></span>, <span class="strong"><strong>'incrementCounter'</strong></span>]) 
  } 
&lt;/script&gt; 
`}</code></pre>


<p>Note that we changed the handler's function for the <code class="literal">keyup</code> event, so we don't have to map the events' names to the corresponding actions. However, just like in the case of <code class="literal">mapGetters</code>, we can also map custom events' names to the corresponding actions names.</p><p>We should also change the <code class="literal">changeMessage</code> invocation because we don't extract any event's target value inside the actions now; thus, we should do it inside the invocation:</p>
<pre className="programlisting"><code>{`//ChangeGreetingsComponent.vue 
&lt;template&gt; 
  &lt;input :value="msg" <span class="strong"><strong>@keyup="changeMessage($event.target.value)"</strong></span>&gt; 
&lt;/template&gt;  
`}</code></pre>

<p>Finally, let's bind the <code class="literal">incrementCounter</code> action to the user's input. Let's, for example, call this action from our input template on the <code class="literal">keyup.enter</code> event:</p>
<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;input :value="msg" @keyup="changeMessage" 
  <span class="strong"><strong>@keyup.enter="incrementCounter"</strong></span>&gt; 
&lt;/template&gt; 
`}</code></pre>


<p>If you open the page, and try to change the title and hit the <span class="emphasis"><em>Enter</em></span> button, you will see that the counter will be incremented each time you hit <span class="emphasis"><em>Enter:</em></span>
</p><p>
</p><div class="mediaobject"><img src="../Images/image00290.jpeg" alt="Actions"/></div><p>
</p><p>Using actions to increment the counter on the page</p><p>So, you see how easy it is to modularize our application by using actions instead of directly accessing the store. You export actions in your Vuex store, import the <code class="literal">mapActions</code> in the components, and call them from the event handler directives in the templates.</p><p>Do you remember our "human" example in which we were comparing the parts of the human body to the components and the human brain to the store of the application state? Imagine that you are running. It is only <span class="emphasis"><em>one</em></span> action but how many changes are being dispatched and how many components are being affected by those changes? When you run, your heart rate increases, you sweat, your arms move, and your face smiles because you realize how nice it is to run! When you eat, you also smile because it is good to eat. You also smile when you see a kitten. So, different actions can dispatch more than one change, and the same change can be dispatched by more than one action.</p><p>The same happens with our Vuex store, and its mutations and actions. Within the same action, more than one mutation can be dispatched. For instance, we could dispatch our mutation for changing a message and increasing the counter within the same action. Let's create this action inside our <code class="literal">action.js</code> file. Let's call it <code class="literal">handleMessageInputChanges</code> and make it receive one argument: <code class="literal">event</code>. It will dispatch the <code class="literal">CHANGE_MSG</code> mutation with&nbsp;<code class="literal">event.target.value</code>, and in case <code class="literal">event.keyCode</code> is <code class="literal">enter</code>, it will dispatch the <code class="literal">INCREMENT_COUNTER</code> mutation:</p>
<pre className="programlisting"><code>{`>//actions.js 
handleMessageInputChanges ({ commit }, event) { 
  <span class="strong"><strong>commit(CHANGE_MSG, event.target.value)</strong></span> 
  if (event.keyCode === 13) { 
    <span class="strong"><strong>commit(INCREMENT_COUNTER)</strong></span> 
  } 
} 
`}</code></pre>

<p>Now let's import this action inside our <code class="literal">ChangeGreetingsComponent</code>&nbsp;component's <code class="literal">mapActions</code>&nbsp;object and let's use it calling it with the <code>{`$event`}</code> parameter:</p>
<pre className="programlisting"><code>{`//ChangeGreetingsComponent.vue 
&lt;template&gt; 
  &lt;input :value="msg" <span class="strong"><strong>@keyup="handleMessageInputChanges($event)"</strong></span> /&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  import { mapGetters, mapActions } from 'vuex' 
 
  export default { 
    computed: mapGetters({ 
      msg: 'getMessage' 
    }), 
    <span class="strong"><strong>methods:  mapActions(['handleMessageInputChanges'])</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>

<p>Open the page, and try to change the greetings message and increment the counter by hitting the <span class="emphasis"><em>Enter</em></span> button. It works!</p><p>The final code for the simple-store example can be found in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/simple-store3">chapter5/simple-store3</a> folder.</p></div>

</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Installing and using the Vuex store in our applications</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Installing and using the Vuex store in our applications" id="aid-1MBG21"><div className="titlepage"><div><div><h1 className="title"><a id="ch05lvl1sec48"></a>Installing and using the Vuex store in our applications</h1></div></div></div>



<p className="it">Ahora que sabemos lo que es Vuex, cómo crear una tienda, las mutaciones de despacho, y cómo utilizar captadores y acciones, podemos instalar la tienda en nuestras aplicaciones y utilizarlo para finalizar su flujo de datos y la cadena de comunicación.</p>

<p className="p">Now that we know what Vuex is, how to create a store, dispatch mutations, and how to use getters and actions, we can install the store in our applications and use it to finalize their data flow and communication chain.</p>



<p className="it">Podes encontrar las aplicaciones para trabajar en las siguientes carpetas:</p>

<p className="p">You can find the applications to work on in the following folders:</p><div class="itemizedlist"><ul className="itemizedlist">


<li className="listitem"><span class="strong"><strong>Pomodoro</strong></span>: <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/pomodoro">chapter5/pomodoro</a></li>


<li className="listitem"><span class="strong"><strong>Shopping list</strong></span>: <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/shopping-list2">chapter5/shopping-list2</a></li>


</ul></div>



<p className="it">No se olvide de funcionar <code className="literal">npm install</code> en ambas aplicaciones.</p>

<p className="p">Do not forget to run <code class="literal">npm install</code> on both applications.</p>



<p className="it">Lo primero es instalar <code className="literal">vuex</code> y definir el directorio necesario y estructura de archivos en ambas aplicaciones.</p>

<p className="p">Start by installing <code class="literal">vuex</code> and define the necessary directory and file structure in both applications.</p>



<p className="it">Para instalar <code className="literal">vuex</code>, basta con ejecutar el siguiente:</p>

<p className="p">To install <code class="literal">vuex</code>, just run the following:</p>


<pre className="programlisting"><code>{`
<span class="strong"><strong>npm install vuex --save 
</strong></span>
`}</code></pre>


<p className="it">Después de la instalación <code className="literal">vuex</code>, cree una subcarpeta <code className="literal">vuex</code> en cada una de las aplicaciones de la <code className="literal">src</code> carpetas. En esta carpeta, crear cuatro archivos: <code className="literal">store.js</code>, <code className="literal">mutation_types.js</code>, <code className="literal">actions.js</code>, y <code className="literal">getters.js</code>.</p>

<p className="p">After installing <code class="literal">vuex</code>, create a subfolder <code class="literal">vuex</code> in each of the application's <code class="literal">src</code> folders. In this folder, create four files: <code class="literal">store.js</code>, <code class="literal">mutation_types.js</code>, <code class="literal">actions.js</code>, and <code class="literal">getters.js</code>.</p>



<p className="it">Preparar la <code className="literal">store.js</code> estructura:</p>

<p className="p">Prepare the <code class="literal">store.js</code> structure:</p>


<pre className="programlisting"><code>{`
//store.js 
import Vue from 'vue' 
import Vuex from 'vuex' 
import getters from './getters' 
import actions from './actions' 
import mutations from './mutations' 
 
Vue.use(Vuex) 
 
const state = { 
} 
 
export default new Vuex.Store({ 
  state,  
  mutations,  
  getters,  
  actions 
}) 
 
`}</code></pre>

<p className="it">La importación y el uso de la tienda en el principal <code className="literal">App.vue</code>:</p>

<p className="p">Import and use the store in the main <code class="literal">App.vue</code>:</p>

<pre className="programlisting"><code>{`
//App.vue 
&lt;script&gt; 
  &lt;...&gt; 
  import store from './vuex/store' 
 
  export default { 
    store, 
    &lt;...&gt; 
  } 
&lt;/script&gt; 
`}</code></pre>


<p className="it">Ahora vamos a definir qué es lo global y que es el estado local en cada una de las aplicaciones, definir qué datos y la unión están desaparecidos, dividen los datos, y añadimos todo el material que falta utilizando lo que hemos aprendido.</p>

<p className="p">We will now define which is the global and which is the local state in each of the applications, define what data and binding are missing, divide the data, and add all the missing stuff using what we've just learned.</p></div>


</div></div>
<div className='col-md-3'></div>


<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Using the Vuex store in the shopping list application</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Using the Vuex store in the shopping list application"><div class="titlepage" id="aid-1NA0K2"><div><div><h1 className="title"><a id="ch05lvl1sec49"></a>Using the Vuex store in the shopping list application</h1></div></div></div>


<p className="it">Espero que todavía recuerda el reto al que nos enfrentábamos al principio de este capítulo. Nos gustaría establecer la comunicación entre los componentes de tal manera que sería fácil cambiar el título de las listas de la compra de la <code className="literal">ChangeTitleComponent</code> y propagarla a ambos <code className="literal">ShoppingListTitle</code> y <code className="literal">ShoppingListComponent</code>. Vamos a quitar la array codificada de listas de compras desde <code className="literal">App.vue</code> y copiarlo en el estado de la tienda:</p>
<p className="p">I hope you still remember the challenge we were facing at the beginning of this chapter. We would like to establish communication between the components in such a way that it would be easy to change the title of the shopping lists from the <code class="literal">ChangeTitleComponent</code> and propagate it to both <code class="literal">ShoppingListTitle</code> and <code class="literal">ShoppingListComponent</code>. Let's remove the hardcoded array of shopping lists from <code class="literal">App.vue</code> and copy it to the store's state:</p>


<pre className="programlisting"><code>{`//store.js 
&lt;...&gt; 
const state = { 
  <span class="strong"><strong>shoppinglists</strong></span>: [ 
    { 
      id: 'groceries', 
      title: 'Groceries', 
      items: [{ text: 'Bananas', checked: true }, 
              { text: 'Apples', checked: false }] 
    }, 
    { 
      id: 'clothes', 
      title: 'Clothes', 
      items: [{ text: 'black dress', checked: false }, 
              { text: 'all-stars', checked: false }] 
    } 
  ] 
} 
 
&lt;...&gt; 
`}</code></pre>


<p className="it">Vamos a definir captadores para las listas de la compra:</p>
<p className="p">Let's define getters for the shopping lists:</p>

<pre className="programlisting"><code>{`//getters.js 
export default { 
  getLists: state =&gt; state.shoppinglists 
} 
`}</code></pre>


<p className="it">Ahora, la importación <code className="literal">mapGetters</code> en <code className="literal">App.vue</code> y asignar el <code className="literal">shoppinglists</code>valor al <code className="literal">getLists</code> método de modo que la <code className="literal">&lt;script&gt;</code> etiqueta en el interior del <code className="literal">App.vue</code> componente se verá como la siguiente:</p>
<p className="p">Now, import <code class="literal">mapGetters</code> in <code class="literal">App.vue</code> and map the <code class="literal">shoppinglists</code> value to the <code class="literal">getLists</code> method so that the <code class="literal">&lt;script&gt;</code> tag inside the <code class="literal">App.vue</code> component will look like the following:</p>


<pre className="programlisting"><code>{`//App.vue 
&lt;script&gt; 
  import ShoppingListComponent from './components/ShoppingListComponent' 
  import ShoppingListTitleComponent from  
  './components/ShoppingListTitleComponent' 
  import _ from 'underscore' 
  <span class="strong"><strong>import store from './vuex/store' 
  import { mapGetters } from 'vuex'</strong></span> 
 
  export default { 
    components: { 
      ShoppingListComponent, 
      ShoppingListTitleComponent 
    }, 
    <span class="strong"><strong>computed: mapGetters({ 
      shoppinglists: 'getLists' 
    }),</strong></span> 
    methods: { 
      onChangeTitle (id, text) { 
        _.findWhere(this.shoppinglists, { id: id }).title = text 
      } 
    }, 
    store 
  } 
&lt;/script&gt; 
`}</code></pre>


<p className="it">El resto se deja sin tocar!</p>
<p className="p">The rest is left untouched!</p>

<p className="it">Ahora vamos a definir una mutación dentro de nuestra tienda que será responsable de cambiar el título. Está claro que debe ser una función que recibe una nueva cadena del título como un parámetro. Sin embargo, hay una cierta dificultad. No sabemos cuál de las listas de la compra del título debe ser cambiado. Si pudiéramos pasar Identificación de una lista de un componente para esta función, que podríamos escribir una pieza de código que encontrar una lista correcta por su ID. Qué acabo de decir <span className="emphasis"><em>si pudiera</em></span> ? ¡Por supuesto que podemos! En realidad, nuestra <code className="literal">ShoppingListComponent</code> ya recibe el ID de su array <code className="literal">App.vue</code>. Vamos a pasar este ID de <code className="literal">ShoppingListComponent</code> a <code className="literal">ChangeTitleComponent</code>. De esta manera, seremos capaces de invocar la acción necesaria del componente en el que en realidad se cambia el título, sin tener que propagar el evento a través de la cadena de los padres.</p>


<p className="p">Now let's define a mutation inside our store that will be responsible for changing the title. It is clear that it should be a function that receives a new title string as a parameter. However, there is some difficulty. We don't know which of the shopping lists title should be changed. If we could pass a list's ID from a component to this function, we could actually write a piece of code that would find a correct list by its ID. Did I just say <span class="emphasis"><em>if we could</em></span>? Of course, we can! Actually, our <code class="literal">ShoppingListComponent</code> already receives the ID from its parent <code class="literal">App.vue</code>. Let's just pass this ID from <code class="literal">ShoppingListComponent</code> to <code class="literal">ChangeTitleComponent</code>. In this way, we will be able to invoke the necessary action from the component where the title is actually changed, without having to propagate the event through the parents' chain.</p>

<p className="it">Por lo tanto, simplemente obligar a la identificación al <code className="literal">change-title-component</code> interior de la <code className="literal">ShoppingListComponent</code> plantilla del componente, de la siguiente manera:</p>
<p className="p">So, just bind the ID to the <code class="literal">change-title-component</code> inside the <code class="literal">ShoppingListComponent</code> component's template, as follows:</p>

<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;template&gt; 
  &lt;...&gt; 
      &lt;change-title-component : <span class="strong"><strong>:id="id"</strong></span> v- 
        on:changeTitle="onChangeTitle"&gt;&lt;/change-title-component&gt; 
  &lt;...&gt; 
&lt;/template&gt; 
`}</code></pre>

<p className="it">No se olvide de añadí el <code className="literal">id</code> atributo a la <code className="literal">ChangeTitleComponent</code> del componente <code className="literal">props</code> de atributos:</p>
<p className="p">Do not forget to add the <code class="literal">id</code> attribute to the <code class="literal">ChangeTitleComponent</code> component's <code class="literal">props</code> attribute:</p>


<pre className="programlisting"><code>{`//ChangeTitleComponent.vue 
&lt;script&gt; 
  export default { 
    props: ['title', <span class="strong"><strong>'id'</strong></span>], 
    &lt;...&gt; 
  } 
&lt;/script&gt; 
`}</code></pre>

<p className="it">Bien, ahora nuestra <code className="literal">ChangeTitleComponent</code> tiene acceso a ambos <code className="literal">title</code> y <code className="literal">id</code> de la lista de la compra. Vamos a añadí la mutación correspondiente a la tienda.</p>
<p className="p">Okay, now our <code class="literal">ChangeTitleComponent</code> has access to both <code class="literal">title</code> and <code class="literal">id</code> of the shopping list. Let's add the corresponding mutation to the store.</p>

<p className="it">Podemos empezar por escribir una función que encuentra una lista de compras por su ID. Para ello, voy a utilizar el <code className="literal">underscore</code> de la clase <code className="literal">_.findWhere</code> método, tal como lo hicimos en el <code className="literal">App.vue</code> del componente <code className="literal">changeTitle</code> método.</p>

<p className="p">We can start by writing a function that finds a shopping list by its ID. For this, I will use the <code class="literal">underscore</code> class's <code class="literal">_.findWhere</code> method, just like we did in the <code class="literal">App.vue</code> component's <code class="literal">changeTitle</code> method.</p>

<p className="it">Importar <code className="literal">underscore</code> el interior <code className="literal">mutations.js</code> y añadí la <code className="literal">findById</code> función como sigue:</p>
<p className="p">Import <code class="literal">underscore</code> inside <code class="literal">mutations.js</code> and add the <code class="literal">findById</code> function as follows:</p>

<pre className="programlisting"><code>{`//mutations.js 
&lt;...&gt; 
function findById (state, id) { 
  return <span class="strong"><strong>_.findWhere(state.shoppinglists, { id: id })</strong></span> 
} 
&lt;...&gt; 
`}</code></pre>

<p className="it">Ahora vamos a añadí la mutación y vamos a llamarlo, por ejemplo, <code className="literal">CHANGE_TITLE</code>. Esta mutación recibirá el <code className="literal">data</code> objeto como un parámetro que contiene <code className="literal">title</code> y <code className="literal">id</code>, y asignar el valor del título recibido con el título del elemento de la lista de compras encontrado. En primer lugar, vamos a declarar una constante <code className="literal">CHANGE_TITLE</code> en <code className="literal">mutation_types.js</code> y volver a utilizarlo en lugar de escribir el nombre de la mutación como una cadena:</p>

<p className="p">Let's now add the mutation and let's call it, for example, <code class="literal">CHANGE_TITLE</code>. This mutation will receive the <code class="literal">data</code> object as a parameter containing <code class="literal">title</code> and <code class="literal">id</code>, and assign the value of the received title to the title of the found shopping list item. First of all, let's declare a constant <code class="literal">CHANGE_TITLE</code> in <code class="literal">mutation_types.js</code> and reuse it instead of writing the mutation's name as a string:</p>

<pre className="programlisting"><code>{`//mutation_types.js 
export const <span class="strong"><strong>CHANGE_TITLE</strong></span> = 'CHANGE_TITLE' 
 
//mutations.js 
import _ from 'underscore' 
<span class="strong"><strong>import * as types from './mutation_types'</strong></span> 
 
function findById (state, id) { 
  return _.findWhere(state.shoppinglists, { id: id }) 
} 
 
export default { 
  <span class="strong"><strong>[types.CHANGE_TITLE] (state, data) { 
    findById(state, data.id).title = data.title 
  }</strong></span> 
} 
`}</code></pre>

<p className="it">Ya casi hemos terminado. Ahora vamos a definir una <code className="literal">changeTitle</code> acción dentro del <code className="literal">actions.js</code> archivo y volver a utilizarlo en nuestro <code className="literal">ChangeTitleComponent</code>. Abra el <code className="literal">actions.js</code> archivo y agregue el código siguiente:</p>

<p className="p">We are almost finished. Let's now define a <code class="literal">changeTitle</code> action inside the <code class="literal">actions.js</code> file and reuse it in our <code class="literal">ChangeTitleComponent</code>. Open the <code class="literal">actions.js</code> file and add the following code:</p>


<pre className="programlisting"><code>{`//actions.js 
import { CHANGE_TITLE } from './mutation_types' 
 
export default { 
  changeTitle: ({ commit }, data) =&gt; { 
    <span class="strong"><strong>commit(CHANGE_TITLE, data)</strong></span> 
  } 
} 
`}</code></pre>
<p className="it">Y, el toque final. Abierta <code className="literal">ChangeTitleComponent.vue</code>, importe el <code className="literal">mapActions</code> ayudante, mapear el <code className="literal">onInput</code> método a la <code className="literal">changeTitle</code> acción, y lo llaman en el interior <code className="literal">template</code> con el título de mapeo objeto <code className="literal">event.target.value</code> y el ID del <code className="literal">id</code> parámetro. Por lo tanto, el código de <code className="literal">ChangeTitleComponent</code> se verá como la siguiente:</p>
<p className="p">And, the final touch. Open <code class="literal">ChangeTitleComponent.vue</code>, import the <code class="literal">mapActions</code> helper, map the <code class="literal">onInput</code> method to the <code class="literal">changeTitle</code> action, and call it inside <code class="literal">template</code> with the object mapping title to <code class="literal">event.target.value</code> and ID to the <code class="literal">id</code> parameter. So, the code of <code class="literal">ChangeTitleComponent</code> will look like the following:</p>

<pre className="programlisting"><code>{`//ChangeTitleComponent.vue 
&lt;template&gt; 
  &lt;div&gt; 
    &lt;em&gt;Change the title of your shopping list here&lt;/em&gt; 
    &lt;input :value="title" <span class="strong"><strong>@input="onInput({ title: $event.target.value, </strong></span>
<span class="strong"><strong>      id: id })"</strong></span>/&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
  <span class="strong"><strong>import { mapActions } from 'vuex'</strong></span> 
 
  export default { 
    props: ['title', 'id'], 
    <span class="strong"><strong>methods: mapActions({ 
      onInput: 'changeTitle' 
    })</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>

<p className="it">Ahora podes quitar todo el código de manejo de eventos de la <code className="literal">ShoppingListComponent</code> y el principal <code className="literal">App</code> componente.</p>
<p className="p">You can now remove all the events-handling code from the <code class="literal">ShoppingListComponent</code> and the main <code class="literal">App</code> component.</p>

<p className="it">Abra la página y tratar de escribir en el cuadro de entrada! El título cambiará en todos los lugares:</p>
<p className="p">Open the page and try to type in the input box! The title will change in all locations:</p>

<div class="mediaobject"><img src="/static/image00291.jpeg" width="100%" alt="Using the Vuex store in the shopping list application"/></div>

<p className="it">El uso de almacén, mutaciones, y actualizar acciones-todos los componentes de su estado sin la necesidad de los acontecimientos mecanismo de manipulación</p>

<p className="p">Using store, mutations, and actions&mdash;all components update their state without the need of events handling mechanism</p>

<p className="it">El código final para la aplicación de la lista de compras después de aplicar las funciones de la tienda se podes encontrar en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/shopping-list3">Capítulo 5 / compras-list3</a> carpeta.</p>
<p className="p">The final code for the shopping list application after applying the store's functions can be found in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/shopping-list3">chapter5/shopping-list3</a> folder.</p>

</div>


</div></div>
<div className='col-md-3'></div>



 <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Using Vuex store in the Pomodoro application</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Using Vuex store in the Pomodoro application"><div class="titlepage" id="aid-1O8H62"><div><div><h1 className="title"><a id="ch05lvl1sec50"></a>Using Vuex store in the Pomodoro application</h1></div></div></div>

<p className="it">Finalmente, regresamos a nuestro Pomodoro! ¿Cuándo fue la última vez que tomó un descanso de 5 minutos? Vamos a construir nuestra aplicación Pomodoro con la arquitectura Vuex y luego echar un vistazo al resto gatitos. Vamos a empezar con la base en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/pomodoro">Capítulo 5 / pomodoro</a> carpeta, en la que ya incluía la estructura básica de la tienda Vuex (si no, ir al inicio de la <span className="emphasis"><em> Instalación y uso de tienda de aplicaciones Vuex en nuestra </em></span> sección).</p>


<p className="p">Finally, we got back to our Pomodoro! When was the last time you took a 5-minute break? Let's build our Pomodoro application with the Vuex architecture and then take a rest look at kittens. Let's start with the base in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/pomodoro">chapter5/pomodoro</a> folder, where you already included the basic structure of the Vuex store (if not, go to the start of the <span class="emphasis"><em>
Installing and using Vuex store in our applications
</em></span> section).</p>


<div className="section" title="Bringing life to start, pause, and stop buttons"><div className="titlepage"><div><div><h2 class="title"><a id="ch05lvl2sec60"></a>Bringing life to start, pause, and stop buttons</h2></div></div></div>



<p className="it">Vamos a empezar por el análisis de lo que en realidad se podes hacer con nuestra temporizador Pomodoro. Mira la página. Tenemos sólo tres botones: iniciar, pausar y detener. Esto significa que nuestra aplicación podes estar en uno de estos tres estados. Vamos a definir y exportarlos en nuestro <code className="literal">store.js</code> archivo:</p>


<p className="p">Let's start by analyzing what can actually be done with our Pomodoro timer. Look at the page. We have only three buttons: start, pause, and stop. This means that our application can be in one of these three states. Let's define and export them in our <code class="literal">store.js</code> file:</p>




<pre className="programlisting"><code>{`//store.js 
&lt;...&gt; 
const state = { 
  <span class="strong"><strong>started</strong></span>: false, 
  <span class="strong"><strong>paused</strong></span>: false, 
  <span class="strong"><strong>stopped</strong></span>: false 
} 
&lt;...&gt; 
`}</code></pre>



<p className="it">Inicialmente, todos estos estados se fijan a <code className="literal">false</code>, lo cual tiene sentido ya que la aplicación no se ha iniciado, no se detuvo y, por supuesto, no se detiene!</p>


<p className="p">Initially, all these states are set to <code class="literal">false</code>, which makes sense because the application is not started, it's not paused and, of course, it is not stopped!</p>



<p className="it">Ahora vamos a definir captadores para estos estados. Abra el <code className="literal">getters.js</code> archivo y añadí las funciones getter para los tres estados:</p>


<p className="p">Let's now define getters for these states. Open the <code class="literal">getters.js</code> file and add the getter functions for all three states:</p>


<pre className="programlisting"><code>{`//getters.js 
export default { 
  <span class="strong"><strong>isStarted</strong></span>: state =&gt; state.started, 
  <span class="strong"><strong>isPaused</strong></span>: state =&gt; state.paused, 
  <span class="strong"><strong>isStopped</strong></span>: state =&gt; state.stopped 
} 
`}</code></pre>


<p className="it">Lo que debería ocurrir a nuestros botones de control para cada uno de los estados definidos:</p>


<p className="p">What should happen to our control buttons for each of the defined states:</p>



<div class="itemizedlist"><ul className="itemizedlist">



<li className="listit">El botón de arranque debería ser desactivado cuando se inicia la aplicación. Sin embargo, se debe activar de nuevo cuando la aplicación está en pausa para que podamos utilizar este botón para reanudar la aplicación.</li>

<li className="listitem">
The start button should become disabled when the application is started. However, it should be enabled again when the application is paused so that we can use this button to resume the application.</li>



<li className="listit">El botón de pausa sólo se podes activar cuando se inicia la aplicación (ya que no podemos hacer una pausa en algo que no se ha iniciado todavía). Sin embargo, debe ser desactivado si se ha detenido la aplicación (ya que no podemos hacer una pausa algo que ya está en pausa).</li>

<li className="listitem">
The pause button can only be enabled when the application is started (because we cannot pause something that has not been started yet). However, it should be disabled if the application is paused (because we cannot pause something that is already paused).</li>



<li className="listit">El botón de parada sólo se podes activar cuando se inicia la aplicación.</li>

<li className="listitem">
The stop button can only be enabled when the application is started.</li>



</ul></div>



<p className="it">Vamos a traducir esto en código mediante la adición de la <code className="literal">disabled</code> clase a nuestros botones de control condicional, dependiendo de los estados de aplicación.</p>


<p className="p">Let's translate this into code by adding the <code class="literal">disabled</code> class to our control buttons conditionally, depending on the application states.</p>



<div class="note" title="Note"><h3 class="title"><a id="tip39"></a>Tip</h3>


<p className="it">Una vez que se aplica la <code className="literal">disabled</code> clase, Bootstrap se hará cargo de la conducta de los botones para nosotros, no sólo por la aplicación de un estilo especial, pero también la desactivación de elementos interactivos.</p>


<p className="p">Once we apply the <code class="literal">disabled</code> class, Bootstrap will take care of the buttons' behavior for us by not only applying special styling but also deactivating interactive elements.</p>



</div>



<p className="it">Con el fin de poder utilizar los captadores ya definidos, nos debe importar <code className="literal">mapGetters</code> a la <code className="literal">&lt;script&gt;</code> etiqueta del componente. Después de eso, hay que decirle al componente que queremos utilizarlas mediante su exportación dentro de la <code className="literal">computed</code> propiedad objeto:</p>


<p className="p">In order to be able to use the already defined getters, we must import <code class="literal">mapGetters</code> into the <code class="literal">&lt;script&gt;</code> tag of the component. After that, we must tell the component that we want to use them by exporting them within the <code class="literal">computed</code> property object:</p>



<pre className="programlisting"><code>{`//ControlsComponent.vue 
&lt;script&gt; 
  <span class="strong"><strong>import { mapGetters } from 'vuex'</strong></span> 
 
  export default { 
    <span class="strong"><strong>computed: mapGetters(['isStarted', 'isPaused', 'isStopped'])</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="it">Ahora bien, estos captadores se pueden utilizar dentro de la plantilla. Por lo tanto, vamos a aplicar la <code className="literal">disabled</code> clase a la siguiente:</p>


<p className="p">Now these getters can be used inside the template. So, we will apply the <code class="literal">disabled</code> class to the following:</p>



<div class="itemizedlist"><ul className="itemizedlist">



<li className="listit">El botón de inicio cuando se inicia la aplicación y no en pausa (<code class="literal">isStarted &amp;&amp; !isPaused</code>)</li>

<li className="listitem">The start button when the application is started and not paused (<code class="literal">isStarted &amp;&amp; !isPaused</code>)</li>



<li className="listit">El botón de pausa cuando la aplicación no se inicia o pausa (<code class="literal">!isStarted || isPaused</code>)</li>

<li className="listitem">The pause button when the application is not started or paused (<code class="literal">!isStarted || isPaused</code>)</li>


<li className="listit">El botón de parada cuando no se arranca la aplicación (<code class="literal">!isStarted</code>)</li>

<li className="listitem">The stop button when the application is not started (<code class="literal">!isStarted</code>)</li>


</ul></div>


<p className="it">Nuestra plantilla de ahora se verá como la siguiente:</p>


<p className="p">Our template will now look like the following:</p>


<pre className="programlisting"><code>{`//ControlsComponent.vue 
&lt;template&gt; 
  &lt;span&gt; 
    &lt;button  <span class="strong"><strong>:disabled='isStarted &amp;&amp; !isPaused'</strong></span>&gt; 
      &lt;i class="glyphicon glyphicon-play"&gt;&lt;/i&gt; 
    &lt;/button&gt; 
    &lt;button  <span class="strong"><strong>:disabled='!isStarted || isPaused'</strong></span>&gt; 
      &lt;i class="glyphicon glyphicon-pause"&gt;&lt;/i&gt; 
    &lt;/button&gt; 
    &lt;button  <span class="strong"><strong>:disabled='!isStarted'</strong></span>&gt; 
      &lt;i class="glyphicon glyphicon-stop"&gt;&lt;/i&gt; 
    &lt;/button&gt; 
  &lt;/span&gt; 
&lt;/template&gt; 
`}</code></pre>


<p className="it">Usted ve ahora que la parada de los botones de pausa y se ven diferentes! Si pasa el ratón pasa el ratón por encima de ellos, el cursor no se cambia, lo que significa que realmente están desactivados! Vamos a crear un estilo de los iconos que se encuentran dentro de los botones con discapacidad para resaltar el estado deshabilitado aún más:</p>


<p className="p">You see now that the pause and stop buttons look different! If you mouse hover your mouse over them, the cursor is not changed, which means that they are really disabled! Let's just create a style for the icons that are inside the disabled buttons to highlight the disabled state even more:</p>


<pre className="programlisting"><code>{` //ControlsComponent.vue 
 &lt;style scoped&gt; 
  <span class="strong"><strong>button:disabled i { 
    color: gray; 
  }</strong></span> 
&lt;/style&gt; 
`}</code></pre>

<p className="it">Bien, ahora que tenemos botones hermosa con discapacidad, vamos a traer un poco de vida en ellos!</p>


<p className="p">Okay, now that we have beautiful disabled buttons, let's bring a bit of life into them!</p>



<p className="it">Vamos a pensar en lo que realmente debería suceder con los estados de aplicación cuando comenzamos, pausar o detener la aplicación:</p>


<p className="p">Let's think about what should actually happen to the application states when we start, pause, or stop the application:</p>



<div class="itemizedlist"><ul className="itemizedlist">



<li className="listit">Cuando empezamos la aplicación, el estado debe convertirse y ambos y estados debe convertirse a ciencia cierta .<code>started</code><code>true</code><code>paused</code><code>stopped</code><code>false</code></li>

<li className="listitem">When we start the application, the state <code class="literal">started</code> should become <code class="literal">true</code> and both <code class="literal">paused</code> and <code class="literal">stopped</code> states should for sure become <code class="literal">false</code>.</li>



<li className="listit">Cuando nos detenemos la aplicación, el estado es , el estado es , y el estado es debido a una aplicación detenido continúa a ser iniciado.<code>paused</code><code>true</code><code>stopped</code><code>false</code><code>started</code><code>true</code></li>

<li className="listitem">When we pause the application, the state <code class="literal">paused</code> is <code class="literal">true</code>, state <code class="literal">stopped</code> is <code class="literal">false</code>, and state <code class="literal">started</code> is <code class="literal">true</code> because a paused application continues to be started.</li>


<li className="listitem">Cuando nos detenemos la aplicación, el state <code class="literal">stopped</code> becomes <code class="literal">true</code> and both the <code class="literal">paused</code> and <code class="literal">started</code> states become <code class="literal">false</code>. Vamos a traducir todo este comportamiento en mutation_types, mutaciones y acciones!</li>


<li className="listitem">When we stop the application, the state <code class="literal">stopped</code> becomes <code class="literal">true</code> and both the <code class="literal">paused</code> and <code class="literal">started</code> states become <code class="literal">false</code>. Let's translate all this behavior into mutation_types, mutations, and actions!</li>



</ul></div>



<p className="it">Abrir <code className="literal">mutation_types.js</code> y añadí tres tipos de mutación de la siguiente manera:</p>


<p className="p">Open <code class="literal">mutation_types.js</code> and add three mutation types as follows:</p>


<pre className="programlisting"><code>{`//mutation_types.js 
export const START = 'START' 
export const PAUSE = 'PAUSE' 
export const STOP = 'STOP' 
`}</code></pre>



<p className="it">Ahora vamos a definir las mutaciones! Abra el <code className="literal">mutations.js</code> archivo y añadí tres mutaciones para cada uno de los tipos de mutación. Por lo tanto, hemos decidido que cuando:</p>


<p className="p">Now let's define mutations! Open the <code class="literal">mutations.js</code> file and add three mutations for each of the mutation types. So, we have decided that when we:</p>



<div class="itemizedlist"><ul className="itemizedlist">



<li className="listit"><span><strong>Iniciar la aplicación</strong></span> : El estado es, y los estados y son.<code>started</code><code>true</code><code>paused</code><code>stopped</code><code>false</code></li>

<li className="listitem"><span class="strong"><strong>Start the application</strong></span>: The state <code class="literal">started</code> is <code class="literal">true</code>, and states <code class="literal">paused</code> and <code class="literal">stopped</code> are <code class="literal">false</code>.</li>

<li className="listit"><span><strong>Pausa la aplicación</strong></span> : El estado es, el estado es, yson.<code>started</code><code>true</code><code>paused</code><code>true</code><code>stopped</code><code>false</code></li>

<li className="listitem"><span class="strong"><strong>Pause the application</strong></span>: The state <code class="literal">started</code> is <code class="literal">true</code>, the state <code class="literal">paused</code> is <code class="literal">true</code>, and <code class="literal">stopped</code> are <code class="literal">false</code>.</li>



<li className="listit"><span><strong>Detener la aplicación</strong></span> : El estadoes, y los estadosyson.<code>stopped</code><code>true</code><code>started</code><code>paused</code><code>false</code></li>

<li className="listitem"><span class="strong"><strong>Stop the application</strong></span>: The state <code class="literal">stopped</code> is <code class="literal">true</code>, and states <code class="literal">started</code> and <code class="literal">paused</code> are <code class="literal">false</code>.</li>


</ul></div>

<p className="it">Ahora vamos a ponerlo en el código. Importar <code className="literal">mutation_types</code> de <code className="literal">mutations.js</code> y escribir las tres mutaciones necesarias de la siguiente manera:</p>


<p className="p">Now let's put it into the code. Import <code class="literal">mutation_types</code> to <code class="literal">mutations.js</code> and write all three necessary mutations as follows:</p>



<pre className="programlisting"><code>{`//mutations.js 
import * as types from './mutation_types' 
 
export default { 
  [types.START] (state) { 
    state.started = true 
    state.paused = false 
    state.stopped = false 
  }, 
  [types.PAUSE] (state) { 
    state.paused = true 
    state.started = true 
    state.stopped = false 
  }, 
  [types.STOP] (state) { 
    state.stopped = true 
    state.paused = false 
    state.started = false 
  } 
} 
 
`}</code></pre>



<p className="it">Ahora vamos a definir nuestras acciones! Ir al <code className="literal">actions.js</code> archivo, tipos de mutación importación y exportación tres funciones:</p>


<p className="p">Now let's define our actions! Go to the <code class="literal">actions.js</code> file, import mutation types, and export three functions:</p>



<pre className="programlisting"><code>{`//actions.js 
import * as types from './mutation_types' 
 
export default { 
  start: ({ commit }) =&gt; { 
    <span class="strong"><strong>commit(types.START)</strong></span> 
  }, 
  pause: ({ commit }) =&gt; { 
    <span class="strong"><strong>commit(types.PAUSE)</strong></span> 
  }, 
  stop: ({ commit }) =&gt; { 
    <span class="strong"><strong>commit(types.STOP)</strong></span> 
  } 
} 
`}</code></pre>


<p className="it">El toque final para llevar nuestros botones a la vida es la importación de estas acciones en <code className="literal">ControlsComponent</code> y llamarlos en el <code className="literal">click</code> evento en cada botón. Vamos a hacerlo. ¿Todavía recuerda cómo llamar a la acción en algún evento aplicada al elemento HTML? Si estamos hablando del <code className="literal">click</code> evento, es simplemente la siguiente:</p>


<p className="p">The final touch to bring our buttons to life is to import these actions into <code class="literal">ControlsComponent</code> and call them on the <code class="literal">click</code> event on each button. Let's do it. Do you still remember how to call the action on some event applied to the HTML element? If we are talking about the <code class="literal">click</code> event, it is just the following:</p>


<pre className="programlisting"><code>{`@click='someAction' 
`}</code></pre>


<p className="it">Por lo tanto, en nuestro <code className="literal">ControlsComponent.vue</code>, importamos el <code className="literal">mapActions</code> objeto, asignarla al del componente de <code className="literal">methods</code> propiedad, y aplicarlo a los clics del botón correspondiente. ¡Eso es todo! La <code className="literal">&lt;script&gt;</code> etiqueta de <code className="literal">ControlsComponent</code> será por lo tanto idénticos a los siguientes:</p>


<p className="p">So, in our <code class="literal">ControlsComponent.vue</code>, we import the <code class="literal">mapActions</code> object, map it to the component's <code class="literal">methods</code> property, and apply it to the corresponding button's clicks. That's all! The <code class="literal">&lt;script&gt;</code> tag of <code class="literal">ControlsComponent</code> will thus look like the following:</p>


<pre className="programlisting"><code>{`//ControlsComponent.vue 
&lt;script&gt; 
  <span class="strong"><strong>import { mapGetters, mapActions } from 'vuex'</strong></span> 
 
  export default { 
    computed: mapGetters(['isStarted', 'isPaused', 'isStopped']), 
    <span class="strong"><strong>methods: mapActions(['start', 'stop', 'pause'])</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>


<p className="it">Ahora llamar a estas funciones dentro de las directrices de control de eventos dentro de la plantilla de modo que la <code className="literal">&lt;template&gt;</code> etiqueta de las <code className="literal">ControlsComponent</code> miradas como las siguientes:</p>


<p className="p">Now call these functions inside the event handler directives within the template so that the <code class="literal">&lt;template&gt;</code> tag of the <code class="literal">ControlsComponent</code> looks like the following:</p>



<pre className="programlisting"><code>{`//ControlsComponent.vue 
&lt;template&gt; 
  &lt;span&gt; 
    &lt;button  :disabled='isStarted &amp;&amp; !isPaused'
    <span class="strong"><strong>@click="start"</strong></span>&gt; 
      &lt;i class="glyphicon glyphicon-play"&gt;&lt;/i&gt; 
    &lt;/button&gt; 
    &lt;button  :disabled='!isStarted || isPaused' 
    <span class="strong"><strong>@click="pause"</strong></span>&gt; 
      &lt;i class="glyphicon glyphicon-pause"&gt;&lt;/i&gt; 
    &lt;/button&gt; 
    &lt;button  :disabled='!isStarted' <span class="strong"><strong>@click="stop"</strong></span>&gt; 
      &lt;i class="glyphicon glyphicon-stop"&gt;&lt;/i&gt; 
    &lt;/button&gt; 
  &lt;/span&gt; 
&lt;/template&gt; 
`}</code></pre>



<p className="it">Intente hacer clic en los botones. Hacen exactamente lo que les tenemos que hacer. ¡Buen trabajo! Comprobar que en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/pomodoro2">Capítulo 5 / pomodoro2</a> carpeta. Sin embargo, no hemos terminado todavía. Todavía tenemos que hacer nuestra temporizador Pomodoro en un contador de tiempo real y no sólo algunos página que permite hacer clic en algunos botones y verlos cambiar sus estados de desactivado a activado.</p>


<p className="p">Try to click the buttons. They do exactly what we need them to do. Nice work! Check it out in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/pomodoro2">chapter5/pomodoro2</a> folder. However, we are not done yet. We still have to make our Pomodoro timer into an actual timer and not just some page that allows you to click some buttons and watch them changing their states from disabled to enabled.</p>



</div><div className="section" title="Binding Pomodoro minutes and seconds"><div className="titlepage"><div><div><h2 class="title"><a id="ch05lvl2sec61"></a>Binding Pomodoro minutes and seconds</h2></div></div></div>


<p className="it">En la sección anterior, hemos sido capaces de definir tres estados diferentes de la aplicación Pomodoro: <code className="literal">started</code>, <code className="literal">paused</code>, y <code className="literal">stopped</code>. Sin embargo, no olvidemos acerca de lo que la aplicación Pomodoro se debe utilizar para. Debe cuenta atrás algún tiempo dado para el trabajo y luego cambiar a la ruptura temporizador de cuenta atrás, y luego volver al trabajo, y así sucesivamente.</p>


<p className="p">In the previous section, we were able to define three different states of the Pomodoro application: <code class="literal">started</code>, <code class="literal">paused</code>, and <code class="literal">stopped</code>. However, let's not forget about what the Pomodoro application should be used for. It must countdown some given time for work and then switch to the break count down timer, and then come back to work, and so on.</p>


<p className="it">Esto nos lleva a darnos cuenta de que existe el estado de una aplicación más Pomodoro muy importante: el estado binario que alterna entre <span className="emphasis"><em>trabajo</em></span> y <span className="emphasis"><em>de descanso</em></span> períodos de tiempo. Este estado no se podes activar por medio de botones; que de alguna manera debe ser gestionada por la lógica interna de nuestra aplicación.</p>


<p className="p">This leads us to realize that there is one more very important Pomodoro application's state: the binary state that toggles between <span class="emphasis"><em>working</em></span> and <span class="emphasis"><em>resting</em></span> periods of time. This state cannot be toggled by buttons; it should somehow be managed by our application's internal logic.</p>


<p className="it">Vamos a empezar por definir dos propiedades de estado: uno para el contador que se redujo con el tiempo y el otro para distinguir entre el trabajo y los estados no-trabajo. Vamos a suponer que cuando empezamos nuestra Pomodoro, comenzamos nuestra jornada de trabajo, por lo que el estado de trabajo se debe establecer en true y el contador de cuenta atrás se debe establecer en la cantidad de tiempo que definimos para nuestro periodo Pomodoro trabajo. En aras de la modularidad y facilidad de mantenimiento, vamos a definir la cantidad de tiempo de trabajo y de descanso en un archivo externo. Digamos que es, por ejemplo, <code className="literal">config.js</code>. Creá el <code className="literal">config.js</code> archivo en el directorio raíz del proyecto y agregue el siguiente contenido:</p>


<p className="p">Let's start by defining two state properties: one for the counter that will be decreased with the time and the other one to distinguish between the working and not-working states. Let's assume that when we start our Pomodoro, we start our working day, so the working state should be set to true and the countdown counter should be set to the amount of time that we define for our working Pomodoro period. For the sake of modularity and maintainability, let's define the amount of time for work and for rest in an external file. Let's call it, for example, <code class="literal">config.js</code>. Create the <code class="literal">config.js</code> file in the project's root directory and add the following content:</p>


<pre className="programlisting"><code>{`
<span class="strong"><strong>//config.js</strong></span> 
export const WORKING_TIME = <span class="strong"><strong>20 * 60</strong></span> 
export const RESTING_TIME = <span class="strong"><strong>5 * 60 
</strong></span>
`}</code></pre>



<p className="it">Por estas inicializaciones quiero decir que nuestro Pomodoro debería cuenta atrás <span className="emphasis"><em>de 20</em></span> minutos para el intervalo de trabajo Pomodoro y <span className="emphasis"><em>5</em></span> minutos para el descanso. Por supuesto, sos libre de definir sus propios valores que son los más adecuados para usted. Ahora vamos a exportar <code className="literal">config.js</code> en nuestra tienda y volver a utilizar el <code className="literal">WORKING_TIME</code>valor para inicializar nuestro contador. También vamos a crear una propiedad que alterna entre el trabajo / descanso y llamarlo <code className="literal">isWorking</code>. Vamos a inicializarlo a <code className="literal">true</code>.</p>


<p className="p">By these initializations I mean that our Pomodoro should count down <span class="emphasis"><em>20</em></span> minutes for the working Pomodoro interval and <span class="emphasis"><em>5</em></span> minutes for breaks. Of course, you are free to define your own values that are most suitable for you. Let's now export <code class="literal">config.js</code> in our store and reuse the <code class="literal">WORKING_TIME</code> value to initialize our counter. Let's also create a property that toggles between work/break and call it <code class="literal">isWorking</code>. Let's initialize it to <code class="literal">true</code>.</p>


<p className="it">Por lo tanto, nuestro nuevo estado se verá como la siguiente:</p>


<p className="p">So, our new state will look like the following:</p>



<pre className="programlisting"><code>{`//store.js 
&lt;...&gt; 
import { WORKING_TIME } from '../config' 
 
const state = { 
  started: false, 
  paused: false, 
  stopped: false, 
  <span class="strong"><strong>isWorking: true, 
  counter: WORKING_TIME</strong></span> 
} 
`}</code></pre>



<p className="it">Por lo tanto, tenemos estas dos nuevas propiedades agradables. Antes de empezar a crear métodos, acciones, mutaciones y otras cosas que disminuyen el mostrador y activar o desactivar la <code className="literal">isWorking</code> propiedad, vamos a pensar en los elementos visuales que dependen de estas propiedades.</p>


<p className="p">So, we have these two nice new properties. Before starting to create methods, actions, mutations, and other things that decrease the counter and toggle the <code class="literal">isWorking</code> property, let's think of the visual elements that rely on these properties.</p>


<p className="it">No tenemos tantos elementos, así que es fácil de definir.</p>


<p className="p">We don't have so many elements, so it's easy to define.</p>



<div class="itemizedlist"><ul className="itemizedlist">



<li className="listit">El estado está afectando el título: debemos mostrar cuando es el momento de trabajar y cuando es el momento para descansar.<code>isWorking</code><strong><code>Work!</code></strong><strong><code>Rest!</code></strong></li>

<li className="listitem">The <code class="literal">isWorking</code> state is affecting the title: we should display <strong class="userinput"><code>Work!</code></strong> when it's time to work and <strong class="userinput"><code>Rest!</code></strong> when it's time to have a rest.</li>



<li className="listit">El estado también está afectando a la visibilidad del componente gatitos: se debe mostrarse sólo cuando es .<code>isWorking</code><code>isWorking</code><code>false</code></li>

<li className="listitem">The <code class="literal">isWorking</code> state is also affecting the kittens component visibility: it should be displayed only when <code class="literal">isWorking</code> is <code class="literal">false</code>.</li>


</ul></div><div class="itemizedlist">
<ul className="itemizedlist">


<li className="listit">La propiedad afecta y : cada vez que se disminuye, el también debe disminuir su valor, y cada 60 disminuye, el también debe disminuir su valor.<code>counter</code><code>minute</code><code>second</code><code>second</code><code>minute</code></li>

<li className="listitem">The <code class="literal">counter</code> property affects <code class="literal">minute</code> and <code class="literal">second</code>: each time it decreases, the <code class="literal">second</code> should also decrease its value, and every 60 decreases, the <code class="literal">minute</code> should also decrease its value.</li>


</ul></div>


<p className="it">Vamos a definir las funciones de captadores para el <code className="literal">isWorking</code>Estado y para el <code className="literal">minute</code> y el <code className="literal">second</code>. Después de definir estos captadores, podemos reutilizarlos en nuestros componentes en lugar de utilizar los valores codificados. Vamos a empezar por la definición de un captador de la <code className="literal">isWorking</code> propiedad:</p>


<p className="p">Let's define getters functions for the <code class="literal">isWorking</code> state and for the <code class="literal">minute</code> and the <code class="literal">second</code>. After defining these getters, we can reuse them in our components instead of using the hardcoded values. Let's start by defining a getter for the <code class="literal">isWorking</code> property:</p>


<pre className="programlisting"><code>{`//getters.js 
export default { 
  isStarted: state =&gt; state.started, 
  isPaused: state =&gt; state.paused, 
  isStopped: state =&gt; state.stopped, 
  <span class="strong"><strong>isWorking: state =&gt; state.isWorking</strong></span> 
} 
`}</code></pre>


<p className="it">Vamos a volver a utilizar este captador en los componentes que estaban usando Hardcoded <code className="literal">isworking</code> definido en el <code className="literal">App.vue</code> componente. Abierta <code className="literal">App.vue</code>, eliminar todas las referencias a la <code className="literal">isworking</code>variable de codificado, importe el <code className="literal">mapGetters</code> objeto, y el mapa de la <code className="literal">isworking</code> propiedad al <code className="literal">isWorking</code> método dentro de la <code className="literal">computed</code> propiedad de la siguiente manera:</p>


<p className="p">Let's reuse this getter in the components that were using hardcoded <code class="literal">isworking</code> defined in the <code class="literal">App.vue</code> component. Open <code class="literal">App.vue</code>, remove all the references to the <code class="literal">isworking</code> hardcoded variable, import the <code class="literal">mapGetters</code> object, and map the <code class="literal">isworking</code> property to the <code class="literal">isWorking</code> method inside the <code class="literal">computed</code> property as follows:</p>


<pre className="programlisting"><code>{`//App.vue 
&lt;script&gt; 
&lt;...&gt; 
<span class="strong"><strong>import { mapGetters } from 'vuex'</strong></span> 
 
export default { 
  &lt;...&gt; 
  <span class="strong"><strong>computed: mapGetters({ 
    isworking: 'isWorking' 
  }),</strong></span> 
  store 
} 
&lt;/script&gt; 
`}</code></pre>


<p className="it">Repetir los mismos pasos en <code className="literal">StateTitleComponent</code>. Importar <code className="literal">mapGetters</code> y reemplazar <code className="literal">props</code> con mapeado <code className="literal">computed</code> de propiedad:</p>


<p className="p">Repeat the same steps in <code class="literal">StateTitleComponent</code>. Import <code class="literal">mapGetters</code> and replace <code class="literal">props</code> with mapped <code class="literal">computed</code> property:</p>


<pre className="programlisting"><code>{`//StateTitleComponent.vue 
&lt;script&gt; 
  <span class="strong"><strong>import { mapGetters } from 'vuex'</strong></span> 
 
  export default { 
    data () { 
      return { 
        workingtitle: 'Work!', 
        restingtitle: 'Rest!' 
      } 
    }, 
    <span class="strong"><strong>computed: mapGetters({ 
      isworking: 'isWorking' 
    })</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="it">El resto se deja intacto en tanto los componentes! Dentro de las plantillas, el <code className="literal">isworking</code> se utiliza la propiedad. Esta propiedad continúa existiendo; es sólo importada desde el almacén Vuex reactiva y no de los datos codificados!</p>


<p className="p">The rest is left untouched in both the components! Inside the templates, the <code class="literal">isworking</code> property is used. This property continues to exist; it's just imported from the reactive Vuex store and not from the hardcoded data!</p>



<p className="it">Ahora hay que definir captadores para los minutos y segundos. Esta parte es más complicado porque en estos captadores, tenemos que aplicar un poco de cómputo a la propiedad del estado del contador. Esto no es difícil en absoluto. Nuestro contador representa un número total de segundos. Esto significa que podemos extraer fácilmente minutos dividiendo el contador en 60 y redondeando al entero más bajo ( <code className="literal">Math.floor</code>). Los segundos pueden ser extraídos tomando el resto de la división por 60. Por lo tanto, podemos escribir nuestros captadores para los minutos y segundos de la siguiente manera:</p>


<p className="p">Now we must define getters for minutes and seconds. This part is trickier because in these getters, we have to apply some computation to the counter state's property. This is not difficult at all. Our counter represents a total number of seconds. This means that we can easily extract minutes by dividing the counter by 60 and rounding to the lowest integer (<code class="literal">Math.floor</code>). The seconds can be extracted by taking the remainder of the division by 60. Thus, we can write our getters for minutes and seconds in the following way:</p>



<pre className="programlisting"><code>{`//getters.js 
export default { 
  &lt;...&gt; 
  <span class="strong"><strong>getMinutes</strong></span>: state =&gt; <span class="strong"><strong>Math.floor(state.counter / 60)</strong></span>, 
  <span class="strong"><strong>getSeconds</strong></span>: state =&gt; <span class="strong"><strong>state.counter % 60</strong></span> 
} 
`}</code></pre>



<p className="it">¡Eso es! Ahora vamos a reutilizar estos captadores en el <code className="literal">CountdownComponent</code>. Importación <code className="literal">mapGetters</code> y mapa sus métodos correspondientes a los <code className="literal">min</code> y <code className="literal">sec</code> las propiedades dentro de la <code className="literal">computed</code> propiedad. No se olvide de eliminar los datos codificados. Nuestra <code className="literal">script</code> etiqueta de la <code className="literal">CountdownComponent.vue</code> será por lo tanto el siguiente aspecto:</p>


<p className="p">That's it! Let's now reuse these getters in the <code class="literal">CountdownComponent</code>. Import <code class="literal">mapGetters</code> and map its corresponding methods to the <code class="literal">min</code> and <code class="literal">sec</code> properties inside the <code class="literal">computed</code> property. Do not forget to remove the hardcoded data. Our <code class="literal">script</code> tag of the <code class="literal">CountdownComponent.vue</code> will thus look like the following:</p>



<pre className="programlisting"><code>{`//CountdownComponent.vue 
&lt;script&gt; 
  <span class="strong"><strong>import { mapGetters } from 'vuex'</strong></span> 
 
  export default { 
    <span class="strong"><strong>computed: mapGetters({ 
      min: 'getMinutes', 
      sec: 'getSeconds' 
    })</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="it">El resto se deja completamente sin tocar! La plantilla se refería a la <code className="literal">min</code> y <code className="literal">sec</code> propiedades, y siguen existiendo. El código como lo era hasta ahora se podes encontrar en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/pomodoro3">Capítulo 5 / pomodoro3</a> carpeta. Mira la página; Ahora los minutos y los segundos que se muestran corresponden a la cantidad de tiempo de trabajo que hemos definido en nuestro fichero de configuración! Si lo cambia, cambiará así:</p>


<p className="p">The rest is left completely untouched! The template was referencing the <code class="literal">min</code> and <code class="literal">sec</code> properties, and they continue to exist. The code as it was until now can be found in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/pomodoro3">chapter5/pomodoro3</a> folder. Look at the page; now the displayed minutes and seconds correspond to the amount of working time we've defined in our configuration file! If you change it, it will change as well:</p>



<div class="mediaobject"><img src="/static/image00292.jpeg" width="100%" alt="Binding Pomodoro minutes and seconds"/></div>


<p className="it">Cambio de la configuración para la cantidad de tiempo de trabajo afectará inmediatamente la vista de aplicación Pomodoro</p>


<p className="p">Changing the configuration for the amount of working time will immediately affect the Pomodoro application view</p>



</div><div className="section" title="Creating the Pomodoro timer"><div className="titlepage"><div><div><h2 class="title"><a id="ch05lvl2sec62"></a>Creating the Pomodoro timer</h2></div></div></div>

<p className="it">Bien, ahora todo está listo para empezar realmente a transcurrir el tiempo de trabajo, así que finalmente podemos tener algo de descanso! Vamos a definir dos funciones auxiliares, <code className="literal">togglePomodoro</code> y <code className="literal">tick</code>.</p>


<p className="p">Okay, now everything is ready to actually start to count down our working time so we can finally have some rest! Let's define two auxiliary functions, <code class="literal">togglePomodoro</code> and <code class="literal">tick</code>.</p>



<p className="it">El primero de ellos se acaba de activar o desactivar la <code className="literal">isWorking</code> propiedad. También va a redefinir el mostrador del estado. Cuando el estado <code className="literal">isWorking</code>, el contador debe corresponder al tiempo de trabajo, y cuando el estado no está funcionando, el contador debe corresponder al tiempo de descanso.</p>


<p className="p">The first one will just toggle the <code class="literal">isWorking</code> property. It will also redefine the state's counter. When the state <code class="literal">isWorking</code>, the counter should correspond to the working time, and when the state is not working, the counter should correspond to the resting time.</p>



<p className="it">La <code className="literal">tick</code> función simplemente disminuir el contador y comprobar valor si se ha llegado a "0", y en este caso, va a cambiar el estado Pomodoro. El resto ya está siendo atendido. Por lo tanto, la <code className="literal">togglePomodoro</code> función se verá como la siguiente:</p>


<p className="p">The <code class="literal">tick</code> function will just decrease the counter and check if it has reached "0" value, and in this case, will toggle the Pomodoro state. The rest is already being taken care of. So, the <code class="literal">togglePomodoro</code> function will look like the following:</p>


<pre className="programlisting"><code>{`//mutations.js 
function togglePomodoro (state, toggle) { 
  if (_.isBoolean(toggle) === false) { 
    toggle = <span class="strong"><strong>!state.isWorking</strong></span> 
  } 
  <span class="strong"><strong>state.isWorking = toggle 
  state.counter = state.isWorking ? WORKING_TIME : RESTING_TIME 
</strong></span>} 
`}</code></pre>


<p className="it">Ah, y no se olvide de importar <code className="literal">WORKING_TIME</code> y <code className="literal">RESTING_TIME</code> de nuestra configuración! Además, no se olvide de importar <code className="literal">underscore</code> ya que estamos utilizando para la <code className="literal">_.isBoolean</code>verificación:</p>


<p className="p">Ah, and do not forget to import <code class="literal">WORKING_TIME</code> and <code class="literal">RESTING_TIME</code> from our config! Also, do not forget to import <code class="literal">underscore</code> since we are using it for the <code class="literal">_.isBoolean</code> check:</p>



<pre className="programlisting"><code>{`//mutations.js 
import _ from 'underscore' 
import { WORKING_TIME, RESTING_TIME } from './config' 
`}</code></pre>



<p className="it">Entonces, la <code className="literal">tick</code> función simplemente disminuir el contador y comprobar si se ha alcanzado el valor "0":</p>


<p className="p">Then, the <code class="literal">tick</code> function will just decrease the counter and check if it has reached the "0" value:</p>



<pre className="programlisting"><code>{`//mutations.js 
function tick (state) { 
  if (state.counter === 0) { 
    togglePomodoro(state) 
  } 
  state.counter-- 
} 
`}</code></pre>



<p className="it">¡Multa! Todavía no es suficiente. Tenemos que establecer el intervalo que llame a la <code className="literal">tick</code> función para cada segundo. Dónde debe fijarse? Bueno, es más que claro que se debe hacer cuando comenzamos nuestra Pomodoro, en la <code className="literal">START</code> mutación!</p>


<p className="p">Fine! It's still not enough. We need to set the interval that would call the <code class="literal">tick</code> function for each second. Where should it be set? Well, it is more than clear that it should be done when we start our Pomodoro, in the <code class="literal">START</code> mutation!</p>


<p className="it">Pero si nos fijamos el intervalo en la <code className="literal">START</code> mutación y se llama a la <code className="literal">tick</code> función de cada segundo, ¿cómo va a ser o hace una pausa en golpear el botón de pausa o parar? Es por eso que el <code className="literal">setInterval</code> y <code className="literal">clearInterval</code> existen funciones de JavaScript y es por eso que tenemos una tienda donde podemos guardar el estado inicial para el <code className="literal">interval</code>valor! Vamos a empezar definiendo <code className="literal">interval</code> como <code className="literal">null</code> en el estado de la tienda:</p>

<p className="p">But if we set the interval in the <code class="literal">START</code> mutation and it calls the <code class="literal">tick</code> function each second, how will it be stopped or paused on hitting the pause or stop button? That's why the <code class="literal">setInterval</code> and <code class="literal">clearInterval</code> JavaScript functions exist and that's why we have a store where we can save the initial state for the <code class="literal">interval</code> value! Let's start by defining <code class="literal">interval</code> as <code class="literal">null</code> in the store's state:</p>



<pre className="programlisting"><code>{`//store.js 
const state = { 
  &lt;...&gt; 
  interval: null 
} 
`}</code></pre>



<p className="it">Ahora, en nuestra <code className="literal">START</code> mutación, vamos a añadí el siguiente código que inicializa el intervalo:</p>

<p className="p">Now, in our <code class="literal">START</code> mutation, let's add the following code that initializes the interval:</p>

<pre className="programlisting"><code>{`//mutations.js 
export default { 
  [types.START] (state) { 
    state.started = true 
    state.paused = false 
    state.stopped = false 
    <span class="strong"><strong>state.interval = setInterval(() =&gt; tick(state), 1000)</strong></span> 
  }, 
  &lt;...&gt; 
} 
`}</code></pre>



<p className="it">Acabamos de fijar un intervalo que va a llamar a la <code className="literal">tick</code> función de cada segundo. A su vez, la <code className="literal">tick</code> función disminuirá el contador. Los valores que se basan en el valor del contador minutos y la segunda va a cambiar de forma reactiva y se propagan estos cambios a la vista.</p>

<p className="p">We just set an interval that will call the <code class="literal">tick</code> function each second. In turn, the <code class="literal">tick</code> function will decrease the counter. The values that rely on the counter's value&mdash;minute and second&mdash;will change and reactively propagate these changes to the view.</p>





<p className="it">Si hace clic en el botón de inicio ahora, va a configurar la cuenta atrás en la acción! ¡Hurra! Esta casi terminado. Sólo tenemos que añadí la <code className="literal">clearInterval</code> función de las <code className="literal">pause</code> y <code className="literal">stop</code> de mutación métodos. Aparte de esto, en el <code className="literal">stop</code> método, vamos a llamar a la <code className="literal">togglePomodoro</code> función con <code className="literal">true</code>, que se restablecerá el temporizador Pomodoro al estado de trabajo:</p>



<p className="p">If you click on the start button now, you will set the countdown in action! Yay! It's almost done. We just need to add the <code class="literal">clearInterval</code> function on the <code class="literal">pause</code> and <code class="literal">stop</code> mutation methods. Apart from this, on the <code class="literal">stop</code> method, let's call the <code class="literal">togglePomodoro</code> function with <code class="literal">true</code>, which will reset the Pomodoro timer to the working state:</p>


<pre className="programlisting"><code>{`//mutations.js 
export default { 
  [types.START] (state) { 
    state.started = true 
    state.paused = false 
    state.stopped = false 
    <span class="strong"><strong>state.interval = setInterval(() =&gt; tick(state), 1000)</strong></span> 
  }, 
  [types.PAUSE] (state) { 
    state.paused = true 
    state.started = true 
    state.stopped = false 
    <span class="strong"><strong>clearInterval(state.interval)</strong></span> 
  }, 
  [types.STOP] (state) { 
    state.stopped = true 
    state.paused = false 
    state.started = false 
    <span class="strong"><strong>togglePomodoro(state, true)</strong></span> 
  } 
} 
`}</code></pre></div><div className="section" title="Changing the kitten"><div className="titlepage"><div><div><h2 class="title"><a id="ch05lvl2sec63"></a>Changing the kitten</h2></div></div></div>


<p className="it">Espero que hayas trabajado mucho y por fin ha llegado su tiempo de descanso! Si no, y si no se podes esperar a que, simplemente cambiar el <code className="literal">WORKING_TIME</code>valor en el <code className="literal">config.js</code> archivo de algo considerablemente más pequeña y esperar a que. Creo que finalmente me merezco un descanso, así que he estado mirando esta imagen agradable desde hace ya algunos minutos:</p>


<p className="p">I hope you worked a lot and your resting time has finally come! If not and if you can't wait for it, just change the <code class="literal">WORKING_TIME</code> value in the <code class="literal">config.js</code> file for something considerably small and wait for it. I think I finally deserve some rest, so I've been staring at this nice image for some minutes already:</p>


<div class="mediaobject"><img src="/static/image00293.jpeg" width="100%" alt="Changing the kitten"/></div>


<p className="it">Estoy mirando a la imagen, el gato me está mirando</p>

<p className="p">I am staring at the image, the cat is staring at me</p>


<p className="it">¿No te gusta la imagen que aparece a veces cambiar? Por supuesto, lo haría! Para lograr esto, hay que acaba de añadí algo a la fuente de la imagen para que cambie con el tiempo y proporciona una imagen sin almacenamiento en caché para nosotros.</p>


<p className="p">Wouldn't you like the displayed image to change sometimes? Of course, you would! In order to achieve this, we must just append something to the image source so that it changes with time and delivers a non-cached image to us.</p>


<div class="note" title="Note"><h3 class="title"><a id="tip40"></a>Tip</h3>


<p className="it">Una de las mejores prácticas para ofrecer cosas sin almacenamiento en caché es añadí la <span className="emphasis"><em>marca de tiempo</em></span> a la dirección URL solicitada.</p>


<p className="p">One of the best practices to deliver non-cached things is to append the <span class="emphasis"><em>timestamp</em></span> to the requested URL.</p>



</div>


<p className="it">Podríamos, por ejemplo, tener otra propiedad en nuestra tienda, digamos, <code className="literal">timestamp</code> que se actualiza con cada disminución contador y su valor se añade a la URL de la imagen de código. ¡Vamos a hacerlo! Vamos a empezar por la definición de una <code className="literal">timestamp</code> propiedad en el estado de nuestra tienda de la siguiente manera:</p>


<p className="p">We could, for example, have another property in our store, let's say, <code class="literal">timestamp</code>, which would be updated with each counter decrease and its value would be appended to the image-source URL. Let's do it! Let's start by defining a <code class="literal">timestamp</code> property in our store's state as follows:</p>


<pre className="programlisting"><code>{`//store.js 
const state = { 
  &lt;...&gt; 
  <span class="strong"><strong>timestamp: 0</strong></span> 
} 
`}</code></pre>


<p className="it">Decir la <code className="literal">tick</code> función para actualizar este valor en cada tic:</p>
<p className="p">Tell the <code class="literal">tick</code> function to update this value on each tick:</p>


<pre className="programlisting"><code>{`//mutations.js 
function tick(state) { 
  &lt;...&gt; 
  <span class="strong"><strong>state.timestamp = new Date().getTime()</strong></span> 
} 
`}</code></pre>


<p className="it">Creá el captador de este valor en <code className="literal">getters.js</code> y utilizarlo dentro de la <code className="literal">KittensComponent</code> accediendo al <code className="literal">this.$store.getters.getTimestamp</code> método dentro de la <code className="literal">computed</code> propiedad:</p>
<p className="p">Create the getter for this value in <code class="literal">getters.js</code> and use it inside the <code class="literal">KittensComponent</code> by accessing the <code class="literal">this.$store.getters.getTimestamp</code> method inside the <code class="literal">computed</code> property:</p>


<pre className="programlisting"><code>{`//getters.js 
export default { 
  &lt;...&gt; 
  <span class="strong"><strong>getTimestamp: state =&gt; state.timestamp</strong></span> 
} 
 
//KittensComponent.vue 
&lt;script&gt; 
  export default { 
    computed: { 
      catimgsrc () { 
        return 'http://thecatapi.com/api/images/get?size=med<span class="strong"><strong>&amp;ts=' </strong></span>
<span class="strong"><strong>          + this.$store.getters.getTimestamp</strong></span> 
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>


<p className="it">Ahora es un poco demasiado rápido, ¿verdad? Vamos a definir un tiempo para mostrar cada gatito. No es difícil en absoluto. Por ejemplo, si decidimos mostrar cada gatito durante 3 segundos, antes de cambiar el estado de la marca de tiempo dentro de la <code className="literal">tick</code> función, sólo tenemos que comprobar si el valor del contador es divisible por 3. También vamos a hacer la cantidad de segundos para mostrar el gatito configurable. Agregue lo siguiente a <code className="literal">config.js</code>:</p>

<p className="p">Now it's a little bit too fast, right? Let's define a time to show each kitten. It's not difficult at all. For example, if we decide to show each kitten for 3 seconds, before changing the state of the timestamp inside the <code class="literal">tick</code> function, we just have to check if the counter value is divisible by 3. Let's also make the amount of seconds to show the kitten configurable. Add the following to <code class="literal">config.js</code>:</p>


<pre className="programlisting"><code>{`//config.js 
export const WORKING_TIME = 0.1 * 60 
export const RESTING_TIME = 5 * 60 
<span class="strong"><strong>export const KITTEN_TIME = 5</strong></span> //each kitten is visible for 5 seconds 
`}</code></pre>


<p className="it">Ahora importarlo al <code className="literal">mutations.js</code> archivo y utilizarlo en la <code className="literal">tick</code> función para comprobar si es el momento de cambiar el valor de la marca de tiempo:</p>


<p className="p">Now import it to the <code class="literal">mutations.js</code> file and use it in the <code class="literal">tick</code> function to check if it's time to change the timestamp's value:</p>


<pre className="programlisting"><code>{`//mutations.js 
import { WORKING_TIME, RESTING_TIME, <span class="strong"><strong>KITTEN_TIME</strong></span> } from './config' 
&lt;...&gt; 
function tick(state) { 
  &lt;...&gt; 
  <span class="strong"><strong>if (state.counter % KITTEN_TIME === 0) { 
    state.timestamp = new Date().getTime() 
  }</strong></span> 
} 
`}</code></pre>


<p className="it">¡Hemos terminado! Podes comprobar el código final de esta sección en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/pomodoro4">Capítulo 5 / pomodoro4</a> carpeta. Sí, me he fijado el tiempo de trabajo de 6 segundos para que pueda tener un descanso y disfrutar de unos gatitos muy bonito por <a className="ulink" href="http://thecatapi.com">thecatapi.com</a></p>

<p className="p">We are done! You can check the final code for this section in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter5/pomodoro4">chapter5/pomodoro4</a> folder. Yes, I've set the working time to 6 seconds so that you can have a break and enjoy some really nice kittens from 
<a class="ulink" href="http://thecatapi.com">thecatapi.com</a>
.</p>


<p className="it">Por lo tanto, antes de leer el resumen de este capítulo y comenzar la siguiente, tomar un descanso! Al igual que esta maravillosa especie:</p>


<p className="p">So, before reading the summary of this chapter and starting the next one, take a break! Just like this wonderful species:</p>



<div class="mediaobject"><img src="/static/image00294.jpeg" width="100%" alt="Changing the kitten"/></div>


<p className="it">Lo maravilloso que tiene su ruptura. Ser como él. Tomar un descanso.</p>


<p className="p">Wonderful thing having its break. Be like him. Take a break.</p>


</div>

</div>

</div>
<div className='col-md-3'></div>
</div>

 <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Summary</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Summary" id="aid-1P71O1"><div className="titlepage"><div><div>
<h1 className="title"><a id="ch05lvl1sec51"></a>Summary</h1>
</div></div></div>

<p className="it">En este capítulo, hemos visto cómo utilizar los eventos de la manipulación y el mecanismo de activación para propagar los cambios de datos de los componentes a sus padres.</p>

<p className="p">In this chapter, you saw how to use the events handling and triggering mechanism to propagate the components' data changes to their parents.</p>

<p className="it">Lo más importante, que utilizó el poder de la arquitectura Vuex para poder establecer el flujo de datos entre los componentes. Ya viste cómo se crea la tienda, y sus partes principales, mutaciones y estados. Que ha aprendido cómo estructurar la aplicación que utiliza el almacén para que sea modular y fácil de mantener. También ha aprendido cómo crear captadores de la tienda, y la forma de definir las acciones que se despachan las mutaciones del estado tienda. Se aplicaron todos los mecanismos aprendido a nuestras aplicaciones y vimos el flujo de datos en acción.</p>

<p className="p">Most importantly, you used the power of Vuex architecture to be able to establish the data flow between the components. You saw how the store is created, and its main parts, mutations, and states. You learned how to structure the application that uses the store so that it becomes modular and maintainable. You also learned how to create the store's getters and how to define actions that dispatch the store state's mutations. We applied all the learned mechanisms to our applications and saw the data flow in action.</p>

<p className="it">En este punto, estamos en condiciones de utilizar ningún mecanismo de intercambio de datos en aplicaciones de Vue, a partir de sencillos de unión dentro de los componentes y que van más allá de la gestión global del estado de datos locales. En este punto, sabemos que todas las bases de datos para operar dentro de nuestra aplicación Vue. ¡Ya casi hemos terminado!</p>

<p className="p">At this point, we are able to use any data exchanging mechanism in Vue applications, starting from simple local data binding inside the components and going further to global state management. At this point, we know all the bases to operate data inside our Vue application. We're almost done!</p>

<p className="it">En el siguiente capítulo, vamos a profundizar en el sistema de plugins para aplicaciones Vue. Aprenderás cómo utilizar plugins existentes y crear su propio plugin para enriquecer sus aplicaciones con un comportamiento personalizado.</p>

<p className="p">In the next chapter, we will go deep into the plugins system for Vue applications. You will learn how to use existing plugins and create your own plugin to enrich your applications with custom behavior.</p>

</div>




</div></div>
<div className='col-md-3'></div>  

</div> 


   
  
  
  </Layout>
  )