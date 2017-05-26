import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='Preface'>
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


<div className="preface" title="Preface" id="aid-9H5K1"><div className="titlepage"><div><div><h1 className="title"><a id="pref09"></a>Preface</h1></div></div></div><p className="it">Este libro trata sobre Vue.js. Comenzaremos nuestro viaje tratando de entender que es Vue.js, cómo se compara con otros frameworks, y lo que nos permite hacer. Vamos a aprender diferentes aspectos de Vue.js mientras construimos pequeñas aplicaciones divertidas en la parte superior de la misma y la aplicación de estos aspectos en la práctica. Al final, vamos a mirar hacia atrás para ver lo que hemos aprendido y tener una mirada hacia el futuro para ver lo que todavía podemos aprender y hacer. Por lo tanto, aprenderás lo siguiente:</p>

<p className="p">This book is about Vue.js. We will start our journey trying to understand what Vue.js is, how it compares to other frameworks, and what it allows us to do. We will learn different aspects of Vue.js while building small funny applications on top of it and applying these aspects in practice. In the end, we will look back to see what've we learned and have a look into the future to see what we can still learn and do. So, you will learn the following:</p>
<div class="itemizedlist">
<ul className="itemizedlist">

<li className="listit">¿Que es Vue.js y cómo funciona</li>
<li className="listitem">What is Vue.js and how it works</li>

<li className="listit">Reactividad y data binding con Vue.js</li>
<li className="listitem">Reactivity and data binding with Vue.js</li>

<li className="listit">Plugins para Vue.js</li>
<li className="listitem">Plugins for Vue.js</li>


<li className="listit">Componentes reutilizables con Vue.js</li>
<li className="listitem">Reusable components with Vue.js</li>

<li className="listit">Pruebas y despliegue de aplicaciones escritas en Vue.js</li>
<li className="listitem">Testing and deploying applications written in Vue.js</li></ul></div>

<p className="it">Todos los ejemplos de este libro se construyen en la parte superior de la reciente versión 2.0 Vue. El libro también contiene referencias a la versión anterior en relación con aspectos obsoletos o modificados del framework.</p>

<p className="p">All the examples in this book are built on top of the recently released Vue 2.0 version. The book also contains references to the previous version regarding deprecated or changed aspects of the framework.</p>

<p className="it">Estoy seguro de que con este libro disfrutarás el proceso de creación de aplicaciones que utilizan Vue.js.</p>

<p className="p">I am sure you will enjoy the process of building applications using Vue.js with this book.</p>

<div className="section" title="What this book covers"><div className="titlepage"><div><div><h1 className="title"><a id="pf09lvl1sec1"></a>What this book covers</h1></div></div></div>

<p className="it"><a class="link" title="Capítulo 1. ir de compras con Vue.js" href="part0016.xhtml#aid-F8901">Capítulo 1</a> , <span class="emphasis"><em>ir de compras con Vue.js</em></span>, contiene una introducción a Vue.js, a la terminología utilizada a través del libro, y los primeros ejemplos básicos.</p>

<p className="p"><a class="link" title="Chapter 1. Going Shopping with Vue.js" href="part0016.xhtml#aid-F8901">Chapter 1</a>, <span class="emphasis"><em>Going Shopping with Vue.js</em></span>, contains an introduction to Vue.js, to the terminology used through the book, and first basic examples.</p><p className="it"><a class="link" title="Capítulo 2. Fundamentos - Instalación y uso" href="part0027.xhtml#aid-PNV61">Capítulo 2</a>, <span class="emphasis"><em>Fundamentos - Instalación y uso</em></span>, explica el detrás de cámaras de Vue.js, proporciona ideas teóricas en el patrón arquitectónico, toca casi todos los principales conceptos Vue.js, y las aplicaciones que se desarrollarán a través del libro sin ayuda de nadie.</p>

<p className="p"><a class="link" title="Chapter 2. Fundamentals - Installing and Using" href="part0027.xhtml#aid-PNV61">Chapter 2</a>, <span class="emphasis"><em>Fundamentals - Installing and Using</em></span>, explains the behind the scenes of Vue.js, provides theoretical insights into the architectural pattern, touches nearly all the main Vue.js concepts, and bootstraps the applications that will be developed through the book.</p><p className="it"><a class="link" title="Capítulo 3. Componentes - Comprensión y uso" href="part0036.xhtml#aid-12AK81">Capítulo 3</a>, <span class="emphasis"><em>Componentes - Comprensión y uso </em></span>, se adentra en los componentes y explica cómo volver a escribir aplicaciones utilizando un sistema de componentes simples y componentes de un único archivo.</p>

<p className="p"><a class="link" title="Chapter 3. Components - Understanding and Using" href="part0036.xhtml#aid-12AK81">Chapter 3</a>, <span class="emphasis"><em>Components - Understanding and Using
</em></span>, goes deep into components and explains how to rewrite applications using a simple component system and single-file components.</p>

<p className="it"><a class="link" title="Capítulo 4. Reactividad - Enlace de datos a tu aplicación" href="part0046.xhtml#aid-1BRPS1">Capítulo 4</a>, <span class="emphasis"><em>Reactividad - Enlace de datos a tu aplicación </em></span>, contiene una explicación detallada del uso de mecanismos de enlace de datos en Vue.js.</p>

<p className="p"><a class="link" title="Chapter 4. Reactivity - Binding Data to Your Application" href="part0046.xhtml#aid-1BRPS1">Chapter 4</a>, <span class="emphasis"><em>Reactivity - Binding Data to Your Application
</em></span>, contains a detailed explanations of the usage of data binding mechanisms in Vue.js.</p>

<p className="it"><a class="link" title="Capítulo 5. Vuex - Administración del State en tu aplicación" href="part0052.xhtml#aid-1HIT82">Capítulo 5</a>, <span class="emphasis"><em>Vuex - Administración del estado en tu aplicación </em></span>, contiene detallada introducción a Vuex, un sistema de gestión del state de Vue.js, y explica cómo usarlo en tu aplicación con el fin de lograr una buena arquitectura, mantenible.</p>

<p className="p"><a class="link" title="Chapter 5. Vuex - Managing State in Your Application" href="part0052.xhtml#aid-1HIT82">Chapter 5</a>, <span class="emphasis"><em>Vuex - Managing State in Your Application
</em></span>, contains detailed introduction to Vuex, a state management system for Vue.js, and explains how to use it in your application in order to achieve a nice, maintainable architecture.</p><p className="it"><a class="link" title="Capítulo 6. Plugins - Construcción de su casa con sus propios ladrillos" href="part0061.xhtml#aid-1Q5IA1">Capítulo 6</a>, <span class="emphasis"><em>Plugins - Construcción de tu casa con tus propios ladrillos </em></span>, muestra cómo utilizar plugins en aplicaciones Vue y explica cómo utilizar un plugin existente en una aplicación y explica cómo construir nuestro propio plugin y luego usarlo.</p>

<p className="p"><a class="link" title="Chapter 6. Plugins - Building Your House with Your Own Bricks" href="part0061.xhtml#aid-1Q5IA1">Chapter 6</a>, <span class="emphasis"><em>Plugins - Building Your House with Your Own Bricks
</em></span>, shows how to use plugins in Vue applications and explains how to use an existing plugin in an application and explains how to build our own plugin and then use it.</p><p className="it"><a class="link" title="Capítulo 7. Pruebas - Es hora de probar lo que hemos hecho hasta ahora!" href="part0065.xhtml#aid-1TVKI1">Capítulo 7</a>, <span class="emphasis"><em>prueba - Es hora de probar lo que hemos hecho hasta ahora</em></span> , contiene una introducción a las técnicas de prueba que se pueden utilizar en aplicaciones de Vue para llevarlos al nivel necesario de calidad. Abordamos al mostrar cómo escribir pruebas unitarias y cómo desarrollar pruebas de extremo a extremo para las aplicaciones en el libro.</p>

<p className="p"><a class="link" title="Chapter 7. Testing - Time to Test What We Have Done So Far!" href="part0065.xhtml#aid-1TVKI1">Chapter 7</a>, <span class="emphasis"><em>Testing - Time to Test What We Have Done So Far</em></span>, contains an introduction to the testing techniques that can be used in Vue applications to bring them to the needed level of quality. We tackle it by showing how to write unit tests and how to develop end-to-end tests for the applications in the book.</p><p className="it"><a class="link" title="Capítulo 8. Implementación - Hora de ir en vivo!" href="part0073.xhtml#aid-25JP21">Capítulo 8</a>, <span class="emphasis"><em>Implementación - Hora de ir en vivo! </em></span>, Muestra cómo llevar tu aplicación al mundo Vue, garantizando su calidad con herramientas de integración continua. En él se explica cómo conectar un repositorio GitHub al sistema de integración continua y Travis a la plataforma de despliegue en la nube Heroku.</p>

<p className="p"><a class="link" title="Chapter 8. Deploying - Time to Go Live!" href="part0073.xhtml#aid-25JP21">Chapter 8</a>, <span class="emphasis"><em>Deploying - Time to Go Live!</em></span>, shows how to bring your Vue application to the world, guaranteeing its quality with continuous integration tools. It explains how to connect a GitHub repository to the Travis continuous integration system and to the Heroku cloud deployment platform.</p><p className="it"><a class="link" title="Capítulo 9. ¿Qué sigue?" href="part0078.xhtml#aid-2ACBS1">Capítulo 9</a>, <span class="emphasis"><em>lo que sigue</em></span>, envuelve todo lo que se ha hecho hasta ahora y deja al lector con los pasos de seguimiento.</p>

<p className="p"><a class="link" title="Chapter 9. What Is Next?" href="part0078.xhtml#aid-2ACBS1">Chapter 9</a>, <span class="emphasis"><em>What Is Next</em></span>, wraps up everything that has been done so far and leaves the reader with the follow up steps.</p>

<p className="it"><a class="link" href="">Apéndice</a>, <span class="emphasis"><em>Soluciones a los ejercicios</em></span>, ofrece soluciones a los ejercicios para los primeros tres capítulos.</p>

<p className="p"><a class="link" href="">Appendix</a>, <span class="emphasis"><em>Solutions to Exercises</em></span>, provides solutions to the exercises for first three chapters.</p></div></div>

<div className='col-md-3'></div>
  
    </div>
   
  </div>
  <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<head><title>What you need for this book</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/></head><div className="section" title="What you need for this book" id="aid-AFM61"><div className="titlepage"><div><div><h1 className="title"><a id="pf09lvl1sec2"></a>What you need for this book</h1></div></div></div><p className="p">The requirements for this book are the following:</p><div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">Computer with an Internet connection</li><li className="listitem">Text editor/IDE</li><li className="listitem">Node.js</li></ul></div></div>

<div className='col-md-3'></div>
  
    </div>
   
  </div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>


<title>Who this book is for</title><div className="section" title="Who this book is for" id="aid-BE6O1"><div className="titlepage"><div><div>

<h1 className="title"><a id="pf09lvl1sec3"></a>Who this book is for</h1></div></div></div>


<p className="it">Este libro es para los desarrolladores web o para las personas que quieren convertirse en desarrolladores web. Ya sea que acabas de comenzar a trabajar con tecnologías web o si ya sos un gurú de los frameworks y lenguajes en el vasto océano de las tecnologías web, este libro te podes mostrar algo nuevo en el mundo de las aplicaciones web reactivas. Si sos un desarrollador Vue y has utilizado Vue 1.0, este libro podría ser una guía útil para migrar a Vue 2.0, ya que todos los ejemplos del libro se basan en Vue 2.0. Incluso si ya estás usando Vue 2.0, este libro podría ser un buen ejercicio de construcción de una aplicación desde cero, aplicando todos los conceptos de ingeniería de software Vue y llevarlo a la etapa de implementación.</p>

<p className="p">This book is for web developers or for people who want to become web developers. Whether you have just started to work with web technologies or you are already a guru of frameworks and languages in the vast ocean of web technologies, this book might show you something new in the world of reactive web applications. If you are a Vue developer and have used Vue 1.0, this book might be a useful guide for you to migrate to Vue 2.0, since all the examples of the book are based on Vue 2.0. Even if you are already using Vue 2.0, this book might be a nice exercise of building an application from scratch, applying all Vue and software engineering concepts and taking it to the deployment stage.</p>

<p className="it">Al menos se requiere cierta formación técnica. Si ya podes escribir código en JavaScript, es una gran ventaja.</p>

<p className="p">At least some technical background is required. If you can already write code in JavaScript, it is a huge plus.</p>
</div>

<div className='col-md-3'></div>
  
    </div>
   
  </div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Conventions</title><div className="section" title="Conventions"><div className="titlepage"><div><div><h1 className="title"><a id="pf09lvl1sec4"></a>Conventions</h1></div></div></div>

<p className="it">En este libro, encontrarás una serie de estilos de texto que distinguen entre diferentes tipos de información. Estos son algunos ejemplos de estos estilos y una explicación de su significado.</p>

<p className="p">In this book, you will find a number of text styles that distinguish between different kinds of information. Here are some examples of these styles and an explanation of their meaning.</p>

<p className="it">Las palabras de código en el texto, nombres de tabla de base de datos, nombres de carpeta, nombres de archivo, extensiones de archivo, nombres de ruta, URL ficticias, la entrada del usuario, y las manijas de Twitter se muestran como sigue: "Tu lector debe proporcionar un método <code className="literal">install</code>".</p>

<p className="p">Code words in text, database table names, folder names, filenames, file extensions, pathnames, dummy URLs, user input, and Twitter handles are shown as follows: "Your plugin must provide an <code class="literal">install</code> method."</p>

<p className="it">Un bloque de código se establece como sigue:</p>

<p className="p">A block of code is set as follows:</p>
<pre class="programlisting"><code>{`export default {
  components: {
    ShoppingListComponent,
    ShoppingListTitleComponent
  },
  computed: mapGetters({
    shoppinglists: 'getLists'
  })
}`}</code></pre>

<p className="it">Cuando deseamos llamar tu atención sobre una parte específica de un bloque de código, las líneas o los artículos pertinentes se establecen en negrita:</p>

<p className="p">When we wish to draw your attention to a particular part of a code block, the relevant lines or items are set in bold:</p>

<pre class="programlisting"><code>{`export default {
  components: {
    ShoppingListComponent,
    ShoppingListTitleComponent
  },
  computed: mapGetters({
    shoppinglists: 'getLists'
  }),
  methods: mapActions(['populateShoppingLists']),
  store,
  mounted () {this.populateShoppingLists()}
}`}</code></pre>

<p className="it">Cualquier entrada o salida de línea de comandos se escribe como sigue:</p>

<p className="p">Any command-line input or output is written as follows:</p>

<pre class="programlisting"><code>{`
cd shopping-list
npm install vue-resource --save-dev
`}</code></pre>

<p className="it"><span className="strong"><strong>Los nuevos términos</strong></span> y<span className="strong"><strong> palabras importantes</strong></span> se muestran en negrita. Palabras que se ven en la pantalla, por ejemplo, en los menús y cuadros de diálogo, aparecen en el texto así: "Comproba la casilla de verificación <strong className="userinput"><code>Developer mode</code></strong>".</p>

<p className="p">
<span class="strong"><strong>New terms </strong></span>and <span class="strong"><strong>important words </strong></span>are shown in bold. Words that you see on the screen, for example, in menus or dialog boxes, appear in the text like this: "Check the <strong class="userinput"><code>Developer mode</code></strong> checkbox."</p>
<div class="note" title="Note"><h3 class="title"><a id="note1"></a>Note</h3>

<p className="it">Las advertencias o notas importantes aparecen en un cuadro como este.</p>

<p className="p">Warnings or important notes appear in a box like this.</p>
</div><div class="note" title="Note"><h3 class="title"><a id="tip2"></a>Tip</h3>

<p className="it">Los consejos y trucos aparecen así.</p>

<p className="p">Tips and tricks appear like this.</p></div></div>

<div className='col-md-3'></div>
  
    </div>
   
  </div>
  <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Reader feedback</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/>

<div className="section" title="Reader feedback" id="aid-DB7S1">
<div className="titlepage">

<h1 className="title"><a id="pf09lvl1sec5"></a>Reader feedback</h1>
</div>  
    
  </div>

<p className="p">Feedback from our readers is always welcome. Let us know what you think about this book-what you liked or disliked. Reader feedback is important for us as it helps us develop titles that you will really get the most out of.
To send us general feedback, simply e-mail feedback@packtpub.com, and mention the book's title in the subject of your message.
If there is a topic that you have expertise in and you are interested in either writing or contributing to a book, see our author guide at <a class="ulink" href="http://www.packtpub.com/authors">www.packtpub.com/authors</a>.</p>


</div>

<div className='col-md-3'></div>
  
  </div>  

  <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<div className="section" title="Customer support" id="aid-E9OE1"><div className="titlepage"><div><div><h1 className="title"><a id="pf09lvl1sec6"></a>Customer support</h1></div></div></div>

<p className="it">Ahora que sos el orgulloso propietario de un libro Packt, tenemos una serie de cosas para ayudarte a obtener el máximo provecho de tu compra.</p>

<p className="p">Now that you are the proud owner of a Packt book, we have a number of things to help you to get the most from your purchase.</p>

<div className="section" title="Downloading the example code"><div className="titlepage"><div><div><h2 class="title"><a id="pf09lvl2sec1"></a>Downloading the example code</h2>
</div></div></div>

<p className="it">Podes descargar los archivos de código de ejemplo para este libro de tu cuenta al <a className="ulink" href="http://www.packtpub.com">http://www.packtpub.com</a>. Si has adquirido este libro en otra parte, se podes visitar <a className="ulink" href="http://www.packtpub.com/support">http://www.packtpub.com/support</a> y registrarse para tener los archivos enviados por correo electrónico directamente a vos.</p>

<p className="p">You can download the example code files for this book from your account at <a class="ulink" href="http://www.packtpub.com">http://www.packtpub.com</a>. If you purchased this book elsewhere, you can visit <a class="ulink" href="http://www.packtpub.com/support">http://www.packtpub.com/support</a> and register to have the files e-mailed directly to you.</p>

<p className="it">Podes descargar los archivos de código siguiendo estos pasos:</p>

<p className="p">You can download the code files by following these steps:</p>

<div class="orderedlist">
<ol class="orderedlist arabic">

<li className="listit">Inicia sesión o registrase en nuestro sitio web utilizando tu dirección de correo electrónico y la contraseña.</li>

<li className="listitem">Log in or register to our website using your e-mail address and password.</li>

<li className="listit">Pasar el puntero del ratón sobre la <strong className="userinput"><code>SUPPORT</code></strong>pestaña en la parte superior.</li>

<li className="listitem">Hover the mouse pointer on the <strong class="userinput"><code>SUPPORT</code></strong> tab at the top.</li>

<li className="listit">Hacer clic en <strong className="userinput"><code>Code Downloads &amp; Errata</code></strong>.</li>

<li className="listitem">Click on <strong class="userinput"><code>Code Downloads &amp; Errata</code></strong>.</li>

<li className="listit">Introduzca el nombre del libro en el <strong className="userinput"><code>Search</code></strong>cuadro.</li>

<li className="listitem">Enter the name of the book in the <strong class="userinput"><code>Search</code></strong> box.</li>

<li className="listit">Seleccione el libro para el que sos tá buscando para descargar los archivos de código.</li>

<li className="listitem">Select the book for which you're looking to download the code files.</li>

<li className="listit">Seleccione en el menú desplegable en el que adquirió este libro de.</li>

<li className="listitem">Choose from the drop-down menu where you purchased this book from.</li>

<li className="listit">Haga clic en <strong className="userinput"><code>Code Download</code></strong>.</li>

<li className="listitem">Click on <strong class="userinput"><code>Code Download</code></strong>.</li>

</ol>


</div>

<p className="it">Una vez descargado el archivo, por favor asegurate de que descomprimir o extraer la carpeta utilizando la última versión de:</p>

<p className="p">Once the file is downloaded, please make sure that you unzip or extract the folder using the latest version of:</p>


<div class="itemizedlist">
<ul className="itemizedlist">

<li className="listitem">WinRAR / 7-Zip for Windows</li>

<li className="listitem">Zipeg / iZip / UnRarX for Mac</li>

<li className="listitem">7-Zip / PeaZip for Linux</li>


</ul>
</div>

<p className="it">El paquete de código para el libro también está alojado en GitHub en <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2">https://github.com/PacktPublishing/Learning-Vue.js-2</a> . También tenemos otros paquetes de código de nuestro rico catálogo de libros y videos disponibles en <a className="ulink" href="https://github.com/PacktPublishing/">https://github.com/PacktPublishing/</a> . Comprobar a cabo!</p>

<p className="p">The code bundle for the book is also hosted on GitHub at <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2">https://github.com/PacktPublishing/Learning-Vue.js-2</a>. We also have other code bundles from our rich catalog of books and videos available at <a class="ulink" href="https://github.com/PacktPublishing/">https://github.com/PacktPublishing/</a>. Check them out!</p>

</div><div className="section" title="Errata"><div className="titlepage"><div><div><h2 class="title"><a id="pf09lvl2sec2"></a>Errata</h2></div></div></div>

<p className="it">Aunque hemos tomado todas las precauciones para asegurar la exactitud de nuestro contenido, los errores ocurren. Si encuentra un error en uno de nuestros libros, tal vez un error en el texto o el código-estaríamos agradecidos si pudiera informar de esto a nosotros. Al hacerlo, podes ahorrar otros lectores de la frustración y ayudar a mejorar las versiones posteriores de este libro. Si encuentra alguna errata, por favor informe al visitar <a className="ulink" href="http://www.packtpub.com/submit-errata">http://www.packtpub.com/submit-errata</a> , la selección de su libro, hacer clic en el <strong className="userinput"><code>Errata Submission Form</code></strong>enlace, y entrar en los detalles de su fe de erratas. Una vez que su fe de erratas se verifican, su presentación será aceptado y la fe de erratas se cargará en nuestra página web o añadí a cualquier fe de erratas existentes en la sección de erratas de ese título.</p>

<p className="p">Although we have taken every care to ensure the accuracy of our content, mistakes do happen. If you find a mistake in one of our books-maybe a mistake in the text or the code-we would be grateful if you could report this to us. By doing so, you can save other readers from frustration and help us improve subsequent versions of this book. If you find any errata, please report them by visiting <a class="ulink" href="http://www.packtpub.com/submit-errata">http://www.packtpub.com/submit-errata</a>, selecting your book, clicking on the <strong class="userinput"><code>Errata Submission Form</code></strong> link, and entering the details of your errata. Once your errata are verified, your submission will be accepted and the errata will be uploaded to our website or added to any list of existing errata under the Errata section of that title.</p>

<p className="it">Para ver la fe de erratas presentada anteriormente, vaya a <a className="ulink" href="https://www.packtpub.com/books/content/support">https://www.packtpub.com/books/content/support</a> y escriba el nombre del libro en el campo de búsqueda. La información requerida aparecerá bajo la <strong className="userinput"><code>Errata</code></strong>sección.</p>

<p className="p">To view the previously submitted errata, go to <a class="ulink" href="https://www.packtpub.com/books/content/support">https://www.packtpub.com/books/content/support</a> and enter the name of the book in the search field. The required information will appear under the <strong class="userinput"><code>Errata</code></strong> section.</p>

</div><div className="section" title="Piracy"><div className="titlepage"><div><div><h2 class="title"><a id="pf09lvl2sec3"></a>Piracy</h2></div></div></div>

<p className="it">La piratería de material con copyright en Internet es un problema constante en todos los medios. En Packt, tomamos la protección de nuestros derechos de autor y licencias muy en serio. Si te encontras  con todas las copias ilegales de nuestros trabajos en cualquier forma en Internet, por favor nos proporcione la dirección de ubicación o el nombre del sitio web inmediatamente para que podamos presentar un recurso.</p>

<p className="p">Piracy of copyrighted material on the Internet is an ongoing problem across all media. At Packt, we take the protection of our copyright and licenses very seriously. If you come across any illegal copies of our works in any form on the Internet, please provide us with the location address or website name immediately so that we can pursue a remedy.</p>

<p className="it">Por favor, ponete  en contacto con nosotros en copyright@packtpub.com con un enlace a la sospecha de material pirateado.</p>

<p className="p">Please contact us at copyright@packtpub.com with a link to the suspected pirated material.</p>

<p className="it">Apreciamos tu ayuda en la protección de nuestros autores y nuestra capacidad para lograr contenido valioso.</p>

<p className="p">We appreciate your help in protecting our authors and our ability to bring you valuable content.</p>

</div><div className="section" title="Questions"><div className="titlepage"><div><div><h2 class="title"><a id="pf09lvl2sec4"></a>Questions</h2></div></div></div>

<p className="it">Si tenes un problema con cualquier aspecto de este libro, podes ponerte  en contacto con nosotros en questions@packtpub.com, y nosotros haremos nuestro mejor esfuerzo para resolver el problema.</p>

<p className="p">If you have a problem with any aspect of this book, you can contact us at questions@packtpub.com, and we will do our best to address the problem.</p>

</div></div>

</div>

<div className='col-md-3'></div>
  
  </div>  
   
  </div>
  </Layout>
)






