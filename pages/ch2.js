import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch18'>
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
<title>Chapter 2. Fundamentals - Installing and Using</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div class="chapter" title="Chapter 2. Fundamentals - Installing and Using" id="aid-PNV61"><div className="titlepage"><div><div><h1 className="title"><a id="ch02"></a>Chapter 2. Fundamentals - Installing and Using</h1></div></div></div>




<p className="it">En el capítulo anterior, hemos adquirido cierta familiaridad con Vue.js. Hemos sido capaces de utilizarlo en dos aplicaciones diferentes que hemos creado a partir de cero. Hemos aprendido cómo integrar Vue.js en un proyecto ya existente. Hemos sido capaces de ver los datos de Vue reactivos de unión en la acción.</p>

<p className="p">In the previous chapter, we gained some familiarity with Vue.js. We were able to use it in two different applications that we created from scratch. We learned how to integrate Vue.js into an already existing project. We were able to see Vue's reactive data binding in action.</p>




<p className="it">Ahora, usted probablemente se estará preguntando: ¿cómo funciona? ¿Qué hacer para lograr este comportamiento de los cambios de interfaz de usuario rápida cuando se cambia el modelo de datos? Probablemente, ha decidido usar Vue.js en su proyecto y ahora se está preguntando si se sigue un patrón arquitectónico o paradigma de modo que se debe adoptar en su proyecto. En este capítulo, vamos a explorar los conceptos clave del framework Vue.js para comprender todas sus funciones detrás de las escenas. También en este capítulo, vamos a analizar todas las posibles formas de instalar Vue.js. También vamos a crear un esqueleto para nuestras aplicaciones, que vamos a desarrollar y mejorar a través de los siguientes capítulos. También vamos a aprender formas de depurar y probar nuestras aplicaciones.</p>

<p className="p">Now, you are probably asking yourself: how does it work? What does it do to achieve this behavior of fast UI changes when the data model is changed? Probably, you decided to use Vue.js in your project and are now wondering whether it follows some architectural pattern or paradigm so that you should adopt it in your project. In this chapter, we will explore the key concepts of the Vue.js framework to understand all its behind the scenes features. Also in this chapter, we will analyze all the possible ways of installing Vue.js. We will also create a skeleton for our applications, which we will develop and enhance through the next chapters. We will also learn ways of debugging and testing our applications.</p>




<p className="it">Por lo tanto, en este capítulo, vamos a aprender:</p>

<p className="p">So, in this chapter, we are going to learn:</p>




<div class="itemizedlist"><ul className="itemizedlist">


 <li className="listit">Lo que el paradigma de la arquitectura MVVM es y cómo se aplica a Vue.js</li>

 <li className="listitem">What the MVVM architecture paradigm is and how it applies to Vue.js</li>



 <li className="listit">Las vistas son lo declarativas</li>

 <li className="listitem">What declarative Views are</li>



 <li className="listit">Cómo Vue.js explora definidas propiedades, captadores y definidores,</li>

 <li className="listitem">How Vue.js explores defined properties, getters, and setters</li>



 <li className="listit">Cómo reactividad y los datos de las obras obligatorias en Vue.js</li>

 <li className="listitem">How reactivity and data binding works in Vue.js</li>



 <li className="listit">Lo comprobación sucia, DOM y DOM virtual son</li>

 <li className="listitem">What dirty checking, DOM, and virtual DOM are</li>



 <li className="listit">Las principales diferencias entre Vue.js 1,0 y 2,0 Vue.js</li>

 <li className="listitem">The main differences between Vue.js 1.0 and Vue.js 2.0</li>



 <li className="listit">¿Qué son componentes reutilizables</li>

 <li className="listitem">What reusable components are</li>



 <li className="listit">Cómo plugins, directivas, plugins personalizados y directivas personalizadas trabajar en Vue.js</li>

 <li className="listitem">How plugins, directives, custom plugins, and custom directives work in Vue.js</li>



 <li className="listit">Cómo instalar, iniciar, ejecutar y depurar una aplicación de Vue</li>

 <li className="listitem">How to install, start, run, and debug a Vue application</li>



</ul>

</div><div className="section" title="MVVM architectural pattern"><div className="titlepage"><div><div>

<h1 className="title"><a id="ch02lvl1sec18"></a>MVVM architectural pattern</h1></div></div></div>



<p className="it">¿Recuerdas que estábamos creando la <code className="literal">Vue</code> instancia en el primer capítulo? Nos instanciándola llamando <pre class="programlisting"><code>{`new Vue({...})`}</code></pre>. También recuerda que en las opciones, estábamos pasando el elemento de la página en este <code className="literal">Vue</code> ejemplo debe estar asociado y el <code className="literal">data</code> objeto que contenía las propiedades que queríamos para unirse a nuestra vista. El <code className="literal">data</code> objeto es nuestro modelo y el elemento DOM en el que <code className="literal">Vue</code> está obligado instancia es nuestra Vista:</p>

<p className="p">Do you remember how we were creating the <code class="literal">Vue</code> instance in the first chapter? We were instantiating it calling <pre class="programlisting"><code>{`new Vue({...})`}</code></pre>. You also remember that in the options, we were passing the element on the page where this <code class="literal">Vue</code> instance should be bound and the <code class="literal">data</code> object that contained the properties we wanted to bind to our View. The <code class="literal">data</code> object is our Model and the DOM element where the <code class="literal">Vue</code> instance is bound is our View:</p>


<div class="mediaobject"><img src="/static/image00239.jpeg" width="100%" alt="MVVM architectural pattern"/></div>


<p className="it">Clásica representación de vista-modelo en el que la instancia Vue se une una a otra</p>

<p className="p">Classic View-Model representation where the Vue instance binds one to another</p>


<p className="it">Mientras tanto, nuestro <code className="literal">Vue</code> caso es algo que ayuda a unir nuestro modelo a la vista y viceversa. Por lo tanto nuestra aplicación sigue <span className="strong"><strong>Model-View-ViewModel</strong></span> ( <span className="strong"><strong>MVVM</strong></span> ) patrón, en el que el <code className="literal">Vue</code> ejemplo es un modelo de vista:</p>

<p className="p">In the meantime, our <code class="literal">Vue</code> instance is something that helps to bind our Model to the View and vice versa. Our application thus follows <span class="strong"><strong>Model-View-ViewModel</strong></span> (<span class="strong"><strong>MVVM</strong></span>) pattern, where the <code class="literal">Vue</code> instance is a ViewModel:</p>


<div class="mediaobject"><img src="/static/image00240.jpeg" width="100%" alt="MVVM architectural pattern"/></div>

<p className="it">El diagrama simplificado del patrón Model-View-ViewModel</p>

<p className="p">The simplified diagram of the Model-View-ViewModel pattern</p>

<p className="it">Nuestro <span className="strong"><strong>modelo</strong></span> contiene datos y un poco de lógica de negocio, y nuestra <span className="strong"><strong>vista</strong></span> es responsable de su representación. <span className="strong"><strong>ViewModel</strong></span> identificadores de enlace de datos, garantizando que los datos cambiados en el <span className="strong"><strong>modelo</strong></span> está inmediatamente afectando a la <span className="strong"><strong>vista</strong></span> de capa y viceversa.</p>

<p className="p">Our <span class="strong"><strong>Model</strong></span> contains data and some business logic, and our <span class="strong"><strong>View</strong></span> is responsible for its representation. <span class="strong"><strong>ViewModel</strong></span> handles data binding, ensuring that the data changed in the <span class="strong"><strong>Model</strong></span> is immediately affecting the <span class="strong"><strong>View</strong></span> layer and vice versa.</p>


<p className="it">Nuestros Vistas de este modo llegar a ser completamente basadas en datos. <span className="strong"><strong>ViewModel</strong></span> se hace responsable del control del flujo de datos, lo que hace de unión totalmente declarativa para nosotros datos.</p>

<p className="p">Our Views thus become completely data driven. <span class="strong"><strong>ViewModel</strong></span> becomes responsible for the control of the data flow, making data binding fully declarative for us.</p>

</div></div>

<div className='col-md-3'></div>
  
  </div>  
    </div>
    <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>DefineProperty, getters, and setters</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="DefineProperty, getters, and setters"><div className="titlepage" id="aid-QMFO2"><div><div><h1 className="title"><a id="ch02lvl1sec19"></a>DefineProperty, getters, and setters</h1></div></div></div>

<p className="it">Por lo tanto, lo que ocurre con los datos una vez pasan a la <code className="literal">Vue</code> instancia? ¿Cuáles son estas transformaciones que <code className="literal">Vue</code> se refiere a ella de manera que quede obligada por lo que automáticamente a la capa de la vista?</p>


<p className="p">So, what happens with the data once passed to the <code className="literal">Vue</code> instance? What are these transformations that <code className="literal">Vue</code> applies to it so that it becomes so automatically bound to the View layer?</p>

<p className="it">Vamos a analizar qué haríamos si tuviéramos, digamos, una cadena, y cada vez que cambia nos gustaría aplicar algunas transformaciones a algún elemento DOM. ¿Cómo podemos aplicar la función de detector de cambio de cadena? A lo que nos adjuntarlo? No hay tal cosa como <code className="literal">var stringVar='hello';stringVar.onChange(doSomething)</code>.</p>


<p className="p">Let's analyze what would we do if we had, let's say, a string, and every time it changes we would like to apply some transformations to some DOM element. How would we apply the string-changing listener function? To what would we attach it? There is no such thing as <code className="literal">var stringVar='hello';stringVar.onChange(doSomething)</code> .</p>

<p className="it">Así que probablemente envolver ajuste de valor de la cadena y entrar en algún tipo de función que hacer algo, por ejemplo, actualizar el DOM cada vez que la cadena se ha actualizado. ¿Cómo se implementarla? Mientras que sos tá pensando en ello, Voy a preparar una rápida demostración de algo interesante.</p>


<p className="p">So we would probably wrap the string's value setting and getting in some sort of function that would do something, for example, updating the DOM each time the string was updated. How would you implement it? While you're thinking about it, I'll prepare a quick demo of something interesting.</p>

<p className="it">Abrir las herramientas de desarrollo de aplicaciones en su lista de compras. Vamos Código un poco. Creá una <code className="literal">obj</code>variable y otra <code className="literal">text</code>variables:</p>


<p className="p">Open the developer tools on your shopping list application. Let's code a little bit. Create an <code className="literal">obj</code> variable and another <code className="literal">text</code> variable:</p>

<pre className="programlisting"><code>{`var obj = {}; 
var text = ''; 
`}</code></pre>

<p className="it">Vamos a almacenar el elemento DOM <code className="literal">h2</code> en una variable:</p>


<p className="p">Let's store the DOM element <code className="literal">h2</code> in a variable:</p>

<pre className="programlisting"><code>{`var h2 = document.getElementsByTagName('h2')[0]; 
`}</code></pre>

<p className="it">Si asignamos <code className="literal">text</code> a la <code className="literal">obj.text</code> propiedad, ¿cómo podemos lograr que en cada cambio de esta propiedad es la <code className="literal">innerHTML</code> de <code className="literal">h2</code> cambiarían también?</p>


<p className="p">If we assign <code className="literal">text</code> to the <code className="literal">obj.text</code> property, how can we achieve that in every change of this property the <code className="literal">innerHTML</code> of <code className="literal">h2</code> would change as well?</p>

<p className="it">Vamos a utilizar el <code className="literal">Object.defineProperty</code> método (<a className="ulink" href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty</a> ).</p>


<p className="p">Let's use the <code className="literal">Object.defineProperty</code> method (
<a className="ulink" href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty">https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty</a>
).</p>

<p className="it">Este método permite la creación de funciones get y set, especificando tanto, lo que debe suceder cuando se accede o se cambia la propiedad:</p>


<p className="p">This method allows the creation of getter and setter functions, thus specifying what must happen when the property is accessed or changed:</p>
<pre className="programlisting"><code>{`Object.defineProperty(obj, 'text', { 
  get: function () { 
    return text; 
  }, 
  set: function (newVal) { 
    text = newVal;  
    <span className="strong"><strong>h2.innerHTML = text;</strong></span> 
  } 
}); 
`}</code></pre>

<p className="it">Ahora tratar de cambiar la <code className="literal">obj.text</code> propiedad de la consola. Mira el título:</p>


<p className="p">Now try to change the <code className="literal">obj.text</code> property from the console. Look at the title:</p>

<div className="mediaobject"><img src="/static/image00241.jpeg" width="100%" alt="DefineProperty, getters, and setters"/></div>



<p className="it">El método conjunto de object.defineProperty se llama cada vez que cambia la propiedad</p>


<p className="p">The set method of object.defineProperty is called every time the property changes</p>

<p className="it">Este mecanismo exacto fue utilizado por Vue.js. Una vez que los datos se pasan a la <code className="literal">Vue</code> instancia, todas sus propiedades pasan por el <code className="literal">Object.defineProperty</code> método, que asigna getters reactivos y definidores a ellos. Para cada directiva existente en una página, se añade un vigilante, que está siendo notificado dentro del <code className="literal">set</code> método. Abrir el <code className="literal">vue.js</code> código en la consola y la búsqueda de la línea que dice <code className="literal">set: function reactiveSetter(newVal)</code>. Añadir un punto de ruptura y tratar de cambiar el título de la lista de compras en la entrada. Ahora paso más hasta llegar a la última llamada en esta función que dice <code className="literal">dep.notify()</code>:</p>


<p className="p">This exact mechanism was used by Vue.js. Once the data are passed to the <code className="literal">Vue</code> instance, all its properties go through the <code className="literal">Object.defineProperty</code> method, which assigns reactive getters and setters to them. For each directive existing on a page, a watcher is added, which is being notified within the <code className="literal">set</code> method. Open the <code className="literal">vue.js</code> code in the console and search for the line that says <code className="literal">set: function reactiveSetter(newVal)</code>. Add a breakpoint and try to change the title of the shopping list in the input. Now step over until you reach the last call in this function that says <code className="literal">dep.notify()</code>:</p>

<div className="mediaobject"><img src="/static/image00242.jpeg" width="100%" alt="DefineProperty, getters, and setters"/></div>


<p className="it">Punto de ruptura dentro de la función setter que llama al método observadores notifiquen</p>


<p className="p">Breakpoint inside the setter function that calls the watchers notify method</p>

<p className="it">Entra en la función. Verá que esta función está iteración a través de los vigilantes de la propiedad y actualiza ellos. Si das un paso más de esta llamada, se verá que el DOM no se actualiza. Esto es porque los cambios realizados en el mismo bucle de eventos se están poniendo en la cola que se está enrojecida periódicamente.</p>


<p className="p">Step into the function. You will see that this function is iterating through the watchers of the property and updates them. If you step over this call, you will see that the DOM is not being updated. This is because the updates performed on the same event loop are being put into the queue that is being flushed periodically.</p>

<p className="it">Encuentra la <code className="literal">runBatcherQueue</code> función y poner un punto de interrupción en su interior. Trate de cambiar el título de nuevo. Como se podes ver, esta función itera a través de todos los observadores que están a la espera dentro de la cola y se llama al <code className="literal">run</code> método sobre cada uno de ellos. Si entras en este método, se verá que se compara el nuevo valor con la anterior:</p>


<p className="p">Find the <code className="literal">runBatcherQueue</code> function and put a breakpoint inside it. Try to change the title again. As you can see, this function iterates through all the watchers that are waiting inside the queue and calls the <code className="literal">run</code> method on each of them. If you step into this method, you will see that it compares the new value with the previous one:</p>


<pre className="programlisting"><code>{`if (value !== this.value ||... 
`}</code></pre>

<p className="it">A continuación, se llama a la ejecución de una devolución de llamada:</p>


<p className="p">It then it calls a callback's execution:</p>

<pre className="programlisting"><code>{`this.cb.call(this.vm, value, oldValue); 
`}</code></pre>

<p className="it">Si entras en esta función de devolución de llamada, verá que, al final, que finalmente se actualizará el valor DOM:</p>


<p className="p">If you step into this callback function, you will see that in the end, it will finally update the DOM value:</p>
<pre className="programlisting"><code>{`    update: function update(value) { 
      <span className="strong"><strong>this.el[this.attr] = _toString(value);</strong></span> 
    } 
`}</code></pre>

<p className="it">No es que sea sencillo?</p>


<p className="p">Isn't it simple?</p><div className="note" title="Note"><h3 className="title"><a id="note11"></a>Note</h3>

<p className="it">En esta depuración se utiliza Vue versión 1.0.</p>


<p className="p">In this debugging Vue version 1.0 is used.</p></div>

<p className="it">Por lo que el mecanismo detrás de los reactivos de enlace de datos Vue.js es muy simple. <span className="strong"><strong>Los vigilantes</strong></span> están siendo asignados a todas las directivas y propiedades de datos. Luego, durante el <code className="literal">set</code> método de <code className="literal">Object.defineProperty</code>, los <span className="strong"><strong>vigilantes</strong></span> son notificados y, a su vez, se ponen al día la correspondiente <span className="strong"><strong>DOM</strong></span> o <span className="strong"><strong>datos</strong></span> :</p>


<p className="p">So the mechanism behind the Vue.js reactive data binding is very simple. <span className="strong"><strong>Watchers</strong></span> are being assigned to all the directives and data properties. Then, during the <code className="literal">set</code> method of <code className="literal">Object.defineProperty</code>, the <span className="strong"><strong>Watchers</strong></span> are notified and, in turn, they update the corresponding <span className="strong"><strong>DOM</strong></span> or <span className="strong"><strong>data</strong></span>:</p>

<div className="mediaobject"><img src="/static/image00243.jpeg" width="100%" alt="DefineProperty, getters, and setters"/></div>


<p className="it">El flujo de datos desde el objeto de datos al DOM</p>


<p className="p">The data flow from the data object to the DOM</p>

<p className="it"> <span className="strong"><strong>DOM</strong></span> elementos que tienen directivas han unido a los oyentes que escuchan a sus actualizaciones y llamar a la correspondiente<span className="strong"><strong> de datos</strong></span> colocador propiedad que, a su vez, despierta sus<span className="strong"><strong> vigilantes</strong></span> .</p>


<p className="p">
<span className="strong"><strong>DOM</strong></span> elements that have directives have attached listeners that listen to their updates and call the corresponding <span className="strong"><strong>data</strong></span> property setter that, in turn, wakes up its <span className="strong"><strong>Watchers</strong></span>.</p>

<div className='col-md-3'></div></div></div></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Comparing with other frameworks</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Comparing with other frameworks" id="aid-RL0A1"><div className="titlepage"><div><div><h1 className="title"><a id="ch02lvl1sec20"></a>Comparing with other frameworks</h1></div></div></div>



<p className="it">Al intentar una nueva herramienta, usted quiere saber cómo se compara con otras herramientas o frameworks. Se podes encontrar un análisis más profundo de este aspecto en la página oficial de Vue.js: <a className="ulink" href="http://vuejs.org/guide/comparison.html">http://vuejs.org/guide/comparison.html</a> . Me limitaré a señalar algunos temas que me parece importante con respecto a los frameworks más utilizados.</p>

<p className="p">When you try a new tool, you want to know how it compares with other tools or frameworks. You can find a deep analysis in this regard on the official page of Vue.js: 
<a class="ulink" href="http://vuejs.org/guide/comparison.html">http://vuejs.org/guide/comparison.html</a>
. I will just point to some topics that I find important regarding the mostly used frameworks.</p>



<div className="section" title="React"><div className="titlepage"><div><div><h2 class="title"><a id="ch02lvl2sec19"></a>React</h2></div></div></div>



<p className="it">Reaccionar y Vue son muy similares. Ambos utilizan DOM virtual, tener componentes reutilizables, y están a punto de datos reactivos. Vale la pena mencionar, sin embargo, que sólo utiliza Vue DOM virtuales a partir de su segunda versión principal. Antes de Vue 2.0, que utiliza DOM real. La liberación Vue 2.0 no sólo se hizo más performant de Vue 1.0 pero también se volvió más performant de reaccionar (<a className="ulink" href="http://vuejs.org/guide/comparison.html#Performance-Profiles">http://vuejs.org/guide/comparison.html#Performance-Profiles</a> ).</p>

<p className="p">React and Vue are really similar. They both use virtual DOM, have reusable components, and are about reactive data. It is worth mentioning, however, that Vue only uses virtual DOM starting from its second major version. Prior to Vue 2.0, it used real DOM. The Vue 2.0 release not only became more performant than Vue 1.0 but it also became more performant than React (
<a class="ulink" href="http://vuejs.org/guide/comparison.html#Performance-Profiles">http://vuejs.org/guide/comparison.html#Performance-Profiles</a>
).</p>



<p className="it">La diferencia más significativa es, probablemente, la forma de crear sus componentes en ambos frameworks. Es posible que ya saben que en Reaccionar, todo es JavaScript. El desarrollo de todo, incluso de las plantillas, en JavaScript, en realidad podes ser bueno, así que los programadores están siempre en el mismo ámbito y la representación se vuelve más flexible.</p>

<p className="p">The most significant difference is probably the way you create your components in both frameworks. You might already know that in React, everything is JavaScript. Developing everything, even templates, in JavaScript, can actually be good, so programmers are always in the same scope and rendering becomes more flexible.</p>



<p className="it">Sin embargo, para algunos diseñadores que quieren hacer prototipado rápido o para los desarrolladores con no tan fuertes habilidades de programación, o para las personas que simplemente no quieren aprender JSX, que podría llegar a ser muy doloroso para trabajar de esta manera. En componentes Vue, en realidad se podes utilizar también JSX, pero todavía se podes seguir una estructura de desarrollo web común: escribir CSS dentro de las <code className="literal">&lt;style&gt;</code> etiquetas, la escritura de código HTML dentro de las <code className="literal">&lt;template&gt;</code> etiquetas, y escribir la lógica del componente en JavaScript dentro de las <code className="literal">&lt;script&gt;</code> etiquetas. Compárese, por ejemplo, la plantilla dentro de la función render en reaccionar y la plantilla que se podes escribir dentro del componente Vue. En este ejemplo, voy a mostrar cómo representar la lista de elementos de la lista de compras que hemos visto antes. Así que en Reaccionar, que va a terminar con el código JSX similar a éste:</p>

<p className="p">However, for some designers who want to do rapid prototyping or for developers with not-so-strong programming skills, or for people who simply don't want to learn JSX, it might become really painful to work like this. In Vue components, you can actually also use JSX, but you can still follow a common web development structure: writing CSS inside the <code>{`<style>`}</code> tags, writing HTML code inside the <code>{`<template>`}</code> tags, and writing the component's logic in JavaScript inside the <code>{`<script>`}</code> tags. Compare, for example, the template inside the render function in React and the template that you can write inside the Vue component. In this example, I will show how to render the list of items of the shopping list that we have seen before. So in React, you will end up with the JSX code similar to this one:</p>



<pre className="programlisting"><code>{`render () { 
  return ( 
    <ul> 
    {items.map(item => 
    <li className={item.checked &amp;&amp; 'removed'}> 
      <div className='checkbox'> 
        <input type='checkbox' checked={item.checked}>          
        { item.text } 
      </div> 
    </li> 
    )} 
    </ul> 
  ) 
}); 
`}</code></pre>

<p className="it">El uso de Vue, que se acaba de escribir el siguiente código HTML dentro de la <code className="literal">template</code> etiqueta:</p>

<p className="p">Using Vue, you will just write the following HTML code inside the <code class="literal">template</code> tag:</p>



<pre className="programlisting"><code>{`<template> 
<ul> 
  <li v-for="item in items" :class="{ 'removed': item.checked }"> 
    <div class="checkbox"> 
    <label> 
    <input type="checkbox" v-model="item.checked"> {{ item.text }} 
  </label> 
  </div> 
  </li> 
</ul> 
</template>`}</code></pre>



<p className="it">Yo, personalmente, les gusta tener estas cosas separado, por lo que me resulta agradable que Vue ofrece esta posibilidad.</p>

<p className="p">I, personally, like to have these things separated, thus I find it nice that Vue offers this possibility.</p>



<p className="it">Otra cosa buena de Vue es que permite al estilo de alcance dentro de los componentes utilizando el <code className="literal">scoped</code> atributo unido a la <code className="literal">style</code> etiqueta:</p>

<p className="p">Another nice thing about Vue is that it allows to scope style within the components using the <code class="literal">scoped</code> attribute attached to the <code class="literal">style</code> tag:</p>



<pre className="programlisting"><code>{`<style <span class="strong"><strong>scoped</strong></span>> 
</style> 
`}</code></pre>


<p className="it">Dentro de este estilo, en el caso de que utilice preprocesadores, todavía tiene acceso a todas las variables definidas a nivel mundial y podes crear o redefinir estilos que serán sólo se podes acceder por este componente.</p>

<p className="p">Within this style, in case you use preprocessors, you still have access to all globally defined variables and can create or redefine styles that will be only accessible by this component.</p>



<p className="it">También vale la pena mencionar la curva de aprendizaje para ambos frameworks. Para poder empezar a desarrollar aplicaciones utilizando Reaccionar, es probable que tiene que aprender la sintaxis JSX y ES2105, ya que la mayoría de los ejemplos en la documentación oficial Reaccionar usarlo. Con Vue, podes empezar de la nada. Sólo se incluyen en la página, igual que lo haría con jQuery, y ya se podes utilizar modelos Vue y el enlace de datos utilizando bastante simple y fácil de entender la sintaxis, y cualquier versión de JavaScript que le gusta usar. Después de eso, se podes ampliar en su aprendizaje y en su estilo de aplicaciones.</p>

<p className="p">It's also worth to mention the learning curve for both frameworks. To be able to start developing applications using React, you would probably have to learn JSX and ES2105 syntax, since most examples in official React documentation use it. With Vue, you can start out of the blue. Just include it in the page, like you would do with jQuery, and you can already use Vue models and data binding using pretty simple and easy to understand syntax, and any JavaScript version you like to use. After that, you can scale up in your learning and in your applications style.</p>



<p className="it">En caso de que desee realizar un análisis más profundo de los dos frameworks, echar un vistazo a la documentación, trate de elaborar ejemplos similares, y comprobar lo que se adapte a sus necesidades más.</p>

<p className="p">In case you want to perform a deeper analysis of both frameworks, have a look at the documentation, try to elaborate similar examples, and check what suits your needs more.</p>



</div><div className="section" title="Angular"><div className="titlepage"><div><div><h2 class="title"><a id="ch02lvl2sec20"></a>Angular</h2></div></div></div>

<p className="it">Hay una gran diferencia entre el 1 y el angular angular 2. Todos sabemos que la segunda versión del angular es completamente diferente de su predecesor. Ofrece un mayor rendimiento, la API es diferente, y la implementación subyacente se ha reescrito.</p>

<p className="p">There is a huge difference between Angular 1 and Angular 2. We all know that the second version of Angular is completely different from its predecessor. It offers more performance, the API is different, and the underlying implementation has been rewritten.</p>



<p className="it">Estas dos versiones son tan diferentes que en la documentación oficial de Vue, se dará cuenta de la comparación entre las versiones angular como lo fue entre dos frameworks diferentes. Sin embargo, la curva de aprendizaje y la forma en que cada uno de los frameworks que obliga a estructurar la aplicación son transversales, tanto para las versiones angular. Resulta que Vue es mucho menos dogmático que Angular 1, así como angular 2. Basta con comparar guía de inicio rápido de angular y aplicaciones del mundo hola de Vue en <a className="ulink" href="https://angular.io/docs/js/latest/quickstart.html">https://angular.io/docs/js/latest/quickstart.html</a> y <a className="ulink" href="http://vuejs.org/guide/index.html#Hello-World">http: //vuejs.org/guide/index.html#Hello-World</a> .</p>

<p className="p">These two versions are so different that in Vue official documentation, you will find the comparison between both the Angular versions as it was between two different frameworks. However, the learning curve and the way in which each of the frameworks forces you to structure the application are transversal for both the Angular versions. It turns out that Vue is much less opinionated than Angular 1 as well as Angular 2. Just compare Angular's quick start guide and Vue's hello world applications at 
<a class="ulink" href="https://angular.io/docs/js/latest/quickstart.html">https://angular.io/docs/js/latest/quickstart.html</a>
 and 
<a class="ulink" href="http://vuejs.org/guide/index.html#Hello-World">http://vuejs.org/guide/index.html#Hello-World</a>
.</p>



<pre className="programlisting"><code>{`<div class="blockquote"><table border="0" cellspacing="0" cellpadding="0" class="blockquote" summary="Block quote"><tr><td valign="top"> </td><td valign="top">`}</code></pre>


<p className="it"> <span className="emphasis"><em>"Incluso sin mecanografiado, guía de inicio rápido del angular comienza con una aplicación que utiliza JavaScript ES2015, la NGP con 18 dependencias, 4 archivos, y más de 3.000 palabras para explicar todo -. Acaba de decir Hello World"</em></span> </p>

<p className="p">
<span class="emphasis"><em>"Even without TypeScript, Angular's Quickstart guide starts out with an app that uses ES2015 JavaScript, NPM with 18 dependencies, 4 files, and over 3,000 words to explain it all - just to say Hello World."</em></span>
</p>



<pre className="programlisting"><code>{`</td><td valign="top"> </td></tr><tr><td valign="top"> </td><td colspan="2" align="right" valign="top" style="text-align: center">--<span class="attribution"><span class="emphasis"><em>http://vuejs.org/guide/comparison.html#Learning-Curve</em></span></span></td></tr></table></div>`}</code></pre>

<p className="it">Si todavía utiliza angular 1, vale la pena mencionar que la gran diferencia entre este framework y Vue es que en esta versión de angular, cada vez que el alcance cambió, re-evaluado todos los observadores, realizando así la comprobación sucia, por lo tanto reduciendo el rendimiento cuando la cantidad de observadores se convirtió considerablemente alta. Por lo tanto, en el Vue, cuando algo cambia en el alcance, está siendo reevaluado observador sólo esto de propiedad. Todos los demás están sentados sin hacer nada y esperar a que sus respectivas llamadas.</p>

<p className="p">If you still use Angular 1, it's worth to mention that the big difference between this framework and Vue is that in this version of Angular, each time the scope changed, re-evaluated all the watchers, thus performing dirty checking, hence reducing the performance when the amount of watchers became considerably high. Hence, in Vue, when something in the scope changes, only this property's watcher is being re-evaluated. All others are sitting idle and waiting for their respective calls.</p>



</div><div className="section" title="Vue"><div className="titlepage"><div><div>

<h2 class="title"><a id="ch02lvl2sec21"></a>Vue</h2>

</div></div></div>


<p className="it">No, no es un error tipográfico. También vale la pena comparar con Vue Vue. Vue también ha lanzado recientemente su segunda versión, que es más rápido y más limpio que su predecesor. Si todavía utiliza Vue 1.0, vale la pena actualizar. Si usted no sabe nada acerca de las versiones Vue, vale la pena comprobar cómo ha evolucionado y lo que permite la nueva versión. Comproba la entrada de blog que anunció Vue Vue 2.0 en abril de 2016 a <a className="ulink" href="https://vuejs.org/2016/04/27/announcing-2.0/">https://vuejs.org/2016/04/27/announcing-2.0/</a> .</p>

<p className="p">No, it is not a typo. It is also worth comparing Vue with Vue. Vue has also recently launched its second version, which is faster and cleaner than its predecessor. If you still use Vue 1.0, it is worth to upgrade. If you don't know anything about Vue versions, it is worth to check how it evolved and what does the new version allow. Check the Vue blog post that announced Vue 2.0 in April 2016 at 
<a class="ulink" href="https://vuejs.org/2016/04/27/announcing-2.0/">https://vuejs.org/2016/04/27/announcing-2.0/</a>.</p>



</div></div>

<div className='col-md-3'></div>
  
  </div>  
   </div>

   <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Vue.js fundamentals</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Vue.js fundamentals"><div className="titlepage" id="aid-SJGS2"><div><div><h1 className="title"><a id="ch02lvl1sec21"></a>Vue.js fundamentals</h1></div></div></div>





<p className="it">Antes de poner nuestras manos en el código y empezar a mejorar nuestras aplicaciones con componentes, plugins, mixins, plantillas y otras cosas, vamos Resumen de las principales características Vue. Vamos a analizar cuáles son los componentes reutilizables y cómo el estado de la aplicación se podes gestionar, y también hablar acerca de los plugins, filtros y mixins. En esta sección, vamos a tener sólo un ligero resumen de estas características. Vamos a aprender de ellos profundamente en los próximos capítulos.</p>

<p className="p">Before putting our hands into the code and starting to enhance our applications with components, plugins, mixins, templates, and other things, let's overview the main Vue features. Let's analyze what are reusable components and how the application state can be managed, and also talk about plugins, filters, and mixins. In this section, we will have just a slight overview of these features. We will learn them deeply in the next chapters.</p>


<div className="section" title="Reusable components"><div className="titlepage"><div><div><h2 className="title"><a id="ch02lvl2sec22"></a>Reusable components</h2></div></div></div>


<p className="it">Ahora que ya sabe lo que no sólo vinculantes en Vue.js datos es y cómo usarlo, sino también cómo funciona, es el momento de introducir otra característica de gran alcance Vue.js. Componentes creados con Vue.js se pueden utilizar y reutilizar en la aplicación como ladrillos a construir su casa de. Cada componente tiene su propio ámbito de estilos y encuadernaciones, siendo completamente aislado de los otros componentes.</p>

<p className="p">Now that you know not only what data binding in Vue.js is and how to use it, but also how it works, it is time to introduce another powerful Vue.js feature. Components created with Vue.js can be used and reused in the application as bricks you build your house of. Each component has its own scope of styles and bindings, being completely isolated from the other components.</p>


<p className="it">La sintaxis de creación de componentes es muy similar a la <code className="literal">Vue</code> creación de la instancia que ya sabemos, y se debe utilizar solamente <code className="literal">Vue.extend</code> en lugar de simplemente <code className="literal">Vue</code>:</p>

<p className="p">The component creation syntax is very similar to the <code className="literal">Vue</code> instance creation that we already know, and you should only use <code className="literal">Vue.extend</code> instead of just <code className="literal">Vue</code>:</p>


<pre className="programlisting"><code>{`var CustomComponent = Vue.extend({...}) 
`}</code></pre>



<div className="mediaobject"><img src="/static/image00244.jpeg"  alt="Reusable components"/></div>


<p className="it">Los componentes personalizados en Vue.js</p>

<p className="p">Custom components in Vue.js</p>


<p className="it">Vamos, por ejemplo, tratan de dividir nuestro código de lista de la compra en sus componentes. Como recordarán, nuestra lista de la compra se compone esencialmente de tres partes: la parte que contiene el elemento de la lista de compras, otra parte que contiene la entrada para la adición de nuevos elementos, y la tercera parte que permite cambiar el título de la lista de la compra:</p>

<p className="p">Let's, for example, try to divide our shopping list code into components. As you remember, our shopping list consists essentially of three parts: the part that contains the shopping list item, another part that contains the input for adding new items, and the third part that allows changing the title of the shopping list:</p>

<div className="mediaobject"><img src="/static/image00245.jpeg"  alt="Reusable components"/></div>




<p className="it">Tres partes esenciales de la aplicación de la lista de compras</p>

<p className="p">Three essential parts of the shopping list application</p>

<p className="it">Cambiemos el código de la aplicación para que utilice tres componentes, uno para cada parte.</p>

<p className="p">Let's change the code of the application so that it uses three components, one for each part.</p>



<p className="it">Nuestro código estaba mirando como el siguiente:</p>

<p className="p">Our code was looking like the following:</p>





<pre className="programlisting"><code>{`var data = { 
  items: [{ text: 'Bananas', checked: true },    
          { text: 'Apples', checked: false }], 
  title: 'My Shopping List', 
  newItem: '' 
}; 
 
new Vue({ 
  el: '#app', 
  data: data, 
  methods: { 
    addItem: function () { 
      var text; 
 
      text = this.newItem.trim(); 
      if (text) { 
        this.items.push({ 
          text: text, 
          checked: false 
        }); 
        this.newItem = ''; 
      } 
    } 
  } 
}); 
`}</code></pre>





<p className="it">Ahora vamos a crear tres componentes: <code className="literal">ItemsComponent</code>, <code className="literal">ChangeTitleComponent</code>, y <code className="literal">AddItemComponent</code>. Todos ellos tienen la <code className="literal">data</code> propiedad con el <code className="literal">data</code> objeto. El <code className="literal">addItem</code> método saltará de la principal <code className="literal">Vue</code> instancia para <code className="literal">ChangeTitleComponent</code>. Todo el HTML necesario irá de nuestro <code className="literal">index.html</code> archivo a cada uno de los componentes. Así que al final, nuestro principal guión se verá como la siguiente:</p>

<p className="p">Now we will create three components: <code className="literal">ItemsComponent</code>, <code className="literal">ChangeTitleComponent</code>, and <code className="literal">AddItemComponent</code>. All of them will have the <code className="literal">data</code> property with the <code className="literal">data</code> object. The <code className="literal">addItem</code> method will jump from the main <code className="literal">Vue</code> instance to <code className="literal">ChangeTitleComponent</code>. All the necessary HTML will go from our <code className="literal">index.html</code> file to each of the components. So in the end, our main script will look like the following:</p>






<pre className="programlisting"><code>{`var data = { 
  items: [{ text: 'Bananas', checked: true },
          { text: 'Apples', checked: false }], 
  title: 'My Shopping List', 
  newItem: '' 
}; 
 
/** 
 * Declaring components 
 */ 
var <span className="strong"><strong>ItemsComponent</strong></span> = Vue.extend({ 
  data: function () { 
    return data; 
  }, 
  template: '<ul>' + 
  '           <li v-for="item in items"
              :className="{ 'removed': item.checked }">' + 
  '             <div className="checkbox">' + 
  '               <label>' + 
  '                 <input type="checkbox"                       
                    v-model="item.checked"> {{ item.text }}' + 
  '               </label>' + 
  '             </div>' + 
  '           </li>' + 
  '         </ul>' 
}); 
var <span className="strong"><strong>ChangeTitleComponent</strong></span> = Vue.extend({ 
  data: function () { 
    return data; 
  }, 
  template: '<input v-model="title"/>' 
}); 
var <span className="strong"><strong>AddItemComponent</strong></span> = Vue.extend({ 
  data: function () { 
    return data; 
  }, 
  methods: { 
    addItem: function () { 
      var text; 
 
      text = this.newItem.trim(); 
      if (text) { 
        this.items.push({ 
          text: text, 
          checked: false 
        }); 
        this.newItem = ""; 
      } 
    } 
  }, 
  template: 
  '<div className="input-group">' + 
    '<input v-model="newItem" @keyup.enter="addItem"        
     placeholder="add shopping list item" type="text"       
     className="form-control">'  + 
    '<span className="input-group-btn">'  + 
    '  <button @click="addItem" className="btn btn-default"           
       type="button">Add!</button>'  + 
    '</span>'  + 
  '</div>' 
}); 
 
/** 
 * Registering components 
 */ 
<span className="strong"><strong>Vue.component('items-component', ItemsComponent); 
Vue.component('change-title-component', ChangeTitleComponent); 
Vue.component('add-item-component', AddItemComponent);</strong></span> 
/** 
 * Instantiating a Vue instance 
 */ 
new Vue({ 
  el: '#app', 
  data: data 
}); 
`}</code></pre>





<p className="it">¿Cómo podemos utilizar estos componentes dentro de la vista? Deberíamos reemplazar el markup correspondiente con la etiqueta del componente registrado. Nuestro margen de beneficio se parecía a lo siguiente:</p>

<p className="p">How do we use these components inside the View? We should just replace the corresponding markup with the tag of the registered component. Our markup looked like the following:</p>













<div className="mediaobject"><img src="/static/image00246.jpeg"  alt="Reusable components"/></div>







<p className="it">El markup de aplicaciones lista de compras con componentes definidos</p>

<p className="p">The shopping list application markup with defined components</p>













<p className="it">Por lo tanto, la primera área vamos a sustituir con el resaltado <code className="literal"><add-item-component></add-item-component></code> de etiquetas, la segunda con la <code className="literal"><items-component></items-component></code> etiqueta, y la tercera con la <code className="literal"><change-title-component></change-title-component></code> etiqueta. Por lo tanto, nuestro margen de beneficio enorme anteriormente ahora se ve como la siguiente:</p>

<p className="p">So, the first highlighted area we will replace with the <code className="literal"><add-item-component></add-item-component></code> tag, the second one with the <code className="literal"><items-component></items-component></code> tag, and the third one with the <code className="literal"><change-title-component></change-title-component></code> tag. Thus, our previously huge markup now looks like the following:</p>







<pre className="programlisting"><code>{`<div id="app" className="container"> 
  <h2>{{ title }}</h2> 
  <span className="strong"><strong><add-item-component></add-item-component> 
  <items-component></items-component></strong></span> 
  <div className="footer"> 
    <hr/> 
    <em>Change the title of your shopping list here</em> 
    <span className="strong"><strong><change-title-component></change-title-component></strong></span> 
  </div> 
</div> 
`}</code></pre>





<p className="it">Vamos a profundizar en los componentes en el siguiente capítulo y van a aprender de una manera aún más agradable de la estructuración de ellos. ¡Manténganse al tanto!</p>

<p className="p">We will go deeply into components in the next chapter and will learn an even nicer way of structuring them. Stay tuned!</p>







</div><div className="section" title="Vue.js directives"><div className="titlepage"><div><div><h2 className="title"><a id="ch02lvl2sec23"></a>Vue.js directives</h2></div></div></div>





<p className="it">Ya se ha explicado en el capítulo anterior lo directivas son y cómo se utilizan para mejorar el comportamiento de la aplicación.</p>

<p className="p">You have already learned in the previous chapter what directives are and how they are used to enhance the application's behavior.</p>













<p className="it">Ya has probado algunas directivas que permiten el enlace de datos de diferentes maneras a la capa de la vista ( <code className="literal">v-model</code>, <code className="literal">v-if</code>, <code className="literal">v-show</code>, etc.). Además de estas directivas predeterminadas, Vue.js te permite crear directivas personalizadas. Directivas personalizadas que proporcionan un mecanismo para permitir un comportamiento personalizado de DOM para la asignación de datos.</p>

<p className="p">You've already used some directives that allow data binding in different ways to the View layer (<code className="literal">v-model</code>, <code className="literal">v-if</code>, <code className="literal">v-show</code>, and so on). Besides these default directives, Vue.js allows you to create custom directives. Custom directives provide a mechanism to enable custom behavior of DOM to data mapping.</p>




<p className="it">Al registrar una directiva personalizada, podes proporcionar tres funciones: <code className="literal">bind</code>, <code className="literal">update</code>, y <code className="literal">unbind</code>. Dentro de la <code className="literal">bind</code> función, se podes conectar un detector de eventos para el elemento y hacer lo que hay que hacer allí. Dentro de la <code className="literal">update</code> función que recibe los valores antiguos y nuevos como parámetros, se podes definir un comportamiento personalizado de lo que debería ocurrir cuando cambian los datos. El <code className="literal">unbind</code> método proporciona todas las operaciones de limpieza necesarias (por ejemplo, separar los detectores de eventos).</p>

<p className="p">When registering a custom directive, you can provide three functions: <code className="literal">bind</code>, <code className="literal">update</code>, and <code className="literal">unbind</code>. Inside the <code className="literal">bind</code> function, you can attach an event listener to the element and do whatever needs to be done there. Inside the <code className="literal">update</code> function that receives old and new values as parameters, you can define a custom behavior of what should happen when data changes. The <code className="literal">unbind</code> method provides all the cleaning operations needed (for example, detach event listeners).</p>





<div className="note" title="Note"><h3 className="title"><a id="tip12"></a>Tip</h3>





<p className="it">En Vue 2.0, las directivas han reducido significativamente el alcance de la responsabilidad, ahora sólo se utilizan para aplicar manipulaciones DOM directos de bajo nivel. Guía cambiante de vue sugiere preferir el uso de componentes más directivas personalizadas (<a className="ulink" href="https://github.com/vuejs/vue/issues/2873">https://github.com/vuejs/vue/issues/2873</a> ).</p>

<p className="p">In Vue 2.0, directives have significantly reduced the scope of responsibility&mdash;now they are only used to apply low-level direct DOM manipulations. Vue's changing guide suggests to prefer using components over custom directives (
<a className="ulink" href="https://github.com/vuejs/vue/issues/2873">https://github.com/vuejs/vue/issues/2873</a>
).</p>







</div>





<p className="it">Por lo tanto, la versión completa de la directiva personalizada se vería como la siguiente:</p>

<p className="p">Thus, the full version of the custom directive would look like the following:</p>








<pre className="programlisting"><code>{`Vue.directive('my-directive', { 
  bind: function () { 
    // do the preparation work on element binding 
  }, 
  update: function (newValue, oldValue) { 
    // do something based on the updated value 
  }, 
  unbind: function () { 
    // do the clean-up work 
  } 
}) 
`}</code></pre>





<p className="it">La versión simplificada, en caso de que sólo tiene que hacer algo en la actualización del valor, sólo podes tener el <code className="literal">update</code> método que se podes pasar directamente como el segundo parámetro de la función directiva:</p>

<p className="p">The simplified version, in case you just need to do something on the value update, can only have the <code className="literal">update</code> method that can be passed directly as the second parameter of the directive function:</p>







<pre className="programlisting"><code>{`Vue.directive('my-directive', function (el, binding) { 
  // do something with binding.value 
}) 
`}</code></pre>





<p className="it">La teoría es buena, pero sin un pequeño ejemplo, resulta aburrido. Así que vamos a echar un vistazo a un ejemplo muy simple, que mostrará el cuadrado del número cada vez que se actualiza su valor.</p>

<p className="p">The theory is nice, but without a small example, it turns out boring. So let's have a look at a very simple example, which will show the square of the number each time its value is updated.</p>













<p className="it">Nuestra directiva personalizada se verá como la siguiente:</p>

<p className="p">Our custom directive will look like the following:</p>







<pre className="programlisting"><code>{`Vue.directive('square', function (el, binding) { 
  el.innerHTML = Math.pow(binding.value, 2); 
}); 
`}</code></pre>





<p className="it">Utilice esta directiva en el archivo de plantilla mediante el <code className="literal">v-</code> prefijo:</p>

<p className="p">Use this directive in your template file using the <code className="literal">v-</code> prefix:</p>







<pre className="programlisting"><code>{`<div v-square="item"></div> 
`}</code></pre>





<p className="it">Una instancia de la <code className="literal">Vue</code> instancia con el <code className="literal">item</code> de sus datos y tratar de cambiar el valor de <code className="literal">item</code>. Verá que el valor en el interior del <code className="literal">div</code> elemento mostrará inmediatamente el número cuadrado del valor cambiado. El código completo de esta directiva personalizada se podes encontrar en el jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/we07oxbd/">https://jsfiddle.net/chudaol/we07oxbd/</a> .</p>

<p className="p">Instantiate the <code className="literal">Vue</code> instance with <code className="literal">item</code> in its data and try to change the value of <code className="literal">item</code>. You will see that the value inside the <code className="literal">div</code> element will immediately display the square number of the changed value. The complete code for this custom directive can be found in the JSFiddle at 
<a className="ulink" href="https://jsfiddle.net/chudaol/we07oxbd/">https://jsfiddle.net/chudaol/we07oxbd/</a>
.</p>







</div><div className="section" title="Plugins in Vue.js"><div className="titlepage"><div><div><h2 className="title"><a id="ch02lvl2sec24"></a>Plugins in Vue.js</h2></div></div></div>





<p className="it">funcionalidad central de Vue, como ya hemos analizado, proporciona el enlace de datos declarativas y componentes de composición. Este comportamiento núcleo se ha mejorado con plugins que proporcionan un rico conjunto de funcionalidad. Hay varios tipos de plugins:</p>

<p className="p">Vue's core functionality, as we have already analyzed, provides declarative data binding and components composing. This core behavior is enhanced with plugins that provide a rich set of functionality. There are several types of plugins:</p>







<div className="itemizedlist"><ul className="itemizedlist"><li className="listitem">Plugins that add some global property or method (<code className="literal">vue-element</code>)</li><li className="listitem">Plugins that add some global assets (<code className="literal">vue-touch</code>)</li><li className="listitem">Plugins that add <code className="literal">Vue</code> instance methods attaching them to Vue's prototype</li><li className="listitem">Plugins that provide some external functionality or API (<code className="literal">vue-router</code>)</li></ul></div>





<p className="it">Plugins deben proporcionar un <code className="literal">install</code> método que tiene acceso a lo global <code className="literal">Vue</code> objeto que se podes mejorar y modificarlo. Para utilizar este plugin, Vue proporciona el <code className="literal">use</code> método que recibe casos plugins ( <code className="literal">Vue.use(SomePlugin)</code>).</p>

<p className="p">Plugins must provide an <code className="literal">install</code> method that has access to the global <code className="literal">Vue</code> object that can enhance and modify it. In order to use this plugin, Vue provides the <code className="literal">use</code> method that receives plugins instances (<code className="literal">Vue.use(SomePlugin)</code>).</p>







<div className="note" title="Note"><h3 className="title"><a id="tip13"></a>Tip</h3>





<p className="it">También podes escribir un plugin Vue de su propia para permitir un comportamiento personalizado para su <code className="literal">Vue</code> instancia.</p>

<p className="p">You can also write a Vue plugin of your own to enable custom behavior for your <code className="literal">Vue</code> instance.</p>







</div>





<p className="it">Usemos el ejemplo anterior directivas personalizadas y creación de un plugin que implementa minimalista plaza matemática y directivas de raíz cuadrada. Creá un archivo con el nombre <code className="literal">VueMathPlugin.js</code> y agregue el código siguiente:</p>

<p className="p">Let's use the previous custom directives example and create a minimalistic plugin that implements mathematical square and square root directives. Create a file named <code className="literal">VueMathPlugin.js</code> and add the following code:</p>







<pre className="programlisting"><code>{`export default { 
  <span className="strong"><strong>install</strong></span>: function (Vue) { 
    Vue.directive('square', function (el, binding) { 
      el.innerHTML = Math.pow(binding.value, 2); 
    }); 
    Vue.directive('sqrt', function (el, binding) { 
      el.innerHTML = Math.sqrt(binding.value); 
    }); 
  } 
}; 
`}</code></pre>





<p className="it">Ahora cree un archivo llamado <code className="literal">script.js</code>. Vamos a añadí el script principal de este archivo. En este script, vamos a importar tanto <code className="literal">Vue</code> y <code className="literal">VueMathPlugin</code>, y llamaremos de Vue <code className="literal">use</code> método con el fin de que lo utilice el plugin y llame el plug-in de <code className="literal">install</code> método. Luego sólo tendremos que iniciamos una <code className="literal">Vue</code> instancia como siempre lo hacemos:</p>

<p className="p">Now create a file called <code className="literal">script.js</code>. Let's add the main script to this file. In this script, we will import both <code className="literal">Vue</code> and <code className="literal">VueMathPlugin</code>, and will call Vue's <code className="literal">use</code> method in order to tell it to use the plugin and call the plugin's <code className="literal">install</code> method. Then we'll just initiate a <code className="literal">Vue</code> instance as we always do:</p>







<pre className="programlisting"><code>{`import Vue from 'vue/dist/vue.js'; 
import VueMathPlugin from './VueMathPlugin.js'; 
 
<span className="strong"><strong>Vue.use(VueMathPlugin);</strong></span> 
 
new Vue({ 
  el: '#app', 
  data: { item: 49 } 
}); 
`}</code></pre>





<p className="it">Ahora crear un <code className="literal">index.html</code> archivo que incluye el <code className="literal">main.js</code> archivo (vamos a construir con Browserify y Babelify). En este archivo, vamos a añadí una entrada usando la <code className="literal">v-model</code> directiva que se utiliza para cambiar el valor del elemento. Cree dos tramos utilizando <code className="literal">v-square</code> y <code className="literal">v-sqrt</code> directivas, así:</p>

<p className="p">Now create an <code className="literal">index.html</code> file that includes the <code className="literal">main.js</code> file (we will build it with Browserify and Babelify). In this file, let's add an input using the <code className="literal">v-model</code> directive that will be used to change the value of the item. Create two spans using <code className="literal">v-square</code> and <code className="literal">v-sqrt</code> directives as well:</p>







<pre className="programlisting"><code>{`<body> 
  <div id="app"> 
    <input v-model="item"/> 
    <hr> 
    <div>Square: <span <span className="strong"><strong>v-square="item"</strong></span>></span></div> 
    <div>Root: <span <span className="strong"><strong>v-sqrt="item"</strong></span>></span></div> 
  </div> 
  <script src="main.js"></script> 
</body> 
`}</code></pre>





<p className="it">Creá un <code className="literal">package.json</code> archivo para incluir las dependencias necesarias para la construcción del proyecto y añadí un guión para la construcción del <code className="literal">main.js</code> archivo:</p>

<p className="p">Create a <code className="literal">package.json</code> file to include the needed dependencies for building the project and add a script for building the <code className="literal">main.js</code> file:</p>







<pre className="programlisting"><code>{`{ 
  "name": "vue-custom-plugin", 
  "scripts": { 
    "build": <span className="strong"><strong>"browserify script.js -o main.js -t
       [ babelify --presets [ es2015 ] ]"</strong></span> 
  }, 
  "version": "0.0.1", 
  "devDependencies": { 
    "babel-preset-es2015": "^6.9.0", 
    "babelify": "^7.3.0", 
    "browserify": "^13.0.1", 
    "vue": "^2.0.3" 
  } 
} 
`}</code></pre>





<p className="it">Ahora instalar las dependencias y construir el proyecto de la línea de comandos:</p>

<p className="p">Now install the dependencies and build the project from the following command line:</p>







<pre className="programlisting"><code>{`
<span className="strong"><strong>npm install</strong></span>
<span className="strong"><strong>npm run build</strong></span>
`}</code></pre>





<p className="it">Abrir <code className="literal">index.html</code> en el navegador. Trate de cambiar el número en el cuadro de entrada. Ambos valores cuadrado y raíz cuadrada cambian de inmediato:</p>

<p className="p">Open <code className="literal">index.html</code> in the browser. Try to change the number in the input box. Both square and square root values change immediately:</p>





<div className="mediaobject"><img src="/static/image00247.jpeg"  alt="Plugins in Vue.js"/></div>



<p className="it">Los cambios en los datos se aplican inmediatamente a las directivas creadas como parte del complemento personalizado</p>

<p className="p">The changes in the data are applied immediately to the directives created as a part of custom plugin</p>




</div><div className="section" title="Exercise"><div className="titlepage"><div><div><h2 className="title"><a id="ch02lvl2sec25"></a>Exercise</h2></div></div></div>





<p className="it">Mejorar <code className="literal">MathPlugin</code> con funciones trigonométricas (seno, coseno, y tangente).</p>

<p className="p">Enhance <code className="literal">MathPlugin</code> with trigonometrical functions (sine, cosine, and tangent).</p>




<p className="it">Una posible solución a este ejercicio se podes encontrar en los <span className="emphasis"><em>anexos</em></span> .</p>

<p className="p">A possible solution to this exercise can be found in the <span className="emphasis"><em>Annexes</em></span>.</p>



</div><div className="section" title="Application state and Vuex"><div className="titlepage"><div><div><h2 className="title"><a id="ch02lvl2sec26"></a>Application state and Vuex</h2></div></div></div>





<p className="it">Cuando una aplicación alcanza un tamaño considerable, que podría ser necesario para nosotros para gestionar el estado de la aplicación mundial de alguna manera. Inspirado de Flujo (<a className="ulink" href="https://facebook.github.io/flux/">https://facebook.github.io/flux/</a> ), hay un módulo Vuex que nos permite gestionar y compartir el estado de la aplicación global entre los componentes Vue.</p>

<p className="p">When an application reaches a considerable size, it might become necessary for us to manage the global application state somehow. Inspired from Flux (
<a className="ulink" href="https://facebook.github.io/flux/">https://facebook.github.io/flux/</a>
), there is a Vuex module that allows us to manage and share the global application state among Vue components.</p>







<div className="note" title="Note"><h3 className="title"><a id="tip14"></a>Tip</h3>





<p className="it">No pensar en el estado de la aplicación como algo complejo y difícil de entender. De hecho, no es más que datos. Cada componente tiene sus propios datos, y el "estado de la aplicación" son datos que pueden ser fácilmente compartida entre todos los componentes!</p>

<p className="p">Do not think about the application state as something complex and difficult to understand. In fact, it is no more than just data. Each component has its own data, and "application state" is data that can be easily shared between all the components!</p>







</div>




<div className="mediaobject"><img src="/static/image00248.jpeg"  alt="Application state and Vuex"/></div>






<p className="it">Cómo tienda Vuex gestiona las actualizaciones de estado aplicaciones</p>

<p className="p">How Vuex store manages applications state updates</p>







<p className="it">Al igual que los otros plugins, con el fin de poder utilizar y crear una instancia de la tienda Vuex, es necesario instruir a Vue usarlo:</p>

<p className="p">Like the other plugins, in order to be able to use and to instantiate the Vuex store, you need to instruct Vue to use it:</p>








<pre className="programlisting"><code>{`import Vuex from 'vuex'; 
import Vue from 'vue'; 
 
Vue.use(Vuex); 
 
var store = new Vuex.Store({ 
  state: { <...> }, 
  mutations: { <...> } 
}); 
`}</code></pre>





<p className="it">Entonces, al inicializar el componente principal, asigne la instancia tienda para ella:</p>

<p className="p">Then, when initializing the main component, assign the store instance to it:</p>








<pre className="programlisting"><code>{`new Vue({ 
  components: components, 
  store: store 
}); 
`}</code></pre>





<p className="it">Ahora la aplicación principal y todos sus componentes son conscientes acerca de la tienda, tener acceso a los datos en su interior, y son capaces de desencadenar acciones en él en cualquier momento del ciclo de vida de la aplicación. Vamos a cavar profundamente en el estado de la aplicación en los siguientes capítulos.</p>

<p className="p">Now the main application and all its components are aware about the store, have access to the data inside it, and are able to trigger actions on it at any time of the application's life cycle. We will dig deeply into the application state in the next chapters.</p>







</div><div className="section" title="vue-cli"><div className="titlepage"><div><div><h2 className="title"><a id="ch02lvl2sec27"></a>vue-cli</h2></div></div></div>





<p className="it">Sí, Vue tiene su propia interfaz de línea de comandos. Nos permite inicializar una aplicación Vue con cualquier configuración que queremos. Podes inicializar con webpack repetitivo, con Browserify repetitivo, o simplemente con un simple repetitivo que sólo crea un archivo HTML y prepara todo para que usted pueda empezar a trabajar con Vue.js.</p>

<p className="p">Yes, Vue has its own command-line interface. It allows us to initialize a Vue application with whatever configuration we want. You can initialize it with Webpack boilerplate, with Browserify boilerplate, or just with a simple boilerplate that just creates an HTML file and prepares everything for you to start working with Vue.js.</p>













<p className="it">Instalarlo con <code className="literal">npm</code>:</p>

<p className="p">Install it with <code className="literal">npm</code>:</p>







<pre className="programlisting"><code>{`
<span className="strong"><strong>npm install -g vue-cli</strong></span>
`}</code></pre>



<p className="it">Las diferentes formas de inicializar una aplicación son los siguientes:</p>

<p className="p">The different ways of initializing an application are as follows:</p>







<pre className="programlisting"><code>{`
<span className="strong"><strong>vue init webpack</strong></span>
<span className="strong"><strong>vue init webpack-simple</strong></span>
<span className="strong"><strong>vue init browserify</strong></span>
<span className="strong"><strong>vue init browserify-simple</strong></span>
<span className="strong"><strong>vue init simple</strong></span>
`}</code></pre>





<p className="it">Para ver la diferencia, vamos a correr <code className="literal">vue init</code> con el simple plantilla y con la plantilla webpack, y un vistazo a las diferencias en la estructura generada. Lo que sigue es la forma en la salida difiere de los dos comandos:</p>

<p className="p">To see the difference, let's run <code className="literal">vue init</code> with the simple template and with the Webpack template, and look at the differences in the generated structure. Following is how the output differs from both commands:</p>




<div className="mediaobject"><img src="/static/image00249.jpeg"  alt="vue-cli"/></div>





<p className="it">La salida del webpack comandos init y vue vue init sencilla</p>

<p className="p">The output from the commands vue init webpack and vue init simple</p>













<p className="it">La siguiente es la forma en la estructura de la aplicación es diferente:</p>

<p className="p">The following is how the application structure differs:</p>






<div className="mediaobject"><img src="/static/image00250.jpeg"  alt="vue-cli"/></div>



<p className="it">La diferencia en la estructura en la aplicación de andamiaje con vue init init simple y vue webpack</p>

<p className="p">The difference in structure in application scaffolded with vue init simple and vue init webpack</p>




<p className="it">El <code className="literal">index.html</code> archivo de la configuración sencilla ya contiene Vue.js de la CDN, por lo que si usted sólo tiene que hacer algo muy simple, como la creación de prototipos rápida, utilice éste.</p>

<p className="p">The <code className="literal">index.html</code> file in the simple configuration already contains Vue.js from the CDN, so if you just need to do something really simple such as quick prototyping, use this one.</p>



<p className="it">Pero si sos tá a punto de comenzar un complejo <span className="strong"><strong>Aplicación Una sola página</strong></span> ( <span className="strong"><strong>SPA</strong></span> proyecto) que requerirá pruebas y carga caliente durante el desarrollo, utilizar la configuración webpack o Browserify.</p>

<p className="p">But if you are about to start a complex <span className="strong"><strong>Single Page Application</strong></span> (<span className="strong"><strong>SPA</strong></span>) project that will require testing and hot reloading during development, use the Webpack or Browserify configuration.</p>



</div><div className="section" title="Vue plugins for IDEs"><div className="titlepage"><div><div><h2 className="title"><a id="ch02lvl2sec28"></a>Vue plugins for IDEs</h2></div></div></div>


<p className="it">Hay plugins para la sintaxis destacando Vue para algunos entornos de desarrollo más importantes. Los dejo con los enlaces a la más elegante de ellos:</p>

<p className="p">There are plugins for Vue syntax highlighting for some major IDEs. I will leave you with the links to the fanciest of them:</p>

<div className="informaltable"><table border="1"><colgroup><col></col><col></col></colgroup><tbody><tr><td>
<p className="p">
<span className="strong"><strong>IDE</strong></span>
</p>

</td><td>

<p className="p">
<span className="strong"><strong>Link to the Vue plugin</strong></span>
</p>

</td></tr><tr><td>

<p className="p">Sublime</p>

</td><td>

<p className="p">
<a className="ulink" href="https://github.com/vuejs/vue-syntax-highlight">https://github.com/vuejs/vue-syntax-highlight</a>
</p>

</td></tr><tr><td>

<p className="p">Webstorm</p>

</td><td>

<p className="p">
<a className="ulink" href="https://github.com/postalservice14/vuejs-plugin">https://github.com/postalservice14/vuejs-plugin</a>
</p>

</td></tr><tr><td>

<p className="p">Atom</p>

</td><td>

<p className="p">

<a className="ulink" href="https://github.com/hedefalk/atom-vue">https://github.com/hedefalk/atom-vue</a>

</p>

</td></tr><tr><td>

<p className="p">Visual Studio Code</p>

</td><td>

<p className="p">

<a className="ulink" href="https://github.com/LiuJi-Jim/vscode-vue">https://github.com/LiuJi-Jim/vscode-vue</a>

</p>

</td></tr><tr><td>



<p className="p">vim</p>


</td><td>

<p className="p">

<a className="ulink" href="https://github.com/posva/vim-vue">https://github.com/posva/vim-vue</a>

</p>

</td></tr><tr><td>

<p className="p">Brackets</p>


</td><td>

<p className="p">

<a className="ulink" href="https://github.com/pandao/brackets-vue">https://github.com/pandao/brackets-vue</a>

</p>

</td></tr></tbody></table></div></div></div>
<div className='col-md-3'></div>
  
  </div>  
   </div>

   <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Installing, using, and debugging a Vue.js application</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Installing, using, and debugging a Vue.js application"><div class="titlepage" id="aid-TI1E2"><div><div><h1 className="title"><a id="ch02lvl1sec22"></a>Installing, using, and debugging a Vue.js application</h1></div></div></div>

<p className="it">En esta sección, vamos a analizar todas las posibles formas de instalar Vue.js. También vamos a crear un esqueleto para nuestras aplicaciones que vamos a desarrollar y mejorar a través de los siguientes capítulos. También vamos a aprender las formas de depurar y probar nuestras aplicaciones.</p>

<p className="p">In this section, we will analyze all the possible ways of installing Vue.js. We will also create a skeleton for our applications that we will develop and enhance through the next chapters. We will also learn the ways of debugging and testing our applications.</p>


<div className="section" title="Installing Vue.js"><div className="titlepage"><div><div><h2 class="title"><a id="ch02lvl2sec29"></a>Installing Vue.js</h2></div></div></div>


<p className="it">Hay un número de maneras de instalar Vue.js. A partir de clásico, incluyendo el script descargado en HTML dentro de las <code className="literal">&lt;script&gt;</code> etiquetas, utilizando herramientas como la glorieta, la NGP, o una interfaz de línea de comandos de Vue ( <code className="literal">vue-cli</code>), para arrancar toda la aplicación.</p>

<p className="p">There are a number of ways to install Vue.js. Starting from classic, including the downloaded script into HTML within the <code class="literal">&lt;script&gt;</code> tags, using tools like bower, npm, or Vue's command-line interface (<code class="literal">vue-cli</code>), to bootstrap the whole application.</p>
















<p className="it">Vamos a echar un vistazo a todos estos métodos y elegir nuestro favorito. En todos estos ejemplos, nos limitaremos a mostrar un encabezado en un dicho página <strong className="userinput"><code>Learning Vue.js</code></strong>.</p>

<p className="p">Let's have a look at all these methods and choose our favorite. In all these examples, we will just show a header on a page saying <strong class="userinput"><code>Learning Vue.js</code></strong>.</p>










<div className="section" title="Standalone"><div className="titlepage"><div><div><h3 class="title"><a id="ch02lvl3sec0"></a>Standalone</h3></div></div></div>





<p className="it">Descargar el <code className="literal">vue.js</code> archivo. Hay dos versiones, la versión miniaturizada y desarrollador. La versión de desarrollo está en <a className="ulink" href="https://vuejs.org/js/vue.js">https://vuejs.org/js/vue.js</a> . La versión minified está en <a className="ulink" href="https://vuejs.org/js/vue.min.js">https://vuejs.org/js/vue.min.js</a> .</p>

<p className="p">Download the <code class="literal">vue.js</code> file. There are two versions, minified and developer version. The development version is at 
<a class="ulink" href="https://vuejs.org/js/vue.js">https://vuejs.org/js/vue.js</a>
. The minified version is at 
<a class="ulink" href="https://vuejs.org/js/vue.min.js">https://vuejs.org/js/vue.min.js</a>
.</p>










<div class="note" title="Note"><h3 class="title"><a id="tip15"></a>Tip</h3>





<p className="it">Si está desarrollando, asegurate de usar la versión de desarrollo no minified de Vue. Le encantará los buenos consejos y advertencias en la consola.</p>

<p className="p">If you are developing, make sure you use the development non-minified version of Vue. You will love the nice tips and warnings on the console.</p>










</div>





<p className="it">A continuación, basta con incluir <code className="literal">vue.js</code> en las <code className="literal">&lt;script&gt;</code> etiquetas, de la siguiente manera:</p>

<p className="p">Then just include <code class="literal">vue.js</code> in the <code class="literal">&lt;script&gt;</code> tags, as follows:</p>










<pre className="programlisting"><code>{`<script src="vue.js"></script> 
`}</code></pre>





<p className="it">Vue se ha registrado en la variable global. Ya está listo para usarlo.</p>

<p className="p">Vue is registered in the global variable. You are ready to use it.</p>
















<p className="it">Nuestro ejemplo a continuación, busque tan simple como la siguiente:</p>

<p className="p">Our example will then look as simple as the following:</p>










<pre className="programlisting"><code>{`  <div id="app"> 
    <h1>{{ message }}</h1> 
  </div> 
  <span class="strong"><strong><script src="vue.js"></script></strong></span> 
  <script> 
     var data = { 
       message: 'Learning Vue.js' 
     }; 
 
     new Vue({ 
       el: '#app', 
       data: data 
     }); 
  </script> 
`}</code></pre></div><div className="section" title="CDN"><div className="titlepage"><div><div><h3 class="title"><a id="ch02lvl3sec1"></a>CDN</h3></div></div></div>





<p className="it">Vue.js está disponible en los siguientes CDN:</p>

<p className="p">Vue.js is available in the following CDNs:</p>










<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem"><span class="strong"><strong>jsdelivr</strong></span>: 
<a class="ulink" href="https://cdn.jsdelivr.net/vue/2.0.3/vue.js">https://cdn.jsdelivr.net/vue/2.0.3/vue.js</a></li><li className="listitem"><span class="strong"><strong>cdnjs</strong></span>: 
<a class="ulink" href="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js">https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js</a></li><li className="listitem"><span class="strong"><strong>unpkg</strong></span>: 
<a class="ulink" href="https://unpkg.com/vue@2.0.3/dist/vue.js">https://unpkg.com/vue@2.0.3/dist/vue.js</a> (recommended)
</li></ul></div>





<p className="it">Sólo hay que poner la URL de origen en la <code className="literal">script</code> etiqueta y ya está listo para usar Vue!</p>

<p className="p">Just put the URL in source in the <code class="literal">script</code> tag and you are ready to use Vue!</p>










<pre className="programlisting"><code>{`<script src="  https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js"></script> 
`}</code></pre><div class="note" title="Note"><h3 class="title"><a id="tip16"></a>Tip</h3>





<p className="it">Cuidado con la versión de CDN no esté sincronizada con la última versión disponible de Vue.</p>

<p className="p">Beware the CDN version might not be synchronized with the latest available version of Vue.</p>










</div>





<p className="it">Por lo tanto, el ejemplo se verá exactamente el mismo que en la versión independiente, pero en lugar de utilizar el archivo descargado en las <code className="literal">&lt;script&gt;</code> etiquetas, estamos utilizando una URL de CDN.</p>

<p className="p">Thus, the example will look exactly the same as in the standalone version, but instead of using downloaded file in the <code className="literal">&lt;script&gt;</code> tags, we are using a CDN URL.</p>










</div><div className="section" title="Bower"><div className="titlepage"><div><div><h3 class="title"><a id="ch02lvl3sec2"></a>Bower</h3></div></div></div>





<p className="it">si ya estás gestionando su aplicación con Bower y no desea utilizar otras herramientas, también hay una distribución de Bower Vue. Sólo tiene que llamar <code className="literal">bower install</code>:</p>

<p className="p">If you are already managing your application with Bower and don't want to use other tools, there's also a Bower distribution of Vue. Just call <code class="literal">bower install</code>:</p>










<pre className="programlisting"><code>{`
<span class="strong"><strong># latest stable release</strong></span>
<span class="strong"><strong>bower install vue</strong></span>
`}</code></pre>





<p className="it">Nuestro ejemplo se verá exactamente igual que los dos ejemplos anteriores, pero incluirá el archivo de la <code className="literal">bower</code> carpeta:</p>

<p className="p">Our example will look exactly like the two previous examples, but it will include the file from the <code class="literal">bower</code> folder:</p>










<pre className="programlisting"><code>{`<script src="bower_components/vue/dist/vue.js"></script> 
`}</code></pre></div><div className="section" title="CSP-compliant"><div className="titlepage"><div><div><h3 class="title"><a id="ch02lvl3sec3"></a>CSP-compliant</h3></div></div></div>





<p className="it"> <span className="strong"><strong>Política de Seguridad de Contenido</strong></span> (<span className="strong"><strong> CSP</strong></span> ) es un estándar de seguridad que proporciona un conjunto de reglas que deben ser obedecidas por la aplicación con el fin de prevenir los ataques de seguridad. Si está desarrollando aplicaciones para navegadores, ya debes estar familiarizado con esta política!</p>

<p className="p">
<span class="strong"><strong>Content Security Policy</strong></span> (<span class="strong"><strong>CSP</strong></span>) is a security standard that provides a set of rules that must be obeyed by the application in order to prevent security attacks. If you are developing applications for browsers, you are likely familiar with this policy!</p>
















<p className="it">Para los entornos que requieren guiones CSP-compatibles, hay una versión especial de Vue.js en <a className="ulink" href="https://github.com/vuejs/vue/tree/csp/dist">https://github.com/vuejs/vue/tree/csp/dist</a> .</p>

<p className="p">For the environments that require CSP-compliant scripts, there's a special version of Vue.js at 
<a class="ulink" href="https://github.com/vuejs/vue/tree/csp/dist">https://github.com/vuejs/vue/tree/csp/dist</a>
.</p>
















<p className="it">Vamos a hacer nuestro ejemplo como una aplicación de Chrome para ver el CSP compatible Vue.js en acción!</p>

<p className="p">Let's do our example as a Chrome application to see the CSP-compliant Vue.js in action!</p>
















<p className="it">Para comenzar, cree una carpeta para nuestro ejemplo de aplicación. Lo más importante en una aplicación de Chrome es el <code className="literal">manifest.json</code> archivo, que describe su aplicación. Vamos a crear la misma. Debe tener un aspecto como el siguiente:</p>

<p className="p">Start by creating a folder for our application example. The most important thing in a Chrome application is the <code class="literal">manifest.json</code> file, which describes your application. Let's create it. It should look like the following:</p>










<pre className="programlisting"><code>{`{ 
  "manifest_version": 2, 
  "name": "Learning Vue.js", 
  "version": "1.0", 
  "minimum_chrome_version": "23", 
  "icons": { 
    "16": "icon_16.png", 
    "128": "icon_128.png" 
  }, 
  "app": { 
    "background": { 
      "scripts": ["main.js"] 
    } 
  } 
} 
`}</code></pre>





<p className="it">El siguiente paso es crear nuestro <code className="literal">main.js</code> archivo, que será el punto de entrada para la aplicación Chrome. El script debe escuchar para el inicio de aplicaciones y abrir una nueva ventana con tamaños dados. Vamos a crear una ventana de 500 x 300 tamaño y abrirlo con <code className="literal">index.html</code>:</p>

<p className="p">The next step is to create our <code class="literal">main.js</code> file, which will be the entry point for the Chrome application. The script should listen for the application launching and open a new window with given sizes. Let's create a window of 500 x 300 size and open it with <code class="literal">index.html</code>:</p>










<pre className="programlisting"><code>{`chrome.app.runtime.onLaunched.addListener(function() { 
  // Center the window on the screen. 
  var screenWidth = screen.availWidth; 
  var screenHeight = screen.availHeight; 
  var width = 500; 
  var height = 300; 
 
  chrome.app.window.create(<span class="strong"><strong>"index.html"</strong></span>, { 
    id: "learningVueID", 
    outerBounds: { 
      width: width, 
      height: height, 
      left: Math.round((screenWidth-width)/2), 
      top: Math.round((screenHeight-height)/2) 
    } 
  }); 
}); 
`}</code></pre>





<p className="it">En este punto, la magia aplicación específica Chrome ha terminado y ahora que se acaba de crear nuestro <code className="literal">index.html</code> archivo que va a hacer lo mismo que en los ejemplos anteriores. Se incluirá el <code className="literal">vue.js</code> archivo y nuestro script, en donde vamos a inicializar nuestra aplicación Vue:</p>

<p className="p">At this point, the Chrome-specific application magic is over and now we shall just create our <code class="literal">index.html</code> file that will do the same thing as in the previous examples. It will include the <code class="literal">vue.js</code> file and our script, where we will initialize our Vue application:</p>










<pre className="programlisting"><code>{`<html lang="en"> 
<head> 
    <meta charset="UTF-8"> 
    <title>Vue.js - CSP-compliant</title> 
</head> 
<body> 
<div id="app"> 
    <h1>{{ message }}</h1> 
</div> 
<script src="assets/vue.js"></script> 
<script src="assets/app.js"></script> 
</body> 
</html> 
`}</code></pre>





<p className="it">Descargar la versión compatible del CSP-Vue.js y agregarlo a la <code className="literal">assets</code> carpeta.</p>

<p className="p">Download the CSP-compliant version of Vue.js and add it to the <code class="literal">assets</code> folder.</p>
















<p className="it">Ahora vamos a crear el <code className="literal">app.js</code> archivo y agregue el código que ya había escrito varias veces añadido:</p>

<p className="p">Now let's create the <code class="literal">app.js</code> file and add the code that we already wrote added several times:</p>










<pre className="programlisting"><code>{`var data = { 
  message: "Learning Vue.js" 
}; 
 
new Vue({ 
  el: "#app", 
  data: data 
}); 
`}</code></pre>





<p className="it">Agregarlo a la <code className="literal">assets</code> carpeta.</p>

<p className="p">Add it to the <code class="literal">assets</code> folder.</p>
















<p className="it">No se olvide de crear dos iconos de 16 y 128 píxeles y llamarlos <code className="literal">icon_16.png</code> y <code className="literal">icon_128.png</code>, respectivamente.</p>

<p className="p">Do not forget to create two icons of 16 and 128 pixels and call them <code class="literal">icon_16.png</code> and <code class="literal">icon_128.png</code>, respectively.</p>
















<p className="it">Su código y la estructura en el final debe ser más o menos como la siguiente:</p>

<p className="p">Your code and structure in the end should look more or less like the following:</p>







<div class="mediaobject"><img src="/static/image00251.jpeg" width="100%" alt="CSP-compliant"/></div>




<p className="it">Estructura y código para la aplicación Chrome muestra usando vue.js</p>

<p className="p">Structure and code for the sample Chrome application using vue.js</p>






<p className="it">Y ahora lo más importante. Vamos a ver si funciona! Es muy, muy simple:</p>

<p className="p">And now the most important thing. Let's check if it works! It is very, very simple:</p>










<div class="orderedlist"><ol class="orderedlist arabic"><li className="listitem">Go to 
<code class="literal">chrome://extensions/url</code>
 in your Chrome browser.</li><li className="listitem">Check the <strong class="userinput"><code>Developer mode</code></strong> checkbox.</li><li className="listitem">Click on <strong class="userinput"><code>Load unpacked extension...</code></strong> and check the folder that we've just created.</li><li className="listitem">Your app will appear in the list! Now just open a new tab, click on apps, and check that your app is there. Click on it!</li></ol></div>





<div class="mediaobject"><img src="/static/image00252.jpeg" width="100%" alt="CSP-compliant"/></div>


<p className="it">aplicación Chrome muestra usando vue.js en la lista de aplicaciones de Chrome</p>

<p className="p">Sample Chrome application using vue.js in the list of Chrome apps</p>
















<p className="it">¡Felicitaciones! Acaba de crear una aplicación de Chrome!</p>

<p className="p">Congratulations! You have just created a Chrome application!</p>










</div><div className="section" title="npm"><div className="titlepage"><div><div><h3 class="title"><a id="ch02lvl3sec4"></a>npm</h3></div></div></div>





<p className="it">El <code className="literal">npm</code> se recomienda el método de instalación para aplicaciones a gran escala. Sólo tiene que ejecutar <code className="literal">npm install vue</code> la siguiente manera:</p>

<p className="p">The <code class="literal">npm</code> installation method is recommended for large-scale applications. Just run <code class="literal">npm install vue</code> as follows:</p>










<pre className="programlisting"><code>{`
<span class="strong"><strong># latest stable release</strong></span>
<span class="strong"><strong>npm install vue</strong></span>
<span class="strong"><strong># latest stable CSP-compliant release</strong></span>
<span class="strong"><strong>npm install vue@csp</strong></span>
`}</code></pre>





<p className="it">A continuación, se requerirá:</p>

<p className="p">Then require it:</p>










<pre className="programlisting"><code>{`
<span class="strong"><strong>var Vue = require("vue");</strong></span>
`}</code></pre>





<p className="it">O, para los amantes de la ES2015, ejecute el siguiente:</p>

<p className="p">Or, for ES2015 lovers, run the following:</p>










<pre className="programlisting"><code>{`
<span class="strong"><strong>import Vue from "vue";</strong></span>
`}</code></pre>





<p className="it">Nuestra HTML se verá exactamente igual que en los ejemplos anteriores:</p>

<p className="p">Our HTML will look exactly like in the previous examples:</p>










<pre className="programlisting"><code>{`<html lang="en"> 
<head> 
  <meta charset="UTF-8"> 
  <title>Vue.js - NPM Installation</title> 
</head> 
<body> 
  <div id="app"> 
    <h1>{{ message }}</h1> 
  </div> 
  <script src=<span class="strong"><strong>"main.js"</strong></span>></script> 
</body> 
</html> 
`}</code></pre>





<p className="it">Ahora vamos a crear un <code className="literal">script.js</code> archivo que se ven casi exactamente el mismo que en una versión independiente o CDN, con la única diferencia de que se requerirá <code className="literal">vue.js</code>:</p>

<p className="p">Now let's create a <code class="literal">script.js</code> file that will look almost exactly the same as in a standalone or CDN version, with the only difference being that it will require <code class="literal">vue.js</code>:</p>










<pre className="programlisting"><code>{`
<span class="strong"><strong>var Vue = require('vue/dist/vue.js');</strong></span> 
 
var data = { 
  message: 'Learning Vue.js' 
}; 
 
new Vue({ 
  el: '#app', 
  data: data 
}); 
`}</code></pre>





<p className="it">Vamos a instalar Vue y Browserify con el fin de ser capaz de compilar nuestro <code className="literal">script.js</code> archivo en el <code className="literal">main.js</code> archivo:</p>

<p className="p">Let's install Vue and Browserify in order to be able to compile our <code class="literal">script.js</code> file into the <code class="literal">main.js</code> file:</p>










<pre className="programlisting"><code>{`
<span class="strong"><strong>npm install vue --save-dev</strong></span>
<span class="strong"><strong>npm install browserify --save-dev</strong></span>
`}</code></pre>





<p className="it">En el <code className="literal">package.json</code> archivo, agregue un guión para construir, así que se ejecutará en Browserify <code className="literal">script.js</code> transpiling en <code className="literal">main.js</code>. Así que nuestro <code className="literal">package.json</code> archivo se verá como la siguiente:</p>

<p className="p">In the <code class="literal">package.json</code> file, add a script for build as well that will execute Browserify on <code class="literal">script.js</code> transpiling it into <code class="literal">main.js</code>. So our <code class="literal">package.json</code> file will look like the following:</p>










<pre className="programlisting"><code>{`{ 
  "name": "learningVue", 
  "scripts": { 
    "build": "browserify script.js -o main.js" 
  }, 
  "version": "0.0.1", 
  "devDependencies": { 
    "browserify": "^13.0.1", 
    "vue": "^2.0.3" 
  } 
} 
`}</code></pre>





<p className="it">Ahora ejecute el siguiente comando:</p>

<p className="p">Now run the following command:</p>










<pre className="programlisting"><code>{`
<span class="strong"><strong>npm run build</strong></span>
`}</code></pre>





<p className="it">Y abierto <code className="literal">index.html</code> en el navegador.</p>

<p className="p">And open <code class="literal">index.html</code> in the browser.</p>
















<p className="it">Tengo un amigo que en este punto sería decir algo como: ¿de verdad? Por lo tanto la cantidad de pasos, las instalaciones, los comandos, las explicaciones ... Justo a la salida de algunos de cabecera? ¡Estoy fuera!</p>

<p className="p">I have a friend that at this point would say something like: really? So many steps, installations, commands, explanations... Just to output some header? I'm out!</p>
















<p className="it">Si también está pensando en esto, espere. Sí, esto es cierto, ahora hemos hecho algo muy simple de una manera bastante compleja, pero si te quedas conmigo un poco más de tiempo, verá cómo las cosas se convierten en complejos fácil de implementar si utilizamos las herramientas adecuadas. Además, no se olvide de comprobar el temporizador Pomodoro, quizás es el momento de tomar un descanso!</p>

<p className="p">If you are also thinking this, wait. Yes, this is true, now we've done something really simple in a rather complex way, but if you stay with me a bit longer, you will see how complex things become easy to implement if we use the proper tools. Also, do not forget to check your Pomodoro timer, maybe it's time to take a rest!</p>

</div><div className="section" title="vue-cli"><div className="titlepage"><div><div><h3 class="title"><a id="ch02lvl3sec5"></a>vue-cli</h3></div></div></div>

<p className="it">Como ya hemos mencionado en el capítulo anterior, Vue ofrece su propia interfaz de línea de comandos que permite a las aplicaciones de programa previo de una sola página utilizando flujos de trabajo lo desea. Proporciona inmediatamente recarga caliente y estructura para un entorno basado en pruebas. Después de la instalación <code className="literal">vue-cli</code>, basta con ejecutar <code className="literal">vue init &lt;desired boilerplate&gt; &lt;project-name&gt;</code> a continuación, sólo tiene que instalar y ejecutar:</p>

<p className="p">As we have already mentioned in the previous chapter, Vue provides its own command-line interface that allows bootstrapping single-page applications using whatever workflows you want. It immediately provides hot reloading and structure for a test-driven environment. After installing <code class="literal">vue-cli</code>, just run <code class="literal">vue init &lt;desired boilerplate&gt; &lt;project-name&gt;</code> and then just install and run:</p>

<pre className="programlisting"><code>{`
<span class="strong"><strong># install vue-cli</strong></span>
<span class="strong"><strong>$ npm install -g vue-cli</strong></span>
<span class="strong"><strong># create a new project</strong></span>
<span class="strong"><strong>$ vue init webpack learn-vue</strong></span>
<span class="strong"><strong># install and run</strong></span>
<span class="strong"><strong>$ cd learn-vue</strong></span>
<span class="strong"><strong>$ npm install</strong></span>
<span class="strong"><strong>$ npm run dev </strong></span>
`}</code></pre>

<p className="it">Ahora abra su navegador en <code className="literal">localhost:8080</code>. Que acaba de utilizar <code className="literal">vue-cli</code> para su aplicación andamio. Vamos a adaptarla a nuestro ejemplo. Abrir una carpeta de origen. En la <code className="literal">src</code> carpeta, te encontras  un <code className="literal">App.vue</code> archivo. ¿Recuerdas que hablamos de componentes Vue que son como los ladrillos desde el que se construye su aplicación? ¿Recuerdas que estábamos creando y registrarlas dentro de nuestro archivo principal de la escritura, y yo mencionamos que vamos a aprender a construir los componentes de una manera más elegante? Felicitaciones, sos tá buscando en el componente construido en una forma elegante!</p>

<p className="p">Now open your browser on <code class="literal">localhost:8080</code>. You just used <code class="literal">vue-cli</code> to scaffold your application. Let's adapt it to our example. Open a source folder. In the <code class="literal">src</code> folder, you will find an <code class="literal">App.vue</code> file. Do you remember we talked about Vue components that are like bricks from which you build your application? Do you remember that we were creating and registering them inside our main script file, and I mentioned that we will learn to build components in a more elegant way? Congratulations, you are looking at the component built in a fancy way!</p>

<p className="it">Busque la línea que dice <code className="literal">import Hello from './components/Hello'</code>. Esto es exactamente cómo los componentes se reutilizan dentro de otros componentes. Echar un vistazo a la plantilla en la parte superior del archivo de componente. En algún momento, que contiene la <code className="literal"><hello></hello></code> etiqueta. Esto es exactamente donde en nuestro HTML el archivo <code className="literal">hello</code> aparecerá componente. Echar un vistazo a este componente; que te encontras  en la <code className="literal">src/components</code> carpeta. Como se podes ver, que contiene una plantilla con <code>{`{{ msg }}`}</code> y una secuencia de comandos que exporta datos con definido <code className="literal">msg</code>. Esto es exactamente lo mismo que hacíamos en nuestros ejemplos anteriores sin necesidad de utilizar componentes. Vamos a modificar ligeramente el código para que sea el mismo que en los ejemplos anteriores. En el <code className="literal">Hello.vue</code> archivo, cambie <code className="literal">msg</code> en el <code className="literal">data</code> objeto:</p>

<p className="p">Find the line that says <code class="literal">import Hello from './components/Hello'</code>. This is exactly how the components are being reused inside other components. Have a look at the template at the top of the component file. At some point, it contains the <code class="literal"><hello></hello></code> tag. This is exactly where in our HTML file the <code class="literal">hello</code> component will appear. Have a look at this component; it is in the <code class="literal">src/components</code> folder. As you can see, it contains a template with <code>{`{{ msg }}`}</code> and a script that exports data with defined <code class="literal">msg</code>. This is exactly the same as we were doing in our previous examples without using components. Let's slightly modify the code to make it the same as in the previous examples. In the <code class="literal">Hello.vue</code> file, change <code class="literal">msg</code> in the <code class="literal">data</code> object:</p>

<pre className="programlisting"><code>{`<script> 
export default { 
  data () { 
    return { 
   msg: <span class="strong"><strong>"Learning Vue.js"</strong></span> 
    } 
  } 
} 
</script> 
`}</code></pre>

<p className="it">En el <code className="literal">App.vue</code> componente, retire todo, desde la plantilla, excepto la <code className="literal">hello</code> etiqueta de modo que la plantilla tiene el siguiente aspecto:</p>

<p className="p">In the <code class="literal">App.vue</code> component, remove everything from the template except the <code class="literal">hello</code> tag so that the template looks like the following:</p>

<pre className="programlisting"><code>{`<template> 
  <div id="app"> 
    <hello></hello> 
  </div> 
</template> 
`}</code></pre>


<p className="it">Ahora bien, si se vuelve a ejecutar la aplicación, verá nuestro ejemplo con hermosas estilos que no toque:</p>

<p className="p">Now if you rerun the application, you will see our example with beautiful styles that we didn't touch:</p>

<div class="mediaobject"><img src="/static/image00253.jpeg" width="100%" alt="vue-cli"/></div>

<p className="it">aplicación Vue bootstrap usando vue-cli</p>

<p className="p">Vue application bootstrapped using vue-cli</p>

<div class="note" title="Note"><h3 class="title"><a id="tip17"></a>Tip</h3>


<p className="it">Además plantilla Webpack boilerplate, podes utilizar las siguientes configuraciones con tu <code className="literal">vue-cli</code>:</p>

<p className="p">Besides Webpack boilerplate template, you can use the following configurations with your <code class="literal">vue-cli</code>:</p>

</div><div class="itemizedlist"><ul className="itemizedlist"><li className="listitem"><code class="literal">webpack-simple</code>: A simple Webpack + vue-loader setup for quick prototyping</li><li className="listitem"><code class="literal">browserify</code>: A full-featured Browserify + Vueify setup with hot-reload, linting, and unit testing</li><li className="listitem"><code class="literal">browserify-simple</code>: A simple Browserify + Vueify setup for quick prototyping</li><li className="listitem"><code class="literal">simple</code>: The simplest possible Vue setup in a single HTML file</li></ul></div></div><div className="section" title="Dev build"><div className="titlepage"><div><div><h3 class="title"><a id="ch02lvl3sec6"></a>Dev build</h3></div></div></div>

<p className="it">Mi querido lector, puedo ver sus ojos brillantes y puedo leer tu mente. Ahora que ya sabe cómo instalar y utilizar Vue.js y cómo funciona, que debe de poner sus manos profundamente en el código del núcleo y contribuir!</p>

<p className="p">My dear reader, I can see your shining eyes and I can read your mind. Now that you know how to install and use Vue.js and how it works, you definitely want to put your hands deeply into the core code and contribute!</p>

<p className="it">Te entiendo. Para ello, es necesario utilizar la versión de desarrollo de Vue.js, que usted tiene que descargar desde GitHub y compilar usted mismo.</p>

<p className="p">I understand you. For this, you need to use the development version of Vue.js, which you have to download from GitHub and compile yourself.</p>

<p className="it">Vamos a construir nuestro ejemplo con esta versión de desarrollo de Vue. Creá una nueva carpeta, por ejemplo, <code className="literal">dev-build</code> y copiar todos los archivos del ejemplo NPM a esta carpeta.</p>

<p className="p">Let's build our example with this development version of Vue. Create a new folder, for example, <code class="literal">dev-build</code>, and copy all the files from the npm example to this folder.</p>

<p className="it">No se olvide de copiar la <code className="literal">node_modules</code> carpeta. Usted debe <code className="literal">cd</code> en ella y descargar archivos desde GitHub a ella, y luego ejecutar <code className="literal">npm install</code> y <code className="literal">npm run build</code>:</p>

<p className="p">Do not forget to copy the <code class="literal">node_modules</code> folder. You should <code class="literal">cd</code> into it and download files from GitHub to it, and then run <code class="literal">npm install</code> and <code class="literal">npm run build</code>:</p>

<pre className="programlisting"><code>{`
<span class="strong"><strong>cd <APP-PATH>/node_modules</strong></span>
<span class="strong"><strong>rm -rf vue</strong></span>
<span class="strong"><strong>git clone https://github.com/vuejs/vue.git</strong></span>
<span class="strong"><strong>cd vue</strong></span>
<span class="strong"><strong>npm install</strong></span>
<span class="strong"><strong>npm run build</strong></span>
`}</code></pre>

<p className="it">Ahora construir nuestra aplicación de ejemplo:</p>

<p className="p">Now build our example application:</p>

<pre className="programlisting"><code>{`
<span class="strong"><strong>cd <APP-PATH></strong></span>
<span class="strong"><strong>npm run build</strong></span>
`}</code></pre>

<p className="it">Abrir <code className="literal">index.html</code> en el navegador; verá el habitual <strong className="userinput"><code>Learning Vue.js</code></strong>cabecera.</p>

<p className="p">Open <code class="literal">index.html</code> in the browser; you will see the usual <strong class="userinput"><code>Learning Vue.js</code></strong> header.</p>


<p className="it">Ahora vamos a tratar de cambiar algo en <code className="literal">vue.js</code> la fuente! Ir a la <code className="literal">node_modules/vue/src/compiler/parser</code> carpeta y abrir el <code className="literal">text-parser.js</code> archivo. Busque la línea que dice lo siguiente:</p>

<p className="p">Let's now try to change something in <code class="literal">vue.js</code> source! Go to the <code class="literal">node_modules/vue/src/compiler/parser</code> folder and open the <code class="literal">text-parser.js</code> file. Find the line that says the following:</p>

<pre className="programlisting"><code>{`const defaultTagRE = /\{\{((?:.|\n)+?)\}\}/g  
`}</code></pre>

<p className="it">En realidad, esta expresión regular define delimitadores predeterminados utilizados en las plantillas HTML. Las cosas dentro de estos delimitadores son reconocidos como los datos Vue o como un código JavaScript. Vamos a cambiar ellos! Vamos a sustituir <code class="literal">{`{`}</code> y <code class="literal">{`}`}</code> con signos dobles porcentuales! Seguir y editar el archivo:</p>

<p className="p">Actually, this regular expression defines default delimiters used in the HTML templates. The things inside these delimiters are recognized as a Vue data or as a JavaScript code. Let's change them! Let's replace <code class="literal">{`{`}</code> and <code class="literal">{`}`}</code> with double percentage signs! Go on and edit the file:</p>

<pre className="programlisting"><code>{`const defaultTagRE = /\%\%((?:.|\n)+?)\%\%/g  
`}</code></pre>

<p className="it">Ahora reconstruir tanto la fuente Vue y nuestra aplicación y actualizar el navegador. ¿Que ves?</p>

<p className="p">Now rebuild both Vue source and our application and refresh the browser. What do you see?</p>

<div class="mediaobject"><img src="/static/image00254.jpeg" width="100%" alt="Dev build"/></div>

<p className="it">Después de cambiar la fuente de Vue y la sustitución de los delimitadores, <code>{`{{}}`}</code> delimitadores ya no funcionan!</p>

<p className="p">After changing the Vue source and replacing delimiters, <code>{`{{}}`}</code> delimiters do not work anymore!</p>

<p className="it">El interior del mensaje <code class="literal">{`{{}}`}</code> ya no se reconoce como datos que pasamos a Vue. De hecho, se está representando como parte de HTML.</p>

<p className="p">The message inside <code class="literal">{`{{}}`}</code> is no longer recognized as data that we passed to Vue. In fact, it is being rendered as part of HTML.</p>

<p className="it">Ahora ve al <code className="literal">index.html</code> archivo y sustituir nuestra corchetes delimitadores con doble porcentaje, de la siguiente manera:</p>

<p className="p">Now go to the <code class="literal">index.html</code> file and replace our curly brackets delimiters with double percentage, as follows:</p>

<pre className="programlisting"><code>{`<div id="app"> 
  <h1><span class="strong"><strong>%% message %%</strong></span></h1> 
</div> 
`}</code></pre>

<p className="it">Reconstruir nuestra aplicación y actualizar el navegador! ¿Qué te parece ahora? Ves lo fácil que es para cambiar el código del framework y para probar los cambios. Estoy seguro de que tiene un montón de ideas sobre cómo mejorar o añadí alguna funcionalidad a Vue.js. Así que cambiarlo, reconstruir, probar, desplegar! solicitudes de extracción felices!</p>

<p className="p">Rebuild our application and refresh the browser! What about now? You see how easy it is to change the framework's code and to try out your changes. I'm sure you have plenty of ideas about how to improve or add some functionality to Vue.js. So change it, rebuild, test, deploy! Happy pull requests!</p>










</div></div></div></div> 




</div>
<div className='col-md-3'></div>
 <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Scaffolding our applications</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Scaffolding our applications"><div class="titlepage" id="aid-VF2I2"><div><div><h1 className="title"><a id="ch02lvl1sec24"></a>Scaffolding our applications</h1></div></div></div>


<p className="it">¿Recuerdas las dos aplicaciones que empezamos a trabajar en el primer capítulo, la aplicación lista de compras y el Pomodoro? En esta sección, vamos a Andamios estas aplicaciones utilizando la <code className="literal">vue-cli</code> herramienta a fin de que estén preparados para contener los componentes reutilizables, probar y desplegar. Una vez que estas aplicaciones de rutina de carga, vamos a trabajar en ellos hasta el final de este libro. Así que vamos a hacerlo con cuidado y con mucho amor!</p>

<p className="p">Do you remember the two applications that we started to work on in the first chapter, the shopping list application and the Pomodoro one? In this section, we will scaffold these applications using the <code class="literal">vue-cli</code> tool in order for them to be ready to contain reusable components, be tested, and be deployed. Once we bootstrap these applications, we will work on them until the end of this book. So let's do it carefully and with lots of love!</p>

<h2 className="title">
Scaffolding the shopping list application</h2>

<p className="it">Vamos a un armazón para la aplicación de lista de compras usando <code className="literal">vue-cli</code> la configuración webpack.</p>

<p className="p">We will scaffold the shopping list application using <code className="literal">vue-cli</code> Webpack configuration.</p>


<div class="note" title="Note"><h3 class="title"><a id="tip18"></a>Tip</h3>

<p className="it">En caso de haber ignorado todos los ejercicios prácticos previos relacionados con <code className="literal">vue-cli</code>, no se olvide que lo instale antes de continuar con los siguientes pasos: <span className="strong"><strong>instalar NPM -g vue-cli</strong></span> </p>

<p className="p">In case you have ignored all previous practical exercises related to <code class="literal">vue-cli</code>, do not forget to install it before proceeding to the next steps:
<span class="strong"><strong>npm install -g vue-cli</strong></span>
</p>


</div>


<p className="it">Si ya ha <code className="literal">vue-cli</code> instalado, vaya al directorio en el que desea arrancar la aplicación y ejecutar lo siguiente:</p>

<p className="p">If you already have <code class="literal">vue-cli</code> installed, go to the directory where you want to bootstrap the application and run the following:</p>


<pre className="programlisting"><code>{`
<span class="strong"><strong>vue init webpack shopping-list</strong></span>
`}</code></pre>



<p className="it">Responder afirmativamente a todas las preguntas (basta con hacer clic entrar) y voilà! Usted tiene el bootstrap aplicación:</p>

<p className="p">Answer yes to all the questions (just click enter) and voil&agrave;! You have the application bootstrapped:</p>


<div class="mediaobject"><img src="/static/image00257.jpeg" width="100%" alt="Scaffolding the shopping list application"/></div>


<p className="it">Bootstraping la aplicación lista de compras con vue-cli</p>

<p className="p">Bootstraping the shopping list application with vue-cli</p>

<p className="it">Cambie al directorio de la lista de compras y de gestión <code className="literal">npm install</code> y <code className="literal">npm run dev</code>. Abra su navegador en <code className="literal">localhost:8080</code>. Verá la <strong className="userinput"><code>Hello World</code></strong>página de la aplicación Vue de nueva creación:</p>

<p className="p">Switch to the shopping list directory and run <code class="literal">npm install</code> and <code class="literal">npm run dev</code>. Open your browser at <code class="literal">localhost:8080</code>. You will see the <strong class="userinput"><code>Hello World</code></strong> page of the newly created Vue application:</p>



<div class="mediaobject"><img src="/static/image00258.jpeg" width="100%" alt="Scaffolding the shopping list application"/></div>


<p className="it">La vista Hello World de la aplicación recién bootstrap</p>

<p className="p">The Hello World view of the newly bootstrapped application</p>



<p className="it">Vamos a limpiar el código bootstrap para que la aplicación se prepara para ser poblado con nuestro código específico de la aplicación. Ir al <code className="literal">App.vue</code> archivo y eliminar todo, dejando sólo las etiquetas que definen la estructura de la aplicación:</p>

<p className="p">Let's clean the bootstrapped code so that the application gets ready to be populated with our application-specific code. Go to the <code class="literal">App.vue</code> file and remove everything, leaving just the tags that define the application structure:</p>


<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem"><code class="literal">&lt;template&gt;</code> with the main <code class="literal">&lt;div&gt;</code> inside</li><li className="listitem">The <code class="literal">&lt;script&gt;</code> tag</li><li className="listitem">The <code class="literal">&lt;style&gt;</code> tag</li></ul></div>


<p className="it">Así que, al final, el <code className="literal">App.vue</code> archivo tiene el siguiente aspecto:</p>

<p className="p">So, in the end, your <code class="literal">App.vue</code> file looks like the following:</p>


<pre className="programlisting"><code>{`<template>
  <div id="app">
  </div>
</template>
    
<script>
</script>
    
<style>
</style>
`}</code></pre>


<p className="it">Echar un vistazo a la página abierta en el navegador. Divertido, que no han hecho nada, pero ahora la página no contiene el valor por defecto <strong className="userinput"><code>Hello World</code></strong>. La página está vacía! Ha cambiado de forma automática!</p>

<p className="p">Have a look at the page opened in the browser. Funny, you haven't done anything, but the page now doesn't contain the default <strong class="userinput"><code>Hello World</code></strong>. The page is empty! It has changed automatically!</p>


<p className="it">Trate de añadí algo dentro de las <code className="literal">&lt;template&gt;</code> etiquetas. Mira la página; se vuelven a cargar automáticamente una vez que se introduce cambios. Esto funciona debido al <code className="literal">vue-hot-reload</code> plugin que detecta cambios en sus componentes Vue y automáticamente vuelve a generar el proyecto y vuelve a cargar la página del navegador. Trate de escribir algo de código JavaScript dentro de las <code className="literal">&lt;script&gt;</code> etiquetas que no corresponden a las normas de pelusa, por ejemplo, mediante <code className="literal">notDefinedVariable</code>:</p>

<p className="p">Try adding something inside the <code class="literal">&lt;template&gt;</code> tags. Look at the page; it automatically reloads once you introduce changes. This works because of the <code class="literal">vue-hot-reload</code> plugin that detects changes in your Vue components and automatically rebuilds the project and reloads the browser page. Try to write some JavaScript code inside the <code class="literal">&lt;script&gt;</code> tags that doesn't correspond to lint standards, for example, using <code class="literal">notDefinedVariable</code>:</p>


<pre className="programlisting"><code>{`<script> 
  <span class="strong"><strong>notDefinedVariable = 5;</strong></span> 
</script> 
`}</code></pre>


<p className="it">La página en el navegador no se actualiza. Mire a su consola de shell. Muestra las <span className="emphasis"><em>pelusas</em></span> errores y "se niega" a construir su aplicación:</p>

<p className="p">The page in the browser is not refreshed. Look at your shell console. It shows the <span class="emphasis"><em>lint</em></span> errors and "refuses" to build your application:</p>

<div class="mediaobject"><img src="/static/image00259.jpeg"  alt="Scaffolding the shopping list application"/></div>

<p className="it">Cada vez que la aplicación se cambia las reglas de pelusa se comprueban</p>

<p className="p">Each time the application is changed the lint rules are checked</p>

<p className="it">Esto sucede gracias al plugin ESLint, que comprueba el código en contra de las reglas de pelusa cada vez que los cambios en las aplicaciones.</p>

<p className="p">This happens, thanks to the ESLint plugin, which checks the code against the lint rules each time the application changes.</p>

<p className="it">Con esto, podemos estar seguros de que nuestro código seguirá los mejores estándares de calidad.</p>

<p className="p">With that, we can be sure that our code will follow the best quality standards.</p>

<p className="it">Hablando de la calidad, también hay que preparar nuestra aplicación para poder ejecutar pruebas unitarias. Por suerte para nosotros, <code className="literal">vue-cli</code> con webpack ya lo ha hecho por nosotros. Ejecutar <code className="literal">npm run unit</code> para ejecutar pruebas unitarias y <code className="literal">npm run e2e</code> para ejecutar las pruebas Nightwatch de extremo a extremo. Pruebas de extremo a extremo no se ejecutarán en paralelo con su aplicación que se ejecuta ya que ambos utilizan el mismo puerto. Por lo tanto, si desea ejecutar pruebas durante el desarrollo, se debe cambiar el puerto en el <code className="literal">config/index.js</code> archivo de configuración o simplemente detener la aplicación entre las pruebas de funcionamiento. Después de la ejecución de pruebas, verá las pruebas de extremo a extremo fallan. Esto se debe a que están comprobando los elementos específicos de la aplicación que hemos eliminado. Abra el archivo <code className="literal">test.js</code> desde el <code className="literal">test/e2e/specs/</code> directorio y limpiar todas las afirmaciones de que no necesitamos más. Ahora debería tener el siguiente aspecto:</p>

<p className="p">Speaking of quality, we should also prepare our application to be able to run unit tests. Luckily for us, <code class="literal">vue-cli</code> with Webpack has already done it for us. Run <code class="literal">npm run unit</code> to run unit tests and <code class="literal">npm run e2e</code> to run end-to-end nightwatch tests. End-to-end tests will not run in parallel with your running application since both are using the same port. So, if you want to run tests during development, you should change the port in the <code class="literal">config/index.js</code> configuration file or simply stop the application between running tests. After running tests, you will see the end-to-end tests fail. This is because they are checking for the application's specific elements that we have removed. Open the file <code class="literal">test.js</code> from the <code class="literal">test/e2e/specs/</code> directory and clean all the assertions that we don't need anymore. Now it should look like the following:</p>



<pre className="programlisting"><code>{`module.exports = { 
  'default e2e tests': function (browser) { 
    browser 
    .url('http://localhost:8080') 
      .waitForElementVisible('#app', 5000) 
      .end() 
  } 
} 
`}</code></pre>



<p className="it">Vuelva a ejecutar las pruebas. Ahora deben estar pasando. A partir de ahora, como vamos a agregar el código en nuestra aplicación, vamos a añadí pruebas de unidad y de extremo a extremo.</p>

<p className="p">Rerun the tests. Now they should be passing. From now on, as we will add code to our application, we will add unit and end-to-end tests.</p>

</div><div className="section" title="Bootstraping your Pomodoro application"><div className="titlepage"><div><div><h2 class="title"><a id="ch02lvl2sec31"></a>Bootstraping your Pomodoro application</h2></div></div></div>

<p className="it">Para la aplicación Pomodoro, hacer lo mismo que para la aplicación de la lista de compras. Ejecutar <code className="literal">vue init webpack pomodoro</code> y repetir todos los pasos necesarios para asegurar que la estructura está lista para ser poblado con el código de la aplicación Pomodoro!</p>

<p className="p">For the Pomodoro application, do the same as for the shopping list application. Run <code class="literal">vue init webpack pomodoro</code> and repeat all the necessary steps to ensure that the structure is ready to be populated with the Pomodoro application code!</p>
</div></div>


</div>
 
<div className='col-md-3'></div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Exercise</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Exercise" id="aid-10DJ41"><div className="titlepage"><div><div><h1 className="title"><a id="ch02lvl1sec25"></a>Exercise</h1></div></div></div>
<p className="it">Implementar nuestra aplicación Pomodoro como una aplicación de Chrome! Sólo tiene que utilizar con una versión compatible del CSP-Vue.js y añadí un archivo <code className="literal">manifest.json</code>.</p>
<p className="p">Implement our Pomodoro application as a Chrome app! You just need to use it with a CSP-compliant version of Vue.js and add a <code class="literal">manifest.json</code> file.</p></div>
</div>
</div>
<div className='col-md-3'></div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Summary</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Summary" id="aid-11C3M1"><div className="titlepage"><div><div><h1 className="title"><a id="ch02lvl1sec26"></a>Summary</h1></div></div></div>


<p className="it">En este capítulo, se han analizado los detrás de las escenas de Vue.js. Que ha aprendido cómo se logra la reactividad de datos. Ya viste cómo Vue.js aprovecha captadores y definidores <code className="literal">Object.defineProperty</code> para propagar los cambios en los datos. Usted vio una visión general de los conceptos clave Vue.js, tales como componentes reutilizables, sistema de plugins, y la administración del estado con Vuex. Hemos bootstrap las aplicaciones que vamos a desarrollar durante los próximos capítulos.</p>

<p className="p">In this chapter, we have analyzed the behind-the-scenes of Vue.js. You learned how data reactivity is achieved. You saw how Vue.js leverages <code class="literal">Object.defineProperty</code> getters and setters to propagate changes in the data. You saw an overview of the key Vue.js concepts, such as reusable components, plugins system, and state management with Vuex. We have bootstrapped the applications that we will develop during the next chapters.</p>


<p className="it">En el siguiente capítulo, vamos a tener una mirada más profunda en el sistema de los componentes del Vue. Vamos a utilizar componentes en nuestras aplicaciones.</p>

<p className="p">In the next chapter, we will have a deeper look into the Vue's components system. We will use components in our applications.</p></div>


</div>

</div>
<div className='col-md-3'></div>

  
  </div>
  </Layout>
  )