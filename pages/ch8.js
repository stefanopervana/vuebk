import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch64'>
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

<title>Chapter 8. Deploying - Time to Go Live!</title><div class="chapter" title="Chapter 8. Deploying - Time to Go Live!" id="aid-25JP21"><div className="titlepage"><div><div><h1 className="title"><a id="ch08"></a>Chapter 8. Deploying - Time to Go Live!</h1></div></div></div>

<p className="it">En el capítulo anterior, ha aprendido a probar las aplicaciones Vue. Los probamos la aplicación de diferentes técnicas de prueba. En el principio, hemos realizado pruebas unitarias clásico sobre Vue componentes y módulos relacionados con Vuex, tales como acciones, mutaciones y captadores. Después de eso, hemos aprendido cómo aplicar las técnicas de pruebas de extremo a extremo utilizando sombra de la noche.</p>

<p className="p">In the previous chapter, you learned how to test your Vue applications. We tested them applying different testing techniques. In the beginning, we have performed classic unit testing on Vue components and on Vuex-related modules, such as actions, mutations, and getters. After that, we learned how to apply end-to-end testing techniques using Nightwatch.</p>


<p className="it">En este capítulo, vamos a hacer que nuestras aplicaciones van en directo mediante el despliegue en un servidor y hacerlas disponibles para el mundo. También vamos a garantizar la integración continua y el despliegue continuo de nuestras aplicaciones. Esto significa que cada vez que confirma los cambios realizados en las aplicaciones, que será automáticamente probada y desplegada.</p>

<p className="p">In this chapter, we will make our applications go live by deploying them to a server and making them available to the world. We will also guarantee continuous integration and continuous deployment of our applications. This means that every time we commit changes performed on the applications, they will automatically be tested and deployed.</p>

<p className="it">Con esto en mente, en este capítulo, vamos a hacer lo siguiente:</p>

<p className="p">With this in mind, in this chapter, we are going to do the following:</p>

<div class="itemizedlist"><ul className="itemizedlist">

<li className="listit">Establecer un proceso de integración continua usando Travis</li>


<li className="listitem">Set up a continuous integration process using Travis</li>


<li className="listit">Configurar una implantación continua usando Heroku</li>


<li className="listitem">Set up a continuous deployment using Heroku</li>



</ul></div><div className="section" title="Software deployment"><div className="titlepage"><div><div><h1 className="title"><a id="ch08lvl1sec64"></a>Software deployment</h1></div></div></div>


<p className="it">Antes de comenzar a desplegar nuestras aplicaciones, primero vamos a tratar de definir lo que realmente significa:</p>

<p className="p">Before starting to deploy our applications, let's first try to define what it actually means:</p>



<div class="blockquote"><blockquote class="blockquote">


<p className="it"> <span className="emphasis"><em>"La implementación de software es todas las actividades que conforman un sistema de software disponible para su uso." - Wikipedia: https://en.wikipedia.org/wiki/Software_deployment </em></span> </p>

<p className="p">
<span class="emphasis"><em>"Software deployment is all of the activities that make a software system available for use."
                                        - Wikipedia: https://en.wikipedia.org/wiki/Software_deployment
</em></span>
</p>



</blockquote></div>



<p className="it">Esta definición significa que después llevamos a cabo todas las actividades necesarias, nuestro software será accesible al público. En nuestro caso, como estamos desplegando aplicaciones web, significa que habrá una dirección URL pública, y cualquier persona será capaz de escribir este URL en su navegador y acceder a la aplicación. ¿Cómo se podes lograr esto? La forma más sencilla es proporcionar a su propia dirección IP a sus amigos y ejecutar la aplicación. Por lo tanto, la gente dentro de su red privada serán capaces de acceder a la aplicación en su navegador. Por lo tanto, ejecutar, por ejemplo, la aplicación Pomodoro:</p>

<p className="p">This definition means that after we perform all the necessary activities, our software will be accessible to the public. In our case, as we are deploying web applications, it means that there will be a public URL, and any person will be able to type this URL on their browser and access the application. How can this be achieved? The simplest way is to provide your own IP address to your friends and run the application. Thus, people inside your private network will be able to access the application on their browser. So, run, for example, the Pomodoro application:</p>




<pre className="programlisting"><code>{`
<span class="strong"><strong>&gt; cd &lt;path to pomodoro&gt; 
&gt; npm run dev 
</strong></span>
`}</code></pre>

<p className="it">Y a continuación, comprobar su IP:</p>

<p className="p">And then check your IP:</p>


<pre className="programlisting"><code>{`
<span class="strong"><strong>ifconfig</strong></span>
`}</code></pre>



<div class="mediaobject"><img src="/static/image00315.jpeg" width="100%" alt="Software deployment"/></div>


<p className="it">Comprobación de la dirección IP con el comando ifconfig</p>

<p className="p">Checking the IP address with the ifconfig command</p>




<p className="it">Y luego compartir la dirección con tus amigos en la misma red privada. En mi caso, sería <code className="literal">http://192.168.1.6:8080</code>.</p>

<p className="p">And then share the address with your friends on the same private network. In my case, it would be <code class="literal">http://192.168.1.6:8080</code>.</p>


<p className="it">Sin embargo, sólo a sus amigos que están dentro de su red podrán acceder a la aplicación, y no hay, obviamente, mucho más que diversión en ella.</p>

<p className="p">However, only your friends who are inside your network will be able to access the application, and there's obviously not that much fun in it.</p>


<p className="it">Se podes utilizar algún software que va a crear una dirección de acceso público y así transformar su computadora en un proveedor de alojamiento, por ejemplo, <span className="strong"><strong>ngrok</strong></span> (<a className="ulink" href="https://ngrok.com/">https://ngrok.com/</a> ). Ejecutar la aplicación y ejecute el siguiente comando:</p>

    <p className="p">You can use some software that will create a publicly accessible address and thus transform your computer into a hosting provider, for example, <span class="strong"><strong>ngrok</strong></span> (
<a class="ulink" href="https://ngrok.com/">https://ngrok.com/</a>
). Run the application and then run the following command:</p>



<pre className="programlisting"><code>{`
<span class="strong"><strong>ngrok http 8080 
</strong></span>
`}</code></pre>



<p className="it">Esto creará una dirección que será accesible desde cualquier lugar, al igual que un sitio web normal:</p>

<p className="p">This will create an address that will be accessible from anywhere, just like a regular website:</p>


<div class="mediaobject"><img src="/static/image00316.jpeg" width="100%" alt="Software deployment"/></div>


<p className="it">Usando ngrok para proporcionar un túnel a su servidor local</p>

<p className="p">Using ngrok to provide a tunnel to your localhost</p>

<p className="it">En mi caso, sería <code className="literal"> http://5dcb8d46.ngrok.io </code>. Puedo compartir esta dirección en mis redes sociales y todo el mundo será capaz de acceder a él y tratar la aplicación Pomodoro! Pero deja de ... Puedo dejar mi computadora portátil por toda la noche, pero no puedo dejarlo para siempre. Una vez que lo apague, la conexión de red se pierde y no se podes acceder a mi solicitud más. Además, incluso si pudiera dejarlo para siempre, no me gusta esta dirección web. Es un montón de letras y números, y yo quiero que sea algo significativo.</p>

<p className="p">In my case, it would be <code class="literal">
http://5dcb8d46.ngrok.io
</code>. I can share this address on my social networks and everybody will be able to access it and try the Pomodoro application! But stop ... I can leave my laptop on for the whole night, but I can't leave it on forever. Once I switch it off, the network connection is lost and there is no access to my application anymore. Also, even if I could leave it on forever, I don't like this website address. It's a bunch of letters and numbers, and I want it to be something meaningful.</p>


<p className="it">Hay formas más robustas. Puedo comprar, por ejemplo, una instancia virtual en <span className="strong"><strong>AWS</strong></span> ( <span className="strong"><strong>Amazon Web Services</strong></span> ), copiar mi aplicación a este caso, comprar un dominio a un proveedor de dominio como GoDaddy, asociado este dominio a IP de la instancia comprado, y ejecutar la aplicación no y será accesible, mantenido, copia de seguridad, y atendido por el servicio ing Amaz (a). Increíble, pero ... caro como el infierno. Vamos a pensar en esta solución cuando nuestras aplicaciones alcanzan el nivel de tamaño y la recuperación de la inversión correspondiente.</p>

<p className="p">There are more robust ways. I can buy, for example, a virtual instance on <span class="strong"><strong>AWS</strong></span> (<span class="strong"><strong>Amazon Web Services</strong></span>), copy my application to this instance, buy a domain at a domain provider such as GoDaddy, associate this domain to the bought instance's IP, and run the application there and it will be accessible, maintained, backed up, and taken care of by the Amaz(on)ing service. Amazing, but ... expensive as hell. Let's think of this solution when our applications reach the corresponding size and payback level.</p>


<p className="it">Por ahora, en este capítulo, queremos que nuestra solución de implementación que sea barato (donde significa libre barato), robusta y sencilla. Es por eso que vamos a desplegar nuestra aplicación para Heroku, una plataforma en la nube-aplicación. Con el fin de hacer eso, vamos a celebrar nuestra primera aplicación en GitHub. ¿Recuerdas que el despliegue es algo que hace que nuestras aplicaciones listas para usar? Considero que una aplicación esté listo para usar cuando está probado y cuando las pruebas no están fallando. Es por ello que también utilizaremos Travis para garantizar la calidad de nuestras aplicaciones antes de su implementación real. Por lo tanto, nuestras actividades necesarias para implementar la aplicación serán los siguientes:</p>

<p className="p">For now, for this chapter, we want our deployment solution to be cheap (where cheap means free), robust, and simple. That is why we will deploy our application to Heroku, a cloud-application platform. In order to do that, we will first host our application on GitHub. Do you remember that deployment is something that makes our applications ready to use? I consider an application to be ready to use when it's tested and when tests are not failing. That is why we will also use Travis to guarantee the quality of our applications before their actual deployment. So, our necessary activities to deploy the application will be the following:</p>


<div class="orderedlist"><ol class="orderedlist arabic">



<li className="listit">Creá repositorios de GitHub para las aplicaciones y mover las aplicaciones en los repositorios.</li>


<li className="listitem">Create GitHub repositories for the applications and move the applications into the repositories.</li>


<li className="listit">Configurar la integración continua con Travis.</li>


<li className="listitem">Set up continuous integration with Travis.</li>

<li className="listit">Conectar las aplicaciones a Heroku, y establecer y configurarlos para que se ejecute Heroku ellos y exponerlos al mundo.</li>


<li className="listitem">Connect applications to Heroku, and set up and configure them in order for Heroku to run them and to expose them to the world.</li>

</ol></div>



<p className="it">En los próximos tres subsecciones, voy a dar una pequeña introducción a GitHub, Travis, y Heroku.</p>

<p className="p">In the next three subsections, I will give a small introduction to GitHub, Travis, and Heroku.</p>


<div className="section" title="What is GitHub?"><div className="titlepage"><div><div><h2 class="title"><a id="ch08lvl2sec80"></a>What is GitHub?</h2></div></div></div>


<p className="it">GitHub es un proveedor de hosting para proyectos basados ​​en Git.</p>

<p className="p">GitHub is a hosting provider for Git-based projects.</p>


<p className="it">Podes ser utilizado en una escala pequeña, personal para proyectos públicos y privados individuales. También se podes utilizar para proyectos corporativos grandes y todas las actividades relacionadas con el desarrollo, tales como las revisiones de código, integración continua, y así sucesivamente.</p>

<p className="p">It can be used at a small, personal scale for individual private and public projects. It can also be used for big corporate projects and all development-related activities, such as code reviews, continuous integration, and so on.</p>


<p className="it">Todos los que viven en el mundo del software de código abierto sabe GitHub. Si sostá leyendo este libro sobre Vue, que está alojado en GitHub (<a className="ulink" href="https://github.com/vuejs/">https://github.com/vuejs/</a> ), estoy seguro de que va a omitir este apartado, por lo que probablemente puedo escribir algunos chistes estúpidos sobre usted aquí y se Nunca se dará cuenta de ellos! ¡Es una broma!</p>

    <p className="p">Everyone who lives in the world of open source software knows GitHub. If you are reading this book about Vue, which is hosted on GitHub (
<a class="ulink" href="https://github.com/vuejs/">https://github.com/vuejs/</a>
), I am sure that you are skipping this subsection, so probably I can write some stupid jokes about you here and you will never notice them! Just kidding!</p>


</div><div className="section" title="What is Travis?"><div className="titlepage"><div><div><h2 class="title"><a id="ch08lvl2sec81"></a>What is Travis?</h2></div></div></div>


<p className="it">Travis es una herramienta para GitHub que nos permite conectar los proyectos de GitHub a la misma y garantizar su calidad. Se ejecuta pruebas en sus proyectos y le dice que la acumulación ha pasado, o le advierte de que la acumulación ha fallado. Comproba más sobre Travis y cómo usarla en <a className="ulink" href="https://travis-ci.org/">https://travis-ci.org/</a> .</p>

<p className="p">Travis is a tool for GitHub that allows us to connect GitHub projects to it and ensure their quality. It runs tests in your projects and tells you that build has passed, or warns you that build has failed. Check more about Travis and how to use it at 
<a class="ulink" href="https://travis-ci.org/">https://travis-ci.org/</a>
.</p>

</div><div className="section" title="What is Heroku?"><div className="titlepage"><div><div><h2 class="title"><a id="ch08lvl2sec82"></a>What is Heroku?</h2></div></div></div>


<p className="it">Heroku es una plataforma en la nube para el despliegue de sus aplicaciones. Es extremadamente fácil de usar. Usted acaba de crear una aplicación, darle un nombre significativo agradable, lo conecta a su proyecto de GitHub, y voilà! Cada vez que se coloca a una rama determinada (por ejemplo, a la <code className="literal">master</code> rama), Heroku se acaba de ejecutar una secuencia de comandos proporcionada por usted como un script de punto de entrada de la aplicación y volver a implementarlo.</p>

<p className="p">Heroku is a cloud platform for deploying your apps. It is extremely easy to use. You just create an application, give it a nice meaningful name, connect it to your GitHub project, and voil&agrave;! Each time you push to a given branch (for example, to the <code class="literal">master</code> branch), Heroku will just run a script provided by you as an entry point script of your app and redeploy it.</p>



<p className="it">Es altamente configurable y también proporciona una interfaz de línea de comandos para que pueda acceder a todas sus aplicaciones desde la línea de comandos local, sin tener que comprobar su sitio web salpicadero Heroku. Vamos a continuación a empezar y aprender todo por hacerlo nosotros mismos.</p>

<p className="p">It is highly configurable and also provides a command-line interface so that you can access all your applications from your local command line without having to check your Heroku dashboard website. Let's then start and learn everything by doing it ourselves.</p>


</div></div></div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>


<title>Moving the application to the GitHub repository</title><div className="section" title="Moving the application to the GitHub repository" id="aid-26I9K1"><div className="titlepage"><div><div><h1 className="title"><a id="ch08lvl1sec65"></a>Moving the application to the GitHub repository</h1></div></div></div>



<p className="it">Vamos a empezar por la creación de los repositorios de GitHub para nuestras aplicaciones.</p>


<p className="p">Let's start by creating the GitHub repositories for our applications.</p>


<p className="it">Utilice el código de la <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter8/pomodoro">Capítulo8 / pomodoro</a> y <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter8/shopping-list">Capítulo8 / lista de compras</a> directorios.</p>


<p className="p">Please use the code from the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter8/pomodoro">chapter8/pomodoro</a> and <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter8/shopping-list">chapter8/shopping-list</a> directories.</p>



<p className="it">Si todavía no tiene una cuenta en GitHub, crearlo. Ahora acceda a su cuenta de GitHub y crear dos centros de almacenamiento, <code className="literal">Pomodoro</code> y <code className="literal">ShoppingList</code>:</p>


<p className="p">If you still don't have an account at GitHub, create it. Now log in to your GitHub account and create two repositories, <code class="literal">Pomodoro</code> and <code class="literal">ShoppingList</code>:</p>

<div class="mediaobject"><img src="/static/image00317.jpeg" width="100%" alt="Moving the application to the GitHub repository"/></div>


<p className="it">Creá un repositorio en GitHub</p>


<p className="p">Create a repository at GitHub</p>


<p className="it">Una vez que se pulsa el <strong className="userinput"><code>Create repository</code></strong>botón, aparece una página con instrucciones diferentes. Estamos particularmente interesados en el segundo párrafo, que dice <strong className="userinput"><code>...or create a new repository on the command line</code></strong>. Copiarlo, pegarlo en la línea de comandos, mientras que en el directorio de la aplicación Pomodoro, eliminar la primera línea (porque ya tenemos el archivo README) y modificar la tercera línea añadí todo dentro del directorio, y pulsa el <span className="emphasis"><em>Introduce</em></span> botón:</p>


<p className="p">Once you hit the <strong class="userinput"><code>Create repository</code></strong> button, a page with different instructions appears. We are particularly interested in the second paragraph, which says <strong class="userinput"><code>...or create a new repository on the command line</code></strong>. Copy it, paste it to the command line while in the Pomodoro application directory, remove the first line (because we already have the README file) and modify the third line to add everything inside the directory, and hit the <span class="emphasis"><em>Enter</em></span> button:</p>



<pre className="programlisting"><code>{`
<span class="strong"><strong>git init</strong></span>
<span class="strong"><strong>git add </strong></span>
<span class="strong"><strong>git commit -m "first commit"</strong></span>
<span class="strong"><strong>git remote add origin https://github.com/chudaol/Pomodoro.git</strong></span>
<span class="strong"><strong>git push -u origin master</strong></span>
`}</code></pre>



<p className="it">Refrescar la página del proyecto GitHub, y se verá que todo el código está ahí! En mi caso, es al <a className="ulink" href="https://github.com/chudaol/Pomodoro">https://github.com/chudaol/Pomodoro</a> .</p>


<p className="p">Refresh your GitHub project page, and you will see that all the code is there! In my case, it is at 
<a class="ulink" href="https://github.com/chudaol/Pomodoro">https://github.com/chudaol/Pomodoro</a>
.</p>


<p className="it">Haga lo mismo para la aplicación lista de compras. Sólo lo hice y aquí estoy: <a className="ulink" href="https://github.com/chudaol/ShoppingList">https://github.com/chudaol/ShoppingList</a> .</p>


<p className="p">Do the same for the shopping list application. I just did it and here I am: 
<a class="ulink" href="https://github.com/chudaol/ShoppingList">https://github.com/chudaol/ShoppingList</a>
.</p>



<p className="it">Si no desea crear sus propios repositorios, podes extraer solo tenedor. El código abierto está abierto!</p>


<p className="p">If you don't want to create your own repositories, you can just fork mine. Open source is open!</p>



</div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>


<title>Setting continuous integration with Travis</title>

<div class="section" title="Setting continuous integration with Travis"><div class="titlepage" id="aid-27GQ62"><div><div><h1 class="title"><a id="ch08lvl1sec66"></a>Setting continuous integration with Travis</h1></div></div></div>


<p className="it">Con el fin de ser capaz de configurar la integración continua con Travis, en primer lugar, usted tiene que conectar su cuenta de Travis con su cuenta de GitHub. Abrir <a className="ulink" href="https://travis-ci.org/">https://travis-ci.org/</a> y haga clic en el <strong className="userinput"><code>Sign in with GitHub</code></strong>botón:</p>


<p className="p">In order to be able to set up continuous integration with Travis, first of all you have to connect your&nbsp;Travis account with your GitHub account. Open 
<a class="ulink" href="https://travis-ci.org/">https://travis-ci.org/</a>
 and click on the <strong class="userinput"><code>Sign in with GitHub</code></strong> button:</p>


<div class="mediaobject"><img src="../Images/image00318.jpeg" width="100%" alt="Setting continuous integration with Travis"/></div>

<div className="mediaobject"><img src="/static/image00318.jpeg" width="100%" alt="Configuración de la integración continua con Travis"></img></div> <p className="it">Haga clic en el botón Iniciar sesión con GitHub</p>


<p className="p">Click on the Sign in with GitHub button</p>


<p className="it">Ahora podes agregar repositorios que se realizará un seguimiento con Travis. Haga clic en el signo más ( <strong className="userinput"><code>+</code></strong>):</p>


<p className="p">Now you can add repositories that will be tracked with Travis. Click on the plus sign (<strong class="userinput"><code>+</code></strong>):</p>


<div class="mediaobject"><img src="../Images/image00319.jpeg" width="100%" alt="Setting continuous integration with Travis"/></div>



<p className="it">Haga clic en el signo más para agregar su proyecto GitHub</p>


<p className="p">Click on the plus sign to add your GitHub project</p>


<p className="it">Después de hacer clic en el botón más, aparece la lista completa de su proyecto GitHub. Elegir los proyectos que desea realizar un seguimiento de:</p>


<p className="p">After you click on the plus button, the whole list of your GitHub project appears. Choose the projects you want to track:</p>


<div class="mediaobject"><img src="../Images/image00320.jpeg" width="100%" alt="Setting continuous integration with Travis"/></div>

<div className="mediaobject"><img src="/static/image00320.jpeg" width="100%" alt="Configuración de la integración continua con Travis"></img></div> <p className="it">Elegir los proyectos que desea realizar un seguimiento con Travis</p>


<p className="p">Choose the projects you want to track with Travis</p>


<p className="it">Ahora que tenemos nuestros proyectos relacionados con el sistema de construcción de Travis que escucha a cada commit y empuje a la <code className="literal">master</code> rama, tenemos que decir que de alguna manera lo que tiene que hacer una vez que detecta cambios. La conexión por Travis se debe almacenar en el <code className="literal">.travis.yml</code> archivo. Añadir el <code className="literal">.travis.yml</code> archivo a ambos los proyectos. Tenemos por lo menos para decir qué versión de nodo debe ser usado. Comproba la versión de nodo de su sistema (este es el que sos tá completamente seguro de que trabaja con nuestros proyectos). Sólo tiene que ejecutar el siguiente comando:</p>


<p className="p">Now that we have our projects connected to the Travis build system that listens to every commit and push to the <code class="literal">master</code> branch, we need to tell it somehow what it has to do once it detects changes. All the configuration for Travis should be stored in the <code class="literal">.travis.yml</code> file. Add the <code class="literal">.travis.yml</code> file to both the projects. We have at least to tell which node version should be used. Check the Node version of your system (this is the one that you are completely sure that works with our projects). Just run the following command:</p>


<pre class="programlisting">
<span class="strong"><strong>node --version 
</strong></span>
</pre>


<p className="it">En mi caso, es <code className="literal">v5.11.0</code>. Así que voy a añadí al <code className="literal">.travis.yml</code> archivo:</p>


<p className="p">In my case, it is <code class="literal">v5.11.0</code>. So I will add it to the <code class="literal">.travis.yml</code> file:</p>


<pre class="programlisting">//.travis.yml 
language: node_js 
node_js: 
  - "<span class="strong"><strong>5.11.0</strong></span>" 
</pre>


<p className="it">Si se compromete y empujar ahora, se verá que Travis automáticamente comienza a ejecutar las pruebas. Por defecto, se llama al <code className="literal">npm test</code> comando en el proyecto. Espere unos minutos y observar el resultado. Por desgracia, se producirá un error al realizar pruebas de extremo a extremo (selenio). ¿Por qué pasó esto?</p>


<p className="p">If you commit and push now, you will see that Travis automatically starts running tests. By default, it calls the <code class="literal">npm test</code> command on the project. Wait for a few minutes and observe the result. Unfortunately, it will fail while performing end-to-end (Selenium) tests. Why does this happen?</p>


<p className="it">Por defecto, las imágenes virtuales del edificio Travis y entorno de pruebas no tienen instalado el navegador Chrome. Y nuestras pruebas de selenio están tratando de ejecutar en el navegador Chrome. Pero, afortunadamente para nosotros, Travis proporciona un mecanismo de realizar algunos comandos antes de construir. Debe hacerse en la <code className="literal">before_script</code> sección del archivo YML. Vamos a invocar los mandatos necesarios para instalar Chrome y exportar la <code className="literal">CHROME_BIN</code>variable. Agregue lo siguiente a sus <code className="literal">.travis.yml</code> archivos:</p>


<p className="p">By default, virtual images of the Travis building and testing environment do not have the Chrome browser installed. And our Selenium tests are trying to run on the Chrome browser. But fortunately for us, Travis provides a mechanism of performing some commands before building. It should be done in the <code class="literal">before_script</code> section of the&nbsp;YML&nbsp;file. Let's invoke the necessary commands to install Chrome and export the <code class="literal">CHROME_BIN</code> variable. Add the following to your <code class="literal">.travis.yml</code> files:</p>


<pre class="programlisting">before_script: 
  - export CHROME_BIN=/usr/bin/google-chrome 
  - sudo apt-get update 
  - sudo apt-get install -y libappindicator1 fonts-liberation 
  - wget https://dl.google.com/linux/direct/google-chrome-
    stable_current_amd64.deb 
  - sudo dpkg -i google-chrome*.deb 
</pre>


<p className="it">Como se podes ver, con el fin de llevar a cabo la actualización de la instalación y del sistema, debemos invocar comandos con <code className="literal">sudo</code>. Por defecto, Travis no te permite ejecutar <code className="literal">sudo</code> comandos con el fin de evitar daños accidentales por los scripts no dignos de confianza. Pero se podes decir Travis explícitamente que su script usa <code className="literal">sudo</code>, lo que significa que sos consciente de lo que estás haciendo. Sólo tiene que añadí las siguientes líneas a sus <code className="literal">.travis.yml</code> archivos:</p>


<p className="p">As you can see, in order to perform the installation and system update, we must invoke commands with <code class="literal">sudo</code>. By default, Travis does not let you execute <code class="literal">sudo</code> commands in order to prevent accidental damage by non-trustworthy scripts. But you can tell Travis explicitly that your script uses <code class="literal">sudo</code>, which means that you are aware of what are you doing. Just add the following lines to your <code class="literal">.travis.yml</code> files:</p>


<pre class="programlisting">sudo: required 
dist: trusty  
</pre>



<p className="it">Ahora toda su <code className="literal">.travis.yml</code> archivo debe ser similar al siguiente:</p>


<p className="p">Now your whole <code class="literal">.travis.yml</code> file should look like the following:</p>


<pre class="programlisting">//.travis.yml 
language: node_js 
<span class="strong"><strong>sudo: required 
dist: trusty</strong></span> 
node_js: 
  - "5.11.0" 
 
before_script: 
  - export CHROME_BIN=/usr/bin/google-chrome 
  - sudo apt-get update 
  - sudo apt-get install -y libappindicator1 fonts-liberation 
  - wget https://dl.google.com/linux/direct/google-chrome-
    stable_current_amd64.deb 
  - sudo dpkg -i google-chrome*.deb 
</pre>


<p className="it">Trate de cometerlo y comprobar su tablero de instrumentos Travis.</p>


<p className="p">Try to commit it and check your Travis dashboard.</p>

<p className="it">¡Oh no! Se vuelve a fallar. Esta vez, parece ser cuestión de tiempo de espera:</p>


<p className="p">Oh no! It fails again. This time, it seems to be timeout issue:</p>






<div class="mediaobject"><img src="../Images/image00321.jpeg" width="100%" alt="Setting continuous integration with Travis"/></div>



<p className="it">Incluso después de la instalación de Chrome, en silencio pruebas fallan debido al tiempo de espera</p>


<p className="p">Even after installing Chrome, tests silently fail due to the timeout</p>




<p className="it">¿Por qué sucedió? Recordemos lo que realmente sucede cuando nos encontramos nuestras pruebas de extremo a extremo. Cada prueba se abre el navegador y luego realiza clics, insumos y otras cosas para probar nuestra interfaz de usuario. La palabra clave de la última frase es <span className="emphasis"><em>la interfaz de usuario</em></span> . Si tenemos que probar una interfaz de usuario, necesitamos una <span className="strong"><strong>interfaz gráfica de usuario</strong></span> ( <span className="strong"><strong>GUI</strong></span> ). Travis imágenes virtuales no tienen pantallas gráficas. Por lo tanto, no hay manera de que puedan abrir el navegador y mostrar nuestras interfaces de usuario en el mismo. Afortunadamente para nosotros, no es una cosa agradable llamada <span className="emphasis"><em>Xvfb - X framebuffer virtual</em></span> .</p>


<p className="p">Why did it happen? Let's recall what actually happens when we run our end-to-end tests. Each test opens the browser and then performs clicks, inputs, and other things to test our UI. The keyword of the last sentence is <span class="emphasis"><em>UI</em></span>. If we need to test a UI, we need a <span class="strong"><strong>graphical user interface</strong></span> (<span class="strong"><strong>GUI</strong></span>). Travis virtual images do not have graphical displays. Thus, there is no way that they can open the browser and display our UIs&nbsp;in it. Fortunately for us, there is a nice thing called <span class="emphasis"><em>Xvfb - X virtual framebuffer</em></span>.</p>



<p className="it">Xvfb es un servidor de entrada que implementa el protocolo utilizado por las pantallas físicas. Todas las operaciones gráficas necesarias se realizan en la memoria; Por lo tanto, no hay necesidad de tener pantallas físicas. Por lo tanto, podemos ejecutar un servidor Xvfb que proporcionará un entorno gráfico virtual para nuestras pruebas. Y si usted lee cuidadosamente la documentación Travis, se dará cuenta de que esto es exactamente lo que sugiere como una forma de ejecutar las pruebas que requieren GUI: <a className="ulink" href="https://docs.travis-ci.com/user/gui-and-headless-browsers/#Using-xvfb-to-Run-Tests-That-Require-a-GUI">https://docs.travis-ci.com/user/gui-and-headless-browsers / # Usando-XVFB-to-Run-Tests-Que-Requerir-a-GUI</a> . Así que abre los <code className="literal">.travis.yml</code> archivos y añadí lo siguiente a la <code className="literal">before_script</code> sección:</p>


<p className="p">Xvfb is a display server that implements the protocol used by the physical displays. All needed graphical operations are performed in memory; thus, there is no need of having physical displays. Therefore, we can run an Xvfb server that will provide a virtual graphical environment to our tests. And if you carefully read the Travis documentation, you will find that this is exactly what it suggests as a way of running tests that require GUI: 
<a class="ulink" href="https://docs.travis-ci.com/user/gui-and-headless-browsers/#Using-xvfb-to-Run-Tests-That-Require-a-GUI">https://docs.travis-ci.com/user/gui-and-headless-browsers/#Using-xvfb-to-Run-Tests-That-Require-a-GUI</a>
. So open the <code class="literal">.travis.yml</code> files and add the following to the <code class="literal">before_script</code> section:</p>


<pre class="programlisting">  - export DISPLAY=:99.0 
  - sh -e /etc/init.d/xvfb start 
</pre>



<p className="it">El archivo completo YML ahora se ve como la siguiente:</p>


<p className="p">The whole&nbsp;YML&nbsp;file now looks like the following:</p>


<pre class="programlisting">//.travis.yml 
language: node_js 
sudo: required 
dist: trusty 
node_js: 
  - "5.11.0" 
 
before_script: 
  - export CHROME_BIN=/usr/bin/google-chrome 
  - sudo apt-get update 
  - sudo apt-get install -y libappindicator1 fonts-liberation 
  - wget https://dl.google.com/linux/direct/google-chrome-
    stable_current_amd64.deb 
  - sudo dpkg -i google-chrome*.deb 
  - export DISPLAY=:99.0 
  - sh -e /etc/init.d/xvfb start 
</pre>



<p className="it">Cometerlo y comprobar su tablero de instrumentos Travis. La aplicación Pomodoro fue construido con éxito!</p>


<p className="p">Commit it and check your Travis dashboard. The Pomodoro application was built successfully!</p>



<div class="mediaobject"><img src="../Images/image00322.jpeg" width="100%" alt="Setting continuous integration with Travis"/></div>




<p className="it">La aplicación Pomodoro construido con éxito!</p>


<p className="p">The Pomodoro application built with success!</p>



<p className="it">Sin embargo, la acumulación de la aplicación lista de la compra ha fallado. Tenga en cuenta que Travis incluso cambia el color del título de la pestaña para cada uno de los estados de construcción:</p>


<p className="p">However, the shopping list application's build has failed. Note that Travis even changes the tab's title color for each of the build states:</p>


<div class="mediaobject"><img src="../Images/image00323.jpeg" width="100%" alt="Setting continuous integration with Travis"/></div>


<p className="it">Travis cambia el icono en el título de la pestaña de acuerdo con el estado de construcción</p>


<p className="p">Travis changes the icon on the tab's title according to the build state</p>



<p className="it">Entonces, ¿qué está sucediendo con la aplicación lista de la compra construir? Hay un paso en la prueba de extremo a extremo que comprueba la <strong className="userinput"><code>Groceries</code></strong>título estar presente en la página. El caso es que este título viene de nuestro servidor back-end que deben procesarse con el <code className="literal">npm run server</code> comando. ¿Recuerdas lo implementamos en <a className="link" title="Capítulo 6. Plugins - Construcción de su casa con sus propios ladrillos" href="part0061.xhtml#aid-1Q5IA1">el capítulo 6</a> , <span className="emphasis"><em>Plugins - Construcción de su casa con sus propios ladrillos</em></span> , utilizando el <code className="literal">vue-resource</code> plugin? Esto significa que antes de construir la aplicación, tenemos que decirle a Travis a ejecutar nuestro pequeño servidor. Sólo tiene que añadí la siguiente línea al <code className="literal">.travis.yml</code> archivo de la solicitud de lista de la compra:</p>


<p className="p">So what is happening with the shopping list application build? There's a step in the end-to-end test that checks for the <strong class="userinput"><code>Groceries</code></strong> title being present on the page. The thing is that this title comes from our backend server that should be run with the&nbsp;<code class="literal">npm run server</code> command. Do you remember we implemented it in <a class="link" title="Chapter&nbsp;6.&nbsp;Plugins &ndash; Building Your House with Your Own Bricks" href="part0061.xhtml#aid-1Q5IA1">Chapter 6</a>, <span class="emphasis"><em>Plugins &ndash; Building Your House with Your Own Bricks</em></span>, using the <code class="literal">vue-resource</code> plugin? This means that before building the application, we need to tell Travis to run our small server. Just add the following line to the <code class="literal">.travis.yml</code> file of the shopping list application:</p>


<pre class="programlisting">- nohup npm run server &amp; 
</pre>



<p className="it">Confirmar los cambios y comprobar Travis salpicadero. La acumulación pasó! Todo es verde y estamos felices (al menos yo soy, y espero que la construcción satisfactoria hace feliz también). Ahora bien, sería bueno si pudiéramos decirle al mundo que nuestra construye están pasando. Podemos hacerlo añadiendo el botón Travis a nuestros <code className="literal">README.md</code> archivos. Esto nos permitirá ver inmediatamente el estado de construcción en la página GitHub del proyecto.</p>


<p className="p">Commit your changes and check Travis dashboard. The build passed! Everything is green and we are happy (at least I am, and I hope that successful build makes you happy as well). Now it would be nice if we could tell the world that our builds are passing. We can do it by adding the Travis button to our <code class="literal">README.md</code> files. This will allow us to immediately see the build status on the project's GitHub page.</p>


<p className="it">Haga clic en el <strong className="userinput"><code>build passing</code></strong>botón en la página de Travis de su aplicación, compruebe la <strong className="userinput"><code>Markdown</code></strong>opción de la segunda lista desplegable, y copie el texto generado al <code className="literal">README.md</code> archivo:</p>


<p className="p">Click on the <strong class="userinput"><code>build passing</code></strong> button on the Travis page of your application, check the <strong class="userinput"><code>Markdown</code></strong> option from the second drop-down list, and copy the generated text to the <code class="literal">README.md</code> file:</p>



<div class="mediaobject"><img src="../Images/image00324.jpeg" width="100%" alt="Setting continuous integration with Travis"/></div>




<p className="it">Haga clic en el botón Generar, seleccione la opción de rebajas que pasa desde el segundo desplegable, y copiar el texto en el archivo README.md</p>


<p className="p">Click on the build passing button, select option Markdown from the second drop-down, and copy the text to the README.md file</p>



<p className="it">Mira lo bien que se ve en el archivo README en la página de GitHub de nuestro proyecto:</p>


<p className="p">Look how nice it looks in the README file on the GitHub page of our project:</p>


<div class="mediaobject"><img src="../Images/image00325.jpeg" width="100%" alt="Setting continuous integration with Travis"/></div>




<p className="it">El botón Travis se ve muy elegante en el archivo README del proyecto en su página de GitHub</p>


<p className="p">The Travis button looks really fancy in the README file of the project on its GitHub page</p>


<p className="it">Ahora que nuestras aplicaciones se comprueban en cada comprometerse y por lo tanto tenemos seguro garantiza su calidad, que finalmente les podemos desplegar en el lugar de acceso público.</p>


<p className="p">Now that our applications are being checked on each commit and therefore we have for sure guaranteed their quality, we can finally deploy them to the publicly accessible place.</p>



<p className="it">Antes de iniciar el proceso de despliegue, por favor crea una cuenta en Heroku (<a className="ulink" href="https://signup.heroku.com/dc">https://signup.heroku.com/dc</a> ) e instalar Heroku Toolbelt (<a className="ulink" href="https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up">https://devcenter.heroku.com/articles/getting-started-with-nodejs # set-up</a> ).</p>


<p className="p">Before starting the process of deployment, please create an account at Heroku (
<a class="ulink" href="https://signup.heroku.com/dc">https://signup.heroku.com/dc</a>
) and install Heroku Toolbelt (
<a class="ulink" href="https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up">https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up</a>
).</p>


<p className="it">Ahora estamos listos para implementar nuestros proyectos.</p>


<p className="p">Now we are ready to deploy our projects.</p>

</div>
</div>
</div>
<div className='col-md-3'></div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Deploying the Pomodoro application</title><div className="section" title="Deploying the Pomodoro application"><div class="titlepage" id="aid-28FAO2"><div><div><h1 className="title"><a id="ch08lvl1sec67"></a>Deploying the Pomodoro application</h1></div></div></div>



<p className="it">Vamos a empezar añadiendo nueva aplicación a nuestra cuenta Heroku. Haga clic en el <strong className="userinput"><code>Create New App</code></strong>botón en el salpicadero Heroku. Podes crear su propio nombre o deje en blanco el campo de entrada Nombre, y Heroku va a crear un nombre para ti. Voy a llamar a mi solicitud <span className="emphasis"><em>catodoro</em></span> porque es Pomodoro que tiene gatos!</p>


<p className="p">Let's start by adding new application to our Heroku account. Click on the <strong class="userinput"><code>Create New App</code></strong> button on the Heroku dashboard. You can create your own name or leave the name input field blank, and Heroku will create a name for you. I will call my application <span class="emphasis"><em>catodoro</em></span> because it is Pomodoro that has cats!</p>

<div class="mediaobject"><img src="/static/image00326.jpeg" width="100%" alt="Deploying the Pomodoro application"/></div>



<p className="it">Creación de una nueva aplicación con Heroku</p>


<p className="p">Creating a new app with Heroku</p>



<p className="it">Clic en el <strong className="userinput"><code>Create App</code></strong>botón y se procederá a la página, la elección de una tubería de implementación para su aplicación. Elegir el método de GitHub, y luego desde el desplegable de sus proyectos de GitHub propuesto, elegir el proyecto que queremos implementar:</p>


<p className="p">Click on the <strong class="userinput"><code>Create App</code></strong> button and you will proceed to the page, choosing a deployment pipeline for your application. Choose the GitHub method, and then from the proposed drop-down of your GitHub projects, choose the project that we want to deploy:</p>


<div class="mediaobject"><img src="/static/image00327.jpeg" width="100%" alt="Deploying the Pomodoro application"/></div>


<p className="it">Elegir el método de GitHub de despliegue y seleccione el proyecto correspondiente de sus proyectos de GitHub</p>


<p className="p">Choose the GitHub method of deployment and select the corresponding project from your GitHub projects</p>


<p className="it">Después de hacer clic en el <strong className="userinput"><code>Connect</code></strong>botón, hay dos cosas que podes que probablemente desee marcar son los <strong className="userinput"><code>Automatic deploys from master are enabled</code></strong>y <strong className="userinput"><code>Wait for CI to pass before deploy</code></strong>las opciones:</p>


<p className="p">After clicking on the <strong class="userinput"><code>Connect</code></strong> button, two things that you might probably want to check are the <strong class="userinput"><code>Automatic deploys from master are enabled</code></strong> and <strong class="userinput"><code>Wait for CI to pass before deploy</code></strong> options:</p>


<div class="mediaobject"><img src="/static/image00328.jpeg" width="100%" alt="Deploying the Pomodoro application"/></div>


<p className="it">Comproba la espera de CI que pasar antes de desplegar casilla de verificación y haga clic en el botón Habilitar automática despliega</p>


<p className="p">Check the Wait for CI to pass before deploy checkbox and click on the Enable Automatic Deploys button</p>

<p className="it">Todo está listo para realizar una primera implementación e incluso se podes hacer clic en el <strong className="userinput"><code>Deploy Branch</code></strong>botón, y Heroku intentará realizar una compilación, pero entonces, si se intenta abrir la aplicación en el navegador, no va a funcionar. Si usted se pregunta por qué, siempre se debe buscar en el registro continuo en el desempeño de tales operaciones.</p>


<p className="p">Everything is ready to perform a first deployment and you can even click on the <strong class="userinput"><code>Deploy Branch</code></strong> button, and Heroku will try to perform a build, but then, if you try to open the application in the browser, it will not work. If you wonder why, you should always look at the running log while performing such operations.</p>




<div className="section" title="Checking logs"><div className="titlepage"><div><div><h2 class="title"><a id="ch08lvl3sec12"></a>Checking logs</h2></div></div></div>


<p className="it">Espero que haya instalado correctamente el Heroku CLI (o Heroku cinturón de herramientas), por lo que ahora podes ejecutar <code className="literal">heroku</code> comandos en la línea de comandos. Vamos a comprobar los registros. Ejecutar el <code className="literal">heroku logs</code> comando en la shell:</p>


<p className="p">I hope you have successfully installed the Heroku CLI (or Heroku toolbelt), so now you can run <code class="literal">heroku</code> commands in your command line. Let's check the logs. Run the <code class="literal">heroku logs</code> command in your shell:</p>


<pre className="programlisting"><code>{`
<span class="strong"><strong>heroku logs --app catodoro --tail  
</strong></span>
`}</code></pre>


<p className="it">Verá un registro abierto mientras se Heroku intenta realizar una compilación. Y el error es <code className="literal">npm ERR! missing script: start</code>. No tenemos una <code className="literal">start</code> secuencia de comandos en nuestro <code className="literal">package.json</code> archivo.</p>


<p className="p">You will see a continuously running log while Heroku tries to perform a build. And the error is <code class="literal">npm ERR! missing script: start</code>. We don't have a <code class="literal">start</code> script in our <code class="literal">package.json</code> file.</p>


<p className="it">Esto es del todo cierto. Con el fin de crear un script de inicio, primero vamos a tratar de entender cómo crear y ejecutar una aplicación de Vue para la producción. El archivo README nos dice que tenemos que ejecutar el <code className="literal">npm run build</code> comando. Vamos a ejecutar de forma local y comprobar lo que sucede:</p>


<p className="p">This is entirely true. In order to create a start script, let's first try to understand how to build and run a Vue application for production. The README file tells us that we need to run the <code class="literal">npm run build</code> command. Let's run it locally and check what happens:</p>


<div class="mediaobject"><img src="/static/image00329.jpeg" width="100%" alt="Checking logs"/></div>


<p className="it">La salida del comando de generación NPM ejecutar</p>


<p className="p">The output of the npm run build command</p>


<p className="it">Así que sabemos que el resultado del comando de construcción va a la <code className="literal">dist</code> carpeta. Y también sabemos que tenemos que servir al <code className="literal">index.html</code> archivo desde esta carpeta mediante un servidor HTTP. También sabemos que tenemos que crear un <code className="literal">start</code> script en la <code className="literal">scripts</code> sección del <code className="literal">package.json</code> archivo, por lo Heroku sabe cómo ejecutar nuestra aplicación.</p>


<p className="p">So we know that the result of the build command goes to the <code class="literal">dist</code> folder. And we also know that we have to serve the <code class="literal">index.html</code> file from this folder using an HTTP server. We also know that we have to create a <code class="literal">start</code> script in the <code class="literal">scripts</code> section of the <code class="literal">package.json</code> file, so Heroku knows how to run our application.</p>




</div><div className="section" title="Preparing the application to run on Heroku"><div className="titlepage"><div><div><h2 class="title"><a id="ch08lvl3sec13"></a>Preparing the application to run on Heroku</h2></div></div></div>

<p className="it">Hemos sido capaces de reunir una gran cantidad de información mediante la comprobación del archivo de registro. También vamos a resumir aquí tubería de Heroku para el funcionamiento de la aplicación antes de proceder a los pasos para la implementación de la aplicación.</p>


<p className="p">We were able to gather a lot of information by checking the log file. Let's also summarize here Heroku's pipeline for running the application before proceeding to the steps for deploying the application.</p>


<p className="it">Así, Heroku hace lo siguiente:</p>


<p className="p">So, Heroku does the following:</p>




<div class="itemizedlist"><ul className="itemizedlist">


<li className="listit">Ejecuta el <code className="literal">npm install</code> script para instalar todas las dependencias necesarias (comprueba las dependencias de la <code className="literal">dependencies</code> sección del <code className="literal">package.json</code> archivo)</li>


<li className="listitem">Runs the <code class="literal">npm install</code> script to install all the needed dependencies (it checks the dependencies in the <code class="literal">dependencies</code> section of the <code class="literal">package.json</code> file)</li>


<li className="listit">Ejecuta el <code className="literal">npm start</code> script desde la <code className="literal">package.json</code> y sirve el resultado de la misma en la dirección web conocida</li>


<li className="listitem">Runs the <code class="literal">npm start</code> script from the <code class="literal">package.json</code> and serves the result of it on the known web address</li></ul></div>









<p className="it">Por lo tanto, teniendo en cuenta esta información y la información recogida a partir de los registros y ejecutar la <code className="literal">npm build</code> secuencia de comandos, tenemos que hacer lo siguiente:</p>


<p className="p">So, given this information and the information we gathered from the logs and running the <code class="literal">npm build</code> script, we need to do the following:</p>




<div class="itemizedlist"><ul className="itemizedlist">


<li className="listit">Heroku decirle a instalar todas las dependencias necesarias; por eso, tenemos que mover las dependencias del proyecto de la <code className="literal">devDependencies</code> sección a la <code className="literal">dependencies</code> sección en el <code className="literal">package.json </code> archivo de modo que todos ellos se instala Heroku</li>


<li className="listitem">Tell Heroku to install all the needed dependencies; for that, we need to move project dependencies from the <code class="literal">devDependencies</code> section to the <code class="literal">dependencies</code> section in the <code class="literal">package.json </code> file so that Heroku installs them all</li></ul></div><div class="itemizedlist"><ul className="itemizedlist">


<li className="listit">Dile a Heroku para ejecutar un script de compilación después de realizar <code className="literal">npm install</code>; por eso, tenemos que crear un <code className="literal">postinstall</code> script en el <code className="literal">package.json</code> archivo en el que vamos a llamar al <code className="literal">npm run build</code> comando.</li>


<li className="listitem">Tell Heroku to run a build script after performing <code class="literal">npm install</code>; for that, we need to create a <code class="literal">postinstall</code> script in the <code class="literal">package.json</code> file where we will call the <code class="literal">npm run build</code> command.</li>


<li className="listit">Creá un <code className="literal">server.js</code> archivo que sirve el <code className="literal">index.html</code> archivo de la <code className="literal">dist</code> carpeta</li>


<li className="listitem">Create a <code class="literal">server.js</code> file that serves the <code class="literal">index.html</code> file from the <code class="literal">dist</code> folder</li>


<li className="listit">Proporcionar una manera para Heroku para ejecutar la <code className="literal">server.js</code> secuencia de comandos; para esto, tenemos que crear un <code className="literal">start</code> script en el <code className="literal">package.json</code> archivo que se ejecuta la <code className="literal">server.js</code> secuencia de comandos</li>


<li className="listitem">Provide a way for Heroku to run the <code class="literal">server.js</code> script; for this, we need to create a <code class="literal">start</code> script in the <code class="literal">package.json</code> file that runs the <code class="literal">server.js</code> script</li></ul></div>









<p className="it">Comience moviendo todas las dependencias, excepto los que tienen que ver con las pruebas, de la <code className="literal">devDependencies</code> sección a la <code className="literal">dependencies</code> sección de nuestro <code className="literal">package.json</code> archivo:</p>


<p className="p">Start by moving all the dependencies, except the ones that have to do with testing, from the <code class="literal">devDependencies</code> section to the <code class="literal">dependencies</code> section of our <code class="literal">package.json</code> file:</p>




<pre className="programlisting"><code>{`"dependencies": { 
  "autoprefixer": "^6.4.0", 
  "babel-core": "^6.0.0", 
  "babel-eslint": "^7.0.0", 
  "babel-loader": "^6.0.0", 
  "babel-plugin-transform-runtime": "^6.0.0", 
  "babel-polyfill": "^6.16.0", 
  "babel-preset-es2015": "^6.0.0", 
  "babel-preset-stage-2": "^6.0.0", 
  "babel-register": "^6.0.0", 
  "chalk": "^1.1.3", 
  "connect-history-api-fallback": "^1.1.0", 
  "cross-spawn": "^4.0.2", 
  "css-loader": "^0.25.0", 
  "es6-promise": "^4.0.5", 
  "eslint": "^3.7.1", 
  "eslint-config-standard": "^6.1.0", 
  "eslint-friendly-formatter": "^2.0.5", 
  "eslint-loader": "^1.5.0", 
  "eslint-plugin-html": "^1.3.0", 
  "eslint-plugin-promise": "^2.0.1", 
  "eslint-plugin-standard": "^2.0.1", 
  "eventsource-polyfill": "^0.9.6", 
  "express": "^4.13.3", 
  "extract-text-webpack-plugin": "^1.0.1", 
  "file-loader": "^0.9.0", 
  "function-bind": "^1.0.2", 
  "html-webpack-plugin": "^2.8.1", 
  "http-proxy-middleware": "^0.17.2", 
  "inject-loader": "^2.0.1", 
  "isparta-loader": "^2.0.0", 
  "json-loader": "^0.5.4", 
  "lolex": "^1.4.0", 
  "opn": "^4.0.2", 
  "ora": "^0.3.0", 
  "semver": "^5.3.0", 
  "shelljs": "^0.7.4", 
  "url-loader": "^0.5.7", 
  "vue": "^2.0.1", 
  "vuex": "^2.0.0", 
  "vue-loader": "^9.4.0", 
  "vue-style-loader": "^1.0.0", 
  "webpack": "^1.13.2", 
  "webpack-dev-middleware": "^1.8.3", 
  "webpack-hot-middleware": "^2.12.2", 
  "webpack-merge": "^0.14.1" 
}, 
"devDependencies": { 
  "chai": "^3.5.0", 
  "chromedriver": "^2.21.2", 
  "karma": "^1.3.0", 
  "karma-coverage": "^1.1.1", 
  "karma-mocha": "^1.2.0", 
  "karma-phantomjs-launcher": "^1.0.0", 
  "karma-sinon-chai": "^1.2.0", 
  "karma-sourcemap-loader": "^0.3.7", 
  "karma-spec-reporter": "0.0.26", 
  "karma-webpack": "^1.7.0", 
  "mocha": "^3.1.0", 
  "nightwatch": "^0.9.8", 
  "phantomjs-prebuilt": "^2.1.3", 
  "selenium-server": "2.53.1", 
  "sinon": "^1.17.3", 
  "sinon-chai": "^2.8.0" 
} 
`}</code></pre>









<p className="it">Ahora vamos a crear un <code className="literal">postinstall</code> guión en el que diremos Heroku para ejecutar el <code className="literal">npm run build</code> script. En la <code className="literal">scripts</code> sección, añadí el <code className="literal">postinstall</code> script:</p>

<p className="p">Now let's create a <code class="literal">postinstall</code> script in which we will tell Heroku to run the <code class="literal">npm run build</code> script. In the <code class="literal">scripts</code> section, add the <code class="literal">postinstall</code> script:</p>

<pre className="programlisting"><code>{`  "<span class="strong"><strong>scripts</strong></span>": { 
    &lt;...&gt; 
    <span class="strong"><strong>"postinstall": "npm run build"</strong></span> 
  }, 
`}</code></pre>

<p className="it">Ahora vamos a crear un <code className="literal">server.js</code> archivo en el que vamos a servir al <code className="literal">index.html</code> archivo desde el <code className="literal">dist</code> directorio. Creá una <code className="literal">server.js file</code> en la carpeta del proyecto y agregue el siguiente contenido:</p>

<p className="p">Now let's create a <code class="literal">server.js</code> file in which we will serve the <code class="literal">index.html</code> file from the <code class="literal">dist</code> directory. Create a <code class="literal">server.js file</code> in the project's folder and add the following content:</p>

<pre className="programlisting"><code>{`// server.js 
var express = require('express'); 
var serveStatic = require('serve-static'); 
var app = express(); 
app.use(serveStatic(__dirname + '/dist')); 
var port = process.env.PORT || 5000; 
app.listen(port); 
console.log('server started '+ port); 
`}</code></pre>

<p className="it">Bien, ahora sólo tenemos que crear un <code className="literal">start</code> script en la <code className="literal">scripts</code> sección de nuestro <code className="literal">package.json</code> archivo y hemos terminado! Nuestra <code className="literal">start</code> secuencia de comandos debería simplemente correr <code className="literal">node server.js</code>, así que vamos a hacerlo:</p>

<p className="p">Okay, now we just need to create a <code class="literal">start</code> script in the <code class="literal">scripts</code> section of our <code class="literal">package.json</code> file and we are done! Our <code class="literal">start</code> script should just run <code class="literal">node server.js</code>, so let's do it:</p>

<pre className="programlisting"><code>{`  "<span class="strong"><strong>scripts</strong></span>": { 
    &lt;...&gt; 
    "postinstall": "npm run build", 
    <span class="strong"><strong>"start": "node server.js"</strong></span> 
  }, 
`}</code></pre>

<p className="it">Confirmar los cambios, vaya al panel de control Heroku, y haga clic en el <strong className="userinput"><code>Deploy Branch</code></strong>botón. No se olvide de comprobar los registros de funcionamiento!</p>

<p className="p">Commit your changes, go to the Heroku dashboard, and click on the <strong class="userinput"><code>Deploy Branch</code></strong> button. Do not forget to check running logs!</p>

<p className="it">Y yuppii! La construcción fue un éxito! Después de una construcción exitosa, se le invita a hacer clic en el <strong className="userinput"><code>View</code></strong>botón; no seas tímido, haga clic en él y verá su aplicación en acción!</p>

<p className="p">And yippee! The build was successful! After a successful build, you are invited to click the <strong class="userinput"><code>View</code></strong> button; don't be shy, click on it and you will see your application in action!</p>

<div class="mediaobject"><img src="/static/image00330.jpeg" width="100%" alt="Preparing the application to run on Heroku"/></div>

<p className="it">La aplicación Pomodoro se implementa con éxito a Heroku</p>

<p className="p">The Pomodoro application is successfully deployed to Heroku</p>

<p className="it">Ahora se podes utilizar la aplicación de Pomodoro en todas partes. Ahora usted podes pedir a sus amigos para utilizarla también simplemente les proporciona el enlace Heroku.</p>

<p className="p">Now you can use your Pomodoro application everywhere. Now you can ask your friends to use it as well by simply providing them the Heroku link.</p>

<p className="it">Bueno, felicitaciones! Usted acaba de haber implementado su aplicación Vue, y que podes ser utilizado por todos. Qué bonito es?</p>

<p className="p">Well, congratulations! You've just deployed your Vue application, and it can be used by everyone. How nice is it?</p>

</div></div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Deploying the shopping list application</title><div className="titlepage"><div><div><h1 className="title"><a id="ch08lvl1sec68"></a>Deploying the shopping list application</h1></div></div></div>

<p className="it">Con el fin de desplegar nuestra aplicación lista de compras, tenemos que realizar exactamente los mismos pasos que hemos hecho con la aplicación Pomodoro.</p>

<p className="p">In order to deploy our shopping list application, we need to perform exactly the same steps as we have done with the Pomodoro application.</p>

<p className="it">Creá una nueva aplicación en su tablero de instrumentos Heroku y conectarlo a su proyecto de lista de la compra GitHub. Después de eso, copiar el <code className="literal">server.js</code> archivo desde la aplicación Pomodoro, frente a las dependencias en el <code className="literal">package.json</code> archivo, y crear <code className="literal">postinstall</code> y <code className="literal">start</code> guiones.</p>

<p className="p">Create a new application on your Heroku dashboard and connect it to your GitHub shopping list project. After that, copy the <code class="literal">server.js</code> file from the Pomodoro application, deal with the dependencies in the <code class="literal">package.json</code> file, and create <code class="literal">postinstall</code> and <code class="literal">start</code> scripts.</p>

<p className="it">Sin embargo, aún tenemos un paso izquierda. No se olvide de nuestro servidor back-end que sirve a la API REST para las listas de la compra. Tenemos que correr también.</p>

<p className="p">However, we still have one step left. Do not forget about our backend server that serves the REST API for the shopping lists. We need to run it as well.</p>

<p className="it">O mejor aún, ¿por qué necesitamos para ejecutar dos servidores si podemos tener un solo servidor que lo hace todo? Podemos integrar nuestro servidor JSON con nuestro servidor expreso dotándolo la ruta de enrutamiento para servir a la lista de puntos finales compras, digamos <code className="literal">api</code>. Abrir el <code className="literal">server.js</code> archivo, importar la <code className="literal">jsonServer</code> dependencia de allí, y decirle a la aplicación expreso para utilizarlo. Por lo tanto, el <code className="literal">server.js</code> archivo se verá como la siguiente:</p>

<p className="p">Or even better, why do we need to run two servers if we can have just one server that does everything? We can integrate our JSON server with our express server by providing it the routing path to serve the shopping list endpoint, let's say <code class="literal">api</code>. Open the <code class="literal">server.js</code> file, import the <code class="literal">jsonServer</code> dependency there, and tell the express app to use it. So, your <code class="literal">server.js</code> file will look like the following:</p>

<pre className="programlisting"><code>{`//server.js 
var express = require('express'); 
<span class="strong"><strong>var jsonServer = require('json-server');</strong></span> 
var serveStatic = require('serve-static'); 
var app = express(); 
 
app.use(serveStatic(__dirname + '/dist')); 
<span class="strong"><strong>app.use('/api', jsonServer.router('server/db.json'));</strong></span> 
var port = process.env.PORT || 5000; 
app.listen(port); 
console.log('server started '+ port); 
`}</code></pre>

<p className="it">Con la línea anterior, le decimos a nuestra aplicación expreso para utilizar <code className="literal">jsonServer</code> y servir a los <code className="literal">db.json</code> archivos a través de <code className="literal">/api/</code> punto final.</p>

<p className="p">With the preceding line, we tell our express app to use <code class="literal">jsonServer</code> and serve the <code class="literal">db.json</code> file over the <code class="literal">/api/</code> endpoint.</p>

<p className="it">También hay que cambiar la dirección del punto final en nuestro <code className="literal">Vue</code> recurso. Abra <code className="literal">index.js</code> en la carpeta de API y reemplazar <code className="literal">localhost:3000</code> con un <code className="literal">api</code> prefijo:</p>

<p className="p">We should also change the endpoint's address in our <code class="literal">Vue</code> resource. Open <code class="literal">index.js</code> in the API folder and replace <code class="literal">localhost:3000</code> with an <code class="literal">api</code> prefix:</p>

<pre className="programlisting"><code>{`const ShoppingListsResource = Vue.resource('api/' + 'shoppinglists{/id}') 
`}</code></pre>

<p className="it">También hay que añadí soporte para el servidor JSON a <code className="literal">dev-server.js</code>; de lo contrario, no vamos a ser capaces de ejecutar la aplicación en modo de desarrollo. Por lo tanto, abrir el <code className="literal">build/dev-server.js</code> archivo, importar <code className="literal">jsonServer</code>, y decirle a la aplicación expresa a utilizarlo:</p>

<p className="p">We should also add JSON server support to <code class="literal">dev-server.js</code>; otherwise, we will not be able to run the application in development mode. So, open the <code class="literal">build/dev-server.js</code> file, import <code class="literal">jsonServer</code>, and tell the express app to use it:</p>

<pre className="programlisting"><code>{`//dev-server.js 
var path = require('path') 
var express = require('express') 
<span class="strong"><strong>var jsonServer = require('json-server')</strong></span> 
&lt;...&gt; 
// compilation error display 
app.use(hotMiddleware) 
 
<span class="strong"><strong>// use json server 
app.use('/api', jsonServer.router('server/db.json'));</strong></span> 
&lt;...&gt; 
`}</code></pre>

<p className="it">Intente ejecutar la aplicación en modo dev ( <code className="literal">npm run dev</code>). Todo funciona bien.</p>

<p className="p">Try to run the application in dev mode (<code class="literal">npm run dev</code>). Everything works fine.</p>

<p className="it">Ahora también podes quitar el comando de servidor que ejecuta ( <code className="literal">- nohup npm run server &amp;</code>) del <code className="literal">travis.yml</code> archivo. También podes eliminar la secuencia de comandos del servidor de <code className="literal">package.json</code>.</p>

<p className="p">You can now also remove the server running command (<code class="literal">- nohup npm run server &amp;</code>) from the <code class="literal">travis.yml</code> file. You can also remove the server script from <code class="literal">package.json</code>.</p>

<p className="it">Ejecutar las pruebas a nivel local y comprobar que no están fallando.</p>

<p className="p">Run tests locally and check that they are not failing.</p>

<p className="it">Casi terminamos. Vamos a probar nuestra aplicación localmente.</p>

<p className="p">We are almost done. Let's try our application locally.</p><div className="section" title="Trying Heroku locally"><div className="titlepage"><div><div><h2 class="title"><a id="ch08lvl3sec14"></a>Trying Heroku locally</h2></div></div></div>

<p className="it">A veces se pone un montón de intentar quebrar iteraciones para hacer las cosas de trabajo. Nosotros intentamos algo, COMMIT, empuje, tratar de implementar, ver si funciona. Nos damos cuenta de que nos hemos olvidado de algo, comprometerse, empujar, tratamos de implementar, ver el registro de errores. Hacerlo una y otra vez. Podría ser realmente mucho tiempo porque las cosas más de la red toman tiempo! Afortunadamente para nosotros, la Heroku CLI proporciona una forma de ejecutar la aplicación localmente como ya se implementa en el servidor Heroku. Sólo tiene que ejecutar el <code className="literal">heroku local web</code> comando justo después de la construcción de la aplicación:</p>

<p className="p">Sometimes it gets a lot of try-fail iterations to get things work. We try something, commit, push, try to deploy, see whether it works. We realize that we have forgotten about something, commit, push, try to deploy, see the error log. Do it again and again. It might be really time-consuming because things over the network take time! Fortunately for us, the Heroku CLI provides a way to run the application locally as it was already deployed to the Heroku server. You just need to run the <code class="literal">heroku local web</code> command right after building the application:</p><pre className="programlisting"><code>{`
<span class="strong"><strong>npm run build 
heroku local web  
</strong></span>
`}</code></pre>

<p className="it">Intentalo.</p>

<p className="p">Try it.</p>

<p className="it">Abra <code className="literal">http://localhost:5000</code> en su navegador. ¡Si, funciona!</p>

<p className="p">Open <code class="literal">http://localhost:5000</code> in your browser. Yes, it works!</p>

<div class="mediaobject"><img src="/static/image00331.jpeg" width="100%" alt="Trying Heroku locally"/></div>

<p className="it">Ejecución de la aplicación a nivel local con el comando web local Heroku. ¡Funciona!</p>

<p className="p">Running the application locally with the Heroku local web command. It works!</p>

<p className="it">Ahora vamos a cometer y empujar los cambios.</p>

<p className="p">Let's now commit and push the changes.</p>

<p className="it">Ahora se podes esperar a que la correcta construcción Travis y despliegue automático mediante Heroku después de eso, o podes simplemente abrir su panel de control Heroku y haga clic en el <strong className="userinput"><code>Deploy Branch</code></strong>botón. Espera un poco. ¡Y funciona! Este es el resultado de dos despliegues que realizan hoy en día:</p>

<p className="p">Now you can wait for the successful Travis build and automatic deploy by Heroku after that, or you can just open your Heroku dashboard and click on the <strong class="userinput"><code>Deploy Branch</code></strong> button. Wait a bit. And ... it works! Here is the result of two deployments we performed today:</p><div class="itemizedlist"><ul className="itemizedlist"><li className="listitem"><span class="strong"><strong>Pomodoro application</strong></span>: 
<a class="ulink" href="https://catodoro.herokuapp.com/">https://catodoro.herokuapp.com/</a></li><li className="listitem"><span class="strong"><strong>Shopping list application</strong></span>: 
<a class="ulink" href="https://shopping-list-vue.herokuapp.com/">https://shopping-list-vue.herokuapp.com/</a></li></ul></div>

<p className="it">Los respectivos repositorios de GitHub se pueden encontrar en 
 <a className="ulink" href="https://github.com/chudaol/Pomodoro">https://github.com/chudaol/Pomodoro</a> 
 y 
 <a className="ulink" href="https://github.com/chudaol/ShoppingList">https://github.com/chudaol/ShoppingList</a> 
.</p>

<p className="p">The respective GitHub repositories can be found at 
<a class="ulink" href="https://github.com/chudaol/Pomodoro">https://github.com/chudaol/Pomodoro</a>
 and 
<a class="ulink" href="https://github.com/chudaol/ShoppingList">https://github.com/chudaol/ShoppingList</a>
.</p>

<p className="it">Tenedor, jugar, probar, implementar. En este momento, tiene todos los instrumentos necesarios para mejorar, mejorar y mostrar estas aplicaciones a todo el mundo. Gracias por estar conmigo a través de este emocionante viaje!</p>

<p className="p">Fork, play, test, deploy. At this moment, you have all the instruments needed to enhance, improve, and show these applications to the whole world. Thank you for being with me through this exciting journey!</p></div></div>

</div>
<div className='col-md-3'></div>

</div>  
   
  
  
  </Layout>
  )