import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch69'>
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

<title>Chapter 9. What Is Next?</title><div class="chapter" title="Chapter 9. What Is Next?" id="aid-2ACBS1"><div className="titlepage"><div><div><h1 className="title"><a id="ch09"></a>Chapter 9. What Is Next?</h1></div></div></div>

<p className="it">En el capítulo anterior, hicimos nuestras aplicaciones van en directo mediante el despliegue en un servidor y hacerlas disponibles para el mundo. También hemos garantizado la integración continua y el despliegue continuo de nuestras aplicaciones. Esto significa que cada vez que confirma los cambios realizados en las aplicaciones, que será automáticamente probada y desplegada.</p>


<p className="p">In the previous chapter, we made our applications go live by deploying them to a server and making them available to the world. We have also guaranteed continuous integration and continuous deployment of our applications. This means that every time we commit changes performed on the applications, they will automatically be tested and deployed.</p>

<p className="it">Parece que nuestro viaje en este libro ha terminado. Pero, de hecho, se ha hecho más que empezar. Después de todo lo que hemos descubierto y aprendido, todavía hay mucho que hacer! En este capítulo, vamos a terminar todo lo que hemos aprendido hasta ahora y ver lo que nos queda por aprender y qué cosas agradables que todavía podemos hacer para alcanzar el nivel de grandeza de nuestras aplicaciones. Por lo tanto, en este capítulo, vamos a hacer lo siguiente:</p>


<p className="p">It seems that our journey in this book has finished. But, in fact, it has just started. After all we have discovered and learned, there is still so much to do! In this chapter, we will wrap up everything we have learned so far and see what we still have to learn and what nice things we still can do to reach the level of awesomeness of our applications. So, in this chapter, we will do the following:</p>


<div class="itemizedlist"><ul className="itemizedlist">


<li className="listit">Envolver todo lo que hemos aprendido hasta ahora</li>
<li className="listitem">Wrap up everything we have learned so far</li>

<li className="listit">Haga una lista de seguimiento de las cosas</li>
<li className="listitem">Make a list of follow up things</li></ul></div><div className="section" title="The journey so far"><div className="titlepage"><div><div><h1 className="title"><a id="ch09lvl1sec70"></a>The journey so far</h1></div></div></div>

<p className="it">Hemos estado en un gran viaje hasta ahora, y es el momento de resumir lo que hemos hecho y lo que hemos aprendido.</p>


<p className="p">We have been on a big journey so far, and it's time to sum up what we have done and what we have learned.</p>

<p className="it">En <a className="link" title="Capítulo 1. ir de compras con Vue.js" href="part0016.xhtml#aid-F8901">el capítulo 1</a> , <span className="emphasis"><em>ir de compras con Vue.js</em></span> , tuvimos nuestra primera cita con Vue.js. Hablamos de lo Vue.js es, cómo se creó, y lo que hace y vimos algunos ejemplos básicos.</p>


<p className="p">In <a class="link" title="Chapter 1. Going Shopping with Vue.js" href="part0016.xhtml#aid-F8901">Chapter 1</a>, <span class="emphasis"><em>Going Shopping with Vue.js</em></span>, we had our first date with Vue.js. We talked about what Vue.js is, how it was created, and what it does and saw some basic examples.</p>

<p className="it">En <a className="link" title="Capítulo 2. Fundamentos - Instalación y uso" href="part0027.xhtml#aid-PNV61">el capítulo 2</a> , <span className="emphasis"><em>Fundamentos - Instalación y uso</em></span> , que se internó en los bastidores de Vue.js. Hemos aprendido acerca de patrón arquitectónico MVVM, hemos visto cómo funciona Vue.js, y tocado diferentes aspectos de Vue.js tales como <span className="emphasis"><em>componentes</em></span> , <span className="emphasis"><em>directivas</em></span> , <span className="emphasis"><em>plugins</em></span> , y la aplicación <span className="emphasis"><em>del estado</em></span> . Hemos aprendido diferentes formas de instalar Vue.js, a partir del uso de un simple script compilado independiente, pasando por el uso de la versión de CDN, la versión de la NGP, y yendo hacia el uso de la versión de desarrollo de Vue.js poder no sólo utilizarlo sino que también contribuyen a su base de código. Hemos aprendido cómo depurar y cómo andamio aplicación Vue.js usando <code className="literal">Vue-cli</code>. Incluso hemos creado una aplicación de Chrome realmente simple usando la versión CSP-compatible de Vue.</p>


<p className="p">In <a class="link" title="Chapter 2. Fundamentals - Installing and Using" href="part0027.xhtml#aid-PNV61">Chapter 2</a>, <span class="emphasis"><em>Fundamentals - Installing and Using</em></span>, we went deep into behind the scenes of Vue.js. We learned about MVVM architectural pattern, we saw how does Vue.js work, and we touched different aspects of Vue.js such as <span class="emphasis"><em>components</em></span>, <span class="emphasis"><em>directives</em></span>, <span class="emphasis"><em>plugins</em></span>, and application <span class="emphasis"><em>state</em></span>. We learned different ways of installing Vue.js, starting from using a simple standalone compiled script, passing by using the CDN version, NPM version, and going toward using the development version of Vue.js being able to not only use it but also contribute to its codebase . We learned how to debug and how to scaffold Vue.js application using <code class="literal">Vue-cli</code>. We have even created a really simple Chrome application using CSP-compliant version of Vue.</p>


<p className="it">En <a className="link" title="Capítulo 3. Componentes - Comprensión y uso" href="part0036.xhtml#aid-12AK81">el capítulo 3</a> , <span className="emphasis"><em>Componentes - Comprensión y uso</em></span> , ponemos nuestras manos en el interior profundo del sistema del componente. Hemos aprendido cómo definir los componentes Vue, cómo funciona el alcance del componente, y cómo los componentes se relacionan entre sí, y que empezamos a utilizar componentes de un único archivo en las aplicaciones que hemos bootstrap antes.</p>


<p className="p">In <a class="link" title="Chapter 3. Components - Understanding and Using" href="part0036.xhtml#aid-12AK81">Chapter 3</a>, <span class="emphasis"><em>Components - Understanding and Using</em></span>, we put our hands deep inside the component's system. We learned how to define Vue components, how component's scope works, and how do components relate to each other, and we started using single-file components in the applications that we have bootstrapped before.</p>


<p className="it">En <a className="link" title="Capítulo 4. Reactividad - Enlace de datos a su aplicación" href="part0046.xhtml#aid-1BRPS1">el Capítulo 4</a> , <span className="emphasis"><em>Reactividad - Enlace de datos a su aplicación</em></span> , que se internó en el enlace de datos y la reactividad con Vue.js. Hemos aprendido cómo utilizar directivas, expresiones y filtros. Trajimos se unían a las aplicaciones desarrolladas en los capítulos iniciales de datos y las han interactiva, gracias a la reactividad de la moda Vue.js.</p>


<p className="p">In <a class="link" title="Chapter 4. Reactivity - Binding Data to Your Application" href="part0046.xhtml#aid-1BRPS1">Chapter 4</a>, <span class="emphasis"><em>Reactivity - Binding Data to Your Application</em></span>, we went deep into data binding and reactivity with Vue.js. We learned how to use directives, expressions, and filters. We brought data binding to the applications developed in the initial chapters and made them interactive, thanks to the reactivity fashion of Vue.js.</p>

<p className="it">En <a className="link" title="Capítulo 5. Vuex - Administración del estado en su aplicación" href="part0052.xhtml#aid-1HIT82">el capítulo 5</a> , <span className="emphasis"><em>Vuex - Administración del estado en su aplicación</em></span> , hemos aprendido cómo administrar el estado global en aplicaciones Vue utilizando el sistema de la tienda Vuex. Hemos aprendido cómo usar estado, acciones, captadores y mutaciones con el fin de crear una estructura de aplicación modular y agradable donde los componentes pueden comunicarse fácilmente entre sí. Hemos aplicado este nuevo conocimiento en nuestras aplicaciones que hemos desarrollado hasta ahora en los capítulos anteriores.</p>


<p className="p">In <a class="link" title="Chapter 5. Vuex - Managing State in Your Application" href="part0052.xhtml#aid-1HIT82">Chapter 5</a>, <span class="emphasis"><em>Vuex - Managing State in Your Application</em></span>, we learned how to manage global state in Vue applications using the Vuex store system. We learned how to use state, actions, getters, and mutations in order to create a modular and nice application structure where the components can easily communicate with each other. We applied this new knowledge in our applications that we developed so far in the previous chapters.</p>


<p className="it">En <a className="link" title="Capítulo 6. Plugins - Construcción de su casa con sus propios ladrillos" href="part0061.xhtml#aid-1Q5IA1">el capítulo 6</a> , <span className="emphasis"><em>Plugins - Construcción de su casa con sus propios ladrillos</em></span> , que aprendió plugins Vue cooperar con las aplicaciones de Vue. Hemos utilizado un plugin existente, <code className="literal">vue-resource</code> que nos ayudó a guardar el estado de la aplicación entre el navegador se actualiza. También hemos creado nuestro propio plug-in para aplicaciones de Vue que produce blanco, marrón, rosa y ruidos. En este punto, tuvimos aplicaciones totalmente funcionales con bastante buen conjunto de características de trabajo.</p>


<p className="p">In <a class="link" title="Chapter 6. Plugins - Building Your House with Your Own Bricks" href="part0061.xhtml#aid-1Q5IA1">Chapter 6</a>, <span class="emphasis"><em>Plugins - Building Your House with Your Own Bricks</em></span>, we learned how Vue plugins cooperate with Vue applications. We used an existing plugin, <code class="literal">vue-resource</code>, which helped us to save the application's state between browser refreshes. We also created our own plugin for Vue applications that produces white, brown, and pink noises. At this point, we had fully functional applications with a quite nice set of working features.</p>


<p className="it">En <a className="link" title="Capítulo 7. Pruebas - Es hora de probar lo que hemos hecho hasta ahora!" href="part0065.xhtml#aid-1TVKI1">el capítulo 7</a> , <span className="emphasis"><em>prueba - Es hora de probar lo que hemos hecho hasta ahora! </em></span>, Hemos aprendido cómo poner a prueba nuestras aplicaciones Vue. Hemos aprendido a escribir las pruebas unitarias y cómo crear y ejecutar pruebas de extremo a extremo con conductor selenio. Hemos aprendido lo que es el código de cubierta y la forma de las respuestas del servidor falso en las pruebas unitarias. Hemos cubierto casi el 100% de nuestro código con las pruebas unitarias y vimos el conductor selenio en acción el funcionamiento de nuestras pruebas de extremo a extremo.</p>


<p className="p">In <a class="link" title="Chapter 7. Testing - Time to Test What We Have Done So Far!" href="part0065.xhtml#aid-1TVKI1">Chapter 7</a>, <span class="emphasis"><em>Testing - Time to Test What We Have Done So Far!</em></span>, we learned how to test our Vue applications. We learned how to write unit tests and how to create and run end-to-end tests with Selenium driver. We learned what code coverage is and how to fake server responses in unit tests. We covered almost 100% of our code with unit tests and we saw the Selenium driver in action running our end-to-end tests.</p>


<p className="it">En <a className="link" title="Capítulo 8. Implementación - Hora de ir en vivo!" href="part0073.xhtml#aid-25JP21">el capítulo 8</a> , <span className="emphasis"><em>Implementación - Hora de ir en vivo! </em></span>, Por fin exponemos nuestras aplicaciones a todo el mundo. Les desplegado en el sistema de nube Heroku y ahora se podes acceder desde todas partes donde existe la Internet. Más que eso, hicimos nuestro proceso de implementación totalmente automatizada. Cada vez que empujamos cambio de código en la <code className="literal">master</code> rama, la aplicación se implementa! Incluso más que eso. No sólo se despliegan en cada empuje, pero también probaron automáticamente con el sistema de integración continua Travis.</p>


<p className="p">In <a class="link" title="Chapter 8. Deploying - Time to Go Live!" href="part0073.xhtml#aid-25JP21">Chapter 8</a>, <span class="emphasis"><em>Deploying - Time to Go Live!</em></span>, we finally exposed our applications to the whole world. We deployed them to the Heroku cloud system and now they can be accessed from everywhere where the Internet exists. More than that, we made our deployment process completely automated. Each time we push code changes to the <code class="literal">master</code> branch, the application is deployed! Even more than that. They are not only deployed on each push, but also automatically tested with the Travis continuous integration system.</p>


<p className="it">Por lo tanto, en este libro, hemos aprendido no sólo un nuevo framework. Aplicamos nuestros conocimientos para desarrollar dos aplicaciones sencillas pero agradable, a partir de cero. Se aplicaron los conceptos más importantes de la Vue para hacer nuestras aplicaciones reactiva, rápido, fácil de mantener, y comprobable. Sin embargo, este no es el final. Durante la redacción de este libro, Vue 2.0 ha sido lanzado. Trae algunas nuevas posibilidades y algunas cosas nuevas para aprender y utilizar.</p>


<p className="p">Thus, in this book, we haven't just learned a new framework. We applied our knowledge to develop two simple, yet nice applications from scratch. We applied the most important Vue's concepts to make our applications reactive, fast, maintainable, and testable. However, this is not the end. During the writing of this book, Vue 2.0 has been launched. It brings some new possibilities and some new things to learn and use.</p>


</div></div>

</div>
</div>
<div className='col-md-3'></div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Vue 2.0</title><div className="section" title="Vue 2.0" id="aid-2BASE1"><div className="titlepage"><div><div><h1 className="title"><a id="ch09lvl1sec71"></a>Vue 2.0</h1></div></div></div>


<p className="it">Vue 2.0 lanzado en el 30 de septiembre de 2016. Confirmar este puesto de Evan You en <a className="ulink" href="https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.ifpgtjlek">https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.ifpgtjlek</a> .</p>


<p className="p">Vue 2.0 launched on the September 30, 2016. Check out this post of Evan You at 
<a class="ulink" href="https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.ifpgtjlek">https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.ifpgtjlek</a>
.</p>


<p className="it">A través de este libro, se utilizó la versión más reciente; Sin embargo, he intentado hacer referencia a la forma de hacer las cosas en la primera generación del Vue siempre que fuera necesario. En realidad, la API es casi el mismo; hay algunos ligeros cambios, algunos atributos desaprobados, pero toda la interfaz proporcionada al usuario final se mantiene casi intacta.</p>


<p className="p">Across this book, we used the newest version; however, I tried to reference the way of doing things in the first generation of Vue whenever it was necessary. Actually, the API is almost the same; there are some slight changes, some deprecated attributes, but the whole interface provided to the final user remains almost untouched.</p>


<p className="it">Sin embargo, fue casi reescrito desde cero! Por supuesto, hay algunas partes del código que eran casi el 100% reutilizado, pero en general, fue un importante refactor y algunos de los conceptos se han cambiado por completo. Por ejemplo, la capa de representación fue completamente reescrito. Si, antes, el motor de renderizado utilizaba el verdadero DOM, ahora se utiliza una estructura DOM virtuales ligero (<a className="ulink" href="https://github.com/snabbdom/snabbdom">https://github.com/snabbdom/snabbdom</a> ). Su rendimiento supera todo! Echa un vistazo a la cifra de referencia en lo siguiente:</p>


<p className="p">Nevertheless, it was almost rewritten from scratch! Of course, there are some parts of code that were almost 100% reused, but overall, it was a major refactor and some of the concepts were completely changed. For example, the rendering layer was completely rewritten. If, earlier, the rendering engine was using the real DOM, now it uses a lightweight virtual DOM structure (
<a class="ulink" href="https://github.com/snabbdom/snabbdom">https://github.com/snabbdom/snabbdom</a>
). Its performance beats everything! Check out the benchmark figure in the following:</p>


<div class="mediaobject"><img src="/static/image00332.jpeg" width="100%" alt="Vue 2.0"/></div>

<p className="it">referencia de rendimiento (cuanto más bajo es mejor) tomado de https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.fjxegtv98</p>


<p className="p">Performance benchmark (the lower is better) taken from https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.fjxegtv98</p>

<p className="it">Hay otro punto interesante en esta nueva versión. Si ya ha utilizado la primera generación de Vue, y leer sobre él y escuchar a los podcasts, usted probablemente sabe que una de las principales diferencias entre, digamos, Vue y reaccionar fue Reaccionar nativo (el framework que nos permite construir aplicaciones nativas basado en React). Evan Siempre afirmaba que Vue era sólo una pequeña capa de interfaces web. Ahora, tenemos la emergente <span className="strong"><strong>weex</strong></span> , un framework que hace que los componentes de inspiración Vue en aplicaciones nativas (<a className="ulink" href="https://github.com/alibaba/weex">https://github.com/alibaba/weex</a> ). De acuerdo con Evan Usted, muy pronto, "Vue-inspirado" se convertirá en "Vue-powered"! Solo esperalo. Sólo permanece atento. Me gustaría recomendar este sorprendente de podcast completo panel de radio, donde Evan Usted habla de la nueva versión de Vue: <a className="ulink" href="http://www.fullstackradio.com/50">http://www.fullstackradio.com/50</a> .</p>


<p className="p">There is another interesting point in this new version. If you have already used the first generation of Vue, and read about it and listened to podcasts, you probably know that one of the major differences between, let's say, Vue and React was React Native (the framework that allows us to build native apps based on React). Evan You was always claiming that Vue was just a tiny layer for web interfaces. Now, we have the emerging <span class="strong"><strong>Weex</strong></span>, a framework that renders Vue-inspired components into native apps (
<a class="ulink" href="https://github.com/alibaba/weex">https://github.com/alibaba/weex</a>
). According to Evan You, very soon, "Vue-inspired" will become "Vue-powered"! Just wait for it. Just stay tuned. I would like to recommend this amazing Full Stack Radio podcast, where Evan You talks about the new version of Vue: 
<a class="ulink" href="http://www.fullstackradio.com/50">http://www.fullstackradio.com/50</a>
.</p>

<div class="blockquote"><blockquote class="blockquote">


<p className="it"> <span className="emphasis"><em>Vue ha evolucionado mucho desde sus humildes comienzos como un proyecto paralelo. Hoy en día es financiado por la comunidad, ampliamente adoptado en el mundo real, y cuenta con una de las tendencias más fuertes de crecimiento entre todas las bibliotecas de JavaScript de acuerdo con stats.js.org. Creemos 2.0 va a empujar aún más. Es la mayor actualización de Vue desde su creación, y estamos muy contentos de ver lo que se construye con ella. - <span className="emphasis"><em>Evan Usted</em></span> , https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.fjxegtv98)</em></span> </p>

<p className="p">
<span class="emphasis"><em>Vue has evolved a lot since its humble beginning as a side project. Today it is community funded, widely adopted in the real world, and boasts one of the strongest growth trends among all JavaScript libraries according to stats.js.org. We believe 2.0 is going to push it even further. It's the biggest update to Vue since its inception, and we are excited to see what you build with it.
- <span class="emphasis"><em>Evan You</em></span>, https://medium.com/the-vue-point/vue-2-0-is-here-ef1f26acf4b8#.fjxegtv98)</em></span>
</p>

</blockquote></div>

<p className="it">Con esto en mente, si viene desde el Vue 1.0 generación, no va a ser difícil para que usted pueda actualizar sus aplicaciones. Comproba la guía de migración, <a className="ulink" href="http://vuejs.org/guide/migration.html">http://vuejs.org/guide/migration.html</a> , instalar el ayudante de la migración, <a className="ulink" href="https://github.com/vuejs/vue-migration-helper">https://github.com/vuejs/vue-migration-helper</a> , aplicar todos los cambios necesarios, y ver cómo sus aplicaciones realizar después de eso.</p>


<p className="p">With this in mind, if you are coming from the Vue 1.0 generation, it will not be hard for you to upgrade your applications. Check the migration guide, 
<a class="ulink" href="http://vuejs.org/guide/migration.html">http://vuejs.org/guide/migration.html</a>
, install the migration helper, 
<a class="ulink" href="https://github.com/vuejs/vue-migration-helper">https://github.com/vuejs/vue-migration-helper</a>
, apply all needed changes, and see how your applications perform after that.</p>

</div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Revisiting our applications</title><div className="section" title="Revisiting our applications" id="aid-2C9D01"><div className="titlepage"><div><div><h1 className="title"><a id="ch09lvl1sec72"></a>Revisiting our applications</h1></div></div></div>

<p className="it">Vamos a ver de nuevo lo que hemos hecho hasta ahora. Hemos desarrollado dos aplicaciones que utilizan Vue.js. Volvamos a ellos.</p>

<p className="p">Let's check again what have we done so far. We have developed two applications using Vue.js. Let's revisit them.</p>


<div className="section" title="Shopping list application"><div className="titlepage"><div><div><h2 class="title"><a id="ch09lvl2sec83"></a>Shopping list application</h2></div></div></div>

<p className="it">La aplicación de lista de la compra que hemos desarrollado en los capítulos de este libro es una aplicación web que permite lo siguiente:</p>

<p className="p">The shopping list application that we have developed in this book's chapters is a web application that allows the following:</p>

F
<div class="itemizedlist"><ul className="itemizedlist">

<li className="listit">Creá diferentes listas de compras</li>

<li className="listitem">Create different shopping lists</li><li className="listit">Añadir nuevos elementos a las listas de la compra y comprobar ellos una vez que se compran</li>

<li className="listitem">Add new items to the shopping lists and check them once they are bought</li><li className="listit">Cambiar el nombre de las listas de compras y eliminarlos</li>

<li className="listitem">Rename shopping lists and remove them</li></ul></div>
<p className="it">Nuestra aplicación de la lista de compras reside en el Heroku plataforma en la nube: <a className="ulink" href="https://shopping-list-vue.herokuapp.com/">https://shopping-list-vue.herokuapp.com/</a> .</p>

<p className="p">Our shopping list application resides on the Heroku cloud platform: 
<a class="ulink" href="https://shopping-list-vue.herokuapp.com/">https://shopping-list-vue.herokuapp.com/</a>
.</p>



<p className="it">Su código te encontras  alojado en GitHub: <a className="ulink" href="https://github.com/chudaol/ShoppingList">https://github.com/chudaol/ShoppingList</a> .</p>

<p className="p">Its code is hosted on GitHub: 
<a class="ulink" href="https://github.com/chudaol/ShoppingList">https://github.com/chudaol/ShoppingList</a>
.</p>



<p className="it">Se integra de forma continua con Travis: <a className="ulink" href="https://travis-ci.org/chudaol/ShoppingList">https://travis-ci.org/chudaol/ShoppingList</a></p>

<p className="p">It is continuously integrated with Travis: 
<a class="ulink" href="https://travis-ci.org/chudaol/ShoppingList">https://travis-ci.org/chudaol/ShoppingList</a>
</p>



<p className="it">Su interfaz es sencilla y fácil de entender:</p>

<p className="p">Its interface is simple and easy to understand:</p>





<div class="mediaobject"><img src="/static/image00333.jpeg" width="100%" alt="Shopping list application"/></div>



<p className="it">La interfaz de la aplicación de la lista de compras desarrollado utilizando Vue.js</p>

<p className="p">The interface of the shopping list application developed using Vue.js</p>



<p className="it">No está todavía lejos de algo que se usaría cada vez que vaya de compras, ¿verdad?</p>

<p className="p">It is still far from something that you would use every time you go shopping, isn't it?</p>


</div><div className="section" title="The Pomodoro application"><div className="titlepage"><div><div><h2 class="title"><a id="ch09lvl2sec84"></a>The Pomodoro application</h2></div></div></div>
<p className="it">La aplicación Pomodoro que hemos desarrollado en este libro es una aplicación web que implementa un temporizador Pomodoro con ruido blanco durante los pomodoros y buenas fotos de trabajo de los gatos durante el intervalo de tiempo. Permite el siguiente:</p>

<p className="p">The Pomodoro application that we have developed in this book is a web application that implements a Pomodoro timer with white noise during the working Pomodoros and nice pictures of cats during the interval time. It allows the following:</p>


<div class="itemizedlist"><ul className="itemizedlist">

<li className="listit">Iniciar, pausar y detener la aplicación</li>

<li className="listitem">Start, pause, and stop the application</li>

<li className="listit">Escuchar ruido blanco durante el trabajo, el ruido que ayuda a concentrarse</li>

<li className="listitem">Listen to white noise while working, noise that helps concentrating</li>

<li className="listit">Activar y desactivar el sonido de ruido blanco</li>

<li className="listitem">Mute and unmute the white noise sound</li>

<li className="listit">Mirar a los gatitos durante el tiempo libre</li>

<li className="listitem">Stare at the kittens during spare time</li>

</ul></div>
<p className="it">Nuestra aplicación Pomodoro también está alojado en el Heroku plataforma en la nube: <a className="ulink" href="https://catodoro.herokuapp.com/">https://catodoro.herokuapp.com/</a> .</p>

<p className="p">Our Pomodoro application is also hosted on the Heroku cloud platform: 
<a class="ulink" href="https://catodoro.herokuapp.com/">https://catodoro.herokuapp.com/</a>
.</p>



<p className="it">Su código también está alojado en GitHub: <a className="ulink" href="https://github.com/chudaol/Pomodoro">https://github.com/chudaol/Pomodoro</a> .</p>

<p className="p">Its code is also hosted at GitHub: 
<a class="ulink" href="https://github.com/chudaol/Pomodoro">https://github.com/chudaol/Pomodoro</a>
.</p>



<p className="it">Y también está construido y probado en cada pulsación utilizando la plataforma de integración continua Travis: <a className="ulink" href="https://travis-ci.org/chudaol/Pomodoro">https://travis-ci.org/chudaol/Pomodoro</a> .</p>

<p className="p">And it is also built and tested on each push using the Travis continuous integration platform: 
<a class="ulink" href="https://travis-ci.org/chudaol/Pomodoro">https://travis-ci.org/chudaol/Pomodoro</a>
.</p>



<p className="it">Su interfaz es limpia y fácil de usar. Esto es lo que se muestra por 20 minutos de trabajo intervalo de Pomodoro:</p>

<p className="p">Its interface is clean and easy to use. Here is what it shows for the 20-minute working Pomodoro interval:</p>



<div class="mediaobject"><img src="/static/image00334.jpeg" width="100%" alt="The Pomodoro application"/></div>



<p className="it">La aplicación Pomodoro Pomodoro durante el trabajo</p>

<p className="p">The Pomodoro application during the working Pomodoro</p>



<p className="it">Y esto es lo que aparece cuando el tiempo para un descanso de 5 minutos viene:</p>

<p className="p">And here's what appears when the time for a 5-minute break comes:</p>



<div class="mediaobject"><img src="/static/image00335.jpeg" width="100%" alt="The Pomodoro application"/></div>



<p className="it">La aplicación Pomodoro durante su tiempo de intervalo</p>

<p className="p">The Pomodoro application during its interval time</p>



<p className="it">En realidad, es bastante útil, pero también todavía lejos de ser perfecto.</p>

<p className="p">It is actually pretty usable, but also still far from perfect.</p>


</div></div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Why is it just the beginning?</title><div className="section" title="Why is it just the beginning?"><div class="titlepage" id="aid-2D7TI2"><div><div><h1 className="title"><a id="ch09lvl1sec73"></a>Why is it just the beginning?</h1></div></div></div>



<p className="it">En la sección anterior, hemos resumido lo que las aplicaciones que hemos desarrollado a lo largo del libro están haciendo. También hemos acordado (espero) que aún están lejos de ser perfecto. Las cosas que están lejos de ser perfecto son las cosas que queremos mejorar y, por tanto, nos dan retos y propósito. En realidad, hay todavía mucho trabajo por hacer. Nuestras aplicaciones están muy bien, pero carecen de características, estilo, identidad, patrones UX, extensión a otras plataformas, y así sucesivamente. Vamos a ver lo que todavía podemos hacer.</p>


<p className="p">In the previous section, we summarized what the applications that we have developed throughout the book are doing. We have also agreed (I hope) that they are still far from perfect. Things that are far from perfect are things that we want to improve and therefore they give us challenges and purpose. There is actually still a lot of work to be done. Our applications are nice, but they lack features, style, identity, UX patterns, extension to other platforms, and so on. Let's check what we can still do.</p>




<div className="section" title="Adding features to our applications"><div className="titlepage"><div><div><h2 class="title">Adding features to our applications</h2></div></div></div>



<p className="it">Nuestras aplicaciones ya tienen algunas características muy agradables, pero pueden tener aún más. Pueden ser más configurable. Pueden ser más flexible. Pueden ser más UI / UX de usar. Veamos cada uno de ellos y escribir una lista de características que se pueden agregar. Será su tarea.</p>


<p className="p">Our applications already have some pretty nice features, but they can have even more. They can be more configurable. They can be more flexible. They can be more UI/UX friendly. Let's look at each of them and write a list of features that can be added. It will be your homework.</p><div className="section" title="Shopping list application"><div className="titlepage"><div><div><h3 class="title"><a id="ch09lvl3sec15"></a>Shopping list application</h3></div></div></div>









<p className="it">Abrir nuestra aplicación de lista de la compra en el navegador y mirarlo. Podes agregar sus listas y elementos para ellos. Podes eliminar artículos y listas. Pero cada persona que abre la aplicación en el navegador será capaz de hacer lo mismo. Esto significa que tenemos que proporcionar una forma de todas las personas que tengan su propia aplicación de lista de la compra, que sólo es posible con un mecanismo de autenticación.</p>


<p className="p">Open our shopping list application in the browser and look at it. You can add your lists and items to them. You can delete items and lists. But every person who opens the application in the browser will be able to do the same. It means that we have to provide a way of every person having their own shopping list application, which is only possible with an authentication mechanism.</p>









<p className="it">También hay algunas cuestiones UX. ¿Por qué deberíamos cambiar el nombre de la lista de la compra utilizando el campo de entrada en el pie si podemos cambiarlo, digamos, en línea? Bueno, en realidad, el nombre de la edición de la lista de compras en el campo de entrada fue el primero que se implementa cuando estábamos aprendiendo cómo conseguir la unión en aplicaciones Vue datos. Por lo tanto, tenía sentido en ese momento, pero ahora se podes y debe ser mejorado.</p>


<p className="p">There are also some UX issues. Why should we change the name of the shopping list using the input field in the footer if we can change it, let's say, inline? Well, actually, shopping list's name editing in the input field was the first thing we implemented when we were learning how to achieve data binding in Vue applications. So, it made sense at the time, but now it can and should be improved.</p>









<p className="it">Otra cosa tiene que ver con los elementos eliminados. No hay manera de aclararlas. Si tenemos una larga lista de elementos, incluso cuando borramos ellos, quedarse para siempre a menos que eliminemos toda la lista de la compra. Debe haber una manera de aclarar los elementos seleccionados en la lista.</p>


<p className="p">Another thing has to do with deleted items. There is no way of clearing them up. If we have a long list of items, even when we delete them, they stay forever unless we remove the whole shopping list. There should be a way of clearing up checked items on the list.</p>









<p className="it">Otro cambio cosmético que podemos aplicar tiene que ver con el estilo. Diferentes listas podrían tener un diferentes colores de fondo, diferentes colores de la fuente, y probablemente incluso diferentes estilos de fuente y tamaños. Con esto, aquí está la lista de mejoras para la aplicación lista de la compra:</p>


<p className="p">Another cosmetic change that we can apply has to do with styling. Different lists might have a different background colors, different font colors, and probably even different font styles and sizes. With that, here's the list of improvements for the shopping list application:</p>



<div class="itemizedlist"><ul className="itemizedlist">



<li className="listit">Implementar un mecanismo de autenticación</li>

<li className="listitem">Implement an authentication mechanism</li>



<li className="listit">Implementar edición de nombre en línea</li>

<li className="listitem">Implement inline name editing</li>



<li className="listit">Implementar el esclarecimiento de los elementos seleccionados</li>

<li className="listitem">Implement clearing up checked items</li>



<li className="listit">Implementar un mecanismo de configuración de estilo diferentes listas de compras, como el color de fondo, color de texto, tamaño de fuente y estilo</li>

<li className="listitem">Implement a mechanism of configuring different shopping lists' styling, such as background color, text color, font size, and style</li>



</ul></div>









<p className="it">También podes aplicar categorías de los elementos e iconos para cada una de las categorías. Como una inspiración, se podes echar un vistazo a la aplicación Splitwise en <a className="ulink" href="https://www.splitwise.com/">https://www.splitwise.com/</a>. Cuando se inicia la adición de elementos, el icono del tema es genérico. Una vez que se escribe en algo significativo, el icono cambia, como se muestra en la siguiente captura de pantalla:</p>


<p className="p">You can also implement categories for the items and icons for each of the categories. As an inspiration, you can have a look at the Splitwise application at 
<a class="ulink" href="https://www.splitwise.com/">https://www.splitwise.com/</a>
. When you start adding items, the icon of the item is generic. Once you type in something meaningful, the icon changes, as shown in the following screenshot:</p>







<div class="mediaobject"><img src="/static/image00336.jpeg" width="100%" alt="Shopping list application"/></div>












<p className="it">La captura de pantalla de la aplicación Splitwise para la inspiración para las categorías de iconos: se adapta a lo que se escribe en el campo de entrada</p>


<p className="p">The screenshot of the Splitwise application for the inspiration for the icon categories: it adapts to what you type in the input field</p>









<p className="it">Trate de poner en práctica este tipo de categorización para nuestra aplicación de lista de la compra. Sería una ventaja muy agradable y potente!</p>


<p className="p">Try to implement this kind of categorization for our shopping list application. It would be a really nice and powerful bonus!</p></div><div className="section" title="The Pomodoro application"><div className="titlepage"><div><div><h3 class="title"><a id="ch09lvl3sec16"></a>The Pomodoro application</h3></div></div></div>









<p className="it">Abrir nuestra aplicación Pomodoro en su navegador e intente utilizarlo. Es agradable, sin duda alguna. Es simple y fácil de usar. Sin embargo, alguna configuración adicional podría traer un poco de potencia adicional a la misma. Por ejemplo, ¿por qué debería trabajar durante 20 minutos? Tal vez me gustaría tener períodos de 15 minutos de Pomodoros de trabajo. O tal vez quiere tener más grandes pomodoros de trabajo, digamos 25 o 30 minutos. Definitivamente debe ser configurable.</p>


<p className="p">Open our Pomodoro application in your browser and try using it. It's nice, without any doubt. It is simple and easy to use. However, some extra configuration might bring some extra power to it. For example, why should I work for 20 minutes? Maybe I would like to have 15-minute periods of working Pomodoros. Or maybe I want to have bigger working Pomodoros, let's say 25 or 30 minutes. It should definitely be configurable.</p>









<p className="it">Vamos a comprobar a fondo la descripción de la técnica Pomodoro en Wikipedia para ver si nos falta algo: <a className="ulink" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">https://en.wikipedia.org/wiki/Pomodoro_Technique</a>.</p>


<p className="p">Let's thoroughly check the description of the Pomodoro technique in Wikipedia to see if we are missing something: 
<a class="ulink" href="https://en.wikipedia.org/wiki/Pomodoro_Technique">https://en.wikipedia.org/wiki/Pomodoro_Technique</a>
.</p>









<p className="it">Estoy bastante seguro de que somos. Marque este punto en los principios subyacentes:</p>


<p className="p">I'm pretty sure we are. Check this point at the underlying principles:</p><div class="blockquote"><table border="0" cellspacing="0" cellpadding="0" class="blockquote" summary="Block quote"><tr><td valign="top"> </td><td valign="top">









<p className="it"><span className="emphasis"><em>"Después de cuatro pomodoros, tomar un descanso más largo (15-30 minutos), restablecer el recuento de marca de verificación a cero, a continuación, vaya al paso 1."</em></span></p>


<p className="p">
<span class="emphasis"><em>"After four pomodoros, take a longer break (15-30 minutes), reset your checkmark count to zero, then go to step 1."                   </em></span>
</p>





</td><td valign="top"> </td></tr><tr><td valign="top"> </td><td colspan="2" align="right" valign="top">--<span class="attribution"><span class="emphasis"><em>https://en.wikipedia.org/wiki/Pomodoro_Technique</em></span></span></td></tr></table></div>









<p className="it">Aha! Algo debe ocurrir después de cuatro Pomodoros. intervalo más grande, más tiempo mirando a los gatos (o hacer lo que quiere hacer). Hmm, probablemente sería agradable ser capaz de configurar este período de tiempo, así!</p>


<p className="p">Aha! Something should happen after four Pomodoros. Bigger interval, more time staring at cats (or doing whatever you want to do). Hmm, probably it would be nice to be able to configure this period of time as well!</p>









<p className="it">Hay otra cosa importante. Como cualquier ser humano, después de trabajar duro, me gustaría ver algún progreso. ¿No sería bueno si nuestra aplicación Pomodoro podría mostrar algunas estadísticas sobre la cantidad de tiempo hemos sido capaces de concentrarse en nosotros mismos y hacer nuestro trabajo? Para esto, podríamos recopilar algunas estadísticas y mostrarlos en nuestra temporizador Pomodoro.</p>


<p className="p">There's another important thing. As any human being, after working hard, I would like to see some progress. Wouldn't it be nice if our Pomodoro application could display some statistics about the amount of time we were able to concentrate on ourselves and to do our work? For this, we could collect some statistics and display them in our Pomodoro timer.</p>









<p className="it">Además, ¿no sería agradable para almacenar estas estadísticas para poder visualizarlas durante un cierto período de tiempo, digamos, una semana, un mes, un año? Esto nos lleva a la necesidad de implementar un mecanismo de almacenamiento. Esta tienda debe almacenar las estadísticas para cada usuario, por lo que una vez más, se necesita un mecanismo de autenticación también.</p>


<p className="p">Also, wouldn't it be nice to store these statistics to be able to visualize them during some period of time, let's say, one week, one month, one year? This leads us to the need to implement a storage mechanism. This store should store statistics for each user, so again, an authentication mechanism is needed as well.</p>









<p className="it">Vamos a pensar en nuestros agradables ruidos blancos, marrones y rosados. En la actualidad, que acabamos de jugar el ruido marrón que está codificado en nuestro <code className="literal">App.vue</code>:</p>


<p className="p">Let's think about our nice white, brown, and pink noises. Currently, we just play the brown noise that is hardcoded in our <code class="literal">App.vue</code>:</p>




<pre className="programlisting"><code>{`&lt;template&gt;
 &lt;div id="app" class="container" <span class="strong"><strong>v-noise="'brown'"</strong></span>&gt;
 &lt;/div&gt;
&lt;/template&gt; 
`}</code></pre>









<p className="it">¿No deberíamos ser capaces de cambiar entre ruidos y elegir nuestro favorito? Por lo tanto, hemos identificado un elemento más que añadí a la configuración de la aplicación. Eso es suficiente por ahora; vamos a poner todo esto en la lista:</p>


<p className="p">Shouldn't we be able to switch between noises and choose our favorite one? Hence, we have identified one more item to add to the application's configuration. That's enough for now; let's put all this in the list:</p>



<div class="itemizedlist">


<ul className="itemizedlist">



<li className="listit">Implementar el mecanismo de autenticación</li>

<li className="listitem">Implement the authentication mechanism</li>



<li className="listit">Implementar un mecanismo de almacenamiento que debe recoger las estadísticas sobre los tiempos de trabajo y almacenarlos en alguna capa de persistencia</li>

<li className="listitem">Implement a storage mechanism&mdash;it should collect the statistics about working times and store them in some persistence layer</li>



<li className="listit">Implementar las estadísticas mostrando mecanismo que debe tomar los datos estadísticos almacenados y mostrarlo de una manera agradable y limpio (por ejemplo, tablas)</li>

<li className="listitem">Implement the statistics displaying mechanism&mdash;it should grab the stored statistical data and display it in a nice and clean way (for example, charts)</li>>



<li className="listit">Añadir un mecanismo de configuración de la aplicación Pomodoro. Esta configuración debe permitir a la siguiente: </li>

<li className="listitem">Add a configuration mechanism to the Pomodoro application. This configuration should allow the following:


<li className="listit">Configurar el período de tiempo de trabajo Pomodoro</li>

<li className="listitem">Configure the Pomodoro working period of time</li>



<li className="listit">Configurar los intervalos de descanso de veces</li>

<li className="listitem">Configure the resting intervals of times</li>



<li className="listit">Configurar un gran tiempo de descanso después de una cantidad configurable de Pomodoros de trabajo (4 por defecto)</li>

<li className="listitem">Configure a big resting time after a configurable amount of working Pomodoros (4 by default)</li>



<li className="listit">Configurar el ruido preferido seguir jugando durante los intervalos de trabajo</li>

<li className="listitem">Configure the preferred noise to play during the working intervals</li>

</li>
</ul>

</div>

<p className="it">Como se podes ver, todavía tiene mucho trabajo por hacer. Es una buena cosa, ya dispone de una aplicación de temporizador Pomodoro de trabajo para usar mientras se está trabajando en sus mejoras!</p>


<p className="p">As you can see, you still have some work to do. It's a good thing, you have already a working Pomodoro timer application to use while you are working on its improvements!</p>



</div></div><div className="section" title="Beautifying our applications"><div className="titlepage"><div><div><h2 class="title"><a id="ch09lvl2sec86"></a>Beautifying our applications</h2></div></div></div>

<p className="it">Ambas aplicaciones son actualmente bastante gris. Sólo la aplicación temporizador Pomodoro se convierte en un poco más colorido cuando aparezca un gato en la pantalla. Sería bueno añadí un poco de diseño para ellos. Que sean únicos, darles su identidad; que trabajaron tan duro con ellos, que merecen claramente algo de ropa bonita. Vamos a pensar en lo que podemos hacer con estilo.</p>


<p className="p">Both applications are currently pretty gray. Only the Pomodoro timer application becomes a little bit more colorful when a cat appears on the screen. It would be nice to add some design to them. Make them unique, give them their identity; you worked so hard on them, they clearly deserve some nice clothes. Let's think about what we can do with styling.</p>


<div className="section" title="Logotype"><div className="titlepage"><div><div><h3 class="title"><a id="ch09lvl3sec17"></a>Logotype</h3></div></div></div>

<p className="it">Comenzar con el logotipo. Un buen logotipo define su producto y lo hace único. Yo te puedo ayudar con el logotipo de la aplicación Pomodoro, al menos con la idea de ella. Tengo una muy buena amiga llamada Carina que diseñó un tomate para mí y sólo he hecho todo lo posible para añadí un gatito a la misma. Echale un vistazo. Se podes utilizar como tal o utilizar simplemente como una idea para desarrollar su propio. Ni siquiera el cielo es el límite para la imaginación, de verdad!</p>


<p className="p">Start with the logotype. A good logo defines your product and makes it unique. I can help you with the Pomodoro application's logo, at least with the idea for it. I have a very good friend called Carina who designed a tomato for me and I have just tried my best to add a little kitten to it. Check it out. You can use it as is or use just as an idea to develop your own. Even the sky is not the limit for your imagination, really!</p>



<div class="mediaobject"><img src="/static/image00337.jpeg" width="100%" alt="Logotype"/></div>


<p className="it">La idea de un logotipo para la aplicación Pomodoro</p>


<p className="p">The idea for a logotype for the Pomodoro application</p>


<p className="it">Pensar en un bonito logo de la aplicación de la lista de compras. ¿Qué podes ser? Una bolsa para las compras? Una casilla de verificación? Sólo las iniciales-SL? Una vez más, no hay límites. Espero ver a sus agradables logotipos en las horquillas repositorios. No se podes esperar a que!</p>


<p className="p">Think about a nice logo for the shopping list app. What can it be? A bag for the groceries? A checkbox? Just initials&mdash;SL? Again, no limits. I hope to see your nice logos in the repositories forks. Can't wait for it!</p></div><div className="section" title="Identity and design"><div className="titlepage"><div><div><h3 class="title"><a id="ch09lvl3sec18"></a>Identity and design</h3></div></div></div>

<p className="it">Nuestras aplicaciones definitivamente necesitan un poco de diseño único. Utilizar algunas técnicas UX para desarrollar una guía de identidad agradable para ellos. Piense acerca de los colores, fuentes, y cómo los elementos deben estar compuestos en la página de modo que proporcionen una experiencia única fácil de usar para los usuarios.</p>

<p className="p">Our applications definitely need some unique design. Use some UX techniques to develop a nice identity guide for them. Think about colors, fonts, and how the elements should be composed on the page so that they provide a unique user-friendly experience to our users.</p></div><div className="section" title="Animations and transitions"><div className="titlepage"><div><div><h3 class="title"><a id="ch09lvl3sec19"></a>Animations and transitions</h3></div></div></div>

<p className="it">Animaciones y transiciones son poderosos mecanismos que traen un poco de vida a una aplicación. Sin embargo, no pueden ser objeto de abuso. Piense acerca de dónde y cómo tienen sentido. Por ejemplo, se cierne sobre los títulos listas de la compra podría terminar en algún resaltado, elementos de la lista de compras se pueden hacer algún pequeño rebote cuando se comprueban, el proceso de cambiar el título de la lista de la compra también podría destacar de alguna manera, y así sucesivamente . La aplicación Pomodoro podes cambiar su color de fondo en cada una de las transiciones del estado. También podes ser consciente de la hora del día y el color de fondo en consecuencia. El número de oportunidades es interminable. Use su creatividad, usar el poder de Vue para alcanzar sus ideas.</p>

<p className="p">Animations and transitions are powerful mechanisms that bring some life to an application. However, they cannot be abused. Think about where and how they make sense. For example, hovering on the shopping lists titles could end up in some highlighting, shopping list items can do some tiny bouncing when they are checked, the process of changing the title of the shopping list could also be highlighted in some way, and so on. The Pomodoro application can change its background color on each of the state's transitions. It can also be aware of the time of the day and color the background accordingly. The number of opportunities is endless. Use your creativity, use Vue's power to achieve your ideas.</p></div></div><div className="section" title="Extending our applications to other devices"><div className="titlepage"><div><div><h2 class="title"><a id="ch09lvl2sec87"></a>Extending our applications to other devices</h2></div></div></div>

<p className="it">Ambos de nuestras aplicaciones son aplicaciones web. Si bien podría ser aceptable para la aplicación Pomodoro si trabajamos todo el día en la computadora y el uso de la Web, podes ser un poco incómodo para la aplicación lista de compras. Usted no trae su ordenador portátil cuando vaya de compras. Por supuesto, podes llenar la lista de compras con componentes en casa y luego abrir el navegador móvil en el supermercado, pero podría ser lenta y no tan agradable de usar. Utilice weex ( <a className="ulink" href="https://github.com/alibaba/weex">https://github.com/alibaba/weex</a> ) para llevar nuestras aplicaciones web a los dispositivos móviles. Tanto las aplicaciones también se pueden ampliar para ser utilizado como una aplicación de Google Chrome, al igual que hemos aprendido en <a className="link" title="Capítulo 2. Fundamentos - Instalación y uso" href="part0027.xhtml#aid-PNV61">el capítulo 2</a> , <span className="emphasis"><em>Fundamentos - Instalación y uso</em></span> . Extender su trabajo a todos y cada dispositivo que pueda. Tengo muchas ganas de comprobar su trabajo.</p>

    <p className="p">Both of our applications are web applications. While it might be okay for the Pomodoro application if we work the whole day on the computer and use the Web, it might be a little bit uncomfortable for the shopping list application. You don't bring your laptop when you go shopping. Of course, you can fill the shopping list with items at home and then open the mobile browser in the supermarket, but it might be slow and not so nice to use. Use Weex (<a class="ulink" href="https://github.com/alibaba/weex">https://github.com/alibaba/weex</a>) to bring our web applications to the mobile devices. Both the applications can also be extended to be used as a Google Chrome app, just as we learned in <a class="link" title="Chapter 2. Fundamentals - Installing and Using" href="part0027.xhtml#aid-PNV61">Chapter 2</a>, <span class="emphasis"><em>Fundamentals - Installing and Using</em></span>. Extend your work to each and every device you can. I am looking forward to checking your work.</p></div>

    </div>
</div>
</div> 

<div className='col-md-3'></div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Summary</title><div class="titlepage"><div><div><h1 class="title"><a id="ch09lvl1sec74"></a>Summary</h1></div></div></div>

<p className="it">Este es el último capítulo de este libro. Honestamente, me siento un poco triste por ello. Tuve un tiempo muy divertido con usted. Sé que no te conozco, pero me siento como yo. Te hablo y siento que a veces me hablas. Todo lo que se ha desarrollado hasta el momento, no se podes decir en absoluto que fue desarrollado por mí; Siento que hemos estado trabajando juntos en todo este tiempo.</p>

<p className="p">This is the last chapter of this book. Honestly, I feel a little bit sad about it. I had a really fun time with you. I know that I don't know you, but I feel like I do. I talk to you and I feel that sometimes you talk to me. Everything that was developed so far, I cannot say at all that it was developed by me; I feel that we have been working together on it all this time.</p>

<p className="it">Es una sensación muy divertido, en realidad, porque soy al mismo tiempo en el presente y en el futuro cuando se está leyendo este libro (para mí, es el futuro). Y que ahora está en su presente y, al mismo tiempo hablando conmigo en el pasado. Me encanta la forma en que los libros y las tecnologías establecen conexiones no sólo entre las personas sino también entre diferentes intervalos de tiempo. Esto es increíble.</p>

<p className="p">It is a very funny feeling, actually, because I am at the same time in the present and in the future when you are reading this book (for me, it's the future). And you are now in your present and at the same time talking to me in the past. I love the way that books and technologies establish connections not only between people but also between different time intervals. This is amazing.</p>

<p className="it">Realmente espero que usted se convirtió en un fan de Vue.js de la misma manera que soy un fan de ella.</p>

<p className="p">I really hope that you became a fan of Vue.js in the same way I am a fan of it.</p>

<p className="it">Realmente espero que va a mejorar al menos una de las aplicaciones que hemos desarrollado hasta ahora y mostrarlo a mí. Voy a ser realmente encantados de ayudarte si necesita mi ayuda. No dude en escribirme un mensaje al <code className="literal">chudaol@gmail.com</code>.</p>

<p className="p">I really hope that you will enhance at least one of the applications we have developed so far and show it to me. I will be really glad to help if you need my help. Do not hesitate to drop me a message at <code class="literal">chudaol@gmail.com</code>.</p>

<p className="it">Gracias por estar conmigo todo este tiempo, y espero conocerte pronto en el próximo libro!</p>

<p className="p">Thank you for being with me all this time, and I hope to meet you soon in the next book!</p>

</div>

</div>
<div className='col-md-3'></div>
</div>  
   
  
  
  </Layout>
  )