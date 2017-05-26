import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch27'>
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

<title>Chapter 3. Components - Understanding and Using</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div class="chapter" title="Chapter 3. Components - Understanding and Using" id="aid-12AK81"><div className="titlepage"><div><div><h1 className="title"><a id="ch03"></a>Chapter 3. Components - Understanding and Using</h1></div></div></div>



<p className="it">En el capítulo anterior, que ha aprendido cómo funciona Vue.js. Que viste detrás de las escenas e incluso hizo un ligero depuración del código del núcleo Vue.js. Que ha aprendido algunos de los conceptos clave de Vue. También ha aprendido y probado diferentes formas de instalar Vue.js. Hemos bootstrap las aplicaciones; vamos a desarrollar y mejorar de este capítulo sobre. También hemos visto cómo depurar y probar nuestras aplicaciones.</p>

<p className="p">In the previous chapter, you learned how Vue.js works. You saw behind the scenes and even made a slight debug of the core Vue.js code. You learned some of Vue's key concepts. You also learned and tried different ways of installing Vue.js. We have bootstrapped the applications; we will develop and enhance from this chapter on. We have also seen how to debug and to test our applications.</p>



<p className="it">En el primer capítulo, hablamos de componentes e incluso creó algunas. En este capítulo, vamos a utilizar componentes en nuestras aplicaciones y ver algunas directivas interesantes en acción. Dicho esto, en este capítulo, vamos a hacer lo siguiente:</p>

<p className="p">In the first chapter, we talked about components and even created some. In this chapter, we will use components in our applications and see some interesting directives in action. That being said, in this chapter, we are going to do the following:</p><div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">Revisit the components topic and review what components are</li><li className="listitem">Create components for our applications</li><li className="listitem">Learn what single-file components are</li><li className="listitem">Learn how to achieve reactive CSS transitions with special attributes</li></ul></div><div className="section" title="Revisiting components"><div className="titlepage"><div><div><h1 className="title"><a id="ch03lvl1sec27"></a>Revisiting components</h1></div></div></div>

<p className="it">Como seguramente recuerda de los capítulos anteriores, los componentes son piezas especiales de la aplicación Vue que tienen su propio ámbito de los datos y métodos. Los componentes pueden ser utilizados y reutilizados en toda la aplicación. En el capítulo anterior, aprendió que un componente se crea mediante el <code>{`Vue.extend({...})`}</code>  método y registrado utilizando la <code>{`Vue.component()`}</code> sintaxis. Por lo tanto, con el fin de crear y utilizar un componente, escribiríamos el siguiente código JavaScript:</p>

<p className="p">As you surely remember from the previous chapters, components are special parts of the Vue application that have their own scope of data and methods. Components can be used and reused throughout the application. In the previous chapter, you learned that a component is created by using the <code>{`{Vue.extend({...})`}</code> method and registered using the <code>{`Vue.component()`}</code> syntax. So, in order to create and use a component, we would write the following JavaScript code:</p>

<pre class="programlisting"><code>{`//creating component 
var HelloComponent = Vue.extend({ 
  template: '<h1>Hello</h1>' 
}); 
//registering component 
Vue.component('hello-component', HelloComponent); 
 
//initializing the Vue application 
new Vue({ 
  el: '#app' 
}); 
`}</code></pre>

<p className="it">A continuación, vamos a utilizar <code className="literal">hello-component</code> dentro del HTML:</p>

<p className="p">Then, we will use <code class="literal">hello-component</code> inside the HTML:</p>

<pre className="programlisting"><code>{`<div id='app'> 
  <hello-component></hello-component> 
</div> 
`}</code></pre>

<div class="note" title="Note"><h3 class="title"><a id="tip19"></a>Tip</h3>

<p className="it">Tanto la inicialización y registro pueden escribirse como una sola <code className="literal">Vue.component</code> invocación con las opciones correspondientes:</p>

<p className="p">Both initialization and registration can be written as a single <code class="literal">Vue.component</code> invocation with corresponding options:</p>

<p className="p">
<code>{`Vue.component('hello-component', { template: '<h1>Hello</h1>' });`}</code>
</p>

</div></div></div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Benefits of using components</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Benefits of using components"><div class="titlepage" id="aid-1394Q2"><div><div><h1 className="title"><a id="ch03lvl1sec28"></a>Benefits of using components</h1></div></div></div>

<p className="it">Hay algunas cosas que tenemos que aprender antes de profundizar en los componentes y volver a escribir nuestras aplicaciones de usarlos. En esta sección, vamos a cubrir cosas tales como la manipulación <code className="literal">data</code> y <code className="literal">el</code> propiedades dentro de un componente, componente de las plantillas, el alcance y los preprocesadores.</p>

<p className="p">There are some things that we need to learn before going deep into the components and rewrite our applications using them. In this section, we will cover things such as handling <code class="literal">data</code> and <code class="literal">el</code> properties inside a component, component templates, scope, and preprocessors.</p>


<div className="section" title="Declaring templates in HTML"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec32"></a>Declaring templates in HTML</h2></div></div></div>

<p className="it">En nuestro ejemplo anterior, hemos creado un componente Vue con una plantilla escrita como una cadena. En realidad es fácil y agradable porque tenemos todo lo que necesitamos dentro de nuestro componente. Ahora imagine nuestro componente con una estructura más compleja HTML. Escribir una plantilla de cadena HTML complejo es propenso a errores, feo y con las mejores prácticas.</p>

<p className="p">In our previous example, we created a Vue component with a template written as a string. It's actually easy and nice because we have everything we need inside our component. Now imagine our component with a more complex HTML structure. Writing a complex HTML string template is error-prone, ugly, and against best practices.</p>

<div class="note" title="Note"><h3 class="title"><a id="tip20"></a>Tip</h3>

<p className="it">Por mejores prácticas, me refiero a un código limpio y fácil de mantener. HTML complejo escrita como una cadena es cualquier cosa menos fácil de mantener.</p>

<p className="p">By best practices, I mean clean and maintainable code. Complex HTML written as a string is anything but maintainable.</p>

</div>

<p className="it">Vue permite que las plantillas dentro de un archivo HTML que se declara dentro de un especial <code className="literal">&lt;template&gt;</code> etiqueta!</p>

<p className="p">Vue allows declaring templates inside an HTML file within a special <code class="literal">&lt;template&gt;</code> tag!</p>

<p className="it">Por lo tanto, para reescribir nuestro ejemplo, vamos a declarar una plantilla de etiqueta HTML con el markup correspondiente en el interior:</p>

<p className="p">So, to rewrite our example, we will declare an HTML tag template with the corresponding markup inside:</p>

<pre class="programlisting"><code>{`<template id="hello"> 
  <h1>Hello&lt;/h1> 
</template> 
`}</code></pre>


<p className="it">Y luego, dentro de nuestro componente, en lugar de la cadena HTML, nos limitaremos a utilizar el ID de la plantilla:</p>

<p className="p">And then, inside our component, instead of the HTML string, we will just use the ID of the template:</p>


<pre class="programlisting"><code>{`Vue.component('hello-component', { 
  template: '#hello' 
}); 
`}</code></pre>



<p className="it">Todo nuestro código se verá como la siguiente:</p>

<p className="p">Our whole code will look like the following:</p>



<pre class="programlisting"><code>{`<body> 
  <span class="strong"><strong><template id="hello"></strong></span> 
    <h1>Hello</h1> 
  <span class="strong"><strong></template></strong></span> 
 
  <div id="app"> 
    <hello-component></hello-component> 
  </div> 
 
  <script src="vue.js"></script> 
  <script> 
    Vue.component('hello-component', { 
      template: '<span class="strong"><strong>#hello</strong></span>' 
    }); 
 
    new Vue({ 
      el: '#app' 
    }); 
  </script> 
</body> 
`}</code></pre>




<p className="it">En el ejemplo anterior, sólo se había utilizado el <code className="literal">template</code> atributo para el componente. Vamos a pasar y ver cómo el <code className="literal">data</code> y <code className="literal">el</code> atributos deben ser tratados dentro de un componente.</p>

<p className="p">In the preceding example, we had only used the <code class="literal">template</code> attribute for the component. Let's move on and see how the <code class="literal">data</code> and <code class="literal">el</code> attributes should be treated inside a component.</p>



</div><div className="section" title="Handling data and el properties inside a component"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec33"></a>Handling data and el properties inside a component</h2></div></div></div>




<p className="it">Como ya se ha mencionado, la sintaxis del componente es la misma que la sintaxis de la instancia Vue, pero debe extender el Vue en lugar de llamar directamente. Con esta premisa, parece correcto para crear un componente como la siguiente:</p>

<p className="p">As already mentioned, the component's syntax is the same as the Vue instance's syntax, but it must extend the Vue instead of calling it directly. With this premise, it seems correct to create a component like the following:</p>



<pre class="programlisting"><code>{`var HelloComponent = Vue.extend({ 
  el: '#hello', 
  data: { msg: 'Hello' } 
}); 
`}</code></pre>




<p className="it">Pero esto conduciría a una fuga alcance. Cada instancia de <code className="literal">HelloComponent</code> compartiría la misma <code className="literal">data</code> y <code className="literal">el</code>. Y esto no es exactamente lo que queremos. Por eso Vue exige explícitamente a declarar estas propiedades como funciones:</p>

<p className="p">But this would lead to a scope leak. Every instance of <code class="literal">HelloComponent</code> would share the same <code class="literal">data</code> and <code class="literal">el</code>. And this is not exactly what we want. That is why Vue explicitly demands to declare these properties as functions:</p>



<pre class="programlisting"><code>{`var HelloComponent = Vue.component('hello-component', { 
  el: <span class="strong"><strong>function ()</strong></span> { 
    return '#hello'; 
  }, 
  data: <span class="strong"><strong>function ()</strong></span> { 
    return { 
      msg: 'Hello' 
    } 
  } 
}); 
`}</code></pre>




<p className="it">Incluso si se comete un error y declarar la <code className="literal">data</code> o las <code className="literal">el</code> propiedades que un objeto o un elemento, Vue amablemente advertirle:</p>

<p className="p">Even if you make a mistake and declare the <code class="literal">data</code> or the <code class="literal">el</code> properties as an object or an element, Vue will kindly warn you:</p>




<div class="mediaobject"><img src="/static/image00260.jpeg" width="100%" alt="Handling data and el properties inside a component"/></div>




<p className="it">la advertencia de vue cuando se utilizan datos como un objeto en lugar de una función dentro de un componente de vue</p>

<p className="p">Vue's warning when using data as an object instead of a function inside of a Vue component</p>

</div><div className="section" title="Scope of the components"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec34"></a>Scope of the components</h2></div></div></div>

<p className="it">Como ya se ha mencionado, todos los componentes tienen su propio ámbito que es inaccesible por otros componentes. No obstante, el ámbito de aplicación global es accesible por todos los componentes registrados. Se podes ver el alcance de los componentes como el ámbito de aplicación como ámbitos locales y globales. Es lo mismo. Sin embargo, a partir de datos de los padres dentro de un componente no es sencillo. Usted tiene que indicar explícitamente dentro de un componente que propiedades de los datos de los padres deben ser accedidos mediante el <code className="literal">prop</code> atributo y se unen a la instancia de componente utilizando la <code className="literal">v-bind</code> sintaxis. Vamos a ver cómo funciona en nuestro <code className="literal">HelloComponent</code> ejemplo.</p>

<p className="p">As already mentioned, all components have their own scope that is inaccessible by other components. Nevertheless, the global application scope is accessible by all the registered components. You can see the components' scope as local and the application scope as global scopes. It's the same. However, using the parent's data inside a component is not straightforward. You have to explicitly indicate inside a component which parent's data properties should be accessed using the <code class="literal">prop</code> attribute and bind them to the component instance using the <code class="literal">v-bind</code> syntax. Let's see how it works on our <code class="literal">HelloComponent</code> example.</p>

<p className="it">Vamos a empezar por declarar <code className="literal">HelloComponent</code> con los datos que contiene el atributo <code className="literal">msg</code>:</p>

<p className="p">Let's start by declaring <code class="literal">HelloComponent</code> with data that contains the attribute <code class="literal">msg</code>:</p>



<pre class="programlisting"><code>{`Vue.component('hello-component', { 
  data: function () { 
    return { 
      <span class="strong"><strong>msg: 'Hello'</strong></span> 
    } 
  } 
}); 
`}</code></pre>




<p className="it">Ahora, vamos a crear una <code className="literal">Vue</code> instancia con algunos datos en su interior:</p>

<p className="p">Now, let's create a <code class="literal">Vue</code> instance with some data inside it:</p>



<pre class="programlisting"><code>{`new Vue({ 
  el: '#app', 
  <span class="strong"><strong>data: { 
    user: 'hero' 
  }</strong></span> 
});  
`}</code></pre>

<p className="it">Dentro de nuestro HTML, vamos a crear una plantilla y lo aplican al componente mediante el ID de la plantilla:</p>

<p className="p">Inside our HTML, let's create a template and apply it to the component using the template's ID:</p>



<pre class="programlisting"><code>{`//template declaration 
<template id="hello"> 
  <h1><span class="strong"><strong>{{msg}} {{user}}</strong></span></h1> 
</template> 
 
//using template in component 
Vue.component('hello-component', { 
  <span class="strong"><strong>template: '#hello',</strong></span> 
  data: function () { 
    return { 
      msg: 'Hello' 
    } 
  } 
}); 
`}</code></pre>




<p className="it">Con el fin de ver el componente en la página, debemos invocarlo dentro del HTML de nuestra <code className="literal">app</code> envase:</p>

<p className="p">In order to see the component on the page, we should invoke it inside the HTML of our <code class="literal">app</code> container:</p>



<pre class="programlisting"><code>{`<div id="app"> 
  <span class="strong"><strong><hello-component></hello-component></strong></span> 
</div> 
`}</code></pre>




<p className="it">Si se abre la página en el navegador, sólo verá <strong className="userinput"><code>Hello</code></strong>; la <code className="literal">user</code> propiedad de datos todavía no está vinculado al componente:</p>

<p className="p">If you open the page in the browser, you will only see <strong class="userinput"><code>Hello</code></strong>; the <code class="literal">user</code> data property is still not bound to the component:</p>




<div class="mediaobject"><img src="/static/image00261.jpeg" width="100%" alt="Scope of the components"/></div>



<p className="it">propiedad de datos de los padres aún no está obligado a nuestro componente Vue</p>

<p className="p">The parent's data property is not yet bound to our Vue component</p><p className="it">Con el fin de enlazar los datos de la aplicación Vue padres, tenemos que hacer las dos cosas siguientes:</p>

<p className="p">In order to bind the data from the parent Vue application, we have to do the following two things:</p>



<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">Indicate this property inside of the <code class="literal">prop</code> attribute of a component</li><li className="listitem">Bind it to the <code class="literal">hello-component</code> invocation:</li></ul></div><pre class="programlisting"><code>{`//calling parent's data attributes in the component 
Vue.component('hello-component', { 
  template: '#hello', 
  data: function () { 
    return { 
      msg: 'Hello' 
    } 
  }, 
  <span class="strong"><strong>props: ['user']</strong></span> 
}); 
 
//binding a user data property to the component 
<div id="app"> 
  <hello-component <span class="strong"><strong>v-bind:user="user"</strong></span>></hello-component> 
</div> 
`}</code></pre>




<p className="it">Actualizar la página y verá cómo se le presenta ahora con un saludo:</p>

<p className="p">Refresh the page and you will see how it now presents you with a greeting:</p>



<div class="mediaobject"><img src="/static/image00262.jpeg" width="100%" alt="Scope of the components"/></div>



<p className="it">Después de la correcta unión de los padres de la <code className="literal">data</code> propiedad para el componente, todo funciona como se esperaba.</p>

<p className="p">After the correct binding of the parent's <code class="literal">data</code> property to the component, everything works as expected.</p>



<div class="note" title="Note"><h3 class="title"><a id="tip21"></a>Tip</h3>
<p className="it">En realidad, la <code className="literal">v-bind:user</code> sintaxis podes ser atajo simplemente mediante el uso de lo siguiente:</p>

<p className="p">Actually, the <code class="literal">v-bind:user</code> syntax can be shortcut just by using the following:</p>
<p className="it"> <code className="literal">:user&lt;hello-component <span className="strong"><strong>:user="user"</strong></span>&gt;&lt;/hello-component&gt;</code> </p>

<p className="p">
<code class="literal">:user&lt;hello-component <span class="strong"><strong>:user="user"</strong></span>&gt;&lt;/hello-component&gt;</code>
</p>



</div></div><div className="section" title="Components inside other components"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec35"></a>Components inside other components</h2></div></div></div>




<p className="it">La belleza de los componentes es que pueden ser utilizados y reutilizados dentro de otros componentes como ladrillos y bloques de Lego! Vamos a construir otro componente; Digamos que es <span className="strong"><strong>un saludo,</strong></span> que se componen de dos subcomponentes: el formulario con el nombre del usuario y nuestro <code className="literal">hello</code> componente.</p>

<p className="p">The beauty of the components is that they can be used and reused inside other components as Lego bricks and blocks! Let's build another component; let's call it <span class="strong"><strong>greetings,</strong></span> which will be composed of two sub-components: the form asking for the user's name and our <code class="literal">hello</code> component.</p>




<p className="it">Con el fin de hacer esto, vamos a declarar la plantilla para el formulario y nuestro ya familiar <code className="literal">hello</code> plantilla:</p>

<p className="p">In order to do this, let's declare the template for the form and our already familiar <code class="literal">hello</code> template:</p>



<pre class="programlisting"><code>{`<!--template for the form--> 
<template id="form"> 
  <div> 
    <label for="name">What's your name?</label> 
    <input <span class="strong"><strong>v-model="user"</strong></span> type="text" id="name"> 
  </div> 
</template> 
 
//template for saying hello 
<template id="hello"> 
  <h1>{{msg}} {{user}}</h1> 
</template> 
`}</code></pre>




<p className="it">Ahora vamos a registrar dos componentes Vue en base a estas plantillas:</p>

<p className="p">Now we will register two Vue components based on these templates:</p>



<pre class="programlisting"><code>{`//register form component 
Vue.component('<span class="strong"><strong>form-component</strong></span>', { 
  template: '<span class="strong"><strong>#form</strong></span>', 
  props: ['user'] 
}); 
//register hello component 
Vue.component('<span class="strong"><strong>hello-component</strong></span>', { 
  template: '<span class="strong"><strong>#hello</strong></span>', 
  data: function () { 
    return { 
      msg: 'Hello' 
    } 
  }, 
  props: ['user'] 
}); 
`}</code></pre>




<p className="it">Por último, vamos a crear nuestra plantilla saludos que utilizará tanto <code className="literal">form</code> y <code className="literal">hello</code> componentes. No se olvide que tenemos que obligar a la <code className="literal">user</code> propiedad sobre la invocación componentes:</p>

<p className="p">Finally, we will create our greetings template that will use both <code class="literal">form</code> and <code class="literal">hello</code> components. Do not forget that we have to bind the <code class="literal">user</code> property on the components invocation:</p>



<pre class="programlisting"><code>{`<template id="greetings"> 
  <div> 
    <form-component <span class="strong"><strong>:user="user"</strong></span>></form-component> 
    <hello-component <span class="strong"><strong>:user="user"</strong></span>></hello-component> 
  </div> 
</template> 
`}</code></pre>




<p className="it">En este punto, podemos crear nuestro componente saludos y utilizar la plantilla saludos en su interior. Vamos a inicializar, que <code className="literal">data</code> funciona con el nombre del usuario en este componente:</p>

<p className="p">At this point, we can create our greetings component and use the greetings template inside it. Let's initialize, which <code class="literal">data</code> function with the name of the user in this component:</p>



<pre class="programlisting"><code>{`//create greetings component based on the greetings template 
Vue.component('greetings-component', { 
  template: '<span class="strong"><strong>#greetings</strong></span>', 
  data: function () { 
    return { 
      user: 'hero' 
    } 
  } 
}); 
`}</code></pre>




<p className="it">Dentro de nuestro contenedor principal de la aplicación, ahora vamos a invocar el componente saludos:</p>

<p className="p">Inside our main application container, we will now invoke the greetings component:</p>



<pre class="programlisting"><code>{`<div id="app"> 
  <span class="strong"><strong><greetings-component></greetings-component></strong></span> 
</div> 
`}</code></pre>




<p className="it">No se olvide de inicializar la aplicación Vue:</p>

<p className="p">Do not forget to initialize the Vue application:</p>



<pre class="programlisting"><code>{`new Vue({ 
  el: '#app' 
}); 
`}</code></pre>




<p className="it">Abra la página en el navegador. Debería ver algo como lo siguiente:</p>

<p className="p">Open the page in the browser. You should see something like the following:</p>



<div class="mediaobject"><img src="/static/image00263.jpeg" width="100%" alt="Components inside other components"/></div>
<p className="it">La página construido a partir de varios componentes Vue</p>

<p className="p">The page built from various Vue components</p><p className="it">Trate de cambiar el nombre de la entrada. Usted está esperando que cambie también en la cabecera saludos porque estamos obligados a ello. Pero, extrañamente, no cambia. Bueno, este es realmente el comportamiento normal. Por defecto, todos los apoyos siguen el enlace de datos en un solo sentido. Esto significa que si los datos cambian dentro del ámbito de los padres, estos cambios se propagan a la componente secundario, pero no viceversa. Se hace de esta manera con el fin de evitar que los componentes de la mutación de los niños accidentalmente el estado de los padres. Es, sin embargo, posible forzar los componentes niños a comunicarse con sus padres mediante la invocación de eventos. Comproba la documentación del Vue en <a className="ulink" href="https://vuejs.org/guide/components.html#Custom-Events">https://vuejs.org/guide/components.html#Custom-Events</a> .</p>

<p className="p">Try to change the name in the input. You are expecting it to change also in the greetings header because we bound it to it. But strangely, it doesn't change. Well, this is actually the normal behavior. By default, all props follow one-way data binding. This means that if the data changes within the parent's scope, these changes are propagated to the child component, but not vice versa. It is done this way in order to prevent children components from accidentally mutating the parent state. It is, however, possible to force children components to communicate with their parents by invoking events. Check the Vue documentation at 
<a class="ulink" href="https://vuejs.org/guide/components.html#Custom-Events">https://vuejs.org/guide/components.html#Custom-Events</a>
.</p><p className="it">En nuestro caso, podemos enlazar un modelo de usuario en nuestro formulario de <code className="literal">input</code> componentes y emitir el <code className="literal">input</code> evento cada vez que el usuario escribe en el cuadro de entrada. Esto lo conseguimos mediante el uso del <code className="literal">v-on:input</code> modificador, al igual que se describe en esta sección en <a className="ulink" href="https://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events">https://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events</a> .</p>

<p className="p">In our case, we can bind a user model to our form <code class="literal">input</code> component and emit the <code class="literal">input</code> event every time the user types in the input box. We achieve it by using the <code class="literal">v-on:input</code> modifier, just like it is described in this section at 
<a class="ulink" href="https://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events">https://vuejs.org/guide/components.html#Form-Input-Components-using-Custom-Events</a>
.</p><p className="it">Por lo tanto, tenemos que pasar <code className="literal">v-model:user</code> a <code className="literal">form-component</code>:</p>

<p className="p">Thus, we have to pass <code class="literal">v-model:user</code> to <code class="literal">form-component</code>:</p>



<pre class="programlisting"><code>{`<form-component <span class="strong"><strong>v-model="user"</strong></span></form-component> 
`}</code></pre>




<p className="it">Luego, <code className="literal">form-component</code> debe aceptar la <code className="literal">value</code> hélice y emitir el <code className="literal">input</code> evento:</p>

<p className="p">Then, <code class="literal">form-component</code> should accept the <code class="literal">value</code> prop and emit the <code class="literal">input</code> event:</p>



<pre class="programlisting"><code>{`Vue.component('form-component', { 
  template: '#form', 
  props: [<span class="strong"><strong>'value'</strong></span>], 
  methods: { 
    <span class="strong"><strong>onInput: function (event) { 
      this.$emit('input', event.target.value) 
    }</strong></span> 
  } 
}); 
`}</code></pre>

<p className="it">La caja de entrada dentro de la <code className="literal">form-component</code> plantilla debe obligar a la <code className="literal">v-on:input</code> y el <code className="literal">onInput</code> método para el <code className="literal">v-on:input</code> modificador:</p>

<p className="p">The input box inside the <code class="literal">form-component</code> template should bind the <code class="literal">v-on:input</code> and the <code class="literal">onInput</code> method to the <code class="literal">v-on:input</code> modifier:</p>



<pre class="programlisting"><code>{`<input <span class="strong"><strong>v-bind:value="value"</strong></span> type="text" id="name" <span class="strong"><strong>v-on:input="onInput"</strong></span> 
`}</code></pre>

<div class="note" title="Note"><h3 class="title"><a id="tip22"></a>Tip</h3>


<p className="it">En realidad, antes de Vue 2.0, este tipo de sincronización de dos vías entre los componentes y sus padres era posible diciéndole explícitamente la propiedad que está siendo obligado a <span className="strong"><strong>sincronizar</strong></span> usando el <code className="literal">.sync</code> modificador:<code className="literal">&lt;form-component :user.sync="user"&gt;&lt;/form-component&gt;</code> </p>

<p className="p">Actually, prior to Vue 2.0, this kind of two-way synchronization between components and their parents was possible by explicitly telling the property being bound to <span class="strong"><strong>sync</strong></span> using the <code class="literal">.sync</code> modifier: <code class="literal">&lt;form-component :user.sync="user"&gt;&lt;/form-component&gt;</code>
</p>

</div>


<p className="it">Recarga la página. Ahora se podes cambiar el nombre dentro de la entrada y se propaga inmediatamente al alcance de los padres, y por lo tanto a otros componentes secundarios que se basan en esta propiedad:</p>

<p className="p">Refresh the page. Now you can change the name inside the input and it is immediately propagated to the parent's scope, and thus to other children components that rely on this property:</p>


<div class="mediaobject"><img src="/static/image00264.jpeg" width="100%" alt="Components inside other components"/></div>
<p className="it">Propiedades de unión con el modificador .sync permite la unión entre los componentes de los padres y niños de datos de dos vías</p>

<p className="p">Binding properties with the .sync modifier allows two-way data binding between parent and children components</p>

<p className="it">Podes encontrar el código completo de este ejemplo en el jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/1mzzo8yn/">https://jsfiddle.net/chudaol/1mzzo8yn/</a> .</p>

<p className="p">You can find the complete code for this example in the JSFiddle at 
<a class="ulink" href="https://jsfiddle.net/chudaol/1mzzo8yn/">https://jsfiddle.net/chudaol/1mzzo8yn/</a>
.</p>

<div class="note" title="Note"><h3 class="title"><a id="tip23"></a>Tip</h3>

<p className="it">Antes de la liberación Vue 2,0, había una más modificador de enlace de datos, <code className="literal">.once</code>. Con este modificador, los datos estarían obligados sólo una vez, y cualquier otro cambio no afectarían el estado de los componentes. Compare los siguientes:</p>

<p className="p">Before the Vue 2.0 release, there was one more data-binding modifier, <code class="literal">.once</code>. With this modifier, the data would be bound only once, and any other changes would not affect the state of components. Compare the following:</p>


<p className="it"><code className="literal">&lt;form-component <span className="strong"><strong>:user="user"</strong></span>&gt;&lt;/form-component&gt;</code> </p>

<p className="p"><code class="literal">&lt;form-component <span class="strong"><strong>:user="user"</strong></span>&gt;&lt;/form-component&gt;</code>
</p>


<p className="it"><code className="literal">&lt;form-component <span className="strong"><strong>:user.sync="user"</strong></span>&gt;&lt;/form-component&gt;</code> </p>

<p className="p"><code class="literal">&lt;form-component <span class="strong"><strong>:user.sync="user"</strong></span>&gt;&lt;/form-component&gt;</code>
</p>


<p className="it"><code className="literal"> &lt;form-component <span className="strong"><strong>:user.once="user"</strong></span>&gt;&lt;/form-component&gt;</code> </p>

<p className="p"><code class="literal">
&lt;form-component <span class="strong"><strong>:user.once="user"</strong></span>&gt;&lt;/form-component&gt;</code>
</p>



</div></div></div>



</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Rewriting the shopping list with simple components</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Rewriting the shopping list with simple components" id="aid-147LC1"><div className="titlepage"><div><div><h1 className="title"><a id="ch03lvl1sec29"></a>Rewriting the shopping list with simple components</h1></div></div></div>

<p className="it">Ahora que ya sabemos mucho acerca de los componentes, vamos a reescribir nuestra aplicación de lista de la compra de usarlos.</p>

<p className="p">Now that we already know a lot about components, let's rewrite our shopping list application using them.</p>


<div class="note" title="Note"><h3 class="title"><a id="tip24"></a>Tip</h3>

<p className="it">Para la reescritura de la aplicación, vamos a utilizar esta versión de la aplicación de la lista de compras como base: <a className="ulink" href="https://jsfiddle.net/chudaol/vxfkxjzk/3/">https://jsfiddle.net/chudaol/vxfkxjzk/3/</a> .</p>

<p className="p">For the rewriting of the application, we will use this version of the shopping list application as a base: 
<a class="ulink" href="https://jsfiddle.net/chudaol/vxfkxjzk/3/">https://jsfiddle.net/chudaol/vxfkxjzk/3/</a>
.</p>


</div>

<p className="it">Ya hemos hecho anteriormente, cuando comenzamos a hablar de los componentes. Pero en ese momento, se utilizó plantillas opciones de cadena dentro de los componentes. Hagámoslo ahora el uso de plantillas como acabamos de saber que hacer. Vamos a echar un vistazo a la interfaz e identificar los componentes de nuevo:</p>

<p className="p">We have already done it previously, when we started talking about components. But at that time, we used string templates inside the components' options. Let's do it now using templates as we have just learned to do. Let's just have a look at the interface and identify the components again:</p>



<div class="mediaobject"><img src="/static/image00265.jpeg" width="100%" alt="Rewriting the shopping list with simple components"/></div>




<p className="it">Nuestra aplicación de lista de la compra tendrá cuatro componentes</p>

<p className="p">Our shopping list application will have four components</p>




<p className="it">Por lo tanto, sugiero que nuestra aplicación de lista de la compra se compone de los siguientes cuatro componentes:</p>

<p className="p">Thus, I suggest that our shopping list application consists of the following four components:</p>


<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem"><code class="literal">AddItemComponent</code>: The component responsible for adding a new item to the shopping list</li><li className="listitem"><code class="literal">ItemComponent</code>: The component responsible for the rendering of the new item in the shopping list</li><li className="listitem"><code class="literal">ItemsComponent</code>: The component responsible for rendering and managing the list of <code class="literal">ItemComponent</code></li><li className="listitem"><code class="literal">ChangeTitleComponent</code>: The component responsible for changing the title of the list</li></ul></div><div className="section" title="Defining templates for all the components"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec36"></a>Defining templates for all the components</h2></div></div></div>

<p className="it">Vamos a crear plantillas para estos componentes, suponiendo que los propios componentes ya están definidos y registrados.</p>

<p className="p">Let's create templates for these components assuming that the components themselves are already defined and registered.</p>


<div class="note" title="Note"><h3 class="title"><a id="note25"></a>Note</h3>

<p className="it"> <strong className="userinput"><code>CamelCase VS kebab-case</code></strong> Es probable que haya notado que mientras declaramos variables que describen los componentes en CamelCase ( <code>{`var HelloComponent=Vue.extend({...})`}</code>), que les nombre en el kebab de los casos: <code>{`Vue.component('hello-component', {...})`}</code>. Hacemos esto debido a la naturaleza atributo HTML entre mayúsculas y minúsculas. Por lo tanto, nuestros componentes para la aplicación de la lista de compras serán llamados de la siguiente manera:</p>

<p className="p">
<strong class="userinput"><code>CamelCase VS kebab-case</code></strong>
You have probably noticed that while we declare variables describing components in CamelCase (<code>{`var HelloComponent=Vue.extend({...})`}</code>), we name them in kebab-case:  <code>{`Vue.component('hello-component', {...})`}</code>. We do this because of the case-insensitive HTML attribute nature. Thus, our components for the shopping list application will be called as follows:</p>


<p className="p"> <code class="literal">add-item-component</code>  </p>

<p className="p"> <code class="literal">item-component</code> </p>

<p className="p"><code class="literal">items-component</code> </p>

<p className="p"><code class="literal">change-title-component</code>
</p>

</div>

<p className="it">Echar un vistazo a cómo nuestra era markup previamente (<a className="ulink" href="https://jsfiddle.net/chudaol/vxfkxjzk/3/">https://jsfiddle.net/chudaol/vxfkxjzk/3/</a> ).</p>

<p className="p">Have a look at how our markup was previously (
<a class="ulink" href="https://jsfiddle.net/chudaol/vxfkxjzk/3/">https://jsfiddle.net/chudaol/vxfkxjzk/3/</a>
).</p>


<p className="it">Vamos a reescribir usando las plantillas y los nombres de componentes. En esta parte, nos limitaremos a preocuparse de la capa de presentación, dejando el enlace de datos y acciones de manejo para una aplicación futura. Simplemente copia y pega el código HTML parte de la aplicación y distribuirla sobre nuestros componentes. Nuestros cuatro plantillas se verá algo como lo siguiente:</p>

<p className="p">Let's rewrite it using templates and components' names. In this part, we will just worry about the presentation layer, leaving the data binding and actions handling for a future implementation. We just copy and paste the HTML part of the application and distribute it over our components. Our four templates will look something like the following:</p>


<pre class="programlisting"> <code>{`<!--add new item template--> 
<template id="<span class="strong"><strong>add-item-template</strong></span>"> 
  <div class="input-group"> 
    <input @keyup.enter="addItem" v-model="newItem" 
      placeholder="add shopping list item" type="text" 
      class="form-control"> 
    <span class="input-group-btn"> 
      <button @click="addItem" class="btn btn-default" 
        type="button">Add!</button> 
    </span> 
  </div> 
</template> 
 
<!--list item template--> 
<template id="<span class="strong"><strong>item-template</strong></span>"> 
  <li :class="{ 'removed': item.checked }"> 
    <div class="checkbox"> 
      <label> 
        <input type="checkbox" v-model="item.checked"> {{ item.text }} 
      </label> 
    </div> 
  </li> 
</template> 
 
<!--items list template--> 
<template id="<span class="strong"><strong>items-template</strong></span>"> 
  <ul> 
    <item-component v-for="item in items" :item="item">
    </item-component> 
  </ul> 
</template> 
 
<!--change title template--> 
<template id="<span class="strong"><strong>change-title-template</strong></span>"> 
  <div> 
    <em>Change the title of your shopping list here</em> 
    <input <span class="strong"><strong>v-bind:value="value" v-on:input="onInput"</strong></span>/> 
  </div> 
</template> 
`}</code></pre>

<p className="it">Por lo tanto, nuestras marcas principales componentes constará de algunos componentes:</p>

<p className="p">Thus, our main components' markup will consist of some components:</p>


<pre class="programlisting"> <code>{`<div id="app" class="container"> 
  <h2>{{ title }}</h2> 
  <span class="strong"><strong><add-item-component></add-item-component> 
  <items-component :items="items"></items-component></strong></span> 
  <div class="footer"> 
    <hr/> 
    <span class="strong"><strong><change-title-component v-model="title"</change-title-component></strong></span> 
  </div> 
</div> 
`}</code></pre>

<p className="it">Como se podes ver, la mayoría de cada plantilla es una copia simple y pegar el código HTML correspondiente.</p>

<p className="p">As you can see, the majority of each template is a plain copy and paste of the corresponding HTML code.</p>

<p className="it">Sin embargo, hay algunas diferencias significativas. La plantilla de lista de elementos, por ejemplo, se ha modificado ligeramente. Usted ya ha aprendido y utilizado la <code className="literal">v-for</code>Directiva anteriormente. En los ejemplos anteriores, se utilizó esta directiva con elementos HTML tales como <code className="literal">&lt;li&gt;</code>. Ahora se ve que también se podes utilizar con los componentes personalizados Vue.</p>

<p className="p">However, there are some significant differences. The list item template, for example, is slightly changed. You have already learned and used the <code class="literal">v-for</code> directive previously. In the previous examples, we used this directive with HTML elements such as <code class="literal">&lt;li&gt;</code>. Now you see that it can also be used with Vue custom components.</p>


<p className="it">También podes ser que haya notado una pequeña diferencia en la plantilla de cambio de título. Ahora tiene un valor fijado a ella y emite el <code className="literal">onInput</code> método unido al <code className="literal">v-on:input</code> modificador. Como ha aprendido en la sección anterior, los componentes de los niños no podes afectar directamente a los datos directamente de los padres, por lo que tenemos que utilizar el sistema de eventos.</p>

<p className="p">You might have also noticed a small difference in the change title template. Now it has a value bound to it and emits the <code class="literal">onInput</code> method bound to the <code class="literal">v-on:input</code> modifier. As you have learned in the previous section, children components cannot directly affect directly a parent's data, which is why we have to use the events system.</p>


</div><div className="section" title="Defining and registering all the components"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec37"></a>Defining and registering all the components</h2></div></div></div>

<p className="it">Echar un vistazo al código JavaScript en nuestra anterior solicitud de lista de la compra: <a className="ulink" href="https://jsfiddle.net/chudaol/c8LjyenL/">https://jsfiddle.net/chudaol/c8LjyenL/</a> . Vamos a añadí el código que crea componentes Vue. Vamos a utilizar los ID de las plantillas ya definidas por su <code className="literal">template</code> atributo. Además, no se olvide el <code className="literal">props</code> atributo para pasar las propiedades de la aplicación principal. Por lo tanto, añadimos el siguiente código:</p>

<p className="p">Have a look at the JavaScript code in our previous shopping list application: 
<a class="ulink" href="https://jsfiddle.net/chudaol/c8LjyenL/">https://jsfiddle.net/chudaol/c8LjyenL/</a>
. Let's add the code that creates Vue components. We will use the IDs of already defined templates for their <code class="literal">template</code> attribute. Also, do not forget about the <code class="literal">props</code> attribute to pass the properties from the parent application. Thus, we add the following code:</p>


<pre class="programlisting"> <code>{`//add item component 
Vue.component('add-item-component', { 
  template: '<span class="strong"><strong>#add-item-template</strong></span>', 
  data: function () { 
    return { 
      <span class="strong"><strong>newItem</strong></span>: '' 
    } 
  } 
}); 
//item component 
Vue.component('item-component', { 
  template: '<span class="strong"><strong>#item-template</strong></span>', 
  props: ['<span class="strong"><strong>item</strong></span>'] 
}); 
//items component 
Vue.component('items-component', { 
  template: '<span class="strong"><strong>#items-template</strong></span>', 
  props: ['<span class="strong"><strong>items</strong></span>'] 
}); 
//change title component 
Vue.component('change-title-component', { 
  template: '<span class="strong"><strong>#change-title-template</strong></span>', 
  props: ['<span class="strong"><strong>value</strong></span>'], 
  methods: { 
    onInput: function (event) { 
      this.$emit('input', event.target.value) 
    } 
  } 
}); 
`}</code></pre>

<p className="it">Como se podes ver, en la <code className="literal">props</code> de cada componente, hemos pasado los atributos de sólo datos diferentes las que se refieren específicamente el componente. También hemos movido el <code className="literal">newItem</code> atributo al <code className="literal">data</code> atributo de <code className="literal">add-item-component</code>. En <code className="literal">change-title-component</code>, hemos añadido el <code className="literal">onInput</code> método que emite el evento de entrada, por lo que el título en el componente de los padres se ve afectado por cualquiera que sea el usuario escribe en el cuadro de entrada.</p>

<p className="p">As you can see, in <code class="literal">props</code> of each component, we have passed different data attributes-only those that specifically concern the component. We have also moved the <code class="literal">newItem</code> attribute to the <code class="literal">data</code> attribute of <code class="literal">add-item-component</code>. In <code class="literal">change-title-component</code>, we have added the <code class="literal">onInput</code> method that emits the input event, so the title in the parent component is affected by whatever the user types in the input box.</p>

<p className="it">Abra el archivo HTML en el navegador. La interfaz es exactamente el mismo que era antes! El código completo de lo que hemos hecho en esta sección se podes encontrar en el jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/xkhum2ck/1/">https://jsfiddle.net/chudaol/xkhum2ck/1/</a> .</p>

<p className="p">Open the HTML file in the browser. The interface is exactly the same as it was earlier! The complete code of what we have done in this section can be found in the JSFiddle at 
<a class="ulink" href="https://jsfiddle.net/chudaol/xkhum2ck/1/">https://jsfiddle.net/chudaol/xkhum2ck/1/</a>
.</p>


</div></div>


</div>

</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Exercise</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Exercise" id="aid-1565U1"><div className="titlepage"><div><div><h1 className="title"><a id="ch03lvl1sec30"></a>Exercise</h1></div></div></div>

<p className="it">A pesar de que nuestra aplicación se ve exactamente como lo estaba buscando antes, había perdido su funcionalidad. No sólo no añadí elementos, sino que también muestra el error en la consola fea devtools.</p>

<p className="p">Although our application looks exactly as it was looking earlier, its functionality was lost. Not only does it not add items, but it also shows the ugly error in the devtools console.</p>

<p className="it">Por favor utilice los eventos del sistema de emisión de llevar la funcionalidad artículos adición de nuevo.</p>
<p className="p">Please use the events emitting system to bring the adding items functionality back.</p>

<p className="it">Una posible solución para este ejercicio se podes encontrar en el Apéndice, <span className="emphasis"><em>Soluciones a los ejercicios.</em></span></p>
<p className="p">A possible solution for this exercise can be found in the Appendix,<span class="emphasis"><em> Solutions to Exercises.</em></span>
</p></div>




</div>
</div>
<div className='col-md-3'></div>

  <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Single-file components</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Single-file components"><div class="titlepage" id="aid-164MG2"><div><div><h1 className="title"><a id="ch03lvl1sec31"></a>Single-file components</h1></div></div></div>

<p className="it">Sabemos por las viejas prácticas que siempre es bueno para HTML independientes de los archivos CSS y JavaScript. Algunos frameworks modernos como reaccionan son relajantes y poco a poco acabando con esta regla. Hoy en día, usted no será sorprendido mirando el pequeño archivo o el componente que contiene su propio margen de beneficio, el estilo y código de la aplicación en su interior. En realidad, para los componentes pequeños, que incluso le resulte más conveniente tener este tipo de arquitectura. Vue también permite definir todo lo relacionado con el mismo componente en el mismo archivo. Este tipo de componente se conoce como un componente de un solo archivo.</p>

<p className="p">We know from the old best practices that it is always good to separate HTML from CSS and JavaScript files. Some modern frameworks such as React are relaxing and gradually wiping out this rule. Nowadays, you will not be shocked by looking at the small file or the component that contains its own markup, style, and application code inside it. Actually, for small components, we even find it more convenient to have such architecture. Vue also allows defining everything related to the same component in the same file. This kind of component is known as a single-file component.</p>

<div class="note" title="Note"><h3 class="title"><a id="note26"></a>Note</h3>

<p className="it">Un componente Vue de un solo archivo es un archivo con la <code className="literal">.vue</code> extensión. La aplicación que contiene tales componentes se podes construir utilizando la <code className="literal">webpack vue</code> configuración. Para andamio una aplicación con una configuración de este tipo, la forma más sencilla es utilizar <code className="literal">vue-cli</code>(<a className="ulink" href="https://github.com/vuejs-templates/webpack">https://github.com/vuejs-templates/webpack</a> ).</p>

<p className="p">A single-file Vue component is a file with a <code class="literal">.vue</code> extension. The application that contains such components can be built using the <code class="literal">webpack vue</code> configuration. To scaffold an app with such a configuration, the easiest way is to use <code class="literal">vue-cli</code> (
<a class="ulink" href="https://github.com/vuejs-templates/webpack">https://github.com/vuejs-templates/webpack</a>).</p>


</div>

<p className="it">Un componente Vue podes tener hasta tres secciones en que:</p>

<p className="p">A Vue component can have up to three sections in it:</p>


<div class="itemizedlist"><ul className="itemizedlist">


<li className="listitem"><code class="literal">&lt;script&gt;</code></li>


<li className="listitem"><code class="literal">&lt;template&gt;</code></li>


<li className="listitem"><code class="literal">&lt;style&gt;</code></li></ul></div>


<p className="it">Cada una de estas secciones es responsable de exactamente lo que está pensando. Poner en la <code className="literal">&lt;template&gt;</code> etiqueta sea cual sea la plantilla HTML debe ser responsable de, poner en la <code className="literal">&lt;script&gt;</code> etiqueta del código JavaScript responsable de los Vue componentes, métodos, datos, accesorios, y así sucesivamente. La <code className="literal">&lt;style&gt;</code> etiqueta deberá contener el estilo CSS para el componente dado.</p>

<p className="p">Each of these sections is responsible for exactly what you are thinking. Put into the <code class="literal">&lt;template&gt;</code> tag whatever the HTML template should be responsible for, put into the <code class="literal">&lt;script&gt;</code> tag the JavaScript code responsible for the Vue component, methods, data, props, and so on. The <code class="literal">&lt;style&gt;</code> tag shall contain the CSS style for the given component.</p>

<p className="it">¿Recuerdas nuestra <code className="literal">hello-component</code>? Tener una mirada en ella en el jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/mf82ts9a/2/">https://jsfiddle.net/chudaol/mf82ts9a/2/</a> .</p>

<p className="p">Do you remember our <code class="literal">hello-component</code>? Have a look at it in the JSFiddle at 
<a class="ulink" href="https://jsfiddle.net/chudaol/mf82ts9a/2/">https://jsfiddle.net/chudaol/mf82ts9a/2/</a>
.</p>

<p className="it">Comience por el andamio de la aplicación utilizando la <code className="literal">webpack-simple</code> configuración con <code className="literal">vue-cli</code>:</p>

<p className="p">Start by scaffolding the app using the <code class="literal">webpack-simple</code> configuration with <code class="literal">vue-cli</code>:</p>

<pre className="programlisting"><code>{`
<span class="strong"><strong>npm install -g vue-cli vue init webpack-simple hello</strong></span>
`}</code></pre>

<p className="it">Para volver a escribir como un componente Vue, creamos nuestro <code className="literal">HelloComponent.vue</code> archivo y agregue el siguiente código:</p>

<p className="p">To rewrite it as a Vue component, we create our <code class="literal">HelloComponent.vue</code> file and add the following code:</p>



<pre className="programlisting"><code>{`<template> 
  <h1>{{ msg }}</h1> 
</template> 
 
<script> 
<span class="strong"><strong>export default { 
  data () { 
    return { 
      msg: 'Hello!' 
    } 
  } 
}</strong></span> 
</script> 
`}</code></pre>




<p className="it">Tenga en cuenta que no es necesario especificar la plantilla en nuestra definición del componente JavaScript. Al ser un componente de un solo archivo, está implícito que la plantilla que se debe utilizar es el definido en este archivo. También podes haber notado que usamos estilo ES6 aquí. Además, no hay que olvidar que el <code className="literal">data</code> atributo debe ser una función y no un objeto.</p>

<p className="p">Note that we do not need to specify the template in our JavaScript component definition. Being a single-file component, it is implicit that the template that should be used is the one defined in this file. You might also have noticed that we use ES6 style in here. Also, do not forget that the <code class="literal">data</code> attribute should be a function and not an object.</p>


<p className="it">En nuestro script principal, tenemos que crear la aplicación Vue y que utilice las <code className="literal">HelloComponent</code>:</p>

<p className="p">In our main script, we have to create the Vue app and instruct it to use <code class="literal">HelloComponent</code>:</p>



<pre className="programlisting"><code>{`import Vue from 'vue' 
<span class="strong"><strong>import HelloComponent</strong></span> from './HelloComponent.vue' 
 
new Vue({ 
  el: '#app', 
  <span class="strong"><strong>components: { HelloComponent }</strong></span> 
}); 
`}</code></pre>


<p className="it">Nuestro <code className="literal">index.html</code> margen de beneficio no va a cambiar. Todavía invocará <code className="literal">hello-component</code>:</p>

<p className="p">Our <code class="literal">index.html</code> markup will not change. It will still invoke <code class="literal">hello-component</code>:</p>

<pre className="programlisting"><code>{`<body> 
  <div id="app"> 
    <span class="strong"><strong><hello-component></hello-component></strong></span> 
  </div> 
  <script src="./dist/build.js"></script> 
</body> 
`}</code></pre>


<p className="it">Ahora sólo tenemos que instalar <code className="literal">npm</code> dependencias (si todavía no lo ha hecho) y generar la aplicación:</p>

<p className="p">Now we just need to install <code class="literal">npm</code> dependencies (if you still haven't done so) and build the application:</p>


<pre className="programlisting"><code>{`
<span class="strong"><strong>npm install 
npm run dev</strong></span>
`}</code></pre>


<p className="it">Una vez que lo hace, su navegador abrirá automáticamente la <code className="literal">localhost:8080</code> página!</p>

<p className="p">Once you do it, your browser will automatically open the <code class="literal">localhost:8080</code> page!</p>

<p className="it">Comproba el código completo en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter3/hello">Capítulo 3 / hola</a> carpeta.</p>

<p className="p">Check the complete code in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter3/hello">chapter3/hello</a> folder.</p>


<p className="it">También podes comprobar, modificar, los controles periódicos y comprobar el <code className="literal">hello</code> componente en el webpackbin en <a className="ulink" href="http://www.webpackbin.com/N1LbBIsLb">http://www.webpackbin.com/N1LbBIsLb</a> .</p>

<p className="p">You can also test, modify, retest, and check the <code class="literal">hello</code> component in the webpackbin at 
<a class="ulink" href="http://www.webpackbin.com/N1LbBIsLb">http://www.webpackbin.com/N1LbBIsLb</a>
.</p>



<div class="note" title="Note"><h3 class="title"><a id="tip27"></a>Tip</h3>




<p className="it">Webpackbin es un buen servicio a ejecutar y probar las aplicaciones construidas con webpack. Es una muy buena herramienta a pesar de que todavía está en fase beta. Ya que es todavía joven, todavía tiene algunos problemas menores. Por ejemplo, si se intenta descargar el paquete de todo el proyecto, no va a construir.</p>

<p className="p">Webpackbin is a nice service to run and test applications built with Webpack. It is a very nice tool even though it's still in beta. As it's still young, it still has some minor issues. For instance, if you try to download the package of the entire project, it will not build.</p>

</div><div className="section" title="Plugins for IDEs"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec38"></a>Plugins for IDEs</h2></div></div></div>

<p className="it">Vue creadores y colaboradores pensaban de los desarrolladores y desarrollado plugins para un gran conjunto de entornos de desarrollo modernos. Podes encontrarlos en <a className="ulink" href="https://github.com/vuejs/awesome-vue#syntax-highlighting">https://github.com/vuejs/awesome-vue#syntax-highlighting</a> . Si sos como yo y utilizar WebStorm IDE por IntelliJ, siga estas instrucciones para instalar el plug-in de apoyo Vue:</p>

<p className="p">Vue creators and contributors thought about developers and developed plugins for a large set of modern IDEs. You can find them at 
<a class="ulink" href="https://github.com/vuejs/awesome-vue#syntax-highlighting">https://github.com/vuejs/awesome-vue#syntax-highlighting</a>
. If you are like me and use WebStorm IDE by IntelliJ, follow these instructions to install the Vue support plugin:</p>

<div class="orderedlist"><ol class="orderedlist arabic">


<li className="listitem">Go to <strong class="userinput"><code>Preferences</code></strong> | <strong class="userinput"><code>P</code></strong><strong class="userinput"><code>lugins</code></strong>.</li>


<li className="listitem">Click on <strong class="userinput"><code>Browse repositories</code></strong>.</li>


<li className="listitem">Type <code class="literal">vue</code> in the search box.</li>


<li className="listitem">Select <strong class="userinput"><code>Vue.js</code></strong> and click on the <strong class="userinput"><code>Install</code></strong> button:</li></ol></div>


<div class="mediaobject"><img src="/static/image00266.jpeg" width="100%" alt="Plugins for IDEs"/></div>

<p className="it">Instalar el plugin para el IDE Vue WebStorm</p>

<p className="p">Installing the Vue plugin for webstorm IDE</p>


</div><div className="section" title="Style and scope"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec39"></a>Style and scope</h2></div></div></div>

<p className="it">Es bastante obvio que la plantilla y el guión del componente pertenecen sólo a él. Sin embargo, el mismo no se aplica al estilo. Pruebe, por ejemplo, para añadí una <code className="literal">{`style`}</code> etiqueta a nuestro <code className="literal">hello</code> componente y añadí la regla CSS para la <code className="literal">&lt;h1&gt;</code> etiqueta para tener el color rojo:</p>

<p className="p">It is pretty obvious that the template and the script of the component belong only to it. However, the same does not apply to style. Try, for example, to add a <code class="literal">{`style`}</code> tag to our <code class="literal">hello</code> component and add the CSS rule for the <code class="literal">&lt;h1&gt;</code> tag to have the red color:</p>

<pre className="programlisting"><code>{`<style> 
  h1 { 
    color: red; 
  } 
</style> 
`}</code></pre>

<p className="it">Ahora, cuando se actualiza la página, se espera que todo el color de la <strong className="userinput"><code>Hello!</code></strong>cabecera cambia a rojo. Ahora trate de añadí la <code className="literal">&lt;h1&gt;</code> etiqueta de la principal <code className="literal">index.html</code> archivo. Podes que se sorprenda, pero también podes ser de color rojo:</p>

<p className="p">Now, when the page is refreshed, it is quite expected that the color of the <strong class="userinput"><code>Hello!</code></strong> header changes to red. Now try to add the <code class="literal">&lt;h1&gt;</code> tag to the main <code class="literal">index.html</code> file. You might be surprised, but it will also be red:</p>

<pre className="programlisting"><code>{`<div id="app"> 
  <h1>This is a single file component demo</h1> 
  <hello-component></hello-component> 
</div> 
`}</code></pre>

<div class="mediaobject"><img src="/static/image00267.jpeg" width="100%" alt="Style and scope"/></div>

<p className="it">Todas las etiquetas &lt;h1&gt; tienen el estilo que hemos definido dentro de un componente</p>

<p className="p">All the &lt;h1&gt; tags have the style that we defined inside a component</p>

<p className="it">Para que el estilo se fijarán únicamente en el ámbito del componente, es necesario indicar el atributo <code className="literal">scoped</code> a la etiqueta <code className="literal">&lt;style&gt;</code>:</p>

<p className="p">To make the style be attached only to the scope of the component, we need to indicate the attribute <code class="literal">scoped</code> to the <code class="literal">&lt;style&gt;</code> tag:</p>

<pre className="programlisting"><code className="strong">{`scoped 
  h1 { 
    color: red; 
  } 
 
`}</code></pre>

<p className="it">Mira la página y verá que sólo el <strong className="userinput"><code>Hello!</code></strong> texto es rojo, el otro <code className="literal">h1</code> tiene su estilo por defecto.</p>

<p className="p">Look at the page and you'll see that only the <strong class="userinput"><code>Hello!</code></strong> text is red, the other <code class="literal">h1</code> has its default style.</p>

</div><div className="section" title="Hot-reloading"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec40"></a>Hot-reloading</h2></div></div></div>

<p className="it">Podes haber notado que ahora ya no pido que actualizar la página, pero al mirar la página. Esto se debe a que la página se actualiza automáticamente en cada cambio cuando la aplicación está utilizando bootstrap <code className="literal">vue-cli</code> enfoque andamios webpack. La magia sucede gracias a la <code className="literal">vue-hot-reload</code>API que vigila los archivos de la aplicación y le dice al navegador para recargar automáticamente cada vez que algo ha cambiado! ¡Hurra!</p>

<p className="p">You might have noticed that now I no longer ask you to refresh the page but to look at the page. This is because the page is automatically refreshed on each change when the application is bootstrapped using <code class="literal">vue-cli</code> Webpack scaffolding approach. The magic happens thanks to the <code class="literal">vue-hot-reload</code> API that watches the application's files and tells the browser to automatically reload every time something has changed! Yay!</p>


</div><div className="section" title="Preprocessors"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec41"></a>Preprocessors</h2></div></div></div>

<p className="it">Si sostá en pre-procesadores, que son más que bienvenidos para utilizarlos en sus <code className="literal">.vue</code> componentes. Esto es posible debido a <code className="literal">vue-loader</code> que permite el uso de cargadores webpack.</p>

<p className="p">If you are into preprocessors, you are more than welcome to use them in your <code class="literal">.vue</code> components. This is possible due to <code class="literal">vue-loader</code> that allows using Webpack loaders.</p>

<div class="note" title="Note"><h3 class="title"><a id="note28"></a>Note</h3>

<p className="it"> Podes encontrar más información sobre <code className="literal">vue-loaders</code> y preprocesadores en el tutorial en <a className="ulink" href="http://vue-loader.vuejs.org/en/">http://vue-loader.vuejs.org/en/</a> .</p>

<p className="p">
You can find more about <code class="literal">vue-loaders</code> and preprocessors in the tutorial at 

<a class="ulink" href="http://vue-loader.vuejs.org/en/">http://vue-loader.vuejs.org/en/</a>
.</p>


</div><div className="section" title="HTML preprocessors"><div className="titlepage"><div><div><h3 class="title"><a id="ch03lvl3sec7"></a>HTML preprocessors</h3></div></div></div>


<p className="it">Con el fin de poder utilizar un preprocesador en un solo archivo de componentes Vue, sólo tiene que añadí el <code className="literal">lang</code> atributo a la <code className="literal">&lt;template&gt;</code> etiqueta! No se olvide de instalar el módulo de nodo correspondiente:</p>

<p className="p">In order to be able to use a preprocessor in a single-file Vue components, just add the <code class="literal">lang</code> attribute to the <code class="literal">&lt;template&gt;</code> tag! Do not forget to install the corresponding node module:</p>


<pre className="programlisting"><code className="strong">{`
npm install jade --save-dev 
`}</code></pre>


<p className="it">Utilizando <code className="literal">jade</code>, por ejemplo, en nuestra <code className="literal">hello</code> plantilla de componente, sería tan fácil como sigue:</p>

<p className="p">Using <code class="literal">jade</code>, for example, in our <code class="literal">hello</code> component's template, would be as easy as follows:</p>



<pre className="programlisting"><code>{`<template lang="jade"> 
  h1 {{ msg }} 
</template> 
`}</code></pre></div><div className="section" title="CSS preprocessors"><div className="titlepage"><div><div><h3 class="title"><a id="ch03lvl3sec8"></a>CSS preprocessors</h3></div></div></div>


<p className="it">La misma lógica se aplica a los preprocesadores CSS. Vamos a ver cómo utilizar, por ejemplo, un preprocesador Sass:</p>

<p className="p">The same logic applies to the CSS preprocessors. Let's see how to use, for example, a sass preprocessor:</p>

<pre className="programlisting"><code>{`<style lang="sass" scoped> 
  $red: red; 
  h1 { 
    color: $red; 
  } 
</style> 
`}</code></pre><div class="note" title="Note"><h3 class="title"><a id="tip29"></a>Tip</h3>

<p className="it">Al igual que en el ejemplo anterior, no se olvide de instalar el cargador correspondiente para que esto funcione: <code className="literal">npm install sass-loader node-sass --save-dev</code> </p>

<p className="p">Like in the previous example, do not forget to install the corresponding loader for this to work:
<code class="literal">npm install sass-loader node-sass --save-dev</code>
</p>


</div></div><div className="section" title="JavaScript preprocessors"><div className="titlepage"><div><div><h3 class="title"><a id="ch03lvl3sec9"></a>JavaScript preprocessors</h3></div></div></div>

<p className="it">También es posible utilizar cualquier preprocesadores de JavaScript. Al igual que en los dos ejemplos anteriores, sólo tiene que utilizar el <code className="literal">lang</code> atributo para especificar el preprocesador de usar. Y no se olvide de instalarlo a través de <code className="literal">npm</code>!</p>

<p className="p">It is also possible to use any JavaScript preprocessors. Like in the two previous examples, just use the <code class="literal">lang</code> attribute to specify the preprocessor to use. And do not forget to install it via <code class="literal">npm</code>!</p>


<pre className="programlisting"><code className="strong">{`
 npm install coffee-loader coffee-script --save-dev 
<script lang="coffee"> 
  exports.default = data: -> 
  { msg: 'Hello!' } 
</script> 

`}</code></pre></div></div></div>



</div>

</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Rewriting our shopping list application with single-file components</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Rewriting our shopping list application with single-file components"><div class="titlepage" id="aid-173722"><div><div><h1 className="title"><a id="ch03lvl1sec32"></a>Rewriting our shopping list application with single-file components</h1></div></div></div>

<p className="it">Ahora que ya sabemos mucho acerca de los componentes y la forma de utilizarlos, y también saber las técnicas agradables para hacer que nuestro código sea más fácil de escribir, volvamos a nuestra lista de compras y volver a escribir como la aplicación de Vue componente de un solo archivo. Para tener una fácil configuración, podemos utilizar <code className="literal">vue-cli</code> con la configuración webpack. En realidad, ya lo hemos hecho en <a className="link" title="Capítulo 2. Fundamentos - Instalación y uso" href="part0027.xhtml#aid-PNV61">el capítulo 2</a> , <span className="emphasis"><em>Fundamentos - Instalación y uso</em></span> . Así, acaba de encontrar esta aplicación y estar preparado para empezar a trabajar en él. Si no lo encuentra, podes crear fácilmente:</p>

<p className="p">Now that we already know so much about components and how to use them, and also know nice techniques to make our code easier to write, let's get back to our shopping list and rewrite it as single-file component's Vue application. To have an easy setup, we can use <code class="literal">vue-cli</code> with Webpack configuration. Actually, we've already done it in <a class="link" title="Chapter 2. Fundamentals - Installing and Using" href="part0027.xhtml#aid-PNV61">Chapter 2</a>, <span class="emphasis"><em>Fundamentals - Installing and Using</em></span>. So, just find this application and be prepared to start working on it. If you cannot find it, you can easily create it:</p><pre className="programlisting"><code>{`
#install vue-cli if you still hadn't installed it 
$ npm install vue-cli -g 
#bootstrap the application 
$ vue init webpack shopping-list 
$ cd shopping-list 
$ npm install 
$ npm run dev 
`}</code></pre>

<p className="it">Asegúrese de que el <code className="literal">index.html</code> archivo tiene el siguiente aspecto:</p>

<p className="p">Ensure that your <code class="literal">index.html</code> file looks like the following:</p><pre className="programlisting"><code>{`<!DOCTYPE html> 
<html> 
  <head> 
    <meta charset="utf-8"> 
    <title>shopping-list</title> 
    <link rel="stylesheet" 
      href="https://maxcdn.bootstrapcdn.com/bootstrap/
      3.3.6/css/bootstrap.min.css"> 
  </head> 
  <body> 
    <span class="strong"><strong><app></app></strong></span> 
  </body> 
</html> 
`}</code></pre>

<p className="it">Y el <code className="literal">main.js</code> archivo debe ser similar al siguiente:</p>

<p className="p">And your <code class="literal">main.js</code> file should look like the following:</p>
<pre className="programlisting"><code>{`import Vue from 'vue' 
import App from './App' 
 
new Vue({ 
  el: 'app', 
  components: { App } 
}) 
`}</code></pre>

<p className="it">Ahora estamos listos para crear nuestros componentes y para llenar nuestra solicitud con ellos. Por supuesto, recordar que nuestra lista de la compra tiene esencialmente cuatro componentes:</p>

<p className="p">We are now ready to create our components and to populate our application with them. Of course, you remember that our shopping list has essentially four components:</p>

<div class="itemizedlist"><ul className="itemizedlist">

<li className="listit"><code className="literal">AddItemComponent</code>: El componente responsable de añadí un nuevo elemento a la lista de la compra</li>

<li className="listitem"><code class="literal">AddItemComponent</code>: The component responsible for adding a new item to the shopping list</li>

<li className="listit"><code className="literal">ItemComponent</code>: El componente responsable de la renderización del nuevo elemento en la lista de la lista de compras artículos</li>

<li className="listitem"><code class="literal">ItemComponent</code>: The component responsible for the rendering of the new item in the shopping list items list</li>

<li className="listit"><code className="literal">ItemsComponent</code>: El componente responsable de la renderización y la gestión de la lista de <code className="literal">ItemComponent</code></li>

<li className="listitem"><code class="literal">ItemsComponent</code>: The component responsible for the rendering and managing the list of <code class="literal">ItemComponent</code></li>

<li className="listit"><code className="literal">ChangeTitleComponent</code>: El componente responsable de cambiar el título de la lista</li>

<li className="listitem"><code class="literal">ChangeTitleComponent</code>: The component responsible for changing the title of the list</li>

</ul></div>

<p className="it">Vamos a crear todos ellos en la <code className="literal">components</code> carpeta. Para empezar, basta con incluir tres secciones vacías <code className="literal">(&lt;template&gt;</code>, <code className="literal">&lt;script&gt;</code> y <code className="literal">&lt;style&gt;</code>) en cada uno de ellos y invocarlos en los lugares correctos en el principal <code className="literal">App.vue</code> componente. Por favor poner algo en la plantilla que nos permitirá identificar de forma visible los diferentes componentes en la página. Por lo tanto, el código de todos nuestros cuatro componentes se verá como la siguiente:</p>

<p className="p">Let's create all of them in the <code class="literal">components</code> folder. To start with, just include three empty sections <code class="literal">(&lt;template&gt;</code>, <code class="literal">&lt;script&gt;</code>, and <code class="literal">&lt;style&gt;</code>) in each of them and invoke them in the correct places within the main <code class="literal">App.vue</code> component. Please put something into the template that will allow us to visibly identify the different components on the page. So, the code of all our four components will look like the following:</p>




<div class="mediaobject"><img src="/static/image00268.jpeg" width="100%" alt="Rewriting our shopping list application with single-file components"/></div>



<p className="it">El código para los cuatro componentes de la aplicación de la lista de compras</p>

<p className="p">The code for all four components of the shopping list application</p>




<p className="it">Ahora abra el <code className="literal">App.vue</code> componente. Este es nuestro principal componente que va a montar todos los componentes juntos.</p>

<p className="p">Now open the <code class="literal">App.vue</code> component. This is our main component that will assemble all the components together.</p>




<p className="it">Retire todo de los <code className="literal">&lt;template&gt;</code>, <code className="literal">&lt;script&gt;</code> y <code className="literal">&lt;style&gt;</code> las etiquetas. Ahora vamos a empezar a construir nuestra aplicación.</p>

<p className="p">Remove everything from the <code class="literal">&lt;template&gt;</code>, <code class="literal">&lt;script&gt;</code>, and <code class="literal">&lt;style&gt;</code> tags. We will now start to build our application.</p>




<p className="it">En primer lugar, hay que importar los componentes que serán utilizados por <code className="literal">App.vue</code>(en este caso, todos ellos).</p>

<p className="p">First of all, we must import the components that will be used by <code class="literal">App.vue</code> (in this case, all of them).</p><div class="note" title="Note"><h3 class="title"><a id="tip30"></a>Tip</h3>




<p className="it">No se olvide que, como estamos utilizando ES2015 en esta aplicación, podemos utilizar la importación / exportación y todas las demás cosas bellas ES2015.</p>

<p className="p">Do not forget that, as we are using ES2015 in this application, we can use import/export and all the other beautiful ES2015 things.</p></div>




<p className="it">Dentro de la <code className="literal">&lt;script&gt;</code> etiqueta, vamos a importar los componentes y exportar el objeto que va a contener la función de los componentes y los datos importados que devuelve los elementos de la lista de compras:</p>

<p className="p">Inside the <code class="literal">&lt;script&gt;</code> tag, let's import the components and export the object that will contain the imported components and data function that returns the shopping list's items:</p>

<pre className="programlisting"><code>{`<script>
  import AddItemComponent from './components/AddItemComponent' 
  import ItemsComponent from './components/ItemsComponent' 
  import ChangeTitleComponent from './components/ChangeTitleComponent' 
 
  export default { 
    components: { 
      AddItemComponent, 
      ItemsComponent, 
      ChangeTitleComponent
    }, 
    data () { 
      return { 
        items: [{ text: 'Bananas', checked: true }, 
                { text: 'Apples', checked: false }] 
      } 
    }, 
    methods: { 
      addItem (text) { 
        this.items.push({ 
          text: text, 
          checked: false 
        }) 
      } 
    } 
  } 
</script> 
 
`}</code></pre>




<p className="it">Nuestra plantilla, básicamente, podes ser la misma que la plantilla que hemos construido en la aplicación de la lista de compras utilizando componentes simples. Vamos a quitar todo lo concerniente a los modelos y los datos de unión por ahora. En primer lugar, insertar el componente responsable de la adición de elementos, entonces el componente que contiene todos los elementos y, a continuación, en el pie de página, el componente responsable de cambiar el título.</p>

<p className="p">Our template can basically be the same as the template that we have built in the shopping list application using simple components. Let's just remove everything concerning the models and data binding for now. First, insert the component responsible for adding items, then the component containing all the items, and then, in the footer, the component responsible for changing the title.</p>




<p className="it">Nuestra plantilla se encarga de parecerse a lo siguiente:</p>

<p className="p">Our template will then look like the following:</p>
<pre className="programlisting"><code>{`<template> 
  <div id="app" class="container"> 
    <h2>{{ title }}</h2> 
    <add-item-component></add-item-component> 
    <items-component></items-component> 
    <div class="footer"> 
      <hr/> 
      <change-title-component></change-title-component> 
    </div> 
  </div> 
</template> 
`}</code></pre>




<p className="it">Todavía recuerda que los nombres de las variables de los componentes son CamelCased, y cuando se utilizan dentro de la plantilla, que debe ser invocado usando el kebab de los casos, ¿verdad? Bueno, vamos a ver cómo se ve en el navegador:</p>

<p className="p">You still remember that the names of the components' variables are CamelCased, and when they are used inside the template, they should be invoked using kebab-case, right? Good, let's see how it looks in the browser:</p>




<div class="mediaobject"><img src="/static/image00269.jpeg" width="100%" alt="Rewriting our shopping list application with single-file components"/></div>



<p className="it">aplicación de lista de la compra fabricadas con componentes de un único archivo</p>

<p className="p">Shopping list application built of single-file components</p>




<p className="it">No parece que hermosa, ¿verdad? Vamos a llenar cada uno de los componentes con sus plantillas.</p>

<p className="p">Doesn't seem that beautiful, right? Let's fill each of the components with their templates.</p><div class="note" title="Note"><h3 class="title"><a id="tip31"></a>Tip</h3>




<p className="it">Vamos a seguir usando el estilo CSS de Bootstrap para esta aplicación. Incluirlo a nivel mundial en el <code className="literal">index.html</code> archivo: <code className="literal">&lt;link rel="stylesheet" href=" https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"&gt;</code> </p>

<p className="p">We will continue using Bootstrap's CSS style for this application. Include it globally in the <code class="literal">index.html</code> file:
<code class="literal">&lt;link rel="stylesheet" href=" https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"&gt;</code>
</p></div><div className="section" title="AddItemComponent"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec42"></a>AddItemComponent</h2></div></div></div>




<p className="it">Abierta <code className="literal">AddItemComponent.vue</code>. Vamos a llenar su <code className="literal">&lt;template&gt;</code>. Se verá como la siguiente:</p>

<p className="p">Open <code class="literal">AddItemComponent.vue</code>. Let's fill its <code class="literal">&lt;template&gt;</code>. It will look like the following:</p>

<pre className="programlisting"><code>{`<template> 
  <div> 
    <div class="input-group"> 
      <input type="text" class="input form-control" 
        placeholder="add shopping list item"> 
      <span class="input-group-btn"> 
        <button class="btn btn-default" type="button">Add!</button> 
      </span> 
    </div> 
  </div> 
</template> 
`}</code></pre>




<p className="it">Si nos fijamos en la página en el navegador, ya se podes ver que cambió y se hizo más reconocible como nuestra aplicación de lista de la compra.</p>

<p className="p">If you look at the page in your browser, you can already see that it changed and became more recognizable as our shopping list application.</p></div><div className="section" title="Configuring ItemComponent and ItemsComponent"><div className="titlepage"><div><div><h2 class="title"><a id="ch03lvl2sec43"></a>Configuring ItemComponent and ItemsComponent</h2></div></div></div>




<p className="it">Ahora vamos a pasar a la <code className="literal">ItemComponent</code>. No hacemos más que copiar y pegar el código HTML de la componente ejemplo sencillo:</p>

<p className="p">Let's now move to the <code class="literal">ItemComponent</code>. We will just copy and paste the HTML from the simple component example:</p>

<pre className="programlisting"><code>{`//ItemComponent.vue 
<template> 
  <li :class="{ 'removed': item.checked }"> 
    <div class="checkbox"> 
      <label> 
        <input type="checkbox" v-model="item.checked"> {{ item.text }} 
      </label> 
    </div> 
  </li> 
</template> 
`}</code></pre>




<p className="it">También vamos a añadí un poco de <code className="literal">scoped</code> estilo para este componente. Estilo específico de este componente es el estilo que tiene que ver con el <code className="literal">&lt;li&gt;</code>, <code className="literal">&lt;span&gt;</code> y clase <code className="literal">.removed</code>. Vamos a copiar y pegar en este componente:</p>

<p className="p">Let's also add some <code class="literal">scoped</code> style for this component. This component's specific style is the style that has to do with the <code class="literal">&lt;li&gt;</code>, <code class="literal">&lt;span&gt;</code>, and class <code class="literal">.removed</code>. Let's copy and paste them into this component:</p>



<pre className="programlisting"><code>{`//ItemComponent.vue 
<style scoped> 
  .removed { 
    color: gray; 
  } 
  .removed span { 
    text-decoration: line-through; 
  } 
  li { 
    list-style-type: none; 
  } 
  li span { 
    margin-left: 5px; 
  } 
</style> 
`}</code></pre>




<p className="it">Ahora abierta <code className="literal">ItemsComponents</code>. Como se recuerda, es una lista de los <code className="literal">ItemComponent </code> elementos. Incluso si usted no recuerda, supongo que las características plurales del nombre de este componente sugiere esto. Con el fin de que sea capaz de utilizar el <code className="literal">ItemComponent</code>, debe importar y registrar de la <code className="literal">components</code> propiedad. Por lo tanto, vamos a modificar el guión primero:</p>

<p className="p">Now open <code class="literal">ItemsComponents</code>. As you remember, it is a list of the <code class="literal">ItemComponent </code> elements. Even if you do not remember, I guess that the plural characteristics of the name of this component suggests this. In order for it to be able to use the <code class="literal">ItemComponent</code>, it must import it and register in the <code class="literal">components</code> property. So, let's modify the script first:</p>

<pre className="programlisting"><code>{`//ItemsComponent.vue 
<script> 
  import <span class="strong"><strong>ItemComponent</strong></span> from './ItemComponent' 
 
  export default { 
    components: { 
      ItemComponent
    } 
  } 
</script> 
`}</code></pre>

<p className="it">Ahora se podes utilizar <code className="literal">item-component</code> en <code className="literal">&lt;template&gt;</code>! ¿Todavía recuerda la forma de repetición con <code className="literal">vue.js</code>? ¡Por supuesto que sí! Es por eso que está abriendo la <code className="literal">&lt;template&gt;</code> etiqueta en este momento y escribir el siguiente código:</p>

<p className="p">Now you can use <code class="literal">item-component</code> in <code class="literal">&lt;template&gt;</code>! Do you still remember how to iterate with <code class="literal">vue.js</code>? Of course you do! That is why you are opening the <code class="literal">&lt;template&gt;</code> tag right now and writing the following code:</p>

<pre className="programlisting"><code>{`/temsComponent.vue 
<template> 
  <div> 
    <item-component v-for="item in items" :item="item">
    </item-component> 
  </div> 
</template> 
`}</code></pre>




<p className="it">Si se comprueba la página ahora, usted se sorprenderá al ver que las cosas realmente no funcionan. La consola web está llena de errores. Se podes entender por qué?</p>

<p className="p">If you check the page now, you'll be surprised to see that things actually do not work. The web console is full of errors. Can you figure out why?</p>




<p className="it">¿Recuerdas que cuando los componentes de los niños quieren tener acceso a los datos de los padres, deben declarar "apoyos" en la inicialización del componente? Esto es exactamente lo que hemos olvidado acerca de la declaración de ambos <code className="literal">ItemsComponent</code> y <code className="literal">ItemComponent</code>.</p>

<p className="p">Do you remember that when children components want to have access to the parent's data, they must declare "props" on the component initialization? This is exactly what we've forgotten about on the declaration of both <code class="literal">ItemsComponent</code> and <code class="literal">ItemComponent</code>.</p>




<p className="it">En primer lugar, dentro <code className="literal">App.vue</code>, artículos se unen a la <code className="literal">items-component</code> invocación:</p>

<p className="p">First of all, within <code class="literal">App.vue</code>, bind items to the <code class="literal">items-component</code> invocation:</p>

<pre className="programlisting"><code>{`//App.vue  
<items-component :items="items" ></items-component> 
`}</code></pre>

<p className="it">A continuación, añadí el <code className="literal">props</code> atributo a <code className="literal">ItemsComponent</code>:</p>

<p className="p">Then add the <code class="literal">props</code> attribute to <code class="literal">ItemsComponent</code>:</p>

<pre className="programlisting"><code>{`//ItemsComponent.vue 
<script> 
  import ItemComponent from './ItemComponent' 
 
  export default { 
    components: { 
      ItemComponent 
    }, 
    props: ['items'] 
  } 
</script> 
`}</code></pre>




<p className="it">Ahora vuelve a <code className="literal">ItemComponent</code> y añadí la <code className="literal">props</code> propiedad:</p>

<p className="p">Now go back to <code class="literal">ItemComponent</code> and add the <code class="literal">props</code> property:</p>

<pre className="programlisting"><code>{`//temComponent.vue 
<script> 
  export default { 
    props: ['item'] 
  } 
</script>  
`}</code></pre>

<p className="it">Comproba la página ahora. Ahora bien, de hecho, contiene la lista de elementos y tiene una apariencia casi la misma que la que tenía cuando se creó por primera ella. Comproba el código completo para esta sección en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter3/shopping-list">Capítulo 3 / lista de compras</a> carpeta.</p>

<p className="p">Check the page now. Now it indeed contains the list of items and has a look and feel almost the same as it had when we first created it. Check the full code for this section in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter3/shopping-list">chapter3/shopping-list</a> folder.</p></div></div>
</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Exercise</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Exercise" id="aid-181NK1"><div className="titlepage"><div><div><h1 className="title"><a id="ch03lvl1sec33"></a>Exercise</h1></div></div></div>

 <p className="it">Terminar la aplicación lista de la compra para que tenga la misma funcionalidad que antes.</p>

 <p className="p">Finish the shopping list application so that it has the same functionality as before.</p>

 <p className="it">No hay mucho izquierda y estoy seguro de que será terminado con él en menos de media hora. La posible solución a este ejercicio se podes encontrar en el <a className="link" title="Capítulo 10. Soluciones a los ejercicios" href="part0083.xhtml#aid-2F4UM1">Apéndice</a> , <span className="emphasis"><em>Soluciones a los ejercicios.</em></span> </p>

 <p className="p">There's not so much left and I'm sure you will be done with it in less than half an hour. The possible solution to this exercise can be found in the <a class="link" title="Chapter 10. Solutions to Exercises" href="part0083.xhtml#aid-2F4UM1">Appendix</a>,<span class="emphasis"><em> Solutions to Exercises.</em></span>
</p>

</div>




</div>

</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Rewriting the Pomodoro application with single-file components</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Rewriting the Pomodoro application with single-file components"><div class="titlepage" id="aid-190862"><div><div><h1 className="title"><a id="ch03lvl1sec34"></a>Rewriting the Pomodoro application with single-file components</h1></div></div></div>



<p className="it">Espero que todavía recuerda y, posiblemente, incluso el uso de la aplicación Pomodoro que desarrollamos en el primer capítulo de este libro.</p>

<p className="p">I hope you still remember and possibly even use the Pomodoro application that we developed in the first chapter of this book.</p>



<p className="it">Me gustaría volver ahora y para hacer el mismo ejercicio que hicimos en el anterior apartado a definir los componentes de la aplicación y volver a escribir que el uso de estos componentes.</p>

<p className="p">I would like to revisit it now and to do the same exercise we did in the previous section&mdash;define the components of the application and rewrite it using these components.</p>



<p className="it">Vamos a echar un vistazo a nuestra aplicación Pomodoro. Y ahora voy a echar a perder: Voy a incluir una captura de pantalla que ya contiene los gatitos que están siendo mostrados durante el tiempo de reposo usando <a className="ulink" href="http://thecatapi.com/api">http://thecatapi.com/api</a> : </p>

<p className="p">Let's have a look at our Pomodoro application. And now I am going to spoil you: I'll include a screenshot that already contains the kittens that are being shown during the resting time using 
<a class="ulink" href="http://thecatapi.com/api">http://thecatapi.com/api</a>:
</p>



<div class="mediaobject"><img src="/static/image00270.jpeg" width="100%" alt="Rewriting the Pomodoro application with single-file components"/></div>




<p className="it">La aplicación Pomodoro en su descanso! estado</p>

<p className="p">The Pomodoro application in its Rest! state</p>



<p className="it">Hay algunos componentes fácilmente identificables:</p>

<p className="p">There are some easily identifiable components:</p><div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">The component of the controls (start, pause, end), let's name it <code class="literal">
<span class="strong"><strong>ControlsComponent</strong></span>
</code></li>




<li className="listit">El componente de los controles (inicio, pausa, final), vamos a lo nombra <code className="literal"> <span className="strong"><strong>ControlsComponent</strong></span> </code></li>

<li className="listitem">The component of the time countdown, <code class="literal">
<span class="strong"><strong>CowntdownComponent</strong></span>
</code></li>




<li className="listit">El componente de la cuenta regresiva del tiempo, <code className="literal"> <span className="strong"><strong>CowntdownComponent</strong></span> </code></li>

<li className="listitem">The component of the title of the current state (<strong class="userinput"><code>Work!</code></strong>/<strong class="userinput"><code>Rest!</code></strong>), <code class="literal">
<span class="strong"><strong>StateTitleComponent</strong></span>
</code></li>




<li className="listit">El componente del título de la situación actual ( <strong className="userinput"><code>Work!</code></strong>/ <strong className="userinput"><code>Rest!</code></strong>),<code className="literal"> <span className="strong"><strong>StateTitleComponent</strong></span> </code></li>

<li className="listitem">The component of the kittens rendering that depends on the state (working or resting), <code class="literal">
<span class="strong"><strong>KittensComponent</strong></span>
</code> (this is my favorite one!)</li>




<li className="listit">El componente de la renderización gatitos que depende del estado (de trabajo o de descanso), (este es mi favorito!)<code className="literal"> <span className="strong"><strong>KittensComponent</strong></span> </code></li>

</ul></div>



<p className="it">Ahora, por favor, dejar de mirar el gato y vamos a empezar a aplicar nuestra aplicación Pomodoro utilizando componentes de un único archivo! Algunos primeros pasos para un armazón para la aplicación son los siguientes:</p>

<p className="p">Now, please stop staring at the kitten and let's start implementing our Pomodoro application using single-file components! Some first steps to scaffold the application are as follows:</p><div class="orderedlist"><ol class="orderedlist arabic"><li className="listitem">Start by opening the scaffolded Pomodoro application from the previous chapter or create a new application based on the Webpack template.</li>




<li className="listit">Comience abriendo la aplicación Pomodoro andamiaje del capítulo anterior o crear una nueva aplicación basada en la plantilla webpack.</li>

<li className="listitem">Run <code class="literal">npm install</code> and <code class="literal">npm run dev</code> in the <code class="literal">application</code> folder.</li>




<li className="listit">Ejecutar <code className="literal">npm install</code> y <code className="literal">npm run dev</code> en la <code className="literal">application</code> carpeta.</li>

<li className="listitem">Ensure that your <code class="literal">index.html</code> looks like the following:
<pre className="programlisting"><code>{`      <!DOCTYPE html> 
      <html> 
        <head> 
          <meta charset="utf-8"> 
          <title>pomodoro</title> 
        </head> 
        <body> 
          <app></app> 
        </body> 
      </html> 
`}</code></pre></li>




<li className="listit">Asegurarse de que sus <code className="literal">index.html</code> miradas como las siguientes: <pre className="programlisting"><code>{`     &lt;! DOCTYPE html&gt; &lt;Html&gt; &lt;Head&gt; &lt;Charset meta = "UTF-8"&gt; &lt;Title&gt; pomodoro &lt;/ title&gt; &lt;/ Head&gt; &lt;Body&gt; &lt;App&gt; &lt;/ app&gt; &lt;/ Body&gt; &lt;/ Html&gt; `}</code></pre></li>

<li className="listitem">Ensure that your <code class="literal">main.js</code> file looks like the following:
<pre className="programlisting"><code>{`      import Vue from 'vue' 
      import App from './App' 
 
      /* eslint-disable no-new */ 
      new Vue({ 
        el: 'app', 
        components: { App } 
      }) 
`}</code></pre></li>




<li className="listit">Asegúrese de que el <code className="literal">main.js</code> archivo tiene el siguiente aspecto: <pre className="programlisting"><code>{`      importación de Vue 'vue'Aplicación de importación './App'/ * Eslint-deshabilitar ningún nuevo * / nueva Vue ({EL: 'app', componentes: {app} }) `}</code></pre></li>

<li className="listitem">Open your browser to the page <code class="literal">localhost:8080</code>.</li>




<li className="listit">Abra su navegador a la página <code className="literal">localhost:8080</code>.</li>

<li className="listitem">Then, like in the previous example, go to the <code class="literal">components</code> folder and create all the necessary <code class="literal">.vue</code> components.</li>




<li className="listit">Entonces, al igual que en el ejemplo anterior, vaya a la <code className="literal">components</code> carpeta y crear todos los necesarios <code className="literal">.vue</code> componentes.</li>

<li className="listitem">Go to <code class="literal">App.vue</code>, and import and register all the created components.</li>




<li className="listit">Ir a <code className="literal">App.vue</code>, y la importación y el registro de todos los componentes creados.</li>

<li className="listitem">In the <code class="literal">&lt;template&gt;</code> section of each of the components, put something that will uniquely identify it so that we can easily recognize it when checking the page.</li>




<li className="listit">En la <code className="literal">&lt;template&gt;</code> sección de cada uno de los componentes, poner algo que identificará de forma única manera que podemos reconocer fácilmente cuando el control de la página.</li>

</ol></div>



<p className="it">Es casi seguro que venir a la estructura y el código inicial, que será similar a la siguiente:</p>

<p className="p">You will almost certainly come to the structure and the initial code, which looks something like the following:</p>



<div class="mediaobject"><img src="/static/image00271.jpeg" width="100%" alt="Rewriting the Pomodoro application with single-file components"/></div>


<p className="it">El estado muy inicial de la aplicación Pomodoro implementado con componentes de un único archivo</p>

<p className="p">The very initial state of the Pomodoro application implemented with single-file components</p>



<p className="it">Ahora, vamos a suponer que nuestros componentes están listos para usar y vamos a colocarlos donde deben estar en el diseño de la aplicación, en consecuencia.</p>

<p className="p">Now, let's assume that our components are ready to use and let's place them where they belong into the application's layout, accordingly.</p>



<p className="it">Les voy a recordar un poco la forma de marcas de toda la aplicación se veía anteriormente:</p>

<p className="p">I will just slightly remind you how the whole application's markup looked earlier:</p>
<pre className="programlisting"><code>{`<div id="app" class="container"> 
  <h2> 
    <span>Pomodoro</span> 
    <span class="strong"><strong>// Looks like our ControlsComponent</strong></span> 
    <button > 
      <i class="glyphicon glyphicon-play"></i> 
    </button> 
    <button > 
      <i class="glyphicon glyphicon-pause"></i> 
    </button> 
    <button > 
      <i class="glyphicon glyphicon-stop"></i> 
    </button> 
  </h2> 
  <span class="strong"><strong>// Looks like our StateTitleComponent</strong></span> 
  <h3>{{ title }}</h3> 
  <span class="strong"><strong>// Looks like our CountdownComponent</strong></span> 
  <div class="well"> 
    <div class="pomodoro-timer"> 
      <span>{{ min }}</span>:<span>{{ sec }}</span> 
    </div> 
  </div> 
  <span class="strong"><strong>// Looks like our KittensComponent</strong></span> 
  <div class="well"> 
    <img :src="catImgSrc" /> 
  </div> 
</div> 
`}</code></pre>



<p className="it">Usted probablemente ha notado que me quita algunas partes que son responsables de los enlaces de clase o manipuladores de acciones. No te preocupes. Recuerde Scarlett O'Hara en <span className="emphasis"><em>Lo que el viento</em></span> ? Ella solía decir,</p>

<p className="p">You've probably noticed that I removed some parts that are responsible for the class bindings or actions handlers. Do not worry. Remember Scarlett O'Hara in <span class="emphasis"><em>Gone with the Wind</em></span>? She used to say,</p>

<div class="blockquote"><blockquote class="blockquote">



<p className="it"> <span className="emphasis"><em>"No puedo pensar en eso ahora. Voy a pensar en que mañana".</em></span> </p>

<p className="p">
<span class="emphasis"><em>"I can't think about that right now. I'll think about that tomorrow."</em></span>
</p></blockquote></div>



<p className="it">(<a className="ulink" href="http://goo.gl/InYm8e">Http://goo.gl/InYm8e</a> ). Scarlett O'Hara era una mujer sabia. Sea como Scarlett O'Hara. Por ahora, nos centraremos únicamente en la <code className="literal">&lt;template&gt;</code> etiqueta para nuestra <code className="literal">App.vue</code>. Todo lo demás vendrá más adelante y vamos a pensar en ello entonces. Ahora que, básicamente, podes copiar y pegar este fragmento de código HTML y reemplazar las secciones que identificamos, tales como los componentes con sus nombres kebab de los casos. Así, la plantilla en <code className="literal">App.vue</code> se verá como la siguiente:</p>

<p className="p">(
<a class="ulink" href="http://goo.gl/InYm8e">http://goo.gl/InYm8e</a>
). Scarlett O'Hara was a wise woman. Be like Scarlett O'Hara. For now, we will focus merely on the <code class="literal">&lt;template&gt;</code> tag for our <code class="literal">App.vue</code>. Everything else will come later and we will think about it then. Now we can basically copy and paste this HTML snippet and replace the sections that we identify, such as the components with their kebab-case names. So, the template in <code class="literal">App.vue</code> will look like the following:</p>
<pre className="programlisting"><code>{`//App.vue 
<template> 
  <div id="app" class="container"> 
    <h2> 
      <span>Pomodoro</span> 
      <span class="strong"><strong><controls-component></controls-component></strong></span> 
    </h2> 
    <span class="strong"><strong><state-title-component></state-title-component> 
    <countdown-component></countdown-component> 
    <kittens-component></kittens-component></strong></span> 
  </div> 
</template> 
`}</code></pre>



<p className="it">Un poco más pequeño, ¿eh? Comproba su navegador con la aplicación abierta. No es muy bonito y seguro que no tiene nada que ver con nuestra aplicación Pomodoro, pero ... funciona!</p>

<p className="p">A bit smaller, huh? Check your browser with your app opened. Not very beautiful and for sure has nothing to do with our Pomodoro application, but... it works!</p>


<div class="mediaobject"><img src="/static/image00272.jpeg" width="100%" alt="Rewriting the Pomodoro application with single-file components"/></div>



<p className="it">aplicación pomodoro bootstrap como una aplicación de los componentes de un único archivo</p>

<p className="p">Pomodoro application bootstrapped as a single-file components application</p>



<p className="it">¿Qué debemos hacer ahora? Copiar el markup correspondiente al de sus componentes <code className="literal">&lt;template&gt;</code> secciones. Por favor, haga esta pequeña copiar y pegar por sí mismo, que sea un ejercicio de casa pequeña. Sin embargo, si desea comprobar usted mismo, echar un vistazo a la <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter3/pomodoro">capítulo3 / pomodoro</a> carpeta. ¡Eso es todo por ahora! Todos los enlaces de datos y cosas interesantes vendrán en el siguiente capítulo. Así que no se cierre el libro. Sin embargo, no se olvide de tomar algunas pausas Pomodoro.</p>

<p className="p">What should we do now? Copy the corresponding markup to their component's <code class="literal">&lt;template&gt;</code> sections. Please do this tiny copy and paste by yourself, let it be a small home exercise. However, if you want to check yourself, take a look at the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter3/pomodoro">chapter3/pomodoro</a> folder. That's it for now! All the data bindings and interesting stuff will come in the next chapter. So do not close the book. However, do not forget to take some Pomodoro pauses.</p></div>




</div></div> 
<div className='col-md-3'></div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Reactive binding of CSS transitions</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div class="section" title="Reactive binding of CSS transitions" id="aid-19UOO1"><div class="titlepage"><div><div><h1 class="title"><a id="ch03lvl1sec35"></a>Reactive binding of CSS transitions</h1></div></div></div><p>Just before the <span class="emphasis"><em>transition</em></span> to the next chapter, which will talk a lot about different types of data binding, I would like to give you just a tiny flavor of something interesting that is possible to bind. I know that you pay a lot of attention to the words, my dear reader. So, you've already found the word transition two times until now, and you have probably guessed that we can actually bind CSS transitions to the data changes.</p><p>So, imagine that you have an element that should only be shown if the <code class="literal">data</code> attribute <code class="literal">show</code> is <code class="literal">true</code>. This is easy, right? You already know the <code class="literal">v-if</code> directive:</p>

<pre className="programlisting"><code>{`&lt;div v-if="show"&gt;hello&lt;/div&gt; 
`}</code></pre>

<p>Thus, whenever the <code class="literal">show</code> attribute is changed, this <code class="literal">&lt;div&gt;</code> behaves accordingly. Imagine that on hiding/showing, you would like to apply some CSS transition. With Vue you can use the special <code class="literal">transition</code> wrapper component to specify the transition to use on data changing:</p>

<pre className="programlisting"><code>{`&lt;transition name="fade"&gt;  
  &lt;div v-if="show" transition="my"&gt;hello&lt;/div&gt; 
&lt;/transition&gt; 
`}</code></pre>


<p>After that, you just have to define CSS rules for the <code class="literal">fade-enter</code>, <code class="literal">fade-leave</code>, <code class="literal">fade-enter-active</code>, and <code class="literal">fade-leave-active</code> classes. Check the official Vue documentation page regarding these classes at 
<a class="ulink" href="https://vuejs.org/v2/guide/transitions.html#Transition-Classes">https://vuejs.org/v2/guide/transitions.html#Transition-Classes</a>
.</p><p>Let's see how it works in our <code class="literal">kittens</code> component example. Let's start by adding the <code class="literal">v-if</code> directive to the <code class="literal">kittens-component</code> inside <code class="literal">App.vue</code>:</p>

<pre className="programlisting"><code>{`

&lt;template&gt; 
  &lt;...&gt; 
  &lt;kittens-component <span class="strong"><strong>v-if="kittens"</strong></span>&gt;&lt;/kittens-component&gt; 
  &lt;...&gt; 
&lt;/template&gt; 
`}</code></pre>

<p>Also, we should add the&nbsp;<code class="literal">data</code> function in the <code class="literal">&lt;script&gt;</code> tag of <code class="literal">App.vue</code> (let's also make it global so that we can modify it from the devtools console):</p>

<pre className="programlisting"><code>{`&lt;script&gt; 
// ... // 
window.data = { 
  kittens: true 
}; 
 
export default { 
  //.....// 
  data () { 
    return window.data 
  } 
} 
&lt;/script&gt; 
`}</code></pre>

<p>Look at the browser: everything seems unchanged. Open the devtools console and type the following:</p>

<pre className="programlisting"><code>{`

data.kittens = false 
</pre>

<p>You'll see that the <code class="literal">kittens</code> component will disappear from the page. If you type the following, it will appear again:</p><pre class="programlisting">data.kittens = true 
`}</code></pre>

<div class="note" title="Note"><h3 class="title"><a id="tip32"></a>Tip</h3><p>I hope you haven't forgotten to include Bootstrap's CSS in the main <code class="literal">index.html</code> file. Without it, you'll see no appearing/disappearing at all because our <code class="literal">&lt;div&gt;</code>&nbsp;tag has no information nor any class applied to it:&nbsp;
<code class="literal">&lt;link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css"&gt;</code>
</p></div><p>However, we are talking about the <span class="emphasis"><em>CSS</em></span> tr<span class="emphasis"><em>ansitions</em></span> and not about simply hiding/showing stuff. Now let's apply the CSS <code class="literal">fade</code> transition to our <code class="literal">kittens</code> component. Just add a wrapper component <code class="literal">transition</code> with a name attribute <code class="literal">fade</code>:</p>

<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;...&gt; 
  <span class="strong"><strong>&lt;transition name="fade"&gt;</strong></span> 
    &lt;kittens-component v-if="kittens"&gt;&lt;/kittens-component&gt; 
  <span class="strong"><strong>&lt;/transition&gt;</strong></span> 
  &lt;...&gt; 
&lt;/template&gt; 
`}</code></pre>

<p>Now if we define nice rules to the correct classes, we'll see a nice CSS transition. Let's do it. Add the following CSS rules inside the <code class="literal">&lt;style&gt;</code> tag:</p>

<pre className="programlisting"><code>{`&lt;style scoped&gt; 
  <span class="strong"><strong>.fade-enter-active, .fade-leave-active</strong></span> { 
    transition: opacity .5s 
  } 
  <span class="strong"><strong>.fade-enter, .fade-leave-active</strong></span> { 
    opacity: 0 
  } 
&lt;/style&gt; 
`}</code></pre>


<p>Look at the page again. Open the console and type <code class="literal">data.kittens = false</code> and <code class="literal">data.kittens = true</code> again. Now you can see a nice <code class="literal">fade</code> transition happening on each data change. In the next chapter, we will talk more about transitions in Vue.js and apply them to our applications.</p></div>
</div></div>
<div className='col-md-3'></div>




<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Summary</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Summary" id="aid-1AT9A1"><div className="titlepage"><div><div><h1 className="title"><a id="ch03lvl1sec36"></a>Summary</h1></div></div></div>

<p className="it">En este capítulo, usted aprendió acerca de los componentes Vue y cómo utilizarlos. Ya viste cómo crear y registrar ellos utilizando un método clásico (aplicación que utiliza HTML, CSS y JavaScript) y también se vio lo fácil que es crear y manipular usando un enfoque de componentes de un solo archivo. Cosas que conservan:</p>

<p className="p">In this chapter, you learned about Vue components and how to use them. You saw how to create and register them using a classic approach (application that uses HTML, CSS, and JavaScript) and you also saw how easy it is to create and manipulate them using a single-file components approach. Things to retain:</p>


<div class="itemizedlist"><ul className="itemizedlist">

<li className="listit">Mientras que las variables se crean utilizando el formato CamelCased, con el fin de poder utilizar componentes dentro de las plantillas, debe aplicar el formato de kebab con carcasa correspondiente, por ejemplo, <code className="literal">MyBeautifulComponent</code>-&gt;<code className="literal">my-beautiful-component</code></li>

<li className="listitem">While variables are created using CamelCased format, in order to be able to use components inside templates, you must apply the corresponding kebab-cased format, for example, 
<code class="literal">MyBeautifulComponent</code> -&gt; <code class="literal">my-beautiful-component</code></li>


<li className="listit">Atributos <code className="literal">data</code> y <code>{`el`}</code> dentro del componente debe ser funciones y no objetos:<code>{` {data: function () {}} `}</code></li>

<li className="listitem">Attributes <code class="literal">data</code> and <code>{`el`}</code> inside the component must be functions and not objects: <code>{`
{data: function () {}}
`}</code></li>

<li className="listit">Si desea que el estilo del componente no se escape al ámbito mundial, añadí un <code className="literal">scoped</code> atributo a la misma:<code>{` &lt;style scoped&gt;&lt;/style&gt; `}</code></li>

<li className="listitem">If you want the style of the component not to leak to the global scope, add a <code class="literal">scoped</code> attribute to it: <code>{`
&lt;style scoped&gt;&lt;/style&gt;
`}</code></li>

</ul></div>

<p className="it">También hemos reescrito nuestras aplicaciones que utilizan componentes de un solo archivo y se refirió a los que se unen a las transiciones CSS ligeramente datos.</p>

<p className="p">We have also rewritten our applications using single-file components and touched on the data binding to the CSS transitions slightly.</p>

<p className="it">En el siguiente capítulo, vamos a bucear profundamente en todos los tipos de encuadernación, incluidas las transiciones CSS y JavaScript datos. Vamos a llevar nuestras aplicaciones a la vida usando el enlace de datos. Por último, pero no menos importante, vamos a ver más gatos!</p>

<p className="p">In the next chapter, we will dive deeply into all the types of data binding, including CSS and JavaScript transitions. We will bring our applications back to life using data binding. Last but not least, we will see more cats!</p>


</div>




</div></div>
<div className='col-md-3'></div>

   
 
</div> 
 
  </Layout>
  )