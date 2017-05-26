import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch74'>
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
<title>Chapter 10. Solutions to Exercises</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div class="chapter" title="Chapter 10. Solutions to Exercises" id="aid-2F4UM1"><div className="titlepage"><div><div><h1 className="title"><a id="ch10"></a>Chapter 10. Solutions to Exercises</h1></div></div></div><div className="section" title="Exercise for chapter 1"><div className="titlepage"><div><div><h1 className="title"><a id="ch10lvl1sec75"></a>Exercise for chapter 1</h1></div></div></div>

<p className="it">Al final del primer capítulo, se produjo el siguiente ejercicio:</p>
<p className="p">In the end of the first chapter, there was the following exercise:</p>

<div class="note" title="Note"><h3 class="title"><a id="note45"></a>Note</h3>


<p className="it">El temporizador Pomodoro que hemos construido en los capítulos anteriores es, sin duda alguna, grande, pero todavía carece de algunas características interesantes. Una cosa muy bonita que podría proporcionar estaría mostrando gatitos al azar de <a className="ulink" href="http://thecatapi.com/">http://thecatapi.com/</a> durante el tiempo de reposo. Se podes aplicar esto? ¡Por supuesto que puede! Pero, por favor, no confundir con el tiempo de trabajo en reposo! Estoy casi seguro de que su jefe de proyecto no le va a gustar mucho si usted mira fijamente a los gatitos en lugar de trabajar :)</p>
<p className="p">The Pomodoro timer that we have built in the previous chapters is, without any doubt, great, but it still lacks some nice features. A really nice thing that it could provide would be showing random kittens from <a class="ulink" href="http://thecatapi.com/">http://thecatapi.com/</a> during resting time. Can you implement this? Of course you can! But please do not confuse resting with working time! I am almost sure that your project manager will not like much if you stare at the kittens instead of working :)</p>


</div>

<p className="it">Vamos a resolverlo.</p>
<p className="p">Let's solve it.</p>


<p className="it">Comproba el código de Pomodoro en <a className="ulink" href="https://jsfiddle.net/chudaol/b6vmtzq1/">https://jsfiddle.net/chudaol/b6vmtzq1/</a> .</p>
<p className="p">Check the code for Pomodoro at <a class="ulink" href="https://jsfiddle.net/chudaol/b6vmtzq1/">https://jsfiddle.net/chudaol/b6vmtzq1/</a>.</p>

<p className="it">Comproba <a className="ulink" href="http://thecatapi.com/">http://thecatapi.com/</a> sitio web.</p>
<p className="p">Check <a class="ulink" href="http://thecatapi.com/">http://thecatapi.com/</a> website.</p>


<p className="it">Vamos a empezar añadiendo el elemento así Bootstrap con una imagen cuyos puntos a la API de gato fuente:</p>
<p className="p">Let's start by adding the well Bootstrap element with an image whose source points to the cat API:</p>


<pre className="programlisting"><code>{`&lt;div id="app" class="container"&gt;
  &lt;...&gt;
  <span class="strong"><strong>&lt;div class="well"&gt;
    &lt;img :src="&rsquo; http://thecatapi.com/api/images/get?</strong></span>
<span class="strong"><strong>      type=gif&amp;size=med&rsquo;" /&gt;
  &lt;div&gt;</strong></span>
&lt;/div&gt;
`}</code></pre>


<p className="it">Si se abre la página, verá que la imagen es siempre visible. Esto no es lo que queremos, queremos, que sólo sea visible cuando estamos en nuestro intervalo de descanso Pomodoro. Usted ya sabe cómo hacerlo. Hay varias maneras de lograr esto; vamos a utilizar el método de unión de clase y vincular una clase que se esconde cuando el estado está trabajando:</p>
<p className="p">If you open the page you will see that the image is always visible. This is not what we want, we want, it to only be visible when we are in our Pomodoro resting interval. You already know how to do it. There are several ways of achieving this; let's use the class binding method and bind a class that's hidden when the state is working:</p>


<pre className="programlisting"><code>{`&lt;div class="well" <span class="strong"><strong>:class="{ 'hidden': pomodoroState === 'work' }</strong></span>"&gt;
  &lt;img :src="'http://thecatapi.com/api/
    images/get?type=gif&amp;size=med'" /&gt;
&lt;/div&gt;
`}</code></pre>


<p className="it">Ahora, si se abre la página, verá que la imagen sólo aparece cuando se acaba el trabajo Pomodoro.</p>
<p className="p">Now, if you open the page you will see that the image only appears when the working Pomodoro is finished.</p>


<p className="it">Sin embargo, el problema es que para todo el tiempo que descansamos, la imagen es la misma. Sería muy bueno si pudiéramos actualizar cada, digamos, 10 segundos.</p>
<p className="p">However, the problem is that for all the time that we rest, the image is the same. It would be great if we could update it every, let's say, 10 seconds.</p>



<p className="it">Vamos a utilizar un mecanismo de almacenamiento en memoria caché para este propósito. Si atribuimos alguna propiedad a nuestra URL y cambiarlo cada 10 segundos, la URL va a cambiar y por lo tanto vamos a obtener otro gato al azar. Vamos a añadí una <code className="literal">timestamp</code>variable para nuestra aplicación Vue y cambiarlo dentro de la <code className="literal">_tick</code> función:</p>
<p className="p">Let's use a cache buster mechanism for this purpose. If we attach some property to our URL and change it each 10 seconds, the URL will change and therefore we will obtain another random cat. Let's add a <code class="literal">timestamp</code> variable to our Vue application and change it inside the <code class="literal">_tick</code> function:</p>

<pre className="programlisting"><code>{`&lt;...&gt;
new Vue({
  el: "#app",
  data: {
    &lt;...&gt;
    <span class="strong"><strong>timestamp: 0</strong></span>
  },
  &lt;...&gt;
  methods: {
    &lt;...&gt;
    _tick: function () {
      //update timestamp that is used in image src
      <span class="strong"><strong>if (this.second % 10 === 0) {
        this.timestamp = new Date().getTime();
      }</strong></span>
      &lt;...&gt;
    }
  }
});
`}</code></pre>

<p className="it">Después de que se crea y se actualiza la marca de tiempo, lo podemos utilizar en nuestra URL fuente de la imagen:</p>
<p className="p">After the timestamp is created and updated, we can use it in our image source URL:</p>

<pre className="programlisting"><code>{`&lt;div class="well" :class="{ 'hidden': pomodoroState === 'work' }"&gt;
  &lt;img :src="<span class="strong"><strong>'http://thecatapi.com/api/images/get?
    type=gif&amp;size=med&amp;ts=' + timestamp"</strong></span> /&gt;
&lt;/div&gt;`}</code></pre>


<p className="it">¡Eso es todo! Comproba el código de todo en este jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/4hnbt0pd/2/">https://jsfiddle.net/chudaol/4hnbt0pd/2/</a> .</p>
<p className="p">That's all! Check the whole code in this JSFiddle at <a class="ulink" href="https://jsfiddle.net/chudaol/4hnbt0pd/2/">https://jsfiddle.net/chudaol/4hnbt0pd/2/</a>.</p>



</div></div>



</div></div>
<div className='col-md-3'></div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Exercises for chapter 2</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="titlepage"><div><div><h1 className="title"><a id="ch10lvl1sec76"></a>Exercises for chapter 2</h1></div></div></div><div className="section" title="Enhancing MathPlugin"><div className="titlepage"><div><div><h2 class="title"><a id="ch10lvl2sec88"></a>Enhancing MathPlugin</h2></div></div></div><p className="it">Mejorar nuestra <code className="literal">MathPlugin</code> con funciones trigonométricas (seno, coseno y tangente).</p>
<p className="p">Enhance our <code class="literal">MathPlugin</code> with trigonometrical functions (sine, cosine, and tangent).</p><p className="it">En realidad, se trata sólo de la adición de las directivas que faltan y el uso de la <code className="literal">Math</code> función de los objetos en ella. Abrir <code className="literal">VueMathPlugin.js</code> y añadí lo siguiente:</p>
<p className="p">Actually, it is just about adding the missing directives and using the <code class="literal">Math</code> object's functions in it. Open <code class="literal">VueMathPlugin.js</code> and add the following:</p>

<pre className="programlisting"><code>{`//VueMathPlugin.js
export default {
  install: function (Vue) {
    Vue.directive('square', function (el, binding) {
      el.innerHTML = Math.pow(binding.value, 2);
    });
    Vue.directive('sqrt', function (el, binding) {
      el.innerHTML = Math.sqrt(binding.value);
    });
    <span class="strong"><strong>Vue.directive('sin', function (el, binding) {
      el.innerHTML = Math.sin(binding.value);
    });
    Vue.directive('cos', function (el, binding) {
      el.innerHTML = Math.cos(binding.value);
    });
    Vue.directive('tan', function (el, binding) {
      el.innerHTML = Math.tan(binding.value);
    });</strong></span>
  }
};`}</code></pre>
<p className="it">Podes comprobar cómo funciona esta directiva en el archivo HTML:</p>
<p className="p">You can check how this directive works in the HTML file:</p>

<pre className="programlisting"><code>{`//index.html 
&lt;div id="app"&gt;
  &lt;input v-model="item"/&gt;
  &lt;hr&gt;
  &lt;div&gt;&lt;strong&gt;Square:&lt;/strong&gt; &lt;span v-square="item"&gt;&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;strong&gt;Root:&lt;/strong&gt; &lt;span v-sqrt="item"&gt;&lt;/span&gt;&lt;/div&gt;<span class="strong"><strong>
  &lt;div&gt;&lt;strong&gt;Sine:&lt;/strong&gt; &lt;span v-sin="item"&gt;&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;strong&gt;Cosine:&lt;/strong&gt; &lt;span v-cos="item"&gt;&lt;/span&gt;&lt;/div&gt;
  &lt;div&gt;&lt;strong&gt;Tangent:&lt;/strong&gt; &lt;span v-tan="item"&gt;&lt;/span&gt;&lt;/div&gt;</strong></span>
&lt;/div&gt;`}</code></pre>

<p className="it">¡Eso es!</p>
<p className="p">That's it!</p>
</div><div className="section" title="Creating a Chrome application of the Pomodoro timer"><div className="titlepage"><div><div><h2 class="title"><a id="ch10lvl2sec89"></a>Creating a Chrome application of the Pomodoro timer</h2></div></div></div>
<p className="it">Por favor, combinar una solución de bootstrapping la aplicación utilizando una versión compatible de SCP-Vue.js y la aplicación Pomodoro simple que hemos creado en <a className="link" title="Capítulo 1. ir de compras con Vue.js" href="part0016.xhtml#aid-F8901">el Capítulo 1</a> , <span className="emphasis"><em>ir de compras con Vue.js</em></span> . Comproba el código en la <code className="literal">chrome-app-pomodoro</code> carpeta.</p>
<p className="p">Please combine a solution of bootstrapping the application using a SCP-compliant version of Vue.js and the simple Pomodoro application that we created in <a class="link" title="Chapter 1. Going Shopping with Vue.js" href="part0016.xhtml#aid-F8901">Chapter 1</a>, <span class="emphasis"><em>Going Shopping with Vue.js</em></span>. Check the code in the <code class="literal">chrome-app-pomodoro</code> folder.</p>
</div></div>

</div>
<div className='col-md-3'></div>

 <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<div className="section" title="Exercises for chapter 3" id="aid-2H1VQ1"><div className="titlepage"><div><div><h1 className="title"><a id="ch10lvl1sec77"></a>Exercises for chapter 3</h1></div></div></div><div className="section" title="Exercise 1"><div className="titlepage"><div><div><h2 class="title"><a id="ch10lvl2sec90"></a>Exercise 1</h2></div></div></div>


<p className="it">Cuando estábamos volver a escribir la aplicación de lista de compras usando componentes simples, hemos perdido la funcionalidad de la aplicación. El ejercicio sugiere el uso de un sistema de eventos de emisión con el fin de llevar la funcionalidad de vuelta.</p>

<p className="p">When we were rewriting the shopping list application using simple components, we lost the application's functionality. The exercise suggests using an events emitting system in order to bring the functionality back.</p>


<p className="it">El código que terminamos en esta sección estaba buscando similar a lo que está en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter3/vue-shopping-list-simple-components">Capítulo3 / vue-shopping-list-simples-componentes</a> carpeta.</p>

<p className="p">The code we ended up with in this section was looking similar to what is in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter3/vue-shopping-list-simple-components">chapter3/vue-shopping-list-simple-components</a> folder.</p>


<p className="it">¿Por qué no funciona? Comproba la consola de errores devtools. Se afirma lo siguiente:</p>

<p className="p">Why doesn't it work? Check the devtools error console. It states the following:</p>

<pre className="programlisting"><code>{`
<span class="strong"><strong>[Vue warn]: Property or method "addItem" is not defined on the instance but referenced during render. Make sure to declare reactive data properties in the data option.</strong></span>
<span class="strong"><strong>(found in component &lt;add-item-component&gt;)</strong></span>
`}</code></pre>


<p className="it">Aha! Esto sucede porque en el interior <code className="literal">add-item-template</code> que llamamos el <code className="literal">addItem</code> método que no pertenecen a este componente. Este método pertenece al componente de los padres, y por supuesto, el componente niño no tiene acceso a ella. ¿Qué debemos hacer? Vamos a emitir eventos! Ya sabemos cómo hacerlo. Por lo tanto, no tenemos que hacer demasiado. En realidad, lo que tenemos que hacer tres cosas pequeñas:</p>

<p className="p">Aha! This happens because inside <code class="literal">add-item-template</code> we are calling the <code class="literal">addItem</code> method which does not belong to this component. This method belongs to the parent component, and of course, the child component does not have access to it. What should we do? Let's emit events! We already know how to do it. So, we don't have to do too much. Actually, we have to do three small things:</p><div class="itemizedlist"><ul className="itemizedlist">

<li className="listit">Una el <code className="literal">addItem</code> método a <code className="literal">add-item-component</code> en la que vamos a emitir un evento y pasar de este componente <code className="literal">newItem</code> propiedad a ella.</li>

<li className="listitem">Attach the <code class="literal">addItem</code> method to <code class="literal">add-item-component</code> in which we will emit an event and pass this component's <code class="literal">newItem</code> property to it.</li>

<li className="listit">Modificar / simplificar el <code className="literal">addItem</code> método de la componente padre. Cabe ahora acaba de recibir un texto y añadirlo a su <code className="literal">items</code> propiedad.</li>

<li className="listitem">Modify/simplify the <code class="literal">addItem</code> method of the parent component. It should now just receive a text and add it to its <code class="literal">items</code> property.</li>

<li className="listit">Una el <code className="literal">v-on</code> modificador con el nombre del evento a la invocación del componente dentro del margen de beneficio principal que llamará al <code className="literal">addItem</code> método cada vez que se emite el evento.</li>

<li className="listitem">Attach the <code class="literal">v-on</code> modifier with the name of the event to the component's invocation inside the main markup that will call the <code class="literal">addItem</code> method each time the event is emitted.</li></ul></div>


<p className="it">Vamos a empezar añadiendo el <code className="literal">addItem</code> método a <code className="literal">add-item-component</code>. Se llama cada vez que el botón Agregar o <span className="emphasis"><em>Enter</em></span> es golpeado. Este método debe comprobar la <code className="literal">newItem</code> propiedad, y si contiene un texto, debe emitir un evento. Llamemos a este evento <code className="literal">add</code>. Por lo tanto, el código JavaScript de nuestro componente ahora se verá la siguiente manera:</p>

<p className="p">Let's start by adding the <code class="literal">addItem</code> method to <code class="literal">add-item-component</code>. It is called each time the add button or <span class="emphasis"><em>Enter</em></span> is hit. This method should check the <code class="literal">newItem</code> property, and if it contains a text, should emit an event. Let's call this event <code class="literal">add</code>. Thus, the JavaScript code of our component will now look the follows:</p><pre className="programlisting"><code>{`//add item component
Vue.component('add-item-component', {
  template: '#add-item-template',
  data: function () {
    return {
      newItem: ''
    }
  },
  <span class="strong"><strong>methods: {
    addItem: function () {
      var text;
 

      text = this.newItem.trim();
      if (text) {
        this.$emit('add', this.newItem);
        this.newItem = '';
      }
    }
  }</strong></span>
});
`}</code></pre>


<p className="it">Cuando el <code className="literal">add</code> se emite caso, de alguna manera el <code className="literal">addItem</code> método de la componente principal debe ser invocado. Vamos a obligar a la <code className="literal">add</code> evento para <code className="literal">addItem</code> uniendo el <code className="literal">v-on:add</code> modificador a la <code className="literal">add-item-component</code> invocación:</p>

<p className="p">When the <code class="literal">add</code> event is emitted, somehow the <code class="literal">addItem</code> method of the main component should be invoked. Let's bind the <code class="literal">add</code> event to <code class="literal">addItem</code> by attaching the <code class="literal">v-on:add</code> modifier to the <code class="literal">add-item-component</code> invocation:</p><pre className="programlisting"><code>{`&lt;add-item-component <span class="strong"><strong>v-on:add="addItem"</strong></span> :items="items"&gt;
&lt;/add-item-component&gt;`}</code></pre>


<p className="it">Está bien, entonces. Como se podes ver, este método hace casi el mismo que el <code className="literal">addItem</code> método de la componente principal estaba haciendo antes. Simplemente no empuja <code className="literal">newItem</code> a la <code className="literal">items</code> array. Vamos a modificar el <code className="literal">addItem</code> método de los componentes principales por lo que sólo recibe el texto ya procesada y lo empuja en la array de elementos:</p>

<p className="p">Okay then. As you can see, this method does almost the same that the <code class="literal">addItem</code> method of the main component was doing before. It just doesn't push <code class="literal">newItem</code> to the <code class="literal">items</code> array. Let's modify the <code class="literal">addItem</code> method of the main component so it just receives already processed text and pushes it into the array of items:</p>
<pre className="programlisting"><code>{`new Vue({
  el: '#app',
  data: data,
  methods: {<span class="strong"><strong>
    addItem: function (text) {
      this.items.push({
        text: text,
        checked: false
      });
    }
  </strong></span>}
});
`}</code></pre>


<p className="it">Hemos terminado! La solución completa de este ejercicio se podes encontrar en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/Appendix/chapter3/vue-shopping-list-simple-components">apéndice / Capítulo 3 / vue-shopping-list-simples-componentes</a> carpeta.</p>

<p className="p">We're done! The full solution of this exercise can be found in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/Appendix/chapter3/vue-shopping-list-simple-components">appendix/chapter3/vue-shopping-list-simple-components</a> folder.</p></div><div className="section" title="Exercise 2"><div className="titlepage"><div><div><h2 class="title"><a id="ch10lvl2sec91"></a>Exercise 2</h2></div></div></div>


<p className="it">En la sección llamada <span className="emphasis"><em>La reescritura de la aplicación lista de compras con los componentes de un único archivo</em></span> en <a className="link" title="Capítulo 3. Componentes - Comprensión y uso" href="part0036.xhtml#aid-12AK81">el Capítulo 3</a>, <span className="emphasis"><em>Componentes - Comprensión y uso</em></span> , lo hicimos bastante un buen trabajo de cambiar la aplicación de lista de compras usando componentes de un solo archivo, pero todavía hay algunas cosas que quedan. Tenemos dos funcionalidades que faltan: añadí elementos a la lista de elementos, y cambiando el título.</p>

<p className="p">In the section called <span class="emphasis"><em>Rewriting the shopping list application with single-file components</em></span> in <a class="link" title="Chapter 3. Components - Understanding and Using" href="part0036.xhtml#aid-12AK81">Chapter 3</a>, <span class="emphasis"><em>Components - Understanding and Using</em></span>, we did quite a nice job of changing the shopping list application using single-file components, but there are still few things left. We have two missing functionalities: adding items to the items list, and changing the title.</p>


<p className="it">Con el fin de lograr el primer funcionalidad, tenemos que emitir un evento desde <code className="literal">AddItemComponent</code> y adjuntar el <code className="literal">v-on</code> modificador a la <code className="literal">add-item-component</code> invocación con el principal <code className="literal">App.vue</code> componente, tal y como lo hemos hecho en el caso de tratar con componentes simples. Básicamente podes simplemente copiar y pegar el código.</p>

<p className="p">In order to achieve the first functionality, we have to emit an event from <code class="literal">AddItemComponent</code> and attach the <code class="literal">v-on</code> modifier to the <code class="literal">add-item-component</code> invocation with the main <code class="literal">App.vue</code> component, exactly like we have done in the case of dealing with simple components. You can basically just copy and paste the code.</p>


<p className="it">Lo mismo ocurre con la funcionalidad del título cambiante. También hay que emitir un <code className="literal">input</code> evento, tal como lo hicimos en el ejemplo sencillo componentes.</p>

<p className="p">The same goes for the changing title functionality. We should also emit an <code class="literal">input</code> event, just like we did in the simple components example.</p>


<p className="it">No se olvide de añadí el estilo al <code className="literal">App.vue</code> componente para que se vea como lo fue antes.</p>

<p className="p">Do not forget to add the style to the <code class="literal">App.vue</code> component to make it look just as it was before.</p>


<p className="it">Comproba el código completo en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/Appendix/chapter3/shopping-list-single-file-components"> apéndice / Capítulo 3 / lista de compras de un solo-file-componentes</a> carpeta.</p>

<p className="p">Check the full code in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/Appendix/chapter3/shopping-list-single-file-components">appendix/chapter3/shopping-list-single-file-components</a> folder.</p></div>


</div></div></div> 
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<div className="section" title="Summary" id="aid-2I0GC1"><div className="titlepage"><div><div><h1 className="title"><a id="ch08lvl1sec69"></a>Summary</h1></div></div></div>

<p className="it">En este capítulo, aprendistes cómo poner nuestras aplicaciones a disposición de todos. También aprendiste a desplegarlas con la integración de Heroku con el repositorio GitHub. También aprendiste a hacerlo de forma automática en cada commit y push. También usamos Travis para compilaciones automáticas en cada implementación. Ahora nuestras aplicaciones se están probando completamente y se reasignan automáticamente cada vez que realizamos un cambio. ¡Felicitaciones!</p>
<p className="p">In this chapter, you learned how to make our applications available for everyone. You also learned how to deploy them using Heroku integration with the GitHub repository. You also learned how to do it automatically on each commit and push. We also used Travis for automatic builds on each deployment. Now our applications are being fully tested and automatically redeployed each time we commit a change. Congratulations!</p>

<p className="it">Probablemente pensas que este es el final del viaje. No, no lo es. Este es solo el comienzo. En el próximo capítulo, veremos qué se podes aprender y qué cosas agradables podes hacer a continuación con las aplicaciones de Pomodoro y la lista de compras. ¡Quédate conmigo!</p>
<p className="p">You probably think that this is the end of the journey. No, it is not. This is just the beginning. In the next chapter, we will see what you can learn and what nice things you can do next with both the Pomodoro and shopping list applications. Stay with me!</p></div>





</div></div>
<div className='col-md-3'></div>
</div>  
   
  
  
  </Layout>
  )