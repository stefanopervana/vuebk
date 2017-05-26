import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch7'>
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
<title>Chapter 1. Going Shopping with Vue.js</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/>

<div class="chapter" title="Chapter 1. Going Shopping with Vue.js" id="aid-F8901"><div className="titlepage"><div><div><h1 className="title"><a id="ch01"></a>Chapter 1. Going Shopping with Vue.js</h1></div></div></div>
<div class="blockquote">
<blockquote class="blockquote">

<p className="it"><span className="emphasis"><em>"Vue.js es un framework de JavaScript para crear aplicaciones web sorprendentes. Vue.js es una biblioteca de JavaScript para la creación de interfaces web. Vue.js es una herramienta que potencia el uso de la arquitectura MVVM."</em></span> </p>

<p className="p">
<span class="emphasis"><em>"Vue.js is a JavaScript framework for building astonishing web applications.
Vue.js is a JavaScript library for creating web interfaces.
Vue.js is a tool that leverages the use of MVVM architecture."</em></span>
</p>


</blockquote></div>


<p className="it">Simplificada la Jerga de JavaScript, esta sugiere que Vue.js es una biblioteca de JavaScript para la creación de interfaces de usuario (Visto) sobre la base de modelos de datos subyacentes (<a className="ulink" href="http://jargon.js.org/_glossary/VUEJS.md">http://jargon.js.org/_glossary/VUEJS.md</a> ).</p>

<p className="p">Simplified JavaScript Jargon suggests that Vue.js is a JavaScript library for creating user interfaces (Views) based on underlying data models (
<a class="ulink" href="http://jargon.js.org/_glossary/VUEJS.md">http://jargon.js.org/_glossary/VUEJS.md</a>
).</p>


<p className="it">Solo hace unos meses la página web oficial de Vue.js (<a className="ulink" href="https://vuejs.org/">https://vuejs.org/</a>) afirmó que Vue.js eran componentes reactivos para interfaces web modernas.</p>

<p className="p">The official Vue.js website (
<a class="ulink" href="https://vuejs.org/">https://vuejs.org/</a>
) just some months ago stated that Vue.js were reactive components for modern web interfaces.</p>

<div class="mediaobject"><img src="/static/image00216.jpeg" width="100%" alt="Going Shopping with Vue.js"/></div>


<p className="it">Ahora se afirma que Vue.js es un framework de JavaScript progresivo:</p>

<p className="p">Now it states that Vue.js is a progressive JavaScript framework:</p>


<div class="mediaobject"><img src="/static/image00217.jpeg" width="100%" alt="Going Shopping with Vue.js"/></div>

<p className="it">Entonces, ¿qué es Vue.js después de todo? ¿Un Framework de referencia? ¿Herramienta? ¿Biblioteca? Se debe utilizar para crear aplicaciones web full-stack o simplemente para añadír alguna funcionalidad especial? ¿Debo cambiar mi framework favorita poe Vue? ¿Si es así por qué? ¿Puedo usarlo junto con otras herramientas en mi proyecto? ¿Qué ventajas podría traerme?</p>

<p className="p">So what is Vue.js after all? Framework? Tool? Library? Should it be used for building full-stack web applications or just for adding some special functionality? Should I switch from my favorite framework to it? If yes, why? Can I use it alongside other tools in my project? What advantages it might bring?</p>


<p className="it">En este capítulo, vamos a tratar de encontrar las respuestas a todas estas preguntas. Vamos a tocar ligeramente Vue.js y usarlo dentro de algunos ejemplos pequeños y sencillos.</p>

<p className="p">In this chapter, we will try to find the answers to all these questions. We will slightly touch Vue.js and use it within some small and simple examples.</p>

<p className="it">Más concretamente, vamos a hacer lo siguiente:</p>

<p className="p">More specifically, we will do the following:</p>

<div class="itemizedlist"><ul className="itemizedlist">

<li className="listit">Aprender que es Vue.js, sus partes importantes, y su historia</li>

<li className="listitem">Learn what Vue.js is, its important parts, and its history</li><li className="listit">Aprender de los proyectos que utilizan Vue.js</li>

<li className="listitem">Learn what projects use Vue.js</li><li className="listit">Construir una simple lista de compras utilizando Vue.js y compararlo con la misma aplicación de jQuery</li>

<li className="listitem">Build a simple shopping list using Vue.js and compare the implementation to the jQuery implementation of the same application</li>

<li className="listit">Construir un simple Pomodoro usando Vue.js</li>

<li className="listitem">Build a simple Pomodoro using Vue.js</li>

<li className="listit">Disfrutar de un ejercicio pequeño y sencillo</li>

<li className="listitem">Enjoy a small and simple exercise</li></ul></div><div className="section" title="Buzzwords"><div className="titlepage"><div><div><h1 className="title"><a id="ch01lvl1sec7"></a>Buzzwords</h1></div></div></div>

<p className="it">En este libro habrá un montón de palabras de moda, abreviaturas y otras inconformistas combinaciones de letras. Por favor, no tengas miedo de ellas. Te puedo decir más, pero, en la mayor parte de las cosas que se tienen que hacer para usar Vue.js o cualquier otro framework, no es necesario conocerlas a todas de memoria! Pero, en cualquier caso, vamos a dejar el tesauro aquí para que si te confundis con la terminología en cualquier punto del libro, podes volver aquí y echar un vistazo:</p>

<p className="p">There will be lots of buzzwords, abbreviations, and other hipster combinations of letters in this book. Please do not be afraid of them. I can tell you more but, for the most part of things you need to do using Vue.js or any other framework, you do not need to know them all by heart! But, in any case, let us leave the thesaurus here so that you become confused with terminology at any point of the book, you can come back here and have a look:</p>


<div class="itemizedlist"><ul className="itemizedlist">

<li className="listit"><span className="strong"><strong>Application state</strong></span>: Se trata de un estado global centralizado de la aplicación. Los datos en este estado se inicializan cuando se inicia la aplicación. A estos datos podes acceder por el componente de cualquier aplicación; Sin embargo, no podes cambiarlos fácilmente. Cada elemento del estado tiene una mutación adjunta que puede ser enviada en eventos especiales que ocurren dentro de los componentes de la aplicación.</li>

<li className="listitem"><span class="strong"><strong>Application state</strong></span>: This is a global centralized state of the application. The data in this state is initialized when the application is started. This data can be accessed by any application's component; however, it cannot be changed easily by them. Each item of the state has an attached mutation that can be dispatched on special events occurring inside the application's components.</li></ul>

</div><div class="itemizedlist"><ul className="itemizedlist">

<li className="listit"><span className="strong"><strong>Bootstrap</strong></span>: Se trata de un proyecto que proporciona un conjunto de estilos y herramientas de JavaScript para el desarrollo de una aplicación sensible y agradable sin tener que pensar mucho sobre CSS.</li>

<li className="listitem"><span class="strong"><strong>Bootstrap</strong></span>: This is a project that provides a set of styles and JavaScript tools for developing a responsive and nice application without having to think a lot about CSS.</li>

<li className="listit"><span className="strong"><strong>Content Distribution Network</strong></span> (<span className="strong"><strong> CDN</strong></span> ): Este es un servidor especial cuyo objetivo es entregar datos de alta disponibilidad y alto rendimiento a los usuarios. Las personas y empresas desarrollan frameworks como para distribuirlos a través de CDN, ya que permiten adquirirlos señalando sólo la dirección URL de la CDN en las instrucciones de instalación. Vue.js está alojado en npmcdn (<a className="ulink" href="https://npmcdn.com/"> https://npmcdn.com/</a>), que es un network fiable y global de las cosas que se publican en el npm.</li>

<li className="listitem"><span class="strong"><strong>Content Distribution Network</strong></span> (<span class="strong"><strong>CDN</strong></span>): This is a special server whose aim is to deliver data to the users with high availability and high performance. People and companies who develop frameworks like to distribute them via CDNs because they allow them just to point out the CDN's URL in the installation instructions. Vue.js is hosted in npmcdn (<a class="ulink" href="https://npmcdn.com/">https://npmcdn.com/</a>), which is a reliable and global network for the things that are published to the npm.</li>

<li className="listit"><span className="strong"><strong>Components</strong></span> : Estas son las piezas de la aplicación con sus propios datos y Vista que pueden ser reutilizados mediante la aplicación, actuando como un ladrillo de la casa, que se está construyendo.</li>

<li className="listitem"><span class="strong"><strong>Components</strong></span>: These are the pieces of the application with their own data and View that can be reused through the application, acting as a brick from which the house is being built.</li>

<li className="listit"><span className="strong"><strong>Cascading Style Sheets</strong></span> (<span className="strong"><strong> CSS</strong></span>): Este es un conjunto de estilos para aplicar al documento HTML para que sea agradable y hermoso.</li>

<li className="listitem"><span class="strong"><strong>Cascading Style Sheets</strong></span> (<span class="strong"><strong>CSS</strong></span>): This is a set of styles to apply to the HTML document to make it nice and beautiful.</li>

<li className="listit"><span className="strong"><strong>Declarative Views</strong></span>: Estas son las vistas que proporcionan una forma de datos de la unión directa entre los modelos de datos sin formato de JavaScript y la representación.</li>

<li className="listitem"><span class="strong"><strong>Declarative Views</strong></span>: These are the Views that provide a way of direct data binding between plain JavaScript data models and the representation.</li>


<li className="listit"><span className="strong"><strong>Directives</strong></span> : Son elementos atributos HTML especiales en Vue.js que permiten el enlace de datos de diferentes maneras.</li>

<li className="listitem"><span class="strong"><strong>Directives</strong></span>: These are special HTML elements attributes in Vue.js that allow data binding in different ways.</li>


<li className="listit"><span className="strong"><strong>Document Object Model</strong></span> (<span className="strong"><strong> DOM</strong></span>): Esta es una convención para representar los nodos en lenguajes de markup tales como HTML, XML y XHTML. Los nodos de los documentos se organizan en un árbol DOM. Cuando alguien dice que interactúa con el DOM, es sólo su forma elegante de decir que interactúa con los elementos HTML.</li>

<li className="listitem"><span class="strong"><strong>Document Object Model</strong></span> (<span class="strong"><strong>DOM</strong></span>): This is a convention for representing nodes in markup languages such as HTML, XML, and XHTML. The nodes of the documents are organized into a DOM tree. When someone says interacting with DOM, it is just their fancy way of saying interacting with HTML elements.</li>

<li className="listit"><span className="strong"><strong>npm</strong></span>: Se trata de un gestor de paquetes para JavaScript y permite buscar, instalar y gestionar paquetes de JavaScript.</li>

<li className="listitem"><span class="strong"><strong>npm</strong></span>: This is a package manager for JavaScript and allows searching, installing, and managing JavaScript packages.</li>

<li className="listit"><span className="strong"><strong>Markdown</strong></span> : Esta es una sintaxis usada por los humanos que permite a los escritores de Internet escribir su texto sin tener que preocuparse acerca de los estilos y etiquetas HTML. Los archivos markdown tienen una extensión <code className="literal">.md</code>.</li>

<li className="listitem"><span class="strong"><strong>Markdown</strong></span>: This is a human-friendly syntax that allows web writers to write their text without worrying about styles and HTML tags. Markdown files have a <code class="literal">.md</code> extension.</li>

<li className="listit"><span className="strong"><strong>Modelo Vista ViewModel</strong></span> (<span className="strong"><strong> MVVM</strong></span> ): Este es un patrón arquitectónico cuyo punto central es un modelo de vista que actúa como un puente entre la vista y el modelo de datos, permitiendo el flujo de datos entre ellos.</li>

<li className="listitem"><span class="strong"><strong>Model View ViewModel</strong></span> (<span class="strong"><strong>MVVM</strong></span>): This is an architectural pattern whose central point is a ViewModel that acts as a bridge between the View and the data model, allowing the data flow between them.</li>

<li className="listit"><span className="strong"><strong>Modelo Vista Controlador</strong></span> (<span className="strong"><strong> MVC</strong></span> ): Este es un patrón arquitectónico. Permite separar Vistas de los modelos y de la forma en que la información fluye de Vistas a Modelos, y viceversa.</li>

<li className="listitem"><span class="strong"><strong>Model View Controller</strong></span> (<span class="strong"><strong>MVC</strong></span>): This is an architectural pattern. It allows separating Views from Models and from the way that information flows from Views to Models, and vice versa.</li>

<li className="listit"><span className="strong"><strong>One-way data binding</strong></span>: Este es el tipo de enlace de datos, donde los cambios en el modelo de datos se propagan automáticamente a la capa de la vista, pero no viceversa.</li>

<li className="listitem"><span class="strong"><strong>One-way data binding</strong></span>: This is the type of data binding where the changes in the data model are automatically propagated to the View layer, but not vice versa.</li>

<li className="listit"><span className="strong"><strong>Rapid prototyping</strong></span>: En la web, se trata de una técnica de construcción fácil y rápida de las maquetas de la interfaz de usuario, incluyendo algún tipo de interacción básica de usuario.</li>

<li className="listitem"><span class="strong"><strong>Rapid prototyping</strong></span>: In the Web, this is a technique of easily and rapidly building the mockups of the user interface, including some basic user interaction.</li></ul>


</div><div class="itemizedlist"><ul className="itemizedlist">

<li className="listit"><span className="strong"><strong>Reactividad</strong></span>: En la Web, esto es en realidad la propagación inmediata de cualquier cambio de datos en la capa de la vista.</li>

<li className="listitem"><span class="strong"><strong>Reactivity</strong></span>:In the Web, this is actually the immediate propagation of any changes of data to the View layer.</li>

<li className="listit"><span className="strong"><strong>Two-way data binding</strong></span> : Este es el tipo de enlace de datos, donde los cambios en el modelo de datos se propagan automáticamente a la capa de la vista, y los cambios que ocurren en la capa de la vista se refleja inmediatamente en el modelo de datos.</li>

<li className="listitem"><span class="strong"><strong>Two-way data binding</strong></span>: This is the type of data binding where the changes in the data model are automatically propagated to the View layer, and the changes that happen in the View layer are immediately reflected in the data model.</li>

<li className="listit"><span className="strong"><strong>User interface</strong></span> (<span className="strong"><strong> UI</strong></span> ): Este es un conjunto de componentes visuales que permiten al usuario comunicarse con la aplicación.</li>

<li className="listitem"><span class="strong"><strong>User interface</strong></span> (<span class="strong"><strong>UI</strong></span>): This is a set of visual components that allow the user to communicate with the application.</li>

<li className="listit"><span className="strong"><strong>Vuex</strong></span> : Se trata de una arquitectura para aplicaciones Vue y permite una gestión sencilla del estado de la aplicación.</li>

<li className="listitem"><span class="strong"><strong>Vuex</strong></span>: This is an architecture for Vue applications and allows simple management of the application state.</li></ul>

</div></div></div>

</div>

<div className='col-md-3'></div>
  
  </div>  
   <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Vue.js history</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/>
<div className="section" title="Vue.js history" id="aid-G6PI1"><div className="titlepage"><div><div><h1 className="title"><a id="ch01lvl1sec8"></a>Vue.js history</h1></div></div></div>

<p className="it">Cuando Evan You, creador de Vue.js (<a className="ulink" href="http://evanyou.me/">http://evanyou.me/</a> ), estaba trabajando en uno de los proyectos de Google Creative Labs, necesitaban un prototipo rápido con una interfaz de usuario bastante grande. Escribir un montón de HTML repetido consumia claramente mucho tiempo y recursos, y por eso Evan empezó a buscar alguna herramienta ya existente para este propósito. Para su sorpresa, descubrió que no había ninguna herramienta, biblioteca, o un framework que podría encajar exactamente en el propósito de prototipado rápido! En ese momento, angular se utiliza ampliamente, React.js estaba empezando, y se utilizaban frameworks como Backbone.js para aplicaciones a gran escala con la arquitectura MVC. Para el tipo de proyecto necesitaba algo muy flexible y ligero sólo para la creación de prototipos de interfaz de usuario rápido, ninguno de estos frameworks complejos eran adecuados.</p>


<p className="p">When, Evan You, Vue.js creator (
<a class="ulink" href="http://evanyou.me/">http://evanyou.me/</a>
), was working at Google Creative Labs on one of the projects, they needed to fast prototype a rather big UI interface. Writing a lot of repeated HTML was clearly time- and resource-consuming, and that's why Evan started looking for some already existing tool for this purpose. To his surprise, he discovered that there was no tool, library, or framework that could fit exactly into the purpose of rapid prototyping! At that time, Angular was widely used, React.js was just starting, and frameworks such as Backbone.js were used for large-scale applications with MVC architecture. For the kind of project that needed something really flexible and lightweight just for quick UI prototyping, neither of these complex frameworks were adequate.</p>

<p className="it">Cuando se da cuenta de que no existe algo fresco y que es capaz de crearlo <span className="emphasis"><em>sólo lo hizo</em></span> !</p>


<p className="p">When you realize that something cool does not exist and you are able to create it&mdash;<span class="emphasis"><em>just do it</em></span>!</p>

<div class="note" title="Note"><h3 class="title"><a id="note3"></a>Note</h3><p className="it">Vue.js nació como una herramienta para la creación rápida de prototipos. Ahora se puede utilizar para construir complejas aplicaciones web escalables y reactivas.</p>


<p className="p">Vue.js was born as a tool for rapid prototyping. Now it can be used to build complex scalable reactive web applications.</p></div><p className="it">Eso fue lo que hizo Evan. Es decir cómo llegó a la idea de crear una biblioteca que ayudaría en la creación rápida de prototipos, ofreciendo una manera fácil y flexible de enlazar datos reactivos y componentes reutilizables.</p>


<p className="p">That was what Evan did. That is how he came to the idea of creating a library that would help in rapid prototyping by offering an easy and flexible way of reactive data binding and reusable components.</p>

<p className="it">Como toda buena biblioteca, Vue.js ha ido creciendo y evolucionando, proporcionando así más características de las que prometia desde el principio. Actualmente, proporciona una manera fácil de conectar la creación de plugins, la escritura y el uso de mixins, y añade en general un comportamiento personalizado. Podes utilizar Vue de manera flexible y está tan ajeno a la estructuración de la aplicación que sin duda puede ser considerado como un framework capaz de soportar de extremo a extremo el edificio de aplicaciones web complejas.</p>


<p className="p">Like every good library, Vue.js has been growing and evolving, thus providing more features than it was promising from the beginning. Currently, it provides an easy way of attaching and creating plugins, writing and using mixins, and overall adding custom behavior. Vue can be used in such a flexible way and is so nonopinionated of the application structuring that it definitely can be considered as a framework capable of supporting the end-to-end building of complex web applications.</p></div>



</div>

<div className='col-md-3'></div>
  
  </div>  
  <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>The most important thing about Vue.js</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/>

<div className="section" title="The most important thing about Vue.js" id="aid-H5A41"><div className="titlepage"><div><div><h1 className="title"><a id="ch01lvl1sec9"></a>The most important thing about Vue.js</h1></div></div></div>
<p className="it">Vue.js te permite simplemente enlazar los modelos de datos a la capa de representación. También te permite reutilizar fácilmente los componentes en toda la aplicación.</p>

<p className="p">Vue.js allows you to simply bind your data models to the representation layer. It also allows you to easily reuse components throughout the application.</p>
<p className="it">No es necesario crear modelos o colecciones especiales y registrar objetos eventos alli. No es necesario seguir una sintaxis especial. No es necesario instalar cualquiera de las dependencias never-ending.</p>

<p className="p">You don't need to create special models or collections and to register events object in there. You don't need to follow some special syntax. You don't need to install any of never-ending dependencies.</p>
<p className="it">Sus modelos son objetos JavaScript lisos. Ellos están siendo obligados a lo que deseas en sus Vistas (texto, texto de entrada, clases, atributos, y así sucesivamente), y simplemente funciona.</p>
<p className="p">Your models are plain JavaScript objects. They are being bound to whatever you want in your Views (text, input text, classes, attributes, and so on), and it just works.</p>
<p className="it">Podes simplemente añadír el archivo <code className="literal">vue.js</code> en tu proyecto y utilizarlo. Alternativamente, podes utilizar <code className="literal">vue-cli</code> con webpack y Browserify, no sólo Bootstraps en todo el proyecto, pero también es compatible con hot reloading y proporciona herramientas para desarrolladores.</p>
<p className="p">You can simply add the <code class="literal">vue.js</code> file into your project and use it. Alternatively, you can use <code class="literal">vue-cli</code> with Webpack and Browserify family, which not only bootstraps the whole project but also supports hot reloading and provides developer tools.</p>
<p className="it">Podes separar la capa Vista en estilos y lógica JavaScript o podes poner todo junto en el mismo archivo Vue y construir su estructura de componentes y la lógica en el mismo lugar. Hay soporte de plugins para todos los entornos de desarrollo modernos y de uso común.</p>
<p className="p">You can separate the View layer from styles and JavaScript logic or you can put it alltogether into the same Vue file and build your components' structure and logic in the same place. There is plugin support for all modern and commonly used IDEs.</p>
<p className="it">Podes usar cualquier preprocesador que desees, y podes utilizar ES2015. Podes utilizarlo junto con tu framework favorito en el que has estado desarrollando, o podes usarlo solo. Podes utilizarlo sólo para añadír una funcionalidad pequeña, o podes utilizar todo el ecosistema Vue para construir aplicaciones complejas.</p>
<p className="p">You can use whatever preprocessors you want, and you can use ES2015. You can use it alongside your favorite framework you have been developing in, or you can use it itself. You can use it just to add a small functionality, or you can use the whole Vue ecosystem to build complex applications.</p>
<p className="it">Si deseas comprobar cómo se compara con otros frameworks, como Angular o React, , visita a continuación<a className="ulink" href="http://vuejs.org/guide/comparison.html">http://vuejs.org/guide/comparison.html</a> .</p>
<p className="p">If you want to check how it compares to other frameworks, such as Angular or React, then please visit 
<a class="ulink" href="http://vuejs.org/guide/comparison.html">http://vuejs.org/guide/comparison.html</a>
.</p>
<p className="it">Si deseas ver todas las cosas sorprendentes sobre Vue.js, entonces sos más que bienvenido a visitar <a className="ulink" href="https://github.com/vuejs/awesome-vue">https://github.com/vuejs/awesome-vue</a> .</p>
<p className="p">If you want to check out all the amazing things about Vue.js, then you are more than welcome to visit 
<a class="ulink" href="https://github.com/vuejs/awesome-vue">https://github.com/vuejs/awesome-vue</a>
.</p></div>

</div>

<div className='col-md-3'></div>
  
  </div>  

   <div className='home'>

      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Let's go shopping!</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/>

<div className="section" title="Let's go shopping!"><div class="titlepage" id="aid-I3QM2"><div><div><h1 className="title"><a id="ch01lvl1sec10"></a>Let's go shopping!</h1></div></div></div>

<p className="it">No sé cómo, pero puedo sentir que tu fin de semana está cerca y que estás empezando a pensar en ir de compras para tener los víveres necesarios para la próxima semana. A menos que seas un genio que es capaz de mantener toda la lista en tu cabeza o una persona modesta que no necesita tanto, es probable que hagas una lista antes de ir de compras. Tal vez incluso utilices alguna aplicación para eso. Ahora, me pregunto: ¿por qué no utilizar tu propia aplicación? ¿Cómo te sentis acerca de la creación y el diseño de la misma? ¡Vamos a hacer eso! Vamos a crear nuestra propia aplicación de la lista de compras. Vamos a empezar por la creación de un prototipo rápido para ello. La construcción de un prototipo interactivo para la lista de compra es una tarea muy fácil.</p>
<p className="p">I don't know how but I can feel that your weekend is close and that you are starting to think about going shopping to buy the needed groceries for the next week. Unless you are a genius who is able to maintain the whole list in your head or you are a modest person who does not need so much, you probably make a shopping list before going shopping. Maybe you even use some app for that. Now, I ask you: why not use your own app? How do you feel about creating and designing it? Let's do that! Let's create our own shopping list application. Let's start by creating a rapid prototype for it. It's a really easy task&mdash;build an interactive prototype for the shopping list.</p>
<p className="it">Debe mostrar la lista y nos permitirá añadí y eliminar los elementos. En realidad, es muy similar a una lista de tareas pendientes. Vamos a empezar a hacerla usando el clásico enfoque HTML + CSS + JS + jQuery. También utilizaremos el framework Bootstrap (<a className="ulink" href="http://getbootstrap.com/">http://getbootstrap.com/</a> ) para hacer las cosas un poco más bellas sin tener que escribir extenso código CSS. (Sí, porque nuestro libro no es acerca de CSS y porque hacer las cosas con Bootstrap es tan locamente fácil!)</p>
<p className="p">It should show the list and allow us to add and remove the items. Actually, it's very similar to a ToDo list. Let's start doing it using classic HTML + CSS + JS + jQuery approach. We will also use the Bootstrap framework (<a class="ulink" href="http://getbootstrap.com/">http://getbootstrap.com/</a>) to make things a little bit more beautiful without having to write extensive CSS code. (Yes, because our book is not about CSS and because making things with Bootstrap is so crazily easy!)</p><div className="section" title="Implementing a shopping list using jQuery"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec5"></a>Implementing a shopping list using jQuery</h2></div></div></div>

<p className="it">Probablemente, el código que estamos buscando terminara siendo algo parecido a lo siguiente:</p>
<p className="p">Probably, your code will end up looking as something like the following:</p>

<p className="it">Aquí está el código HTML:</p>
<p className="p">Here is the HTML code:</p>

<pre class="programlisting"><code>{`<div class="container"> 
  <h2>My Shopping List</h2> 
  <div class="input-group"> 
    <input placeholder="add shopping list item"        
      type="text" class="js-new-item form-control"> 
    <span class="input-group-btn"> 
      <button @click="addItem" class="js-add btn btn-default"          
        type="button">Add!</button> 
    </span> 
  </div> 
  <ul> 
    <li> 
      <div class="checkbox"> 
        <label> 
          <input class="js-item" name="list"              
            type="checkbox"> Carrot 
        </label> 
      </div> 
    </li> 
    <li> 
      <div class="checkbox"> 
        <label> 
          <input class="js-item" name="list" type="checkbox"> Book 
        </label> 
      </div> 
    </li> 
    <li class="removed"> 
      <div class="checkbox"> 
        <label> 
          <input class="js-item" name="list" type="checkbox"              
            checked> Gift for aunt's birthday 
        </label> 
      </div> 
    </li> 
  </ul> 
</div>`}</code></pre>

<p className="it">Aquí está el código CSS:</p>
<p className="p">Here is the CSS code:</p>

<pre class="programlisting"><code>{`.container { 
  width: 40%; 
  margin: 20px auto 0px auto; 
} 
 
.removed { 
  color: gray; 
} 
 
.removed label { 
  text-decoration: line-through; 
} 
 
ul li { 
  list-style-type: none; 
} 
`}</code></pre>

<p className="it">Aquí está el código JavaScript/jQuery:</p>
<p className="p">Here is the JavaScript/jQuery code:</p>

<pre class="programlisting"><code>{`$(document).ready(function () { 
  /** 
   * Add button click handler 
   */ 
  function onAdd() { 
    var $ul, li, $li, $label, $div, value; 
 
    value = $('.js-new-item').val(); 
    //validate against empty values 
    if (value === '') { 
      return; 
    } 
    $ul = $('ul'); 
    $li = $('<li>').appendTo($ul); 
    $div = $('<div>') 
        .addClass('checkbox') 
        .appendTo($li); 
    $label = $('<label>').appendTo($div); 
    $('<input>') 
        .attr('type', 'checkbox') 
        .addClass('item') 
        .attr('name', 'list') 
        .click(toggleRemoved) 
        .appendTo($label); 
    $label 
        .append(value); 
    $('.js-new-item').val(''); 
  } 
 
  /** 
   * Checkbox click handler - 
   * toggles class removed on li parent element 
   * @param ev 
   */ 
  function toggleRemoved(ev) { 
    var $el; 
 
    $el = $(ev.currentTarget); 
    $el.closest('li').toggleClass('removed'); 
  } 
 
  $('.js-add').click(onAdd); 
  $('.js-item').click(toggleRemoved); 
}); 
`}</code></pre>

<div class="note" title="Note"><h3 class="title"><a id="tip4"></a>Tip</h3>

<p className="it"> <strong className="userinput"><code>Downloading the example code</code></strong> Los pasos para descargar el paquete de código se mencionan con detalle en el <a className="link" title="Prefacio" href="part0010.xhtml#aid-9H5K1">prefacio</a> de este libro. El paquete de código para el libro también está alojado en GitHub en <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2">https://github.com/PacktPublishing/Learning-Vue.js-2</a>. También tenemos otros paquetes de código de nuestro rico catálogo de libros y videos disponibles en <a className="ulink" href="https://github.com/PacktPublishing/">https://github.com/PacktPublishing/</a>. Comprobalo!</p>
<p className="p">
<strong class="userinput"><code>Downloading the example code</code></strong>
Detailed steps to download the code bundle are mentioned in the
<a class="link" title="Preface" href="part0010.xhtml#aid-9H5K1"> Preface</a> of this book.
The code bundle for the book is also hosted on GitHub at <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2">https://github.com/PacktPublishing/Learning-Vue.js-2</a>.
We also have other code bundles from our rich catalog of books and videos available at <a class="ulink" href="https://github.com/PacktPublishing/">https://github.com/PacktPublishing/</a>. Check them out!</p></div>

<p className="it">Si se abre la página en un navegador, es probable que veas algo como lo siguiente:</p>
<p className="p">If you open the page in a browser, you will probably see something like the following:</p>

<div class="mediaobject"><img src="/static/image00218.jpeg" width="100%" alt="Implementing a shopping list using jQuery"/></div>

<p className="it">La aplicación de la Lista de compras utilizando el código HTML + CSS + jQuery approach</p>
<p className="p">Shopping list implementation using the HTML + CSS + jQuery approach</p>

<p className="it">Por favor, echa un vistazo a jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/u5pcnLw9/2/">https://jsfiddle.net/chudaol/u5pcnLw9/2/</a> .</p>
<p className="p">Please have a look at JSFiddle at 
<a class="ulink" href="https://jsfiddle.net/chudaol/u5pcnLw9/2/">https://jsfiddle.net/chudaol/u5pcnLw9/2/</a>
.</p>

<p className="it">Como podes ver, se trata de una pieza muy básica de código HTML que contiene una lista desordenada de elementos, donde a  cada elemento se le presenta una casilla de verificación y un texto de una entrada para el texto de usuario y el botón <strong className="userinput"><code>Add!</code></strong>. Cada vez que  se hace clic en el botón <strong className="userinput"><code>Add!</code></strong>, el contenido de la entrada de texto se transforma en una entrada de la lista y se añade a la lista. Cuando se hace clic en la casilla de verificación de cualquier artículo, el estado de una entrada se activa desde <strong className="userinput"><code>to buy</code></strong> (sin marcar) a <strong className="userinput"><code>bought</code></strong> (marcado).</p>
<p className="p">As you can see, it is a very basic piece of HTML code that contains an unordered list of elements, where each element is presented with a checkbox and a text&mdash;an input for the user text and the <strong class="userinput"><code>Add!</code></strong> button. Each time the <strong class="userinput"><code>Add!</code></strong> button is clicked, the content of the text input is transformed into a list entry and appended to the list. When the checkbox of any item is clicked, the state of an entry is toggled from to <strong class="userinput"><code>to buy</code></strong> (unchecked) to <strong class="userinput"><code>bought</code></strong> (checked).</p>

<p className="it">También vamos a añadír una característica que nos permite cambiar el título de la lista (que podría llegar a ser útil si terminamos la implementación de varias listas de compras en la aplicación).</p>
<p className="p">Let's also add a feature that allows us to change the title of the list (it might become useful if we end up implementing multiple shopping lists in the application).</p>

<p className="it">Por lo tanto, vamos a terminar con un poco de margen de beneficio extra y algunos oyentes más y manejadores de eventos de jQuery:</p>
<p className="p">So, we will end up with some extra markup and some more jQuery event listeners and handlers:</p>

<pre class="programlisting"><code>{`<div class="container"> 
  <h2>My Shopping List</h2> 
  <!-- ... --> 
  <div class="footer"> 
    <hr/> 
    <em>Change the title of your shopping list here</em> 
    <input class="js-change-title" type="text"
      value="My Shopping List"/> 
  </div> 
</div> 
 
//And javascript code: 
function onChangeTitle() { 
  $('h2').text($('.js-change-title').val()); 
} 
$('.js-change-title').keyup(onChangeTitle);  
`}</code></pre>

<p className="it">Comprobá el jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/47u38fvh/3/">https://jsfiddle.net/chudaol/47u38fvh/3/</a> .</p>
<p className="p">Check JSFiddle at 
<a class="ulink" href="https://jsfiddle.net/chudaol/47u38fvh/3/">https://jsfiddle.net/chudaol/47u38fvh/3/</a>
.</p>

</div><div className="section" title="Implementing a shopping list using Vue.js"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec6"></a>Implementing a shopping list using Vue.js</h2></div></div></div>

<p className="it">Este fue un ejemplo muy sencillo. Vamos a tratar de ponerlo en práctica paso a paso utilizando Vue.js. Hay un montón de maneras de incluir <code className="literal">vue.js</code> en tu proyecto, pero en este capítulo, se incluirán simplemente añadiendo el archivo JavaScript Vue de la <span className="strong"><strong>CDN</strong></span> :</p>
<p className="p">This was a very simple example. Let's try to implement it step-by-step using Vue.js. There are plenty of ways of including <code class="literal">vue.js</code> into your project, but in this chapter, we will include it just by adding the JavaScript Vue file from the <span class="strong"><strong>CDN</strong></span>:</p>

<pre class="programlisting"><code>{`<script  src="https://cdnjs.cloudflare.com/ajax/libs/vue/2.0.3/vue.js">  </script> 
`}</code></pre>

<p className="it">Por lo tanto, vamos a empezar por la renderización de una lista de elementos.</p>
<p className="p">So, let's start by rendering a list of elements.</p>

<p className="it">Creá el archivo HTML y añadi el siguiente código:</p>
<p className="p">Create the HTML file and add the following markup:</p>

<pre class="programlisting"><code>{`<div id="app" class="container"> 
  <h2>{{ title }}</h2> 
  <ul> 
    <li>{{ items[0] }}</li> 
    <li>{{ items[1] }}</li> 
  </ul> 
</div>  
`}</code></pre>
<p className="it">Ahora agregá el siguiente código JavaScript:</p>
<p className="p">Now add the following JavaScript code:</p>

<pre class="programlisting"><code>{`var data = { 
  items: ['Bananas', 'Apples'], var data = { 
  items: ['Bananas', 'Apples'], 
  title: 'My Shopping List' 
}; 
 
new Vue({ 
  el: '#app', 
  data: data 
}); 
`}</code></pre>

<p className="it">Abrilo en el navegador. Verás que la lista se renderiza:</p>
<p className="p">Open it in the browser. You will see that the list is rendered:</p>


<div class="mediaobject"><img src="/static/image00219.jpeg" width="100%" alt="Implementing a shopping list using Vue.js"/></div>

<p className="it">Lista de compras implementada usando Vue.js</p>
<p className="p">Shopping list implemented using Vue.js</p>

<p className="it">Analicemos este ejemplo. El código de la aplicación Vue comienza con la nueva palabra clave <code className="literal">Vue</code>. ¿Cómo podemos obligar a conectar los datos de la aplicación con la pieza de markup? Pasamos a la instancia <code className="literal">Vue</code> del elemento DOM que debe ser obligado a ello. O cualquier otra markup en la página no se verá afectada y no reconocerá la magia de Vue.</p>
<p className="p">Let's analyze this example. The Vue application code starts with the new <code class="literal">Vue</code> keyword. How do we bind the piece of markup to the application data? We pass to the <code class="literal">Vue</code> instance the DOM element that must be bound to it. Any other markup in the page will not be affected and will not recognize Vue's magic.</p>

<p className="it">Como podes ver, nuestro margen de beneficio se envuelve en el elemento <code className="literal">#app</code> y se pasa como primer argumento en el mapa de opciones <code className="literal">Vue</code>. El argumento <code className="literal">data</code> contiene los objetos que están siendo utilizados en el interior del markup utilizando llaves dobles  (<pre class="programlisting"><code>{`{{}}`}</code></pre>. Es probable que encuentres esta anotación muy fácil de entender si estas familiarizado con los preprocesadores de plantillas (por ejemplo, handlebars; para más información, visitá <a className="ulink" href="http://handlebarsjs.com/">http://handlebarsjs.com/</a> ).</p>

<p className="p">As you can see, our markup is wrapped into the <code class="literal">#app</code> element and is passed as a first argument in the map of <code class="literal">Vue</code> options. The <code class="literal">data</code> argument contains the objects that are being used inside the markup using double curly brackets (<pre class="programlisting"><code>{`{{}}`}</code></pre>) . You will probably find this annotation very easy to understand if you are familiar with templating preprocessors (for example, handlebars; for more information, visit 
<a class="ulink" href="http://handlebarsjs.com/">http://handlebarsjs.com/</a>
).</p>

<p className="it">Entonces, ¿qué? -probablemente habrás exclamando. ¿Qué vas a enseñarme? El modo de emplear plantillas pre-procesadoras? Muchas gracias, pero sería mejor tener unas cervezas y ver el fútbol.</p>
<p className="p">So what?&mdash;you're probably exclaiming. What are you going to teach me? How to use templating preprocessors? Thank you very much, but I would be better off having some beers and watching football.</p>


<p className="it">Para, querido lector, no te vayas, sólo tenes que tomar tu cerveza y vamos a seguir nuestro ejemplo. Vas a ver que va a ser muy divertido!</p>
<p className="p">Stop, dear reader, don't go, just grab your beer and let's continue our example. You'll see that it'll be lots of fun!</p></div><div className="section" title="Analyzing data binding using developer tools"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec7"></a>Analyzing data binding using developer tools</h2></div></div></div>

<p className="it">Veamos la unión de datos en acción. Abrí las herramientas de desarrollo del navegador, encontra el código de JavaScript, y añadí un punto de interrupción en el inicio de la secuencia de comandos. Ahora analizá cómo se ven los objetos de datos antes y después de que la aplicación Vue se inicializa. Ves?, cambió mucho. Ahora el objeto <code className="literal">data</code> se prepara para el enlace de datos reactivos:</p>
<p className="p">Let's see data binding in action. Open your browser's developer tools, find your JavaScript code, and add a breakpoint at the start of the script. Now analyze how the data objects look before and after the Vue application is initialized. You see, it changed a lot. Now the <code class="literal">data</code> object is prepared to the reactive data binding:</p>

<div class="mediaobject"><img src="/static/image00220.jpeg" width="100%" alt="Analyzing data binding using developer tools"/></div>

<p className="it">El objeto de datos antes y después de la inicialización de objetos Vue</p>
<p className="p">The data object before and after the Vue object initialization</p>

<p className="it">Ahora bien, si cambiamos la propiedad <code className="literal">title</code> del objeto <code className="literal">data</code> a partir de la consola de herramientas de desarrollo (podemos hacerlo porque nuestro objeto <code className="literal">data</code> es un objeto global), y se refleja automáticamente en el título de la página:</p>
<p className="p">Now if we change the <code class="literal">title</code> property of the <code class="literal">data</code> object from the developer tools console (we can do it because our <code class="literal">data</code> is a global object), it will be reflected automatically in the title on the page:</p>

<div class="mediaobject"><img src="/static/image00221.jpeg" width="100%" alt="Analyzing data binding using developer tools"/></div>

<p className="it">El enlace de datos: el cambio de las propiedades del objeto afecta a la vista de inmediato</p>
<p className="p">Data binding: changing object properties affects the View immediately</p></div><div className="section" title="Bringing user input to the data with two-way binding"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec8"></a>Bringing user input to the data with two-way binding</h2></div></div></div>

<p className="it">Así, en nuestro ejemplo, hemos sido capaces de llevar los datos del modelo de datos de JavaScript plano a la página. Proporcionamos una especie de vuelo desde el código de la aplicación a la página. ¿No te parece que sería bueno si pudiéramos ofrecer un vuelo de dos vías con nuestros datos?</p>
<p className="p">So, in our example, we were able to bring the data from the plain JavaScript data model to the page. We provided it a sort of a flight from the application code to the page. Don't you think that it would be nice if we could offer a two-way flight to our data?</p>

<p className="it">Veamos ahora cómo podemos lograr los datos de dos vías de unión y cómo podemos cambiar el valor de una propiedad <code className="literal">data</code> de la página.</p>
<p className="p">Let's see now how we can achieve two-way data binding and how we can change the value of a <code class="literal">data</code> property from the page.</p>

<p className="it">Copiá el código HTML para el título, cambiá la entrada del primer ejemplo de jQuery, y añadí el atributo <code className="literal">v-model="title"</code> al elemento <code className="literal">input</code>.</p>
<p className="p">Copy the HTML markup for the title, change the input from the first jQuery example, and add the attribute <code class="literal">v-model="title"</code> to the <code class="literal">input</code> element.</p><div class="note" title="Note"><h3 class="title"><a id="tip5"></a>Tip</h3>

<p className="it">¿Alguna vez oíste hablar de las directivas en Vue.js? Enhorabuena, acabás de utilizar una! En realidad, el atributo <code className="literal">v-model</code> es una directiva de Vue.js que proporciona datos bidireccionales vinculantes. Podes leer más sobre él en la página oficial de Vue: <a className="ulink" href="http://vuejs.org/api/#v-model">http://vuejs.org/api/#v-model</a> .</p>
<p className="p">Have you already heard about directives in Vue.js? Congratulations, you've just used one! Actually, the <code class="literal">v-model</code> attribute is a directive of Vue.js that provides two-way data binding. You can read more about it at the official Vue page: 
<a class="ulink" href="http://vuejs.org/api/#v-model">http://vuejs.org/api/#v-model</a>
.</p></div>

<p className="it">Ahora, el código HTML para nuestro código de la aplicación de la lista de la compra tiene el siguiente aspecto:</p>
<p className="p">Now, the HTML code for our shopping list application code looks like the following:</p>



<pre class="programlisting"><code>{`<div id="app" class="container"> 
  <h2>{{ title }}</h2> 
  <ul> 
    <li>{{ items[0] }}</li> 
    <li>{{ items[1] }}</li> 
  </ul> 
  <div class="footer"> 
    <hr/> 
    <em>Change the title of your shopping list here</em> 
    <input v-model="title"/> 
  </div> 
</div> 
`}</code></pre>

<p className="it">¡Y eso es!</p>
<p className="p">And that's it!</p>

<p className="it">Actualizá la página ahora y modificá la entrada. Verás que el título se actualizará automáticamente  a medida que escribis:</p>
<p className="p">Refresh the page now and modify the input. You'll see the title automatically being updated as you type:</p>

<div class="mediaobject"><img src="/static/image00222.jpeg" width="100%" alt="Bringing user input to the data with two-way binding"/></div>

<p className="it">Data binding: cambiar el texto dependiente a la propiedad del modelo afecta al texto unidos a la misma propiedad inmediatamente</p>
<p className="p">Data binding: changing the text bound to the model's property affects the text bound to the same property immediately</p>

<p className="it">Por lo tanto, todo lo que es bueno; Sin embargo, este ejemplo simplemente agarra los dos elementos item y los renderiza como elementos de la lista. Queremos renderizar los elementos de la lista de forma independiente al tamaño de la lista.</p>
<p className="p">So, everything is nice; however, this example just grabs the two item elements and renders them as list items. We want it to render the list of items independently of the list size.</p></div><div className="section" title="Rendering the list of items using the v-for directive"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec9"></a>Rendering the list of items using the v-for directive</h2></div></div></div>
<p className="it">Por lo tanto, se necesita algún mecanismo para iterar a través de los <code className="literal">items</code> del array y para representar cada elemento en nuestro elemento <code class="literal">{`<ul>`}</code>.</p>
<p className="p">So, we need some mechanism to iterate through the <code class="literal">items</code> array and to render each item in our <code class="literal">{`<ul>`}</code> element.</p>

<p className="it">Afortunadamente, Vue.js nos proporciona una buena directiva de iteración a través de las estructuras de datos de JavaScript iterativos. Se llama <code className="literal">v-for</code>. Lo vamos a utilizar en la lista el item elemento <code class="literal">{`<li>`}</code>. Modificar el markup de la lista para que se vea como lo siguiente:</p>
<p className="p">Fortunately, Vue.js provides us with a nice directive for iterating through iterative JavaScript data structures. It is called <code class="literal">v-for</code>. We will use it in the list item <code class="literal">{`<li>`}</code> element. Modify the markup of the list so that it looks like the following:</p>

<pre class="programlisting"><code>{` <ul> 
    <li v-for="item in items">{{ item }}</li> 
  </ul> 
`}</code></pre>

<div class="note" title="Note"><h3 class="title"><a id="note6"></a>Note</h3>

<p className="it">Aprenderás otras directivas agradables tales como <code className="literal">v-if</code>, <code className="literal">v-else</code>, <code className="literal">v-show</code>, <code className="literal">v-on</code>, <code className="literal">v-bind</code>, y así sucesivamente en este libro, así que seguí leyendo.</p>
<p className="p">You will learn other nice directives such as <code class="literal">v-if</code>, <code class="literal">v-else</code>, <code class="literal">v-show</code>, <code class="literal">v-on</code>, <code class="literal">v-bind</code>, and so on in this book, so keep reading.</p></div>

<p className="it">Actualizá la página y echá un vistazo. La página sigue siendo la misma. Ahora, tratá de empujar un elemento en la gama de <code className="literal">items</code> desde la consola de herramientas de desarrollo. Trata de abrirlo también. No te sorprendas al ver que las manipulaciones de los <code className="literal">items</code> del array se reflejan inmediatamente en la página:</p>
<p className="p">Refresh the page and have a look. The page remains the same. Now, try to push an item into the array of <code class="literal">items</code> from the developer tools console. Try to pop them as well. You will not be surprised to see that the <code class="literal">items</code> array manipulations are immediately reflected on the page:</p>

<p className="it"> </p>
<p className="p">
</p><div class="mediaobject"><img src="/static/image00223.jpeg" width="100%" alt="Rendering the list of items using the v-for directive"/></div>

<p className="it">Data binding: cambiar una array afecta de inmediato a las listas basadas en ella</p>
<p className="p">Data binding: changing an array affects lists based on it immediately</p>

<p className="it">Por lo tanto, ahora tenemos una lista de elementos que se representa en una página con una sola línea de la markup. Sin embargo, todavía necesitamos estos elementos para tener una casilla de verificación que nos permita comprobar los artículos que ya comprastes o los desactive cuando sea necesario.</p>
<p className="p">So, now we have a list of items that is rendered on a page with just one line of the markup. However, we still need these items to have a checkbox that allows us to check the already bought items or uncheck them when needed.</p></div><div className="section" title="Check and uncheck shopping list items"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec10"></a>Check and uncheck shopping list items</h2></div></div></div>

<p className="it">Para lograr este comportamiento, vamos a modificar ligeramente nuestra gama de <code className="literal">items</code> cambiando nuestros artículos de cuerda y transformandolos en los objetos con dos propiedades, <code className="literal">text</code> y <code className="literal">checked</code> (para reflejar el estado), y vamos a modificar el margen de beneficio para agregar una casilla de verificación para cada elemento.</p>
<p className="p">To achieve this behavior, let's slightly modify our <code class="literal">items</code> array by changing our string items and transforming them into the objects with two properties, <code class="literal">text</code> and <code class="literal">checked</code> (to reflect the state), and let's modify the markup to add a checkbox to each item.</p>

<p className="it">Así que nuestro código JavaScript para la declaración de datos se verá como lo siguiente:</p>
<p className="p">So our JavaScript code for the data declaration will look like the following:</p>

<pre class="programlisting"><code>{`var data = { 
  items: [{ text: 'Bananas', checked: true },    
          { text: 'Apples',  checked: false }], 
  title: 'My Shopping List', 
  newItem: '' 
};  
`}</code></pre>

<p className="it">Y nuestra lista de markup se verá así:</p>
<p className="p">And our list markup will look like this:</p>

<pre class="programlisting"><code>{`<ul> 
  <li v-for="item in items" v-bind:class="{ 'removed':      
    item.checked }"> 
    <div class="checkbox"> 
      <label> 
        <input type="checkbox" v-model="item.checked"> {{            
          item.text }} 
      </label> 
    </div> 
  </li> 
</ul>    
`}</code></pre>

<p className="it">Actualizá la página y comprobá que la propiedad <code className="literal">checked</code> de la casilla de verificación de los <code className="literal">items</code>, y la clase de cada elemento de la lista eliminado,  <code class="literal">{`<li>`}</code>  se une a la <code className="literal">checked</code> del estado booleano de los artículos. Jugá un poco y tratá de hacer clic en las casillas de verificación para ver qué pasa. No es agradable que acabes con dos directivas que son capaces de propagar el estado de los elementos y cambiar la clase del correspondiente elemento HTML <code class="literal">{`<li>`}</code>?</p>
<p className="p">Refresh the page and check that the <code class="literal">checked</code> property of the <code class="literal">items</code> checkbox, and the removed class of each list item,  <code class="literal">{`<li>`}</code>, is bound to the <code class="literal">checked</code> Boolean state of the items. Play around and try to click checkboxes to see what happens. Isn't it nice that just with two directives we are able to propagate the state of the items and change the class of the corresponding <code class="literal">{`<li>`}</code> HTML element?</p></div><div className="section" title="Adding new shopping list items using the v-on directive"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec11"></a>Adding new shopping list items using the v-on directive</h2></div></div></div>

<p className="it">Así que ahora sólo tenemos una pequeña adición a nuestro código para poder agregar realmente elementos de la lista de compras. Para lograr eso, vamos a añadír un objeto más para nuestros datos y lo llamamos <code className="literal">newItem</code>. También añadiremos un pequeño método que empuja un nuevo elemento a la array <code className="literal">items</code>. Y vamos a llamar a este método de markup de la página utilizando la directiva <code className="literal">v:on</code> usada en el elemento de entrada HTML que se utilizará para el nuevo elemento y en el botón usado para hacer clic para añadír un nuevo elemento.</p>
<p className="p">So now we just need a small addition to our code to be able to actually add shopping list items. To achieve that, we will add one more object to our data and call it <code class="literal">newItem</code>. We'll also add a small method that pushes new item to the <code class="literal">items</code> array. And we'll call this method from the markup page using the <code class="literal">v:on</code> directive used on the HTML input element that will be used for the new item and on the button used to click to add a new item.</p>

<p className="it">Así que nuestro código JavaScript se verá como lo siguiente:</p>
<p className="p">So our JavaScript code will look like the following:</p>

<pre class="programlisting"><code>{`var data = { 
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
}); `}</code></pre>

<p className="it">Hemos añadido una nueva propiedad al objeto <code className="literal">data</code> llamada <code className="literal">newItem</code>. A continuación, hemos añadido una nueva sección llamada <code className="literal">methods</code> a nuestra inicialización Vue de objeto <code className="literal">options</code> y añadimos el método <code className="literal">addItem</code> de esta sección. Todas las propiedades de datos son accesibles en la sección <code className="literal">methods</code> a través de la palabra clave <code className="literal">this</code>. Por lo tanto, en este método, que acaba de llegar <code className="literal">this.newItem</code> y empujar en la  array <code className="literal">this.items</code>. Ahora hay que obligar a la llamada a este método para alguna acción del usuario. Como ya se ha mencionado, vamos a utilizar la directiva <code className="literal">v-on</code> y aplicarla a la keyup <code className="literal">enter</code> en la nueva entrada de producto y al clic de botón <strong className="userinput"><code>Add!</code></strong>.</p>
<p className="p">We added a new property to the <code class="literal">data</code> object called <code class="literal">newItem</code>. Then we added a new section called <code class="literal">methods</code> to our Vue initialization <code class="literal">options</code> object and added the <code class="literal">addItem</code> method to this section. All the data properties are accessible in the <code class="literal">methods</code> section via the <code class="literal">this</code> keyword. Thus, in this method, we just get <code class="literal">this.newItem</code> and push it into the  <code class="literal">this.items</code> array. Now we must bind the call to this method to some user action. As it has already been mentioned, we will use the <code class="literal">v-on</code> directive and apply it to the <code class="literal">enter</code> keyup on the new item input and to the <strong class="userinput"><code>Add!</code></strong> button click.</p>

<p className="it">Así que añadí el siguiente código antes de nuestra lista de elementos:</p>
<p className="p">So add the following markup before our list of items:</p>

<pre class="programlisting"><code>{`<div class="input-group"> 
  <input v-model="newItem" v-on:keyup.enter="addItem"      
    placeholder="add shopping list item" type="text" class="form-      
    control"> 
  <span class="input-group-btn"> 
    <button v-on:click="addItem" class="btn btn-default"            
      type="button">Add!</button> 
  </span> 
</div>> 
`}</code></pre><div class="note" title="Note"><h3 class="title"><a id="note7"></a>Note</h3>

<p className="it">La <code className="literal">v-on</code>Directiva concede un detector de eventos a los elementos. El acceso directo es la <code className="literal">@</code> señal. Así, en lugar de la escritura <code className="literal">v-on:keyup="addItem"</code>, se podes escribir <code className="literal">@keyup="addItem"</code>. Podes leer más acerca de la <code className="literal">v-on</code> directiva sobre el sitio oficial de la documentación en <a className="ulink" href="http://vuejs.org/api/#v-on">http://vuejs.org/api/#v-on</a> .</p>
<p className="p">The <code class="literal">v-on</code> directive attaches an event listener to the elements. The shortcut is the <code class="literal">@</code> sign. So, instead of writing <code class="literal">v-on:keyup="addItem"</code>, you can write <code class="literal">@keyup="addItem"</code>. You can read more about the <code class="literal">v-on</code> directive on the official documentation site at 
<a class="ulink" href="http://vuejs.org/api/#v-on">http://vuejs.org/api/#v-on</a>
.</p></div>

<p className="it">Vamos a finalizar. Todo el código ahora se ve como la siguiente:</p>
<p className="p">Let's finalize. The whole code now looks like the following:</p>

<p className="it">Aquí está el código HTML:</p>
<p className="p">Here is the HTML code:</p>

<pre class="programlisting"><code>{`<div id="app" class="container"> 
  <h2>{{ title }}</h2> <div id="app" class="container"> 
  <h2>{{ title }}</h2> 
  <div class="input-group"> 
    <input v-model="newItem" @keyup.enter="addItem"        
      placeholder="add shopping list item" type="text" 
      class="form-control"> 
  <span class="input-group-btn"> 
    <button @click="addItem" class="btn btn-default"        
      type="button">Add!</button> 
  </span> 
  </div> 
  <ul> 
    <li v-for="item in items" :class="{ 'removed': item.checked      
      }"> 
      <div class="checkbox"> 
        <label> 
          <input type="checkbox" v-model="item.checked"> {{              
            item.text }} 
        </label> 
      </div>     
    </li> 
  </ul> 
  <div class="footer hidden"> 
    <hr/> 
    <em>Change the title of your shopping list here</em> 
    <input v-model="title"/> 
  </div> 
</div>  
`}</code></pre>

<p className="it">Aquí está el código JavaScript:</p>
<p className="p">Here is the JavaScript code:</p>

<pre class="programlisting"><code>{`var data = { 
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


<p className="it">Aquí hay un enlace a jsFiddle: <a className="ulink" href="https://jsfiddle.net/chudaol/vxfkxjzk/3/">https://jsfiddle.net/chudaol/vxfkxjzk/3/</a> .</p>
<p className="p">Here's a link to JSFiddle: 
<a class="ulink" href="https://jsfiddle.net/chudaol/vxfkxjzk/3/">https://jsfiddle.net/chudaol/vxfkxjzk/3/</a>
.</p></div></div>

</div>

<div className='col-md-3'></div>
  
  </div>  

   <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Using Vue.js in an existing project</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/>

<div className="section" title="Using Vue.js in an existing project"><div class="titlepage" id="aid-J2B82"><div><div><h1 className="title"><a id="ch01lvl1sec11"></a>Using Vue.js in an existing project</h1></div></div></div>

<p className="it">Siento ahora que ha visto lo fácil que es para unir las propiedades del modelo a la capa de presentación y ya está comenzando a pensar en la forma en que se podes utilizar en el proyecto existente. Pero luego piensas: diablos, no, es necesario instalar algunas cosas, correr <code className="literal">npm install</code>, cambiar la estructura del proyecto, añadí directivas, y cambiar el código.</p>




<p className="p">I can feel now that you have seen how easy is to bind the properties of the model to the presentation layer and you are already starting to think about how it can be used in your existing project. But then you think: hell, no, I need to install some things, run <code class="literal">npm install</code>, change the project's structure, add directives, and change the code.</p>

<p className="it">Y aquí te puedo decir: ¡no! No se instala, no hay mecanismos nacionales de prevención, acaba de agarrar el <code className="literal">vue.js</code> archivo, insertarlo en su página HTML, y lo utilizan. Eso es todo, no hay cambios en la estructura, no hay decisiones arquitectónicas, no hay discusiones. Sólo lo utilizan. Yo te mostraré cómo lo usamos en Edera (<a className="ulink" href="https://www.ed-era.com">https://www.ed-era.com</a> ) para incluir un pequeño "comprobar usted mismo" funcionalidad al final de un capítulo GitBook.</p>




<p className="p">And here I can tell you: no! No installs, no npms, just grab the <code class="literal">vue.js</code> file, insert it into your HTML page, and use it. That's all, no structure changes, no architectural decisions, no discussions. Just use it. I will show you how we used it at EdEra (
<a class="ulink" href="https://www.ed-era.com">https://www.ed-era.com</a>
) to include a small "check yourself" functionality at the end of a GitBook chapter.</p>

<p className="it">Edera es un proyecto educativo en línea con sede en Ucrania, cuyo objetivo es transformar todo el sistema educativo en algo moderno, en línea, interactivo y divertido. En realidad, soy un co-fundador y el director técnico de este proyecto agradable joven, siendo responsable de toda la parte técnica de la cosa. Así, en Edera, tenemos algunos cursos en línea construidos en la parte superior de la plataforma abierta EDX (<a className="ulink" href="https://open.edx.org/">https://open.edx.org/</a> ) y algunos libros educativos interactivos creados por encima del gran framework GitBook (<a className="ulink" href="http://www.gitbook.org">http: // www. gitbook.org</a> ). Básicamente, GitBook es una plataforma basada en la parte superior de la pila de tecnología Node.js. Permite que una persona con conocimientos básicos de la lengua y la reducción del precio de Git comandos básicos para escribir libros y alojarlas en los servidores GitBook. Los libros de Edera se pueden encontrar en <a className="ulink" href="http://ed-era.com/books">http://ed-era.com/books</a> (ten cuidado, todos ellos están en ucraniano).</p>




<p className="p">EdEra is a Ukraine-based online educational project whose aim is to transform the whole educational system into something modern, online, interactive, and fun. Actually, I am a co-founder and the chief technical officer of this young nice project, being responsible for the whole technical part of the thing. So, in EdEra, we have some online courses built on top of the open EdX platform (
<a class="ulink" href="https://open.edx.org/">https://open.edx.org/</a>
) and some interactive educational books built on top of the great GitBook framework (
<a class="ulink" href="http://www.gitbook.org">http://www.gitbook.org</a>
). Basically, GitBook is a platform based on top of the Node.js technology stack. It allows someone with basic knowledge of the markdown language and basic Git commands to write books and host them in the GitBook servers. EdEra's books can be found at 
<a class="ulink" href="http://ed-era.com/books">http://ed-era.com/books</a> (beware, they are all in Ukrainian).</p>

<p className="it">Vamos a ver lo que hemos hecho en nuestros libros utilizando Vue.js.</p>




<p className="p">Let's see what we have done in our books using Vue.js.</p>

<p className="it">En algún momento, decidí incluir un pequeño cuestionario al final del capítulo sobre los pronombres personales en el libro que enseña Inglés. Por lo tanto, he incluido el <code className="literal">vue.js</code> archivo JavaScript, editado el correspondiente <code className="literal">.md</code> archivo, e incluyó el siguiente código HTML:</p>




<p className="p">At some point, I decided to include a small quiz at the end of the chapter about personal pronouns in the book that teaches English. Thus, I've included the <code class="literal">vue.js</code> JavaScript file, edited the corresponding <code class="literal">.md</code> file, and included the following HTML code:</p>

<pre class="programlisting"><code>{`<div id="pronouns"> 
    <p><strong>Check yourself :)</strong></p> 
    <textarea class="textarea" v-model="text" v-      
      on:keyup="checkText"> 
        {{ text }} 
    </textarea><i  v-bind:class="{ 'correct': correct,      
      'incorrect': !correct }"></i> 
</div> 
`}</code></pre><p className="it">Luego añade un archivo JavaScript personalizada, donde he incluido el siguiente código:</p>




<p className="p">Then I added a custom JavaScript file, where I've included the following code:</p>

<pre class="programlisting"><code>{`$(document).ready(function() { 
  var initialText, correctText; 
 
  initialText = 'Me is sad because he is more clever than I.'; 
  correctText = 'I am sad because he is more clever than me.'; 
 
  new Vue({ 
    el: '#pronouns', 
    data: { 
      text: initialText, 
      correct: false 
    }, 
    methods: { 
      checkText: function () { 
        var text; 
        text = this.text.trim(); 
        this.correct = text === correctText; 
      } 
    } 
  }); 
}); 
`}</code></pre>

<div class="note" title="Note">

<h3 class="title"><a id="note8"></a>Note</h3>

<p className="it">Podes comprobar este código en esta página GitHub: <a className="ulink" href="https://github.com/chudaol/ed-era-book-english">https://github.com/chudaol/ed-era-book-english</a> . Aquí hay un código de una página escrita en la reducción del precio con HTML insertado: <a className="ulink" href="https://github.com/chudaol/ed-era-book-english/blob/master/2/osobovi_zaimenniki.md">https://github.com/chudaol/ed-era-book-english/blob/master/2/osobovi_zaimenniki.md</a> . Y aquí hay un código JavaScript: <a className="ulink" href="https://github.com/chudaol/ed-era-book-english/blob/master/custom/js/quiz-vue.js">https://github.com/chudaol/ed-era-book-english/blob/master/custom/js/quiz-vue.js</a> . Incluso se podes clonar el repositorio y probarlo localmente usando <code className="literal">gitbook-cli</code>(<a className="ulink" href="https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md">https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md</a> ).</p>

<p className="p">You can check this code at this GitHub page: 
<a class="ulink" href="https://github.com/chudaol/ed-era-book-english">https://github.com/chudaol/ed-era-book-english</a>
.
Here's a code of a page written in markdown with inserted HTML: 
<a class="ulink" href="https://github.com/chudaol/ed-era-book-english/blob/master/2/osobovi_zaimenniki.md">https://github.com/chudaol/ed-era-book-english/blob/master/2/osobovi_zaimenniki.md</a>
.
And here's a JavaScript code: 
<a class="ulink" href="https://github.com/chudaol/ed-era-book-english/blob/master/custom/js/quiz-vue.js">https://github.com/chudaol/ed-era-book-english/blob/master/custom/js/quiz-vue.js</a>
.
You can even clone the repository and try it locally using <code class="literal">gitbook-cli</code> (
<a class="ulink" href="https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md">https://github.com/GitbookIO/gitbook/blob/master/docs/setup.md</a>
).</p>

</div><p className="it">Vamos a echar un vistazo a este código. Es probable que ya haya detectado las partes que ya ha visto e incluso intentado:</p>

<p className="p">Let's have a look at this code. You have probably already detected the parts that you have already seen and even tried:</p>

<div class="itemizedlist">

<ul className="itemizedlist">

<li className="listitem">The <code class="literal">data</code> object contains two properties:</li>

<li className="listitem">The <code class="literal">string</code> property text</li>

<li className="listitem">The <code class="literal">Boolean</code> property correct</li>


</ul>
</div>


<ul>

<li className="listitem">The <code class="literal">checkText</code> method just grabs the <code class="literal">text</code> property, compares it with the correct text, and assigns the value to the correct value</li>


<li className="listitem">The <code class="literal">v-on</code> directive calls the <code class="literal">checkText</code> method on keyup</li>

<li className="listitem">The <code class="literal">v-bind</code> directive binds the class <code class="literal">correct</code> to the <code class="literal">correct</code> property</li>

</ul>

</div><p className="it">Aquí es cómo el código se ve en mi IDE:</p>

<p className="p">Here is how the code looks in my IDE:</p>


<div class="mediaobject"><img src="/static/image00224.jpeg" width="100%" alt="Using Vue.js in an existing project"/></div>


<p className="it">El uso de Vue en un proyecto de reducción del precio impulsado</p>


<p className="p">Using Vue in a markdown-driven project</p>

<p className="it">Y el próximo es lo que parece en el navegador:</p>

<p className="p">And next is what it looks like in the browser:</p>


<div class="mediaobject"><img src="/static/image00225.jpeg" width="100%" alt="Using Vue.js in an existing project"/></div>


<p className="it">Vue.js en acción dentro de la página GitBook</p>




<p className="p">Vue.js in action inside the GitBook page</p>

<div class="mediaobject"><img src="/static/image00226.jpeg" width="100%" alt="Using Vue.js in an existing project"/></div>


<p className="it">Vue.js en acción dentro de la página GitBook</p>




<p className="p">Vue.js in action inside the GitBook page</p>

<p className="it">Compruébelo usted mismo en <a className="ulink" href="http://english.ed-era.com/2/osobovi_zaimenniki.html">http://english.ed-era.com/2/osobovi_zaimenniki.html</a> .</p>




<p className="p">Check it out at 
<a class="ulink" href="http://english.ed-era.com/2/osobovi_zaimenniki.html">http://english.ed-era.com/2/osobovi_zaimenniki.html</a>
.</p>

<p className="it">Increíble, ¿verdad? Bastante simple, bastante reactiva!</p>


<p className="p">Amazing, right? Pretty simple, pretty reactive!</p>

</div>
<div className='col-md-3'></div>
  
  </div>  

   <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Vue.js 2.0!</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/>

<div className="section" title="Vue.js 2.0!" id="aid-K0RQ1"><div className="titlepage"><div><div><h1 className="title"><a id="ch01lvl1sec12"></a>Vue.js 2.0!</h1></div></div></div><p className="p">At the time of writing, Vue.js 2.0 was announced (
<a class="ulink" href="https://vuejs.org/2016/04/27/announcing-2.0/">https://vuejs.org/2016/04/27/announcing-2.0/</a>
). Check the following links in this regard:</p><div class="itemizedlist"><ul className="itemizedlist"><li className="listitem"><a class="ulink" href="http://www.infoworld.com/article/3063615/javascript/vuejs-lead-our-javascript-framework-is-faster-than-react.html">http://www.infoworld.com/article/3063615/javascript/vuejs-lead-our-javascript-framework-is-faster-than-react.html</a></li><li className="listitem"><a class="ulink" href="https://www.reddit.com/r/vuejs/comments/4gq2r1/announcing_vuejs_20/">https://www.reddit.com/r/vuejs/comments/4gq2r1/announcing_vuejs_20/</a></li></ul></div>
<p className="it">La segunda versión del Vue.js tiene algunas diferencias considerables en comparación con su predecesor, a partir de la forma en que el enlace de datos está siendo manejado y moviéndose a su API. Utiliza implementación DOM virtuales de peso ligero para la representación, es compatible con representación del lado del servidor, y es más rápido y más ligera.</p>
<p className="p">The second version of Vue.js has some considerable differences comparing to its predecessor, starting from the way that data binding is being handled and moving to its API. It uses lightweight virtual DOM implementation for rendering, supports server-side rendering, and is faster and leaner.</p>

<p className="it">En el momento de la escritura, Vue 2.0 estaba en una etapa temprana alfa. No se preocupe, sin embargo. Todos los ejemplos que vamos a cubrir en este libro se basan en la última versión estable de Vue 2.0 y son totalmente compatibles con las dos versiones.</p>

<p className="p">At the time of writing, Vue 2.0 was in an early alpha stage. Do not worry, though. All the examples that we will cover in this book are based on the latest stable version of Vue 2.0 and are fully compatible with the both the versions.</p></div>

</div>

<div className='col-md-3'></div>
  
  </div>  
  <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Projects using Vue.js</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/>

<div className="section" title="Projects using Vue.js"><div class="titlepage" id="aid-KVCC2"><div><div><h1 className="title"><a id="ch01lvl1sec13"></a>Projects using Vue.js</h1></div></div></div><p className="p">Probably, at this time, you are wondering what projects are out there that are built on top of Vue.js, or use it as a part of their codebase. There are a lot of nice open source, experimental, and enterprise projects using it. The complete and constantly updated list of these projects can be found at 
<a class="ulink" href="https://github.com/vuejs/awesome-vue#projects-using-vuejs">https://github.com/vuejs/awesome-vue#projects-using-vuejs</a>
.</p><p className="p">Let's have a look at some of them.</p><div className="section" title="Grammarly"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec12"></a>Grammarly</h2></div></div></div><p className="p">Grammarly (
<a class="ulink" href="https://www.grammarly.com/">https://www.grammarly.com/</a>
) is a service that helps you write English correctly. It has several apps, one of them is a simple Chrome extension that just checks any text input that you fill in. Another one is an online editor that you can use to check big chunks of text. This editor is built using Vue.js! The following is a screenshot of this text being edited in the online editor of Grammarly:</p><p className="p">
</p><div class="mediaobject"><img src="/static/image00227.jpeg" width="100%" alt="Grammarly"/></div>

<p className="p">Grammarly: a project that is built on top of Vue.js</p></div><div className="section" title="Optimizely"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec13"></a>Optimizely</h2></div></div></div><p className="p">Optimizely (
<a class="ulink" href="https://www.optimizely.com/">https://www.optimizely.com/</a>
) is a service that helps you test, optimize, and personalize your websites. I've used the Packt site to create an Optimizely experiment and to check out Vue.js in action in this resource. It looks like the following:</p><p className="p">
</p><div class="mediaobject"><img src="/static/image00228.jpeg" width="100%" alt="Optimizely"/></div>

<p className="p">Optimizely: a project that is built on top of Vue.js</p><p className="p">Hovering around with the mouse gives us the possibility of opening a context menu that allows different manipulations with the page data, including the simplest one, text editing. Let's try this one:</p><p className="p">
</p><div class="mediaobject"><img src="/static/image00229.jpeg" width="100%" alt="Optimizely"/></div>

<p className="p">Using Optimizely and watching Vue.js in action</p><p className="p">The text box is opened. When I type in it, the text in the title is reactively changed. We saw and implemented it using Vue.js:</p><p className="p">
</p><div class="mediaobject"><img src="/static/image00230.jpeg" width="100%" alt="Optimizely"/></div>

<p className="p">Using Optimizely and watching Vue.js in action</p></div><div className="section" title="FilterBlend"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec14"></a>FilterBlend</h2></div></div></div><p className="p">FilterBlend (
<a class="ulink" href="https://github.com/ilyashubin/FilterBlend">https://github.com/ilyashubin/FilterBlend</a>
) is an open source playground for the CSS background-blend-mode and filter properties.</p><p className="p">You can load your images and combine blending with filters.</p><p className="p">If you want to give FilterBlend a try, you can install it locally:</p><div class="orderedlist"><ol class="orderedlist arabic"><li className="listitem">Clone the repository:
<pre class="programlisting">
<span class="strong"><strong>git clone https://github.com/ilyashubin/FilterBlend.git</strong></span>
</pre></li><li className="listitem">Enter the <code class="literal">FilterBlend</code> directory:
<pre class="programlisting">
<span class="strong"><strong>cd FilterBlend</strong></span>
</pre></li><li className="listitem">Install the dependencies:
<pre class="programlisting">
<span class="strong"><strong>npm install</strong></span>
</pre></li><li className="listitem">Run the project:
<pre class="programlisting">
<span class="strong"><strong>gulp</strong></span>
</pre></li></ol>

</div><p className="p">Open your browser on <code class="literal">localhost:8000</code> and play around. You can see that once you change something in the menu on the right, it is immediately propagated to the images on the left side. All this functionality is achieved using Vue.js. Check the code on GitHub.</p><p className="p">
</p><div class="mediaobject"><img src="/static/image00231.jpeg" width="100%" alt="FilterBlend"/></div>

<p className="p">FilterBlend: a project built on top of Vue.js</p></div><div className="section" title="PushSilver"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec15"></a>PushSilver</h2></div></div></div><p className="p">PushSilver (
<a class="ulink" href="https://pushsilver.com">https://pushsilver.com</a>
) is a nice and simple service for busy people to create simple invoices. It allows creating invoices, sending and resending them to the clients, and keeping tracking of them. It was created by a developer doing freelance consultancy and being tired of having to create invoices each time for each small project. This tool works well and it was built using Vue.js:</p><p className="p">
</p><div class="mediaobject"><img src="/static/image00232.jpeg" width="100%" alt="PushSilver"/></div>

<p className="p">PushSilver: invoice managing application built on top of Vue.js</p><p className="p">
</p><div class="mediaobject"><img src="/static/image00233.jpeg" width="100%" alt="PushSilver"/></div>

<p className="p">PushSilver: invoice managing application built on top of Vue.js</p></div></div>

</div>

<div className='col-md-3'></div>
  
  </div>  
  <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Book roadmap</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/>

<div className="section" title="Book roadmap" id="aid-LTSU1"><div className="titlepage"><div><div><h1 className="title"><a id="ch01lvl1sec14"></a>Book roadmap</h1></div></div></div>


<p className="it">Este libro, como la mayor parte de los libros técnicos, está organizada de tal manera que no es necesario leerlo de principio a fin. Se pueden elegir las partes que le interesan más y omitir el resto.</p>

<p className="p">This book, like most part of technical books, is organized in such a way that you do not need to read it from beginning to end. You can choose the parts that interest you the most and skip the rest.</p>


<p className="it">Este libro está organizado de la siguiente manera:</p>

<p className="p">This book is organized as follows:</p>

<div class="itemizedlist">


<ul className="itemizedlist">


<li className="listit">Si sostá leyendo esto, no hay necesidad de especificar lo que está pasando en el primer capítulo.</li>

<li className="listitem">If you are reading this, there's no need to specify what is going on in the first chapter.</li>


<li className="listit"><a className="link" title="Capítulo 2. Fundamentos - Instalación y uso" href="part0027.xhtml#aid-PNV61">Capítulo 2</a> , <span className="emphasis"><em>Fundamentos - Instalación y uso,</em></span> es bastante teórica y explicará lo que está pasando detrás de las escenas de Vue.js y sus partes principales. Por lo tanto, si usted no está en la teoría y desea poner sus manos en la codificación, sos libre de saltarse esta parte. En esta parte, también vamos a pasar por el proceso de instalación y configuración.</li>

<li className="listitem"><a class="link" title="Chapter 2. Fundamentals - Installing and Using" href="part0027.xhtml#aid-PNV61">Chapter 2</a>, <span class="emphasis"><em>Fundamentals - Installing and Using,</em></span> is pretty theoretical and will explain what's going on behind the scenes of Vue.js and its main parts. So, if you are not into theory and want to put your hands into coding, you are free to skip this part. In this part, we will also go through the installation and setup process.</li>


</ul></div><div class="itemizedlist">


<ul className="itemizedlist">


<li className="listit">A partir del tercer al octavo capítulo, vamos a explorar las principales características de Vue.js mientras que la construcción de la aplicación:</li>

<li className="listitem">From the third to the eighth chapter, we'll explore the main features of Vue.js while building the application:</li>


<li className="listit">En <a className="link" title="Capítulo 3. Componentes - Comprensión y uso" href="part0036.xhtml#aid-12AK81">el capítulo 3</a> , <span className="emphasis"><em>Componentes - Comprensión y uso</em></span> , vamos a introducir componentes Vue y aplicar este conocimiento a nuestra aplicación.</li>


<li className="listitem">In <a class="link" title="Chapter 3. Components - Understanding and Using" href="part0036.xhtml#aid-12AK81">Chapter 3</a>, <span class="emphasis"><em>Components - Understanding and Using</em></span>, we will introduce Vue components and apply this knowledge to our application.</li>

<li className="listit">En <a className="link" title="Capítulo 4. Reactividad - Enlace de datos a su aplicación" href="part0046.xhtml#aid-1BRPS1">el Capítulo 4</a> , <span className="emphasis"><em>Reactividad - Enlace de datos a su aplicación</em></span> , vamos a utilizar todos los mecanismos de enlace de datos proporcionados por el Vue.</li>

<li className="listitem">In <a class="link" title="Chapter 4. Reactivity - Binding Data to Your Application" href="part0046.xhtml#aid-1BRPS1">Chapter 4</a>, <span class="emphasis"><em>Reactivity - Binding Data to Your Application</em></span>, we will use all the data binding mechanisms provided by Vue.</li>


<li className="listit">En <a className="link" title="Capítulo 5. Vuex - Administración del estado en su aplicación" href="part0052.xhtml#aid-1HIT82">el capítulo 5</a> , <span className="emphasis"><em>Vuex - Administración del estado en su aplicación</em></span> , se introducirá el sistema de gestión del estado Vuex y explicar cómo usarlo en nuestras aplicaciones.</li>

<li className="listitem">In <a class="link" title="Chapter 5. Vuex - Managing State in Your Application" href="part0052.xhtml#aid-1HIT82">Chapter 5</a>, <span class="emphasis"><em>Vuex - Managing State in Your Application</em></span>, we will introduce the Vuex state management system and explain how to use it in our applications.</li>


<li className="listit">En <a className="link" title="Capítulo 6. Plugins - Construcción de su casa con sus propios ladrillos" href="part0061.xhtml#aid-1Q5IA1">el capítulo 6</a> , <span className="emphasis"><em>Plugins - Construcción de su casa con sus propios ladrillos</em></span> , vamos a aprender cómo crear y utilizar plugins para aplicaciones Vue para enriquecer su funcionalidad.</li>

<li className="listitem">In <a class="link" title="Chapter 6. Plugins - Building Your House with Your Own Bricks" href="part0061.xhtml#aid-1Q5IA1">Chapter 6</a>, <span class="emphasis"><em>Plugins - Building Your House with Your Own Bricks</em></span>, we will learn how to create and use plugins for Vue applications to enrich their functionality.</li>


<li className="listit">En <a className="link" title="Capítulo 7. Pruebas - Es hora de probar lo que hemos hecho hasta ahora!" href="part0065.xhtml#aid-1TVKI1">el capítulo 7</a> , <span className="emphasis"><em>prueba - Es hora de probar lo que hemos hecho hasta ahora! </em></span>, Vamos a cubrir y explorar las directivas personalizadas de Vue.js y crear un poco en nuestra aplicación.</li>

<li className="listitem">In <a class="link" title="Chapter 7. Testing - Time to Test What We Have Done So Far!" href="part0065.xhtml#aid-1TVKI1">Chapter 7</a>, <span class="emphasis"><em>Testing - Time to Test What We Have Done so Far!</em></span>, we will cover and explore custom directives of Vue.js and create some in our application.</li>


<li className="listit">En <a className="link" title="Capítulo 8. Implementación - Hora de ir en vivo!" href="part0073.xhtml#aid-25JP21">el capítulo 8</a> , <span className="emphasis"><em>Implementación - Hora de ir en vivo! </em></span>, Vamos a aprender cómo probar y desplegar aplicaciones escritas en JavaScript Vue.js.</li>

<li className="listitem">In <a class="link" title="Chapter 8. Deploying - Time to Go Live!" href="part0073.xhtml#aid-25JP21">Chapter 8</a>, <span class="emphasis"><em>Deploying - Time to Go Live!</em></span>, we will learn how to test and deploy JavaScript application written in Vue.js.</li>


<li className="listit">En <a className="link" title="Capítulo 9. ¿Qué sigue?" href="part0078.xhtml#aid-2ACBS1">el capítulo 9</a> , <span className="emphasis"><em>¿qué sigue? </em></span>, Vamos a resumir lo que hemos aprendido y ver lo que podemos hacer a continuación.</li>

<li className="listitem">In <a class="link" title="Chapter 9. What Is Next?" href="part0078.xhtml#aid-2ACBS1">Chapter 9</a>, <span class="emphasis"><em>What Is Next?</em></span>, we'll summarize what we've learned and see what we can do next.</li>

</ul></div></div>

<div className='col-md-3'></div>
  
  </div>  
   </div>
   <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Let's manage time!</title>




<link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Let's manage time!"><div class="titlepage" id="aid-MSDG2"><div><div><h1 className="title"><a id="ch01lvl1sec15"></a>Let's manage time!</h1></div></div></div>




<p className="it">En este punto ya sé que sos tan, pero tan entusiasta con este libro que deseas leer hasta el final sin parar. Pero esto no es correcto. Debemos manejar nuestro tiempo y darnos un poco de tiempo para trabajar y un tiempo para descansar. Vamos a crear una pequeña aplicación que implementa un temporizador con la técnica Pomodoro para que nos pueda ayudar en nuestra gestión del tiempo de trabajo.</p>

<p className="p">At this point of time, I already know that you are so, so, so enthusiastic with this book that you want to read it to the end without stopping. But this is not right. We should manage our time and give us some time to work and some time to rest. Let's create a small application that implements a Pomodoro technique timer so that it can help us in our working time management.</p>


<div class="note" title="Note"><h3 class="title"><a id="note9"></a>Note</h3>

<p className="it">La técnica <span className="strong"><strong>Pomodoro</strong></span> es una técnica de gestión del tiempo lleva el nombre del reloj de cocina de tomate (de hecho, Pomodoro significa tomate en italiano). Esta técnica consiste en descomponer el tiempo de trabajo en pequeños intervalos separados por pausas breves. Leer más sobre la técnica Pomodoro en el sitio oficial: <a className="ulink" href="http://pomodorotechnique.com/">http://pomodorotechnique.com/</a> .</p>

<p className="p">The<span class="strong"><strong> Pomodoro</strong></span> technique is a time management technique named after the kitchen tomato timer (in fact, Pomodoro means tomato in Italian). This technique consists of breaking down the working time into small intervals separated by short breaks. Read more about the Pomodoro technique on the official site: 
<a class="ulink" href="http://pomodorotechnique.com/">http://pomodorotechnique.com/</a>
.</p>


</div>


<p className="it">Por lo tanto, nuestro objetivo es muy simple. Sólo tenemos que crear un contador de tiempo muy simple que disminuye hasta el final del intervalo de trabajo y reinicia y decrementa hasta el final del tiempo de reposo y así sucesivamente.</p>

<p className="p">Thus, our goal is very simple. We just have to create a very simple time counter that will decrement untill the end of the working interval and then restart and decrement till the end of the resting time and so on.</p>



<p className="it">¡Vamos a hacer eso!</p>

<p className="p">Let's do that!</p>



<p className="it">Vamos a introducir dos variables de datos Vue, <code className="literal">minute</code> y <code className="literal">second</code>, que se mostrará en nuestra página. El método principal de cada segundo disminuirá <code className="literal">second</code>; se disminuirá <code className="literal">minute</code> cuando <code className="literal">second</code> se convierte en <code className="literal">0</code>; y cuando ambas variables <code className="literal">minute</code> y <code className="literal">second</code> vienen a <code className="literal">0</code>, la aplicación debe alternar entre el intervalo trabajar y descansar:</p>

<p className="p">We will introduce two Vue data variables, <code class="literal">minute</code> and <code class="literal">second</code>, which will be displayed on our page. The main method on each second will decrement <code class="literal">second</code>; it will decrement <code class="literal">minute</code> when <code class="literal">second</code> becomes <code class="literal">0</code>; and when both <code class="literal">minute</code> and <code class="literal">second</code> variables come to <code class="literal">0</code>, the application should toggle between working and resting interval:</p>


<p className="it">Nuestro código JavaScript se verá como lo siguiente:</p>

<p className="p">Our JavaScript code will look like the following:</p>


<pre class="programlisting"><code>{`const POMODORO_STATES = { 
  WORK: 'work', 
  REST: 'rest' 
}; 
const WORKING_TIME_LENGTH_IN_MINUTES = 25; 
const RESTING_TIME_LENGTH_IN_MINUTES = 5; 
 
new Vue({ 
  el: '#app', 
  data: { 
    minute: WORKING_TIME_LENGTH_IN_MINUTES, 
    second: 0, 
    pomodoroState: POMODORO_STATES.WORK, 
    timestamp: 0 
  }, 
  methods: { 
    start: function () { 
      this._tick(); 
      this.interval = setInterval(this._tick, 1000); 
    }, 
    _tick: function () { 
      //if second is not 0, just decrement second 
      if (this.second !== 0) { 
        this.second--; 
        return; 
      } 
      //if second is 0 and minute is not 0,        
      //decrement minute and set second to 59 
      if (this.minute !== 0) { 
        this.minute--; 
        this.second = 59; 
        return; 
      } 
      //if second is 0 and minute is 0,        
      //toggle working/resting intervals 
      this.pomodoroState = this.pomodoroState ===        
      POMODORO_STATES.WORK ? POMODORO_STATES.REST :        
      POMODORO_STATES.WORK; 
      if (this.pomodoroState === POMODORO_STATES.WORK) { 
        this.minute = WORKING_TIME_LENGTH_IN_MINUTES; 
      } else { 
        this.minute = RESTING_TIME_LENGTH_IN_MINUTES; 
      } 
    } 
  } 
}); 
`}</code></pre> <p className="it">En nuestro código HTML, vamos a crear dos markups de posición para <code className="literal">minute</code> y <code className="literal">second</code>, y un botón de inicio para nuestro temporizador Pomodoro:</p> <p className="p">In our HTML code, let's create two placeholders for <code class="literal">minute</code> and <code class="literal">second</code>, and a start button for our Pomodoro timer:</p> <pre class="programlisting"><code>{`<div id="app" class="container"> <h2>
    <span>Pomodoro</span> 
    <button  @click="start()"> 
      <i class="glyphicon glyphicon-play"></i> 
    </button> 
  </h2> 
  <div class="well"> 
    <div class="pomodoro-timer"> 
      <span>{{ minute }}</span>:<span>{{ second }}</span> 
    </div> 
  </div> 
</div> v> 
`}</code></pre> <p className="it">Una vez más, estamos usando Bootstrap para el estilo, por lo que nuestro temporizador Pomodoro tiene el siguiente aspecto:</p> <p className="p">Again, we are using Bootstrap for the styling, so our Pomodoro timer looks like the following:</p> <div class="mediaobject"><img src="/static/image00234.jpeg" width="100%" alt="Let's manage time!"/></div> <p className="it">temporizador de cuenta atrás construido con Vue.js</p> <p className="p">Countdown timer built with Vue.js</p> <p className="it">Nuestra Pomodoro es agradable, pero tiene algunos problemas:</p> <p className="p">Our Pomodoro is nice, but it has some problems:</p> <div class="itemizedlist"><ul className="itemizedlist"> <li className="listit">En primer lugar, no sabemos qué estado está siendo activado y desactivdo. No sabemos si debemos trabajar o descansar. Vamos a introducir un título que va a cambiar cada vez que se cambia el estado Pomodoro.</li> <li className="listitem">First of all, we don't know which state is being toggled. We don't know if we should work or rest. Let's introduce a title that will change each time the Pomodoro state is changed.</li> <li className="listit">Otro problema es la pantalla inconsistente de minutos y los números de segundos. Por ejemplo, en 24 minutos y 5 segundos, nos gustaría ver a 24:05 y no 24: 5. Vamos a arreglarlo introduciendo valores calculados en nuestros datos de la aplicación  mostradolos en lugar de los valores normales.</li> <li className="listitem">Another problem is inconsistent display of minutes and seconds numbers. For example, for 24 minutes and 5 seconds, we would like to see 24:05 and not 24:5. Let's fix it introducing computed values in our application data and displaying them instead of normal values.</li> <li className="listit">Sin embargo, otro problema es que en nuestro botón de inicio podes hacer clic una y otra vez, lo que crea un temporizador cada vez que se hace clic. Intentá hacer clic varias veces y veras cómo va tu loco temporizador. Vamos a arreglarlo mediante la introducción de los botones de inicio, pausa y detener, se aplican estados de aplicación a ellos, y en consecuencia desactiva los botones para el estado.</li> <li className="listitem">Yet another problem is that our start button can be clicked over and over again, which creates a timer each time it's clicked. Try to click it several times and see how crazy your timer goes. Let's fix it by introducing start, pause, and stop buttons, apply application states to them, and disable buttons to the state accordingly.</li> </ul></div><div className="section" title="Toggle the title by using computed properties"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec16"></a>Toggle the title by using computed properties</h2></div></div></div> <p className="it">Vamos a empezar fijando el primer problema mediante la creación de títulos de propiedad computada y usarlo en nuestro markup.</p> <p className="p">Let's start by fixing the first problem by creating computed property title and using it in our markup.</p> <div class="note" title="Note"><h3 class="title"><a id="note10"></a>Note</h3> <p className="it">Las <span className="strong"><strong>propiedades computadas</strong></span> son las propiedades en el interior del objeto <code className="literal">data</code> que nos permiten evitar la voladura de la plantilla con cierta lógica adicional. Podes encontrar más información acerca de las propiedades  computadas en el sitio de la documentación oficial: <a className="ulink" href="http://vuejs.org/guide/computed.html"> http://vuejs.org/guide/computed.html</a> .</p> <p className="p"> <span class="strong"><strong>Computed properties</strong></span> are the properties inside the <code class="literal">data</code> object that allow us to avoid blowing up the template with some extra logic. You can find more information about computed properties on the official documentation site: <a class="ulink" href="http://vuejs.org/guide/computed.html">http://vuejs.org/guide/computed.html</a> .</p> </div> <p className="it">Añadí la sección <code className="literal">computed</code> en el objeto Vue <code className="literal">options</code> y añadí la propiedad existente <code className="literal">title</code>:</p> <p className="p">Add the <code class="literal">computed</code> section in the Vue <code class="literal">options</code> object and add the property <code class="literal">title</code> there:</p> <pre class="programlisting"><code>{`data: {//... data: {
  //... 
}, 
computed: { 
  title: function () { 
    return this.pomodoroState === POMODORO_STATES.WORK ? 'Work!' :      
    'Rest!' 
  } 
}, 
methods: { 
//... `}</code></pre> <p className="it">Y ahora sólo tenes que utilizar la siguiente propiedad ya que era una normal de propiedad Vue <code className="literal">data</code> en tu markup:</p> <p className="p">And now just use the following property as it was a normal Vue <code class="literal">data</code> property in your markup:</p> <pre class="programlisting"><code>{`<h2> <span>Pomodoro</span>
    <!--!> 
  </h2> 
  <h3>{{ title }}</h3> 
  <div class="well">
`}</code></pre> <p className="it">Y listo! Ahora tenemos un título que cambia cada vez que se que se alternará el estado Pomodoro:</p> <p className="p">And voil&agrave;! Now we have a title that changes each time the Pomodoro state is being toggled:</p> <div class="mediaobject"><img src="/static/image00235.jpeg" width="100%" alt="Toggle the title by using computed properties"/></div> <p className="it">Cambio automático del título en función del estado del temporizador</p> <p className="p">Automatic change of the title based on the state of the timer</p> <p className="it">Bonito, ¿verdad?</p> <p className="p">Nice, isn't it?</p> </div><div className="section" title="Left-pad time values using computed properties"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec17"></a>Left-pad time values using computed properties</h2></div></div></div> <p className="it">Ahora vamos a aplicar la misma lógica para rellenar nuestros números a la izquierda <code className="literal">minute</code> y <code className="literal">second</code>. Vamos a añadír dos propiedades calculadas, <code className="literal">min</code> y <code className="literal">sec</code>, en nuestra sección <code className="literal">computed</code> de las opciones <code className="literal">data</code> y aplicar el algoritmo simple para rellenar los números con <code className="literal">0</code> a la izquierda. Por supuesto, se podría utilizar un famoso proyecto de izquierda-pad (<a className="ulink" href="https://github.com/stevemao/left-pad">https://github.com/stevemao/left-pad</a> ), pero para mantener las cosas simples y no romper la totalidad de Internet (<a className="ulink" href="http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/">http://www.theregister.co .uk / 2016/03/23 / npm_left_pad_chaos /</a> ), vamos a aplicar una lógica sencilla de nuestra propia cosecha:</p> <p className="p">Now let's apply the same logic for left padding our <code class="literal">minute</code> and <code class="literal">second</code> numbers. Let's add two computed properties, <code class="literal">min</code> and <code class="literal">sec</code>, in our <code class="literal">computed</code> section in the <code class="literal">data</code> options and apply the simple algorithm to pad the numbers with <code class="literal">0</code> on the left. Of course, we could use a famous left-pad project (<a class="ulink" href="https://github.com/stevemao/left-pad">https://github.com/stevemao/left-pad</a> ), but to keep things simple and not to break the whole Internet (<a class="ulink" href="http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/">http://www.theregister.co.uk/2016/03/23/npm_left_pad_chaos/</a> ), let's apply a simple logic of our own:</p> <pre class="programlisting"><code>{`computed: {computed: { computed: {
  title: function () { 
    return this.pomodoroState === POMODORO_STATES.WORK ? 'Work!' :      
    'Rest!' 
  }, 
  min: function () { 
    if (this.minute < 10) { 
      return '0' + this.minute; 
    } 
 
    return this.minute; 
  }, 
  sec: function () { 
    if (this.second < 10) { 
      return '0' + this.second; 
    } 
 
    return this.second; 
  } 
} 
`}</code></pre> <p className="it">Y vamos a utilizar estas propiedades en lugar de <code className="literal">minute</code> y <code className="literal">second</code> en nuestro código HTML:</p> <p className="p">And let's use these properties instead of <code class="literal">minute</code> and <code class="literal">second</code> in our HTML code:</p> <pre class="programlisting"><code>{`   <div class="pomodoro-timer"> <span><span class="strong"><strong> <div class="pomodoro-timer">
    <span>{{ min }}</span>:<span>{{ sec }}</span> 
   </div> 
  
`}</code></pre> <p className="it">Actualiza la página y comproba lo hermosos que son ahora nuestros números:</p> <p className="p">Refresh a page and check how beautiful our numbers are now:</p> <div class="mediaobject"><img src="/static/image00236.jpeg" width="100%" alt="Left-pad time values using computed properties"/></div> <p className="it">Padding a la izquierda utilizando las propiedades calculadas en Vue.js</p> <p className="p">Left padding using computed properties in Vue.js</p> </div><div className="section" title="Keep state with start, pause, and stop buttons"><div className="titlepage"><div><div><h2 class="title"><a id="ch01lvl2sec18"></a>Keep state with start, pause, and stop buttons</h2></div></div></div> <p className="it">Por lo tanto, para solucionar el tercer problema, vamos a introducir tres estados de aplicación, <code className="literal">started</code>, <code className="literal">paused</code>, y <code className="literal">stopped</code>, y vamos a tener tres métodos que nos permitan permutar sobre estos estados. Ya tenemos el método que inicia la aplicación, por lo que sólo tenes que añadír la lógica para cambiar el estado a <code className="literal">started</code>. También se añaden dos métodos adicionales, <code className="literal">pause</code> y <code className="literal">stop</code>, lo que detiene el cronómetro y cambia al correspondiente estado de la aplicación:</p> <p className="p">So, to fix the third problem, let's introduce three application states, <code class="literal">started</code>, <code class="literal">paused</code>, and <code class="literal">stopped</code>, and let's have three methods that would allow us to permute over these states. We already have the method that starts the application, so we just add the logic there to change the state to <code class="literal">started</code>. We also add two additional methods, <code class="literal">pause</code> and <code class="literal">stop</code>, which would pause the timer and change to the corresponding application state:</p> <pre class="programlisting"><code>{` const POMODORO_STATES = {
  WORK: 'work', 
  REST: 'rest' const POMODORO_STATES = { 
  WORK: 'work', 
  REST: 'rest' 
}; 
const STATES = { 
  STARTED: 'started', 
  STOPPED: 'stopped', 
  PAUSED: 'paused' 
}; 
//<...> 
new Vue({ 
  el: '#app', 
  data: { 
    state: STATES.STOPPED, 
    //<...> 
  }, 
  //<...> 
  methods: { 
    start: function () { 
      this.state = STATES.STARTED; 
      this._tick(); 
      this.interval = setInterval(this._tick, 1000); 
    }, 
    pause: function () { 
      this.state = STATES.PAUSED; 
      clearInterval(this.interval); 
    }, 
    stop: function () { 
      this.state = STATES.STOPPED; 
      clearInterval(this.interval);  
      this.pomodoroState = POMODORO_STATES.WORK; 
      this.minute = WORKING_TIME_LENGTH_IN_MINUTES; 
      this.second = 0; 
    }, 
    //<...> 
  } 
}); 
`}</code></pre> <p className="it">Y, vamos a añadír dos botones a nuestro código HTML y añadír los oyentes <code className="literal">click</code> que llaman a los métodos correspondientes:</p> <p className="p">And, let's add two buttons to our HTML code and add the <code class="literal">click</code> listeners that call the corresponding methods:</p> <pre class="programlisting"><code>{` <button :disabled="state==='starte <button :disabled="state==='started'"
@click="start()"> 
      <i class="glyphicon glyphicon-play"></i> 
    </button> 
    <button :disabled="state!=='started'"       
      @click="pause()"> 
      <i class="glyphicon glyphicon-pause"></i> 
    </button> 
    <button :disabled="state!=='started' && state !== 'paused'"      
       @click="stop()"> 
      <i class="glyphicon glyphicon-stop"></i> 
    </button> 
`}</code></pre> <p className="it">Ahora nuestra aplicación se ve bien y nos permite iniciar, pausar y detener el temporizador:</p> <p className="p">Now our application looks nice and allows us to start, pause, and stop the timer:</p> <div class="mediaobject"><img src="/static/image00237.jpeg" width="100%" alt="Keep state with start, pause, and stop buttons"/></div> <p className="it">Alterna arranque, parada, pausa y botones de acuerdo con el estado de la aplicación</p> <p className="p">Toggling start, stop, and pause buttons according to the application state</p> <p className="it">Comproba que todo el código es similar en jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/b6vmtzq1/1/">https://jsfiddle.net/chudaol/b6vmtzq1/1/</a> .</p> <p className="p">Check what the whole code looks like in JSFiddle at <a class="ulink" href="https://jsfiddle.net/chudaol/b6vmtzq1/1/">https://jsfiddle.net/chudaol/b6vmtzq1/1/</a>. </p> <p className="it">Después de tanto trabajo y tantos términos  nuevos conocimientos, sin duda mereces un gatito! También amo a los gatitos, así que aquí tenes un gatito al azar del impresionante sitio <a className="ulink" href="http://thecatapi.com/">http://thecatapi.com/</a> :</p> <p className="p">After so much work and so many of new terms and knowledge, you certainly deserve a kitten! I also love kittens, so here you have a random kitten from the awesome site <a class="ulink" href="http://thecatapi.com/">http://thecatapi.com/</a> :</p> <div class="mediaobject"><img src="/static/image00238.jpeg" width="100%" alt="Keep state with start, pause, and stop buttons"/></div> <div className='col-md-3'></div> </div> </div> </div> </div> <div className='home'> <div className='col-md-3'></div> <div className='col-md-6'> <title>Exercise</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Exercise" id="aid-NQU21"><div className="titlepage"><div><div><h1 className="title"><a id="ch01lvl1sec16"></a>Exercise</h1></div></div></div> <p className="it">Al final de este capítulo, me gustaría proponer un pequeño ejercicio. El temporizador Pomodoro que hemos construido a principios de los capítulos es, sin duda alguna, grande, pero todavía carece de algunas características interesantes. Una cosa muy bonita que podría proporcionar estaría mostrando gatitos al azar de <a className="ulink" href="http://thecatapi.com/">http://thecatapi.com/</a> durante el tiempo de reposo. Se podes aplicar esto? ¡Por supuesto que puede! Pero, por favor, no confundir con el tiempo de trabajo en reposo! Estoy casi seguro de que su jefe de proyecto no le gustará mucho si usted mira fijamente gatitos en lugar de trabajar.</p> <p className="p">At the end of this chapter, I would like to propose a small exercise. The Pomodoro timer that we built earlier in the chapters is, without any doubt, great, but it still lacks some nice features. A really nice thing that it could provide would be showing random kittens from <a class="ulink" href="http://thecatapi.com/">http://thecatapi.com/</a> during resting time. Can you implement this? Of course you can! But please do not confuse resting with working time! I am almost sure that your project manager will not like it much if you stare at kittens instead of working.</p> <p className="it">La solución a este ejercicio se podes encontrar en <a className="link" title="Capítulo 10. Soluciones a los ejercicios" href="part0083.xhtml#aid-2F4UM1">el Apéndice</a> , <span className="emphasis"><em>Soluciones a los ejercicios</em></span> .</p> <p className="p">The solution to this exercise can be found in <a class="link" title="Chapter 10. Solutions to Exercises" href="part0083.xhtml#aid-2F4UM1">Appendix</a>,<span class="emphasis"><em> Solutions to Exercises</em></span>.</p></div> </div> <div className='col-md-3'></div> </div> <div className='home'> <div className='col-md-3'></div> <div className='col-md-6'> <div className="section" title="Summary" id="aid-OPEK1"><div className="titlepage"><div><div><h1 className="title"><a id="ch01lvl1sec17"></a>Summary</h1></div></div></div> <p className="it">Estoy muy contento de que haya llegado a este punto, esto significa que usted ya sabe lo que es Vue.js, y si alguien le pregunta si se trata de una herramienta, una biblioteca, o un framework, que sin duda va a encontrar una respuesta. También sabe cómo iniciar una aplicación utilizando Vue.js y usted sabe cómo utilizar las funciones de Vue en un proyecto ya existente. Usted jugó un poco con algunos proyectos muy buenos que están escritas en Vue.js y comenzó el desarrollo de algunos de su propio! Ahora usted no acaba de ir de compras, ya que ir de compras con una lista de compras creados con el Vue.js! Ahora usted no necesita robar su temporizador de tomate de la cocina para utilizarlo como un temporizador Pomodoro mientras trabaja; usted podes utilizar su propio temporizador digital Pomodoro hecho con Vue.js. Y, por último pero no menos importante, ahora podes insertar gatitos al azar en su aplicación JavaScript utilizando también Vue.js.</p> <p className="p">I am very glad that you have reached this point, this means that you already know what Vue.js is, and if someone asks you whether it is a tool, a library, or a framework, you certainly will find an answer. You also know how to start an application using Vue.js and you know how to use Vue's features in an already existing project. You played around with some really nice projects that are written in Vue.js and you started developing some of your own! Now you do not just go shopping, now you go shopping with a shopping list created by you using Vue.js! Now you don't need to steal your tomato timer from the kitchen to use it as a Pomodoro timer while working; you can use your own digital Pomodoro timer made with Vue.js. And, last but not the least, now you can insert random kittens in your JavaScript application also using Vue.js.</p> <p className="it">En el siguiente capítulo, vamos a cubrir el detrás de cámaras de Vue, cómo y por qué funciona, y los patrones arquitectónicos que utiliza. Cada uno de los conceptos será envuelto con un ejemplo para demostrar la misma. Entonces estaremos listos para poner nuestras manos en el código y para mejorar nuestras aplicaciones llevándolos al estado de pavor.</p> <p className="p">In the next chapter, we will cover the behind the scenes of Vue, how and why does it work, and the architectural patterns it uses. Each of the concepts will be wrapped up with an example to demonstrate it. Then we will be ready to put our hands deep into the code and to improve our applications taking them to the state of awesomeness.</p></div> </div> <div className='col-md-3'></div> </div> </div> </Layout> )