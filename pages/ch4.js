import Layout from '../components/layout'
import _JSXStyle from 'styled-jsx/style'
import Link from 'next/link'


export default () => (
  <Layout title='ch37'>
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

<title>Chapter 4. Reactivity - Binding Data to Your Application</title>

<link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div class="chapter" title="Chapter 4. Reactivity - Binding Data to Your Application" id="aid-1BRPS1"><div className="titlepage"><div><div><h1 className="title"><a id="ch04"></a>Chapter 4. Reactivity - Binding Data to Your Application</h1></div></div></div>
<p className="it">En el capítulo anterior, que ha aprendido uno de los conceptos más importantes de Vue.js: componentes. Ya viste cómo crear componentes, cómo registrarse, cómo invocar, y cómo utilizar y reutilizarlos. También ha aprendido el concepto de los componentes de un único archivo e incluso los utilizó en la lista de compras y aplicaciones Pomodoro.</p>
<p className="p">In the previous chapter, you learned one of the most important concepts of Vue.js: components. You saw how to create components, how to register, how to invoke, and how to use and reuse them. You also learned the concept of single-file components and even used them in the shopping list and Pomodoro applications.</p>
<p className="it">En este capítulo, vamos a profundizar en el concepto de enlace de datos. Ya hemos hablado de ello antes, por lo que ya están familiarizados con ella. Vamos a enlazar datos de todas las maneras posibles en nuestros componentes.</p>
<p className="p">In this chapter, we will go deeper into the concept of data binding. We have already talked about it earlier, so you are already familiar with it. We will bind data in all possible ways in our components.</p>
<p className="it">Sumando hasta que, en este capítulo, vamos a:</p>
<p className="p">Summing it up, in this chapter, we are going to:</p><div class="itemizedlist"><ul className="itemizedlist">

<li className="listit">Revisar la sintaxis de enlace de datos</li>

<li className="listitem">Revisit the data binding syntax</li>

<li className="listit">Aplicar el enlace de datos en nuestras aplicaciones</li>

<li className="listitem">Apply data binding in our applications</li>

<li className="listit">Iterar sobre la disposición de elementos y hacer que cada elemento utilizando la misma plantilla con datos diferente</li>

<li className="listitem">Iterate over the array of elements and render each element using the same template with different data</li>

<li className="listit">Revisar y aplicar las abreviaturas de datos y eventos de unión en nuestras aplicaciones</li>

<li className="listitem">Revisit and apply the shorthands of data and events binding in our applications</li>

</ul></div><div className="section" title="Revisiting data binding"><div className="titlepage"><div><div><h1 className="title"><a id="ch04lvl1sec37"></a>Revisiting data binding</h1></div></div></div>
<p className="it">Hemos estado hablando de enlace de datos y la reactividad de comenzar desde el primer capítulo. Por lo tanto, usted ya sabe que el enlace de datos es un mecanismo de propagación de los cambios de los datos a la capa visible y viceversa. En este capítulo, volveremos a examinar cuidadosamente todas las diferentes formas de enlace de datos y aplicarlas en nuestras aplicaciones.</p>
<p className="p">We have been talking about data binding and reactivity starting from the very first chapter. So, you already know that data binding is a mechanism of propagating changes from the data to the visible layer and vice versa. In this chapter, we will carefully revisit all the different ways of data binding and apply them in our applications.</p></div></div>




</div></div>
<div className='col-md-3'></div>


<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Interpolating data</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Interpolating data" id="aid-1CQAE1"><div className="titlepage"><div><div><h1 className="title"><a id="ch04lvl1sec38"></a>Interpolating data</h1></div></div></div>


<p className="it">Imaginemos el siguiente fragmento de código HTML:</p>

<p className="p">Let's imagine the following piece of HTML code:</p>


<pre className="programlisting"><code>{`&lt;div id="hello"&gt;&lt;/div&gt; 
`}</code></pre>

<p className="it">Además, imaginar el siguiente objeto JavaScript:</p>

<p className="p">Also, imagine the following JavaScript object:</p>

<pre className="programlisting"><code>{`var data = { 
  msg: 'Hello' 
}; 
`}</code></pre>

<p className="it">¿Cómo podemos hacer que los valores de las entradas de datos en la página? ¿Cómo podemos acceder de manera que podamos utilizarlos dentro de nuestro HTML? En realidad, hemos estado haciendo esto mucho con Vue.js durante los dos últimos capítulos. No hay ningún problema en entender y hacer una y otra vez.</p>

<p className="p">How can we render the values of data entries on the page? How can we access them so that we can use them inside our HTML? Actually, we have been doing this a lot with Vue.js during the last two chapters. There is no problem in understanding and doing it again and again.</p><div class="blockquote"><blockquote class="blockquote">

<p className="it"> <span className="emphasis"><em>"Repetitio est mater studiorum"</em></span> </p>

<p className="p">
<span class="emphasis"><em>"Repetitio est mater studiorum"</em></span>
</p></blockquote></div>

<p className="it">Si ya eres un profesional de la interpolación de datos, omita esta sección y continúe con las expresiones y filtros.</p>

<p className="p">If you are already a professional of data interpolation, just skip this section and proceed to the expressions and filters.</p>

<p className="it">Por lo tanto, ¿qué debemos hacer para poblar el <code className="literal">&lt;div&gt;</code> con el valor de <code className="literal">msg</code>? Si vamos a la antigua usanza jQuery, probablemente hacer algo como lo siguiente:</p>

<p className="p">So, what should we do to populate the <code class="literal">&lt;div&gt;</code> with the value of <code class="literal">msg</code>? If we go the old-fashioned jQuery way, we would probably do something like the following:</p>



<pre className="programlisting"><code>{`$("#hello").text(data.msg); 
`}</code></pre>

<p className="it">Pero entonces, durante el tiempo de ejecución, si cambia el valor de <code className="literal">msg</code> y si quieres que este cambio se propaga a la DOM, debe hacerlo de forma manual. Simplemente cambiando el <code className="literal">data.msg</code>valor, no pasará nada.</p>

<p className="p">But then, during runtime, if you change the value of <code class="literal">msg</code> and if you want this change to be propagated to the DOM, you must do it manually. By simply changing the <code class="literal">data.msg</code> value, nothing will happen.</p>

<p className="it">Por ejemplo, vamos a escribir el siguiente código:</p>

<p className="p">For example, let's write the following code:</p>

<pre className="programlisting"><code>{`var data = { 
  msg: 'Hello' 
}; 
$('#hello').text(data.msg); 
data.msg = 'Bye'; 
`}</code></pre>

<p className="it">A continuación, el texto que aparecerá en la <code className="literal">&lt;div&gt;</code>voluntad, por supuesto, ser <code className="literal">Hello</code>. Marque esta jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/uevnd0e4/">https://jsfiddle.net/chudaol/uevnd0e4/</a> .</p>

<p className="p">Then the text that will appear in the <code class="literal">&lt;div&gt;</code> will, of course, be <code class="literal">Hello</code>. Check this JSFiddle at  
<a class="ulink" href="https://jsfiddle.net/chudaol/uevnd0e4/">https://jsfiddle.net/chudaol/uevnd0e4/</a>.
</p>

<p className="it">Con Vue, la interpolación más sencilla se realiza con <code>{`{{ }}`}</code>(manillar anotación). En nuestro ejemplo, podríamos escribir el código HTML siguiente:</p>

<p className="p">With Vue, the simplest interpolation is done with <code>{`{{ }}`}</code> (handlebars annotation). In our example, we would write the following HTML code:</p>

<pre className="programlisting"><code>{`&lt;div id="hello"&gt;<span class="strong"><strong>{{ msg }}</strong></span>&lt;/div&gt; 
`}</code></pre>

<p className="it">El contenido de la <code className="literal">&lt;div&gt;</code> por lo tanto se llega a unir a los <code className="literal">msg</code> datos. Cada vez que los <code className="literal">msg</code> cambios, el contenido de los <code className="literal">div</code> cambios de forma automática después de su contenido. Echar un vistazo al ejemplo jsFiddle en <a className="ulink" href="https://jsfiddle.net/chudaol/xuvqotmq/1/">https://jsfiddle.net/chudaol/xuvqotmq/1/</a> . <code className="literal">data.msg</code>También se cambia después de la creación de instancias Vue. El valor que aparece en la pantalla es el nuevo!</p>

<p className="p">The content of the <code class="literal">&lt;div&gt;</code> thus becomes bound to the <code class="literal">msg</code> data. Each time <code class="literal">msg</code> changes, the content of the <code class="literal">div</code> changes automatically following its content. Have a look at the jsfiddle example at 
<a class="ulink" href="https://jsfiddle.net/chudaol/xuvqotmq/1/">https://jsfiddle.net/chudaol/xuvqotmq/1/</a>
. <code class="literal">data.msg</code> is also changed after the Vue instantiation. The value that appears on the screen is the new one!</p>

<p className="it">Todavía es la interpolación de unión de una sola vía. Si cambiamos el valor en el DOM, nada va a pasar a los datos. Sin embargo, si sólo tenemos los valores de los datos que aparecen en el DOM y para ser cambiados en consecuencia, es un enfoque perfecto y válido.</p>

<p className="p">It is still one-way binding interpolation. If we change the value in the DOM, nothing will happen to data. Still, if we only need the values of the data to appear in the DOM and to be changed accordingly, it is a perfect and valid approach.</p>

<p className="it">En este momento, debe ser muy claro que si queremos utilizar los valores del <code className="literal">data</code> objeto dentro de la plantilla, hay que rodearlos <code>{`{{}}`}</code>.</p>

<p className="p">At this moment, it should be really clear that if we want to use the values of the <code class="literal">data</code> object inside the template, we should surround them with <code>{`{{}}`}</code>.</p>

<p className="it">Vamos a añadí las interpolaciones que faltan para nuestra aplicación Pomodoro. Por favor, compruebe la situación actual en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro">Capítulo 4 / pomodoro</a> carpeta. Si ejecuta <code className="literal">npm run dev</code> y echar un vistazo a la página abierta, se verá que la página tiene el siguiente aspecto:</p>

<p className="p">Let's add the missing interpolations to our Pomodoro application. Please check the current situation in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro">chapter4/pomodoro</a> folder. If you run <code class="literal">npm run dev</code> and have a look at the opened page, you will see that the page looks like the following:</p>

<div class="mediaobject"><img src="/static/image00273.jpeg" width="100%" alt="Interpolating data"/></div>

<p className="it">Missing interpolaciones en nuestra aplicación Pomodoro</p>

<p className="p">Missing interpolations in our Pomodoro application</p>

<p className="it">Desde el primer vistazo a la página, somos capaces de identificar lo que falta allí.</p>

<p className="p">From the very first glance at the page, we are able to identify what is missing there.</p>

<p className="it">La página falta el temporizador, los gatitos, el título del estado Pomodoro (la que muestra <strong className="userinput"><code>Work!</code></strong>o <strong className="userinput"><code>Rest!</code></strong>), y la lógica que muestra u oculta markupr de posición de los gatitos de acuerdo con el estado Pomodoro. Vamos a empezar añadiendo el título del estado Pomodoro y los minutos y segundos del temporizador Pomodoro.</p>

<p className="p">The page is missing the timer, the kittens, the title of the Pomodoro state (the one that displays <strong class="userinput"><code>Work!</code></strong> or <strong class="userinput"><code>Rest!</code></strong>), and the logic that shows or hides the kittens' placeholder according to the Pomodoro state. Let's start by adding the title of the Pomodoro state and the minutes and seconds of the Pomodoro timer.</p>

<div className="section" title="Adding title of the Pomodoro state"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec44"></a>Adding title of the Pomodoro state</h2></div></div></div>

<p className="it">En primer lugar, debemos decidir qué componente de este elemento debe pertenecer. Echar un vistazo a nuestros cuatro componentes. Es más que evidente que debería pertenecer a <code>{`StateTitleComponent`}</code>. Si nos fijamos en el siguiente código, verá que en realidad ya se interpola el título en su plantilla:</p>

<p className="p">First of all, we should decide what component this element should belong to. Have a look at our four components. It is more than obvious that it should belong to <code>{`StateTitleComponent`}</code>. If you look at the following code, you will see that it actually already interpolates the title in its template:</p>

<pre className="programlisting"><code>{`//StateTitleComponent.vue 
&lt;template&gt; 
  &lt;h3&gt;<span class="strong"><strong>{{ title }}</strong></span>&lt;/h3&gt; 
&lt;/template&gt; 
 
&lt;style scoped&gt; 
&lt;/style&gt; 
 
&lt;script&gt; 
&lt;/script&gt; 
`}</code></pre>

<p className="it">¡Bueno! En el capítulo anterior, que ya hemos hecho la mayor parte del trabajo. Ahora sólo tenemos que añadí los datos que deben ser interpolados. En la <code>{`script`}</code> etiqueta de este componente, vamos a añadí el <code className="literal">data</code> objeto con el <code className="literal">title</code> atributo dentro. Por ahora, vamos a codificar a uno de los valores posibles y luego decidir qué hacer para cambiarlo. ¿Qué prefieres? <strong className="userinput"><code>Work!</code></strong>o <strong className="userinput"><code>Rest!</code></strong>? Creo que sé la respuesta, por lo que vamos a añadí el siguiente código a nuestra <code>{`script`}</code> etiqueta:</p>

<p className="p">Good! In the previous chapter, we've already done most of the work. Now we just have to add the data that must be interpolated. In the <code>{`script`}</code> tag of this component, let's add the <code class="literal">data</code> object with the <code class="literal">title</code> attribute inside. For now, let's hardcode it to one of the possible values and then decide how to change it. What do you prefer? <strong class="userinput"><code>Work!</code></strong> or <strong class="userinput"><code>Rest!</code></strong>? I think I know the answer, so let's add the following code to our <code>{`script`}</code> tag:</p>

<pre className="programlisting"><code>{`//StateTitleComponent.vue 
&lt;script&gt; 
  export default { 
    data () { 
      return { 
        <span class="strong"><strong>title: 'Learning Vue.js!'</strong></span> 
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>

<p className="it">Dejémoslo así por ahora. Vamos a volver a esto más adelante en la sección de manejo de métodos y eventos.</p>

<p className="p">Let's leave it like this for now. We will come back to this later in the methods and event handling section.</p>

</div><div className="section" title="Exercise"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec45"></a>Exercise</h2></div></div></div>

<p className="it">De la misma manera en la que hemos añadido el título del estado Pomodoro, por favor añadí los minutos y segundos El cronómetro de contadores al <code>{`CountDownComponent`}</code>. Ellos pueden ser codificados por ahora.</p>

<p className="p">In the same way in which we added the title of the Pomodoro state, please add the minutes and seconds timer counters to the <code>{`CountDownComponent`}</code>. They can be hardcoded for now.</p></div></div>






</div></div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>Using expressions and filters</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Using expressions and filters"><div class="titlepage" id="aid-1DOR02"><div><div><h1 className="title"><a id="ch04lvl1sec39"></a>Using expressions and filters</h1></div></div></div>


<p className="it">En el ejemplo anterior, hemos utilizado las claves de propiedades simples dentro de las <code>{`{{}}`}</code> interpolaciones. En realidad, Vue apoya mucho más en el interior de estas agradables entre llaves. Vamos a ver lo que es posible hacer allí.</p>

<p className="p">In the previous example, we have used simple property keys inside the <code>{`{{}}`}</code> interpolations. Actually, Vue supports a lot more inside these nice curly brackets. Let's see what it is possible to do there.</p>

<div className="section" title="Expressions"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec46"></a>Expressions</h2></div></div></div>


<p className="it">Podes sonar inesperado, pero Vue soporta expresiones completas de JavaScript dentro de los datos de los soportes de unión! Vamos a ir a cualquiera de los componentes de la aplicación Pomodoro y agregar cualquier expresión de JavaScript a la plantilla. Podes hacer algunos experimentos en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro2">Capítulo 4 / pomodoro2</a> carpeta.</p>

<p className="p">It might sound unexpected, but Vue supports full JavaScript expressions inside the data binding brackets! Let's go to any of the Pomodoro application components and add any JavaScript expression to the template. You can do some experiments in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro2">chapter4/pomodoro2</a> folder.</p>

<p className="it">Pruebe, por ejemplo, para abrir el <code className="literal">StateTitleComponent.vue</code> archivo. Vamos a añadí algo de interpolación expresión de JavaScript a su plantilla, por ejemplo:</p>

<p className="p">Try, for example, to open the <code class="literal">StateTitleComponent.vue</code> file. Let's add some JavaScript expression interpolation to its template, for example:</p>

<pre className="programlisting"><code>{`{{ Math.pow(5, 2) }} 
`}</code></pre>

<p className="it">En realidad, sólo tiene que descomentar las siguientes líneas:</p>

<p className="p">Actually, you just need to uncomment the following lines:</p>

<pre className="programlisting"><code>{`//StateTitleComponent.vue 
&lt;!--&lt;p&gt;--&gt; 
  &lt;!--{{ Math.pow(5, 2) }}--&gt; 
&lt;!--&lt;/p&gt;--&gt; 
`}</code></pre>


<p className="it">Verá el número <strong className="userinput"><code>25</code></strong>de la página. Bonito, ¿verdad? Vamos a sustituir algunos de nuestros enlaces de datos en la aplicación Pomodoro con una expresión de JavaScript. Por ejemplo, en la <code className="literal">CountdownComponent</code> plantilla de componente, dos directivas, cada uno para <code className="literal">min</code> y <code className="literal">sec</code>, pueden ser reemplazados por una expresión. Actualmente se ve de la siguiente manera:</p>

<p className="p">You will see number <strong class="userinput"><code>25</code></strong> on the page. Nice, isn't it? Let's replace some of our data bindings in the Pomodoro application with a JavaScript expression. For example, in the <code class="literal">CountdownComponent</code> component's template, two directives, each for <code class="literal">min</code> and <code class="literal">sec</code>, can be replaced by one expression. Currently it looks as follows:</p>

<pre className="programlisting"><code>{`//CountdownComponent.vue 
&lt;template&gt; 
  &lt;div class="well"&gt; 
    &lt;div class="pomodoro-timer"&gt; 
      <span class="strong"><strong>&lt;span&gt;{{ min }}&lt;/span&gt;:&lt;span&gt;{{ sec }}&lt;/span&gt;</strong></span> 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>


<p className="it">Podemos sustituirlo por el siguiente código:</p>

<p className="p">We can replace it with the following code:</p>

<pre className="programlisting"><code>{`//CountdownComponent.vue 
&lt;template&gt; 
  &lt;div class="well"&gt; 
    &lt;div class="pomodoro-timer"&gt; 
      &lt;span&gt;{{ min + ':' + sec }}&lt;/span&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>


<p className="it">¿Dónde más podemos añadí algunas expresiones? Vamos a echar un vistazo a <code className="literal">StateTitleComponent</code>. En este momento, utilizamos el título codificado. Sabemos, sin embargo, que de alguna manera debe depender del estado Pomodoro. Si está en el <span className="emphasis"><em>trabajo</em></span> del estado, que debe mostrar <strong className="userinput"><code>Work!</code></strong>, de lo contrario debe mostrar <strong className="userinput"><code>Rest!</code></strong>. Vamos a crear este atributo y lo llaman <code className="literal">isworking</code>, y vamos a asignar al principal <code className="literal">App.vue</code> componente, ya que parece pertenecer al estado de la aplicación global. A continuación, vamos a volver a utilizarlo dentro de la <code className="literal">StateTitleComponent</code> del componente <code className="literal">props</code> atributo. Por lo tanto, abierta <code className="literal">App.vue</code>, y añadí la propiedad booleana <code className="literal">isworking</code> y ponerlo a <code className="literal">true</code>:</p>

<p className="p">Where else can we add some expressions? Let's have a look at <code class="literal">StateTitleComponent</code>. At this moment, we use the hardcoded title. We know, however, that somehow it should depend on the Pomodoro state. If it is in the <span class="emphasis"><em>working</em></span> state, it should display <strong class="userinput"><code>Work!</code></strong>, otherwise it should display <strong class="userinput"><code>Rest!</code></strong>. Let's create this attribute and call it <code class="literal">isworking</code>, and let's assign it to the main <code class="literal">App.vue</code> component because it seems to belong to the global application state. Then we will reuse it inside the <code class="literal">StateTitleComponent</code> component's <code class="literal">props</code> attribute. Thus, open <code class="literal">App.vue</code>, and add the Boolean property <code class="literal">isworking</code> and set it to <code class="literal">true</code>:</p>

<pre className="programlisting"><code>{`//App.vue 
&lt;...&gt; 
window.data = { 
  kittens: true, 
  <span class="strong"><strong>isworking: true</strong></span> 
}; 
 
export default { 
  &lt;...&gt; 
  data () { 
    return window.data 
  } 
} 
`}</code></pre>

<p className="it">Ahora vamos a reutilizar esta propiedad en <code className="literal">StateTitleComponent</code>, añadí dos propiedades de cadena para cada uno de los posibles títulos, y, por último, añadí la expresión en la plantilla que hará que condicionalmente un título u otro de acuerdo a la situación actual. Por lo tanto, la secuencia de comandos del componente se verá como la siguiente:</p>

<p className="p">Let's now reuse this property in <code class="literal">StateTitleComponent</code>, add two string properties for each of the possible titles, and, finally, add the expression in the template that will conditionally render one title or another accordingly to the current state. Thus, the script of the component will look like the following:</p>

<pre className="programlisting"><code>{`//StateTitleComponent.vue 
&lt;script&gt; 
  export default { 
    data () { 
      return { 
        <span class="strong"><strong>workingtitle: 'Work!', 
        restingtitle: 'Rest!'</strong></span> 
      } 
    }, 
    <span class="strong"><strong>props: ['isworking']</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>


<p className="it">Ahora podemos hacer condicionalmente un título u otro basado en la <code className="literal">isworking</code> propiedad. De este modo, la plantilla de <code className="literal">StateTitleComponent</code> se verá como la siguiente:</p>

<p className="p">Now we can conditionally render one title or another based on the <code class="literal">isworking</code> property. Thus, the template of <code class="literal">StateTitleComponent</code> will look like the following:</p>

<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div&gt; 
    &lt;h3&gt; 
      {{ isworking ? workingtitle : restingtitle }} 
    &lt;/h3&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>


<p className="it">Mira la página refrescado. Curiosamente, se muestra <strong className="userinput"><code>Rest!</code></strong>como el título. ¿Cómo sucedió esto, si la <code className="literal">isworking</code> propiedad se establece <code className="literal">true</code> en <code className="literal">App.vue</code>? Simplemente se olvidó de obligar a esta propiedad en la invocación componente en la <code className="literal">App.vue</code> plantilla! Abra el <code className="literal">App.vue</code> componente y agregue el código siguiente en la <code className="literal">state-title-component</code> invocación:</p>

<p className="p">Look at the refreshed page. Strangely, it shows <strong class="userinput"><code>Rest!</code></strong> as the title. How did this happen if the <code class="literal">isworking</code> property is set to <code class="literal">true</code> in <code class="literal">App.vue</code>? We simply forgot to bind this property on the component invocation in the <code class="literal">App.vue</code> template! Open the <code class="literal">App.vue</code> component and add the following code on the <code class="literal">state-title-component</code> invocation:</p>

<pre className="programlisting"><code>{`&lt;state-title-component <span class="strong"><strong>v-bind:isworking="isworking"</strong></span>&gt;&lt;/state-title-component&gt; 
`}</code></pre>


<p className="it">Ahora, si nos fijamos en la página, el título correcto aparece como <strong className="userinput"><code>Work!</code></strong>Si abre la consola y el tipo devtools <code className="literal">data.isworking = false</code>, verá el título cambiante.</p>

<p className="p">Now, if you look at the page, the correct title appears as <strong class="userinput"><code>Work!</code></strong> If you open the devtools console and type <code class="literal">data.isworking = false</code>, you will see the title changing.</p>




<p className="it">Si el <code className="literal">isworking</code> atributo es <code className="literal">false</code>, el título es <strong className="userinput"><code>Rest!</code></strong>, como se muestra en la siguiente captura de pantalla:</p>

<p className="p">If the <code class="literal">isworking</code> attribute is <code class="literal">false</code>, the title is <strong class="userinput"><code>Rest!</code></strong>, as shown in the following screenshot:</p>




<div class="mediaobject"><img src="/static/image00274.jpeg" width="100%" alt="Expressions"/></div>




<p className="it">Si el <code className="literal">isworking</code> atributo es <code className="literal">true</code>, el título es <strong className="userinput"><code>Work!</code></strong>, como se muestra en la siguiente captura de pantalla:</p>

<p className="p">If the <code class="literal">isworking</code> attribute is <code class="literal">true</code>, the title is <strong class="userinput"><code>Work!</code></strong>, as shown in the following screenshot:</p>




<div class="mediaobject"><img src="/static/image00275.jpeg" width="100%" alt="Expressions"/></div>



</div><div className="section" title="Filters"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec47"></a>Filters</h2></div></div></div>


<p className="it">Además de las expresiones dentro de los corchetes de interpolación rizado, también es posible utilizar filtros que se aplican al resultado de la expresión. Los filtros son sólo funciones. Ellos son creados por nosotros y aplicar utilizando el símbolo de canalización:   <code className="literal">|</code>. Si crea un filtro que hace que las letras mayúsculas y llamas en mayúsculas, con el fin de aplicarlo, sólo lo utilizan después de que el símbolo de canalización dentro de la interpolación bigote:</p>

<p className="p">Besides expressions inside the curly interpolation brackets, it is also possible to use filters that are applied to the result of the expression. Filters are just functions. They are created by us and applied by using the pipe symbol:  <code class="literal">|</code>. If you create a filter that makes letters uppercase and call it uppercase, in order to apply it, just use it after the pipe symbol inside the mustache interpolation:</p>

<pre className="programlisting"><code>{`&lt;h3&gt; {{ title | lowercase }} &lt;/h3&gt; 
`}</code></pre>


<p className="it">Podes cadena tantos filtros como desee, por ejemplo, si tiene filtro <code className="literal">A</code>, <code className="literal">B</code>, <code className="literal">C</code>, se podes hacer algo así <code>{`{{ key | A | B | C }}`}</code>. Los filtros se crean utilizando <code className="literal">Vue.filter</code> la sintaxis. Vamos a crear nuestro <code className="literal">lowercase</code> filtro:</p>

<p className="p">You can chain as many filters as you want, for example, if you have filter <code class="literal">A</code>, <code class="literal">B</code>, <code class="literal">C</code>, you can do something like <code>{`{{ key | A | B | C }}`}</code>. Filters are created using <code class="literal">Vue.filter</code> syntax. Let's create our <code class="literal">lowercase</code> filter:</p>

<pre className="programlisting"><code>{`//main.js 
Vue.filter('lowercase', (key) =&gt; { 
  return key.toLowerCase() 
}) 
`}</code></pre>


<p className="it">Vamos a aplicarlo al título Pomodoro en el principal <code className="literal">App.vue</code> componente. Con el fin de poder utilizar el filtro, hay que pasar a la <code className="literal">'Pomodoro'</code> cadena dentro de la notación manillar interpolación. Hay que pasarlo como una expresión de cadena JavaScript y aplicar un filtro con el símbolo de canalización:</p>

<p className="p">Let's apply it to the Pomodoro title in the main <code class="literal">App.vue</code> component. In order to be able to use the filter, we should pass the <code class="literal">'Pomodoro'</code> string inside the handlebars interpolation notation. We should pass it as a JavaScript string expression and apply a filter using the pipe symbol:</p>

<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;...&gt; 
    &lt;h2&gt; 
      &lt;span&gt;<span class="strong"><strong>{{ 'Pomodoro' | lowercase }}</strong></span>&lt;/span&gt; 
      &lt;controls-component&gt;&lt;/controls-component&gt; 
    &lt;/h2&gt; 
  &lt;...&gt; 
&lt;/template&gt; 
`}</code></pre>


<p className="it">Comproba la página; el <strong className="userinput"><code>Pomodoro</code></strong>título aparece realmente escrito en la sintaxis minúsculas.</p>

<p className="p">Check the page; the <strong class="userinput"><code>Pomodoro</code></strong> title will actually appear written in the lowercase syntax.</p>




<p className="it">Volvamos a nuestro <code className="literal">CountdownTimer</code> componente y echar un vistazo en el temporizador. Por ahora, sólo hay valores codificados, ¿verdad? Pero cuando la aplicación es completamente funcional, los valores provienen de algún cálculo. El rango de valores será de 0 a 60. Está bien si los programas de temporizador <strong className="userinput"><code>20:40</code></strong>, pero no está bien que menos de diez valores. Por ejemplo, cuando sólo es 1 minuto y 5 segundos, será <strong className="userinput"><code>1:5</code></strong>, lo que no es bueno. Estamos a la espera de ver algo así <strong className="userinput"><code>01:05</code></strong>. Por lo tanto, necesitamos que el <code className="literal">leftpad</code> filtro! Vamos a crear la misma.</p>

<p className="p">Let's revisit our <code class="literal">CountdownTimer</code> component and have a look at the timer. For now, there are only hardcoded values, right? But when the application is fully functional, the values will come from some computation. The range of values will be from 0 to 60. It is okay if the timer shows <strong class="userinput"><code>20:40</code></strong>, but it is not okay for fewer than ten values. For example, when it is only 1 minute and 5 seconds, it will be <strong class="userinput"><code>1:5</code></strong>, which is not good. We are expecting to see something like <strong class="userinput"><code>01:05</code></strong>. So, we need the <code class="literal">leftpad</code> filter! Let's create it.</p>




<p className="it">Ir al <code className="literal">main.js</code> archivo y añadí un <code className="literal">leftpad</code> filtro después de la definición del filtro mayúsculas:</p>

<p className="p">Go to the <code class="literal">main.js</code> file and add a <code class="literal">leftpad</code> filter after the uppercase filter definition:</p>

<pre className="programlisting"><code>{`//main.js 
Vue.filter(<span class="strong"><strong>'leftpad'</strong></span>, (value) =&gt; { 
  if (value &gt;= 10) { 
    return value 
  } 
  return '0' + value 
}) 
`}</code></pre>


<p className="it">Abra el <code className="literal">CountdownComponent</code> componente y de nuevo dividida dejar <code className="literal">min</code> y <code className="literal">sec</code> a los diferentes soportes de interpolación y añadí filtros para cada uno de ellos:</p>

<p className="p">Open the <code class="literal">CountdownComponent</code> component and let's again split <code class="literal">min</code> and <code class="literal">sec</code> to the different interpolation brackets and add filters to each of them:</p>

<pre className="programlisting"><code>{`//CountdownComponent.vue 
&lt;template&gt; 
  &lt;div class="well"&gt; 
    &lt;div class="pomodoro-timer"&gt; 
      &lt;span&gt;<span class="strong"><strong>{{ min | leftpad }}:{{ sec | leftpad }}</strong></span>&lt;/span&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>


<p className="it">Reemplazar <code className="literal">min</code> y <code className="literal">sec</code> en los datos con 1 y 5, respectivamente, y echar un vistazo. Los números aparecen con un precedente "0"!</p>

<p className="p">Replace <code class="literal">min</code> and <code class="literal">sec</code> in data with 1 and 5, respectively, and have a look. The numbers appear with a preceding "0"!</p>

</div><div className="section" title="Exercise"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec48"></a>Exercise</h2></div></div></div>


<p className="it">Creá dos filtros, <code className="literal">uppercase</code> y <code className="literal">addspace</code>, y aplicarlas al título<strong className="userinput"><code>Pomodoro:</code></strong> </p>

<p className="p">Create two filters, <code class="literal">uppercase</code> and <code class="literal">addspace</code>, and apply them to the title <strong class="userinput"><code>Pomodoro:</code></strong>
</p>

<div class="itemizedlist"><ul className="itemizedlist">

<li className="listit">El <code className="literal">uppercase</code> filtro debe hacer exactamente lo que dice que hace</li>

<li className="listitem">The <code class="literal">uppercase</code> filter must do exactly what it says it does</li>
<li className="listit">El <code className="literal">addspace</code> filtro debe agregar un espacio a la derecha del valor de cadena dada</li>

<li className="listitem">The <code class="literal">addspace</code> filter must add a space on the right of the given string value</li>
</ul></div>


<p className="it">No hay que olvidar que <strong className="userinput"><code>Pomodoro</code></strong>no es una llave, así que dentro de los corchetes de interpolación, que deben ser tratados como una cadena! El título antes y después de este ejercicio sería algo como lo siguiente:</p>

<p className="p">Do not forget that <strong class="userinput"><code>Pomodoro</code></strong> is not a key, so inside the interpolation brackets, it should be treated as a string! The title before and after this exercise would look something like the following:</p>



<div class="mediaobject"><img src="/static/image00276.jpeg" width="100%" alt="Exercise"/></div>





<p className="it">El título de la aplicación Pomodoro antes y después de la aplicación de filtros mayúsculas y addspace</p>

<p className="p">The title of the Pomodoro application before and after applying filters uppercase and addspace</p>




<p className="it">Comproba usted mismo: tener una mirada en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro3">Capítulo 4 / pomodoro3</a> carpeta.</p>

<p className="p">Check yourself: have a look at the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro3">chapter4/pomodoro3</a> folder.</p>

</div></div>






</div></div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Revisiting and applying directives</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Revisiting and applying directives"><div class="titlepage" id="aid-1ENBI2"><div><div><h1 className="title"><a id="ch04lvl1sec40"></a>Revisiting and applying directives</h1></div></div></div>


<p className="it">En la sección anterior, vimos cómo interpolar datos de la aplicación y la forma de unir a la capa visual. Aunque la sintaxis es bastante potente y ofrece una alta posibilidad de modificación de datos (usando filtros y expresiones), tiene algunas limitaciones. Pruebe, por ejemplo, para poner en práctica el siguiente usando la notación <code>{`{{}}`}</code>:</p>

<p className="p">In the previous section, we saw how to interpolate the application's data and how to bind it to the visual layer. Though the syntax is pretty powerful and offers a high possibility of data modification (using filters and expressions), it has some limitations. Try, for example, to implement the following using <code>{`{{}}`}</code> notation:</p>


<div class="itemizedlist"><ul className="itemizedlist">
<li className="listit">Use los datos interpolados en la entrada del usuario y aplicar los cambios a los datos correspondientes cuando el usuario teclea en la entrada</li>

<li className="listitem">Use the interpolated data in the user input and apply the changes to the corresponding data when the user types in the input</li>


<li className="listit">Enlazar atributo de un elemento específico (por ejemplo, <code className="literal">src</code>) a los datos</li>

<li className="listitem">Bind a specific element's attribute (for example, <code class="literal">src</code>) to the data</li>


<li className="listit">Prestar algún elemento condicionalmente</li>

<li className="listitem">Render some element conditionally</li>


<li className="listit">Iterar través de un conjunto y hacer algún componente con los elementos de la array</li>

<li className="listitem">Iterate through an array and render some component with the elements of the array</li>


<li className="listit">Creá detectores de eventos sobre los elementos</li>

<li className="listitem">Create event listeners on the elements</li>

</ul></div>


<p className="it">Vamos a tratar al menos la primera. Abierta, por ejemplo, la aplicación de lista de la compra (que está en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list">Capítulo 4 / lista de compras</a> carpeta). Creá un <code className="literal">input</code> elemento de la <code className="literal">App.vue</code> plantilla y establecer su valor en <code>{`{{ title }}`}</code>:</p>

<p className="p">Let's try at least the first one. Open, for example, the shopping list application (it's in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list">chapter4/shopping-list</a> folder). Create an <code class="literal">input</code> element in the <code class="literal">App.vue</code> template and set its value to <code>{`{{ title }}`}</code>:</p>



<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div id="app" class="container"&gt; 
    &lt;h2&gt;{{ title }}&lt;/h2&gt; 
    <span class="strong"><strong>&lt;input type="text" value="{{ title }}"&gt;</strong></span> 
    &lt;add-item-component&gt;&lt;/add-item-component&gt; 
    &lt;...&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>




<p className="it">¡Oh no! Errores, errores en todas partes. <strong className="userinput"><code>Interpolation inside attributes has been removed,</code></strong>dice. ¿Quiere decir que antes de Vue 2.0 se podes utilizar fácilmente la interpolación dentro de atributos? Si y no. No se podes obtener un error si se tendría que utilizar interpolaciones dentro de atributos, pero cambiando el título dentro de la entrada resultaría en nada. En Vue 2.0, así como en las versiones anteriores, para lograr este tipo de comportamiento, hay que utilizar las directivas.</p>

<p className="p">Oh no! Errors, errors everywhere. <strong class="userinput"><code>Interpolation inside attributes has been removed,</code></strong> it says. Does it mean that prior to Vue 2.0 you could easily use the interpolation inside attributes? Yes, and no. You would not get an error if you'd use interpolations inside attributes, but changing the title inside the input would result in nothing. In Vue 2.0, as well as in the prior versions, to achieve this kind of behavior, we must use directives.</p>






<div class="note" title="Note"><h3 class="title"><a id="note33"></a>Note</h3>




<p className="it"> <span className="strong"><strong>Directivas</strong></span> son atributos especiales de los elementos que tienen un<code className="literal">v-</code> prefijo. ¿Por qué<code className="literal">v-</code>? Debido Vue! Directrices contienen una pequeña sintaxis que proporciona un conjunto más rico de posibilidades que la interpolación de texto simple. Tienen la facultad de aplicar de forma reactiva un comportamiento especial para la capa visual en cada cambio de datos.</p>

<p className="p">
<span class="strong"><strong>Directives</strong></span> are special attributes of the elements that have a <code class="literal">v-</code> prefix. Why <code class="literal">v-</code>? Because Vue! Directives provide a tiny syntax that provides a richer set of possibilities than simple text interpolation. They have the power to reactively apply some special behavior to the visual layer on each data change.</p>






</div><div className="section" title="Two-way binding using the v-model directive"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec49"></a>Two-way binding using the v-model directive</h2></div></div></div>




<p className="it">Dos vías de unión es un tipo de unión donde no sólo los cambios de datos se propagan a la capa de DOM, sino también los cambios que se producen a los datos ligados en el DOM se propagan a los datos. Para enlazar los datos de tal manera que el DOM, podemos usar la <code className="literal">v-model</code> directiva.</p>

<p className="p">Two-way binding is a type of binding where not only data changes are propagated to the DOM layer, but also the changes that occur to the bound data in the DOM are propagated to the data. To bind the data in such a way to the DOM, we can use the <code class="literal">v-model</code> directive.</p>











<p className="it">Estoy seguro de que todavía recuerda desde el primer capítulo que la <code className="literal">v-model</code> directiva se utiliza de la siguiente manera:</p>

<p className="p">I am sure you still remember from the first chapter that the <code class="literal">v-model</code> directive is used as follows:</p>


<pre className="programlisting"><code>{`&lt;input type="text" <span class="strong"><strong>v-model="title"</strong></span>&gt; 
`}</code></pre>




<p className="it">De esta manera, el valor del título aparecerá en la entrada, y si escribe algo en esta entrada, el cambio correspondiente se aplicará inmediatamente a los datos y se refleja en todos los valores interpolados en la página.</p>

<p className="p">In this way, the value of the title will appear in the input, and if you type something in this input, the corresponding change will be immediately applied to the data and reflected in all interpolated values on the page.</p>


<p className="it">Basta con sustituir la notación manillar con <code className="literal">v-model</code> y abra la página.</p>

<p className="p">Just replace the handlebars notation with <code class="literal">v-model</code> and open the page.</p>


<p className="it">Trate de escribir algo en la entrada. Verá cómo cambia inmediatamente al título!</p>

<p className="p">Try to type something in the input. You will see how the title is immediately changed!</p>


<p className="it">Sólo recuerde, esta directiva sólo se podes utilizar con los siguientes elementos:</p>

<p className="p">Just remember, this directive can only be used with the following elements:</p>



<div class="itemizedlist"><ul className="itemizedlist">
<li className="listit"><code className="literal">&lt;input&gt;</code></li>

<li className="listitem"><code class="literal">&lt;input&gt;</code></li>


<li className="listit"><code className="literal">&lt;select&gt;</code></li>

<li className="listitem"><code class="literal">&lt;select&gt;</code></li>


<li className="listit"><code className="literal">&lt;textarea&gt;</code></li>

<li className="listitem"><code class="literal">&lt;textarea&gt;</code></li>

</ul></div>




<p className="it">Probar todos ellos y elimine este código. Nuestro objetivo principal es ser capaz de cambiar el título mediante el componente de cambio de título.</p>

<p className="p">Try all of them and then delete this code. Our main purpose is to be able to change the title using the change title component.</p>


</div><div className="section" title="Two-way binding between components"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec50"></a>Two-way binding between components</h2></div></div></div>




<p className="it">Recuerde del capítulo anterior que la unión entre los componentes de dos vías no se podes lograr fácilmente utilizando la <code className="literal">v-model</code> directiva. Debido a razones arquitectónicas, Vue simplemente evita que los niños cambien fácilmente el alcance de los padres.</p>

<p className="p">Remember from the previous chapter that two-way binding between components cannot be easily achieved using the <code class="literal">v-model</code> directive. Due to architectural reasons, Vue just prevents children from easily changing the parents' scope.</p>











<p className="it">Es por eso que utilizamos el sistema de eventos en el capítulo anterior para poder cambiar el título de la lista de compras del componente secundario.</p>

<p className="p">That's why we used the events system in the previous chapter to be able to change the title of the shopping list from the child component.</p>











<p className="it">Vamos a hacerlo de nuevo en este capítulo. Sólo tiene que esperar par de párrafos hasta llegar a la sección de <code className="literal">v-on</code> directivas.</p>

<p className="p">We will do it again in this chapter. Just wait couple of paragraphs until we reach the section on <code class="literal">v-on</code> directives.</p>






</div><div className="section" title="Binding attributes using the v-bind directive"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec51"></a>Binding attributes using the v-bind directive</h2></div></div></div>




<p className="it">La <code className="literal">v-bind</code> directiva nos permite enlazar un elemento de <code className="literal">attribute</code> o una <code className="literal">component</code> propiedad a una expresión. Con el fin de aplicarlo al atributo específico, se utiliza un delimitador de colon:</p>

<p className="p">The <code class="literal">v-bind</code> directive allows us to bind an element's <code class="literal">attribute</code> or a <code class="literal">component</code> property to an expression. In order to apply it to the specific attribute, we use a colon delimiter:</p>






<pre className="programlisting"><code>{`v-bind:attribute 
`}</code></pre>




<p className="it">Por ejemplo:</p>

<p className="p">For example:</p>






<div class="itemizedlist"><ul className="itemizedlist">
<li className="listit"><code className="literal">v-bind:src="src"</code></li>

<li className="listitem"><code class="literal">v-bind:src="src"</code></li>


<li className="listit"><code className="literal">v-bind:className="className"</code></li>

<li className="listitem"><code class="literal">v-bind:class="className"</code></li>

</ul></div>




<p className="it">Cualquier expresión podes escribirse dentro de la <code className="literal">""</code>. Las propiedades de datos se pueden usar también, al igual que en los ejemplos anteriores. Vamos a añadí la imagen a gatito <code className="literal">KittenComponent</code> en nuestra aplicación Pomodoro utilizando <code className="literal">thecatapi</code> como fuente. Abrir nuestra aplicación Pomodoro del <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro3">Capítulo 4 / pomodoro3</a> carpeta.</p>

<p className="p">Any expression can be written inside the <code class="literal">""</code>. The data properties can be used as well, just like in the previous examples. Let's add the kitten image to <code class="literal">KittenComponent</code> in our Pomodoro application using <code class="literal">thecatapi</code> as the source. Open our Pomodoro application from the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro3">chapter4/pomodoro3</a> folder.</p>











<p className="it">Abierta <code className="literal">KittenComponent</code>, añadí <code className="literal">catimgsrc</code> a los datos del componente, y enlazarlo a la plantilla de la imagen usando <code className="literal">v-bind</code> la sintaxis con el <code className="literal">src</code> atributo:</p>

<p className="p">Open <code class="literal">KittenComponent</code>, add <code class="literal">catimgsrc</code> to the component's data, and bind it to the image template using <code class="literal">v-bind</code> syntax with the <code class="literal">src</code> attribute:</p>






<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div class="well"&gt; 
    &lt;img <span class="strong"><strong>v-bind:src="catImgSrc"</strong></span> /&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
 
&lt;style scoped&gt; 
&lt;/style&gt; 
 
&lt;script&gt; 
  export default { 
    data () { 
      return { 
        <span class="strong"><strong>catimgsrc: "http://thecatapi.com/api/images/get?size=med"</strong></span> 
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>




<p className="it">Abrir la página. Disfrutar del gatito!</p>

<p className="p">Open the page. Enjoy the kitten!</p>


















<div class="mediaobject"><img src="/static/image00277.jpeg" width="100%" alt="Binding attributes using the v-bind directive"/></div>























<p className="it">Pomodoro KittenComponent con atributo de origen aplicada</p>

<p className="p">Pomodoro KittenComponent with applied source attribute</p>






</div><div className="section" title="Conditional rendering using v-if and v-show directives"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec52"></a>Conditional rendering using v-if and v-show directives</h2></div></div></div>




<p className="it">Si ha prestado suficiente atención en las secciones anteriores, y si te pido que hacer algo condicional, que podría ser realmente capaces de hacerlo mediante expresiones de JavaScript dentro de los corchetes de interpolación <code>{`{{ }}`}</code>.</p>

<p className="p">If you have paid enough attention in the earlier sections, and if I ask you to conditionally render something, you might be actually able to do it using JavaScript expressions inside the interpolation brackets <code>{`{{ }}`}</code>.</p>



<p className="it">Sin embargo, intentar representar condicionalmente algún elemento o todo el componente. Podes que no sea tan simple como aplicar una expresión dentro de los paréntesis.</p>

<p className="p">However, try to conditionally render some element or the whole component. It might not be as simple as applying an expression inside the brackets.</p>



<p className="it">La <code className="literal">v-if</code>Directiva permite a rendir condicionalmente todo el elemento, que también podría ser un elemento componente dependiendo de alguna condición. La condición podes ser cualquier expresión y podes utilizar las propiedades de datos también. Por ejemplo, podemos hacer lo siguiente:</p>

<p className="p">The <code class="literal">v-if</code> directive allows to conditionally render the whole element, which might also be a component element depending on some condition. The condition can be any expression and it can use the data properties as well. For example, we can do the following:</p>






<pre className="programlisting"><code>{`&lt;div v-if="1 &lt; 5"&gt;hello&lt;/div&gt; 
`}</code></pre>




<p className="it">O:</p>

<p className="p">Or:</p>






<pre className="programlisting"><code>{`&lt;div v-if="Math.random() * 10 &lt; 6"&gt;hello&lt;/div&gt; 
`}</code></pre>




<p className="it">O incluso:</p>

<p className="p">Or even:</p>






<pre className="programlisting"><code>{`&lt;div v-if="new Date().getHours() &gt;= 16"&gt;Beer Time!&lt;/div&gt; 
`}</code></pre>




<p className="it">O el uso de los datos del componente:</p>

<p className="p">Or using the component's data:</p>






<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div&gt; 
    &lt;h1 <span class="strong"><strong>v-if="!isadmin"</strong></span>&gt;Beer Time!&lt;/h1&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
&lt;script&gt; 
  export default { 
    data () { 
      return { 
        <span class="strong"><strong>isadmin: false</strong></span> 
      } 
    } 
  } 
&lt;/script&gt; 
`}</code></pre>




<p className="it">El <code className="literal">v-show</code> atributo hace el mismo trabajo. La única diferencia es que <code className="literal">v-if</code>va o no va a hacer que el elemento de la condición en consecuencia, mientras que el <code className="literal">v-show</code> atributo siempre hará que el elemento, simplemente aplicando <code className="literal">display:none</code> propiedad CSS cuando el resultado de la condición es <code className="literal">false</code>. Vamos a ver la diferencia. Abra el <code className="literal">beer-time</code> proyecto en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/beer-time">Capítulo 4 / tiempo de cerveza</a> carpeta. Ejecutar <code className="literal">npm install</code> y <code className="literal">npm run dev</code>. Abra el <code className="literal">App.vue</code> componente y jugar con <code className="literal">true</code>/ <code className="literal">false</code>valores, y tratar de sustituir <code className="literal">v-if</code> con <code className="literal">v-show</code>. Devtools abiertas y comprobar el <strong className="userinput"><code>elements</code></strong>tab.</p>

<p className="p">The <code class="literal">v-show</code> attribute does the same job. The only difference is that <code class="literal">v-if</code> will or will not render the element to the condition accordingly, whereas the <code class="literal">v-show</code> attribute will always render the element, just applying <code class="literal">display:none</code> CSS property when the result of the condition is <code class="literal">false</code>. Let's see the difference. Open the <code class="literal">beer-time</code> project in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/beer-time">chapter4/beer-time</a> folder. Run <code class="literal">npm install</code> and <code class="literal">npm run dev</code>. Open the <code class="literal">App.vue</code> component and play with <code class="literal">true</code>/<code class="literal">false</code> values, and try to replace <code class="literal">v-if</code> with <code class="literal">v-show</code>. Open devtools and check the <strong class="userinput"><code>elements</code></strong> tab.</p>











<p className="it">Primero vamos a comprobar cómo se ve cuando cambiamos entre <code className="literal">true</code> y <code className="literal">false</code> en el <code className="literal">isadmin</code>valor de la propiedad utilizando <code className="literal">v-if</code>.</p>

<p className="p">Let's first check how it looks when we switch between <code class="literal">true</code> and <code class="literal">false</code> in the <code class="literal">isadmin</code> property value using <code class="literal">v-if</code>.</p>











<p className="it">Cuando se cumple la condición, todo lo que aparece como se esperaba; el elemento se vuelve y aparece en la página:</p>

<p className="p">When the condition is met, everything appears as expected; the element is rendered and appears on the page:</p>


















<div class="mediaobject"><img src="/static/image00278.jpeg" width="100%" alt="Conditional rendering using v-if and v-show directives"/></div>























<p className="it">renderización condicional utilizando la directiva v-si. Condición se cumple.</p>

<p className="p">Conditional rendering using the v-if directive. Condition is met.</p>











<p className="it">Cuando no se cumple la condición, el elemento no se representa:</p>

<p className="p">When the condition is not met, the element is not rendered:</p>


















<div class="mediaobject"><img src="/static/image00279.jpeg" width="100%" alt="Conditional rendering using v-if and v-show directives"/></div>























<p className="it">renderización condicional utilizando la directiva v-si. Condición no se cumple.</p>

<p className="p">Conditional rendering using the v-if directive. Condition is not met.</p>











<p className="it">Tenga en cuenta que cuando no se cumple la condición, el elemento correspondiente no se hace en absoluto!</p>

<p className="p">Note that when the condition is not fulfilled, the corresponding element is not rendered at all!</p>











<p className="it">Vamos a jugar con el valor del resultado condición mediante la <code className="literal">v-show</code>Directiva. Cuando se cumple la condición, parece exactamente de la misma manera como lo fue en el caso anterior el uso de <code className="literal">v-if</code>:</p>

<p className="p">Let's play with the condition result value using the <code class="literal">v-show</code> directive. When the condition is met, it appears in exactly the same way as it was in the previous case using <code class="literal">v-if</code>:</p>


















<div class="mediaobject"><img src="/static/image00280.jpeg" width="100%" alt="Conditional rendering using v-if and v-show directives"/></div>























<p className="it">renderización condicional utilizando la directiva v-espectáculo. Condición se cumple.</p>

<p className="p">Conditional rendering using the v-show directive. Condition is met.</p>











<p className="it">Ahora vamos a ver qué va a pasar con el elemento utilizando la <code className="literal">v-show</code>Directiva cuando no se cumple la condición de la derecha:</p>

<p className="p">Now let's check what will happen with the element using the <code class="literal">v-show</code> directive when the right condition is not met:</p>


















<div class="mediaobject"><img src="/static/image00281.jpeg" width="100%" alt="Conditional rendering using v-if and v-show directives"/></div>























<p className="it">renderización condicional utilizando la directiva v-espectáculo. Condición no se cumple.</p>

<p className="p">Conditional rendering using the v-show directive. Condition is not met.</p>











<p className="it">En este caso, todo es lo mismo cuando se cumple la condición, pero cuando no se cumple la condición, el elemento se hace así con la <code className="literal">display:none</code> propiedad CSS.</p>

<p className="p">In this case, everything is the same when the condition is met, but when the condition is not fulfilled, the element is rendered as well with the <code class="literal">display:none</code> CSS property.</p>











<p className="it">¿Cómo decidir cuál es mejor usar? En el primer render, si no se cumple la condición, la <code className="literal">v-if</code> directiva no generar el elemento en absoluto, por lo tanto, la reducción de los costes de cálculo de la renderización inicial. Sin embargo, si la propiedad cambia con frecuencia durante el tiempo de ejecución, el coste de la renderización / eliminación de un elemento es mayor que acaba de aplicar la <code className="literal">display:none</code> propiedad. Por lo tanto, utilizar <code className="literal">v-show</code> con cambio frecuente de propiedades y <code className="literal">v-if</code> si la condición no cambiará demasiado durante el tiempo de ejecución.</p>

<p className="p">How do you decide which one is better to use? On the first render, if the condition is not met, the <code class="literal">v-if</code> directive will not render the element at all, hence reducing the computation costs on the initial rendering. But, if the property changes frequently during runtime, the cost of rendering/removing an element is higher than just to apply the <code class="literal">display:none</code> property. Thus, use <code class="literal">v-show</code> with frequently changing properties and <code class="literal">v-if</code> if the condition will not change too much during runtime.</p>











<p className="it">Volvamos a nuestra aplicación Pomodoro. <code className="literal">KittensComponent</code> deben ser prestados de forma condicional cuando Pomodoro no está en su estado de trabajo. Por lo tanto, abrir el código de aplicación Pomodoro en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro4">Capítulo 4 / pomodoro4</a> carpeta.</p>

<p className="p">Let's come back to our Pomodoro application. <code class="literal">KittensComponent</code> should be conditionally rendered when Pomodoro is not in its working state. So, open your Pomodoro application code in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/pomodoro4">chapter4/pomodoro4</a> folder.</p>











<p className="it">¿Qué opinas debe usarse? <code className="literal">v-if</code> o <code className="literal">v-show</code>? Vamos a analizar. Independientemente de lo que usamos, este elemento debe ser visible en el primer render? La respuesta es no, porque en el primer render, el usuario comienza su jornada de trabajo y se inicia el temporizador Pomodoro. Podría ser mejor usar <code className="literal">v-if</code> para no tener el coste de la renderización inicial, cuando no es necesario. Pero, vamos a analizar otro factor de la frecuencia de alternar el estado que hará que el componente gatitos visible / invisible. Esto sucederá en cada intervalo de Pomodoro, ¿verdad? Después de 15-20 minutos de trabajo y luego, después de 5 minutos de intervalo de descanso, que es, en realidad, no es tan frecuente y no afectará el costo de hacer tanto. En este caso, en mi opinión, no importa cuál se utiliza. Vamos a usar <code className="literal">v-show</code>. Abra el <code className="literal">App.vue</code> archivo y aplicar la <code className="literal">v-show</code> directiva a la <code className="literal">kittens-component</code> invocación:</p>

<p className="p">What do you think should be used? <code class="literal">v-if</code> or <code class="literal">v-show</code>? Let's analyze. Independently from what we use, should this element be visible on the initial render? The answer is no, because on the initial render, the user starts her working day and starts the Pomodoro timer. It might be better to use <code class="literal">v-if</code> to not have the cost of initial rendering when there is no need. But, let's analyze another factor&mdash;the frequency of toggling the state that will make the kittens component visible/invisible. This will happen at each Pomodoro interval, right? After 15-20 minutes of work and then after 5 minutes of rest interval, which is, actually, not so frequent and will not affect the cost of rendering that much. In this case, in my opinion, it doesn't matter which one you use. Let's use <code class="literal">v-show</code>. Open the <code class="literal">App.vue</code> file and apply the <code class="literal">v-show</code> directive to the <code class="literal">kittens-component</code> invocation:</p>






<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div id="app" class="container"&gt; 
    &lt;...&gt; 
    &lt;transition name="fade"&gt; 
      &lt;kittens-component <span class="strong"><strong>v-show="!isworking"</strong></span>&gt;&lt;/kittens-component&gt; 
    &lt;/transition&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>




<p className="it">Abra la página y tratar de cambiar el valor de <code className="literal">data.isworking</code> la consola devtools. Verá cómo el <span className="strong"><strong>gatitos</strong></span> aparece y desaparece contenedor.</p>

<p className="p">Open the page and try to toggle the value of <code class="literal">data.isworking</code> in the devtools console. You will see how the<span class="strong"><strong> kittens</strong></span> container appears and disappears.</p>






</div><div className="section" title="Array iteration using the v-for directive"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec53"></a>Array iteration using the v-for directive</h2></div></div></div>




<p className="it">Probablemente recuerde esa array de iteración se realiza mediante la <code className="literal">v-for</code> directiva con la siguiente sintaxis:</p>

<p className="p">You probably remember that array iteration is done using the <code class="literal">v-for</code> directive with the following syntax:</p>






<pre className="programlisting"><code>{`&lt;div v-for item in items&gt; 
  item 
&lt;/div&gt; 
`}</code></pre>




<p className="it">O con componentes:</p>

<p className="p">Or with components:</p>






<pre className="programlisting"><code>{`&lt;component v-for item in items v-bind:<span class="strong"><strong>componentitem="item"</strong></span>&gt;&lt;/component&gt; 
`}</code></pre>




<p className="it">Para cada elemento de la array, esto hará que un componente y enlazar el componente de <code className="literal">item</code> propiedad en el valor del artículo. Por supuesto, se recuerda que en el <code className="literal">""</code> de la sintaxis de unión se podes utilizar cualquier expresión de JavaScript que desee. Así, acaba de ser creativo!</p>

<p className="p">For each item in the array, this will render a component and bind the component's <code class="literal">item</code> property to the value of the item. Of course, you remember that inside the <code class="literal">""</code> of the binding syntax you can use whatever JavaScript expression you want. So, just be creative!</p>






<div class="note" title="Note"><h3 class="title"><a id="tip34"></a>Tip</h3>




<p className="it">No hay que olvidar que la propiedad se utiliza en la sintaxis de unión ( <code className="literal">componentitem</code>) debe estar presente en los datos del componente!</p>

<p className="p">Do not forget that the property we use in the binding syntax (<code class="literal">componentitem</code>) should be present in the component's data!</p>






</div>




<p className="it">Echar un vistazo, por ejemplo, en nuestra solicitud de lista de la compra (El <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list">Capítulo 4 / lista de compras</a> carpeta). Ya se utiliza la <code className="literal">v-for</code> sintaxis en <code className="literal">ItemsComponent</code> hacer que la lista de elementos:</p>

<p className="p">Have a look, for example, at our shopping list application (The <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list">chapter4/shopping-list</a>
 folder). It already uses the <code class="literal">v-for</code> syntax in <code class="literal">ItemsComponent</code> to render the list of items:</p>






 <pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;ul&gt; 
    &lt;item-component <span class="strong"><strong>v-for="item in items"</strong></span> :item="item"&gt;&lt;/item-component&gt; 
  &lt;/ul&gt; 
&lt;/template&gt; 
`}</code></pre>




<p className="it"> <code className="literal">ItemComponent</code>A su vez, tiene la <code className="literal">item</code> propiedad declarada usando <code className="literal">props</code>:</p>

<p className="p">
<code class="literal">ItemComponent</code>, in turn, has the <code class="literal">item</code> property declared using <code class="literal">props</code>:</p>






<pre className="programlisting"><code>{`&lt;script&gt; 
  export default { 
    <span class="strong"><strong>props: ['item']</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>




<p className="it">Ahora, vamos a hacer algo interesante con nuestra aplicación de lista de la compra. Hasta ahora se trataba sólo con una lista de compras. Imagine que usted quiere tener una lista de compras diferente para diferentes tipos de compras. Por ejemplo, es posible que tenga una lista de compras para el día regular de víveres comercial normal. Es posible que tenga una lista de compras diferente para los días de fiesta. Usted también podes tener una lista de compras diferente cuando se compra una nueva casa. Vamos a usar el poder de la reutilización de los componentes Vue y transformar nuestra aplicación de lista de la compra en la lista de listas de compras! Vamos a mostrarlos utilizando panel de pestañas de Manos a la Obra; Para obtener más información, consulte <a className="ulink" href="http://getbootstrap.com/javascript/#tabs">http://getbootstrap.com/javascript/#tabs</a> .</p>

<p className="p">Now, let's do something interesting with our shopping list application. Until now we were dealing only with one shopping list. Imagine that you want to have a different shopping list for different kind of shopping. For example, you might have a regular shopping list for the normal groceries shopping day. You might have a different shopping list for the holidays. You might also want to have a different shopping list when you buy a new house. Let's use the power of the reusability of the Vue components and transform our shopping list application into the list of shopping lists! We will display them using Bootstrap's tab panel; for more information, refer to 
<a class="ulink" href="http://getbootstrap.com/javascript/#tabs">http://getbootstrap.com/javascript/#tabs</a>
.</p>











<p className="it">Abra la aplicación de lista de la compra en el IDE (el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list">Capítulo 4 / lista de compras</a> carpeta).</p>

<p className="p">Open your shopping list application in the IDE (the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list">chapter4/shopping-list</a> folder).</p>











<p className="it">En primer lugar, hay que añadí el archivo JavaScript de Bootstrap y jQuery, porque de arranque depende de ella para hacer su magia increíble. Seguir y hay que añadirlas manualmente al <code className="literal">index.html</code> archivo:</p>

<p className="p">First of all, we should add Bootstrap's JavaScript file and jQuery, because bootstrap relies on it for doing its amazing magic. Go on and just add them manually to the <code class="literal">index.html</code> file:</p>






<pre className="programlisting"><code>{`  &lt;body&gt; 
    &lt;...&gt; 
    &lt;script src="https://code.jquery.com/jquery-3.1.0.js"&gt;&lt;/script&gt; 
    &lt;script 
      src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"&gt; 
    &lt;/script&gt; 
    &lt;...&gt; 
  &lt;/body&gt; 
`}</code></pre>




<p className="it">Ahora, vamos a establecer una descripción paso a paso de lo que debemos hacer con el fin de transformar nuestra aplicación en la lista de listas de la compra:</p>

<p className="p">Now, let's establish a step-by-step overview of what we should do in order to transform our application into the list of shopping lists:</p>






<div class="orderedlist"><ol class="orderedlist arabic">
<li className="listit">En primer lugar, hay que crear un nuevo componente. Vamos a llamarlo <code className="literal">ShoppingListComponent</code> y mover el contenido de nuestra corriente <code className="literal">App.vue</code> de allí.</li>

<li className="listitem">First of all, we must create a new component. Let's call it <code class="literal">ShoppingListComponent</code> and move the content of our current <code class="literal">App.vue</code> to there.</li>


<li className="listit">Nuestro nuevo <code className="literal">ShoppingListComponent</code> debe contener el <code className="literal">props</code> atributo con <code className="literal">title</code> y <code className="literal">items</code> que va a recibir de <code className="literal">App.vue</code>.</li>

<li className="listitem">Our new <code class="literal">ShoppingListComponent</code> should contain the <code class="literal">props</code> attribute with <code class="literal">title</code> and <code class="literal">items</code> that it will receive from <code class="literal">App.vue</code>.</li>


<li className="listit"><code className="literal">ItemsComponent</code> debe recibir <code className="literal">items</code> desde el <code className="literal">props</code> atributo en lugar de tener que codificado.</li>

<li className="listitem"><code class="literal">ItemsComponent</code> should receive <code class="literal">items</code> from the <code class="literal">props</code> attribute rather than having it hardcoded.</li>


<li className="listit">En <code className="literal">App</code> el componente de <code className="literal">data</code>, vamos a declarar y codificar (por ahora) un conjunto de <code className="literal">shoppinglists</code>, cada uno de los artículos deben tener un título, una gran variedad de artículos, y un ID.</li>

<li className="listitem">In <code class="literal">App</code> component's <code class="literal">data</code>, let's declare and hardcode (for now) an array of <code class="literal">shoppinglists</code>, each of the items should have a title, an array of items, and an ID.</li>


<li className="listit"><code className="literal">App.vue</code> debe importar <code className="literal">ShoppingListComponent</code>, y en la plantilla, iterar sobre la <code className="literal">shoppinglists</code> array, y para cada uno de ellos, la construcción de la <code className="literal">html/jade</code> estructura del panel de pestañas para cada una de las listas de la compra.</li>

<li className="listitem"><code class="literal">App.vue</code> should import <code class="literal">ShoppingListComponent</code>, and in the template, iterate over the <code class="literal">shoppinglists</code> array, and for each of them, build the <code class="literal">html/jade</code> structure of the tabs panel for each of the shopping lists.</li>

</ol></div>




<p className="it">De acuerdo, entonces, vamos a empezar!</p>

<p className="p">Okay, then, let's start!</p>






<div className="section" title="Creating ShoppingListComponent and modifying ItemsComponent"><div className="titlepage"><div><div><h3 class="title"><a id="ch04lvl3sec10"></a>Creating ShoppingListComponent and modifying ItemsComponent</h3></div></div></div>




<p className="it">Dentro de la <code className="literal">components</code> carpeta, crear una nueva <code className="literal">ShoppingListComponent.vue</code>. Copiar y pegar el <code className="literal">App.vue</code> contenido del archivo en este nuevo archivo. No olvide declarar <code className="literal">props</code> que contendrá <code className="literal">title</code> y <code className="literal">items</code> y se unen <code className="literal">items</code> a la <code className="literal">items-component</code> invocación dentro de la plantilla. Su código final de este componente debe ser algo como lo siguiente:</p>

<p className="p">Inside the <code class="literal">components</code> folder, create a new <code class="literal">ShoppingListComponent.vue</code>. Copy and paste the <code class="literal">App.vue</code> file's content into this new file. Do not forget to declare <code class="literal">props</code> that will contain <code class="literal">title</code> and <code class="literal">items</code> and bind <code class="literal">items</code> to the <code class="literal">items-component</code> invocation inside the template. Your final code for this component should look something like the following:</p>






<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;template&gt; 
  <span class="strong"><strong>&lt;div&gt;</strong></span> 
    &lt;h2&gt;{{ title }}&lt;/h2&gt; 
    &lt;add-item-component&gt;&lt;/add-item-component&gt; 
    <span class="strong"><strong>&lt;items-component v-bind:items="items"&gt;&lt;/items-component&gt;</strong></span> 
    &lt;div class="footer"&gt; 
      &lt;hr /&gt; 
      &lt;change-title-component&gt;&lt;/change-title-component&gt; 
    <span class="strong"><strong>&lt;/div&gt;</strong></span> 
  &lt;/div&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
  import AddItemComponent from './AddItemComponent' 
  import ItemsComponent from './ItemsComponent' 
  import ChangeTitleComponent from './ChangeTitleComponent' 
 
  export default { 
    components: { 
      AddItemComponent, 
      ItemsComponent, 
      ChangeTitleComponent 
    } 
    <span class="strong"><strong>props: ['title', 'items']</strong></span> 
  } 
&lt;/script&gt; 
 
&lt;style scoped&gt; 
  <span class="strong"><strong>.footer { 
    font-size: 0.7em; 
    margin-top: 20vh; 
  }</strong></span> 
&lt;/style&gt; 
`}</code></pre>




<p className="it">Tenga en cuenta que hemos eliminado el estilo para el contenedor y el contenedor del <code className="literal">class</code> de los padres <code className="literal">div</code>. Esta parte del código debe permanecer en el <code className="literal">App.vue</code>, ya que define el estilo de contenedores de la aplicación global. No se olvide de la <code className="literal">props</code> atributo y vinculante <code className="literal">props</code> a <code className="literal">items-component</code>!</p>

<p className="p">Note that we removed the styling for the container and the container's <code class="literal">class</code> from the parent <code class="literal">div</code>. This part of the code should stay in <code class="literal">App.vue</code> because it defines the global application's container styling. Do not forget about the <code class="literal">props</code> attribute and binding <code class="literal">props</code> to <code class="literal">items-component</code>!</p>











<p className="it">Abrir <code className="literal">ItemsComponent.vue</code> y asegurate de que contiene el <code className="literal">props</code> atributo con <code className="literal">items</code>:</p>

<p className="p">Open <code class="literal">ItemsComponent.vue</code> and ensure that it contains the <code class="literal">props</code> attribute with <code class="literal">items</code>:</p>






<pre className="programlisting"><code>{`&lt;script&gt; 
  &lt;...&gt; 
  export default { 
    <span class="strong"><strong>props: ['items'],</strong></span> 
    &lt;...&gt; 
  } 
&lt;/script&gt; 
`}</code></pre></div><div className="section" title="Modifying App.vue"><div className="titlepage"><div><div><h3 class="title"><a id="ch04lvl3sec11"></a>Modifying App.vue</h3></div></div></div>




<p className="it">Ahora ve a <code className="literal">App.vue</code>. Eliminar todo el código dentro de la <code className="literal">&lt;script&gt;</code> y <code className="literal">&lt;template&gt;</code> las etiquetas. En la <code className="literal">script</code> etiqueta, importación <code className="literal">ShoppingListComponent</code> e invocar dentro de la <code className="literal">components</code> propiedad:</p>

<p className="p">Now go to <code class="literal">App.vue</code>. Remove all the code inside the <code class="literal">&lt;script&gt;</code> and <code class="literal">&lt;template&gt;</code> tags. In the <code class="literal">script</code> tag, import <code class="literal">ShoppingListComponent</code> and invoke it inside the <code class="literal">components</code> property:</p>






<pre className="programlisting"><code>{`//App.vue 
&lt;script&gt; 
  import <span class="strong"><strong>ShoppingListComponent</strong></span> from './components/ShoppingListComponent' 
 
  export default { 
    <span class="strong"><strong>components: { 
      ShoppingListComponent 
    }</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>




<p className="it">Añadir un <code className="literal">data</code> atributo y crear una <code className="literal">shoppinglists</code> array de allí. Añadir datos arbitrarios de esta array. Cada uno de los objetos de la array debe tener <code className="literal">id</code>, <code className="literal">title</code> y <code className="literal">items</code> atributos. <code className="literal">items</code>, Como se acuerde, deberá contener los <code className="literal">checked</code> y <code className="literal">text</code> las propiedades. Por ejemplo, su <code className="literal">data</code> propiedad podría ser similar al siguiente:</p>

<p className="p">Add a <code class="literal">data</code> attribute and create a <code class="literal">shoppinglists</code> array there. Add arbitrary data for this array. Each of the objects of the array should have <code class="literal">id</code>, <code class="literal">title</code>, and <code class="literal">items</code> attributes. <code class="literal">items</code>, as you remember, must contain the <code class="literal">checked</code> and <code class="literal">text</code> properties. For example, your <code class="literal">data</code> property might look like the following:</p>






<pre className="programlisting"><code>{`//App.vue 
&lt;script&gt; 
  import ShoppingListComponent from './components/ShoppingListComponent' 
 
  export default { 
    components: { 
      ShoppingListComponent 
    }, 
    <span class="strong"><strong>data () { 
      return { 
        shoppinglists: [ 
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
                    { text: 'all stars', checked: false }] 
          } 
        ] 
      } 
    }</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>




<p className="it">Ser más creativos que yo: añadí más listas, más artículos, algo agradable e interesante!</p>

<p className="p">Be more creative than me: add more lists, more items, something nice and interesting!</p>











<p className="it">Ahora vamos a crear una estructura para componer el panel de pestañas de arranque basado en iteración sobre la lista de compras! Vamos a empezar por la definición de una estructura básica necesaria para las pestañas para trabajar. Vamos a añadí todas las clases necesarias y Jade estructura pretender que tenemos un solo elemento. Vamos a escribir también en el bloqueo de mayúsculas todas las incógnitas que serán reutilizados de nuestra gama lista de la compra:</p>

<p className="p">Let's now create a structure for composing the bootstrap tab panel based on iteration over the shopping list! Let's start by defining a basic structure needed for tabs to work. Let's add all the necessary classes and jade structure pretending that we have only one element. Let's also write in Caps Lock all the unknowns that will be reused from our shopping list array:</p>






<pre className="programlisting"><code>{`//App.vue 
&lt;template&gt; 
  &lt;div id="app" class="container"&gt; 
    &lt;ul class="nav nav-tabs" role="tablist"&gt; 
      &lt;li role="presentation"&gt; 
        &lt;a href="<span class="strong"><strong>ID</strong></span>" aria-controls="<span class="strong"><strong>ID</strong></span>" role="tab" data-toggle="tab"&gt;<span class="strong"><strong>TITLE</strong></span>&lt;/a&gt; 
      &lt;/li&gt; 
    &lt;/ul&gt; 
    &lt;div class="tab-content"&gt; 
      &lt;div class="tab-pane" role="tabpanel" id="<span class="strong"><strong>ID</strong></span>"&gt; 
        <span class="strong"><strong>SHOPPING LIST COMPONENT</strong></span> 
      &lt;/div&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>




<p className="it">Hay dos elementos en los que necesitamos para iterar sobre la lista de la compra array de la <code className="literal">&lt;li&gt;</code> etiqueta que contiene un <code className="literal">&lt;a&gt;</code> atributo y el <code className="literal">tab-pane</code> div. En el primer caso, hay que enlazar el ID de cada lista de compras para el <code className="literal">href</code> y <code className="literal">aria-controls</code> atribuir e interpolar el título. En el segundo caso, tenemos que unir el <code className="literal">id</code> atributo a la <code className="literal">id</code> propiedad y hacer que el elemento de la lista de compras y obligar a la <code className="literal">items</code> array y <code className="literal">title</code> a la misma. ¡Fácil! Vamonos. Comience agregando la <code className="literal">v-for</code> directiva para cada uno de los elementos (a la <code className="literal">&lt;li&gt;</code> y al <code className="literal">tab-pane div</code> elemento):</p>

<p className="p">There are two elements where we need to iterate over the shopping lists array&mdash;the <code class="literal">&lt;li&gt;</code> tag that contains an <code class="literal">&lt;a&gt;</code> attribute and the <code class="literal">tab-pane</code> div. In the first case, we must bind the ID of each shopping list to the <code class="literal">href</code> and <code class="literal">aria-controls</code> attribute and interpolate the title. In the second case, we need to bind the <code class="literal">id</code> attribute to the <code class="literal">id</code> property and render the shopping list item and bind the <code class="literal">items</code> array and <code class="literal">title</code> to it. Easy! Let's go. Start by adding the <code class="literal">v-for</code> directive to each of the elements (to the <code class="literal">&lt;li&gt;</code> and to the <code class="literal">tab-pane div</code> element):</p>






<pre className="programlisting"><code>{`//App.vue 
&lt;template&gt; 
  &lt;div id="app" class="container"&gt; 
    &lt;ul class="nav nav-tabs" role="tablist"&gt; 
      &lt;li <span class="strong"><strong>v-for="list in shoppinglists"</strong></span> role="presentation"&gt; 
        &lt;a href="ID" aria-controls="ID" role="tab" data-
          toggle="tab"&gt;TITLE&lt;/a&gt; 
      &lt;/li&gt; 
    &lt;/ul&gt; 
    &lt;div class="tab-content"&gt; 
      &lt;div <span class="strong"><strong>v-for="list in shoppinglists"</strong></span> class="tab-pane" 
        role="tabpanel" 
        id="ID"&gt; 
        <span class="strong"><strong>SHOPPING LIST COMPONENT</strong></span> 
      &lt;/div&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>




<p className="it">Ahora sustituyen a las partes en el bloqueo de mayúsculas con los enlaces adecuados. Recordemos que el <code className="literal">bind</code> atributo, se utiliza la <code className="literal">v-bind:&lt;corresponding_attribute&gt;="expression"</code> sintaxis.</p>

<p className="p">Now replace the parts in Caps Lock with the proper bindings. Remember that to the <code class="literal">bind</code> attribute, we use the <code class="literal">v-bind:&lt;corresponding_attribute&gt;="expression"</code> syntax.</p>

<p className="it">Para el <code className="literal">href</code> atributo del elemento de anclaje, tenemos que definir una expresión que añade el selector de ID <code className="literal">#</code> a <code className="literal">id: v-bind:href="'#' + list.id"</code>. El <code className="literal">aria-controls</code> atributo debe estar unido al valor de la ID. <code className="literal">title</code> se podes unir utilizando el sencillo método <code>{`{{ }}`}</code> de interpolación notación.</p>

<p className="p">For the <code class="literal">href</code> attribute of the anchor element, we have to define an expression that appends the ID selector <code class="literal">#</code> to <code class="literal">id: v-bind:href="'#' + list.id"</code>. The <code class="literal">aria-controls</code> attribute should be bound to the value of the ID. <code class="literal">title</code> can be bound using the simple <code>{`{{ }}`}</code> notation interpolation.</p>


<p className="it">Para <code className="literal">shopping-list-component</code>, hay que unir <code className="literal">title</code> y <code className="literal">items</code> con los valores correspondientes del elemento de la lista. ¿Recuerdas que definimos los <code className="literal">title</code> y <code className="literal">items</code> las propiedades dentro de la <code>{`props`}</code> de la <code className="literal">ShoppingListComponent</code>? Los enlaces, por lo tanto, debe ser similar <code className="literal">v-bind:title=list.title</code> e <code className="literal">v-bind:items=list.items</code>.</p>

<p className="p">For <code class="literal">shopping-list-component</code>, we must bind <code class="literal">title</code> and <code class="literal">items</code> to the corresponding values of the list item. Do you remember that we defined the <code class="literal">title</code> and <code class="literal">items</code> properties inside the <code>{`props`}</code> of the <code class="literal">ShoppingListComponent</code>? The bindings, thus, should look like <code class="literal">v-bind:title=list.title</code> and <code class="literal">v-bind:items=list.items</code>.</p>

<p className="it">Así que después de la atribución de unión adecuada, la plantilla se verá como la siguiente:</p>

<p className="p">So after the proper binding attribution, the template will look like the following:</p>



<pre className="programlisting"><code>{`//App.vue 
&lt;template&gt; 
  &lt;div id="app" class="container"&gt; 
    &lt;ul class="nav nav-tabs" role="tablist"&gt; 
      &lt;li v-for="list in shoppinglists" role="presentation"&gt; 
        &lt;a <span class="strong"><strong>v-bind:href="'#' + list.id" v-bind:aria-controls="list.id" 
</strong></span>          role="tab" data-toggle="tab"&gt;<span class="strong"><strong>{{ list.title }}</strong></span>&lt;/a&gt; 
      &lt;/li&gt; 
    &lt;/ul&gt; 
    &lt;div class="tab-content"&gt; 
      &lt;div v-for="list in shoppinglists" class="tab-pane" role="tabpanel"
        <span class="strong"><strong>v-bind:id="list.id"</strong></span>&gt; 
        <span class="strong"><strong>&lt;shopping-list-component v-bind: </strong></span>
<span class="strong"><strong>          v-bind:items="list.items"&gt;&lt;/shopping-list-component&gt;</strong></span> 
      &lt;/div&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>




<p className="it">¡Ya casi hemos terminado! Si se abre la página ahora, verá tanto de los títulos de las pestañas que aparecen en la página:</p>

<p className="p">We're almost done! If you open the page now, you will see both of the titles of the tabs appearing on the page:</p>



<div class="mediaobject"><img src="/static/image00282.jpeg" width="100%" alt="Modifying App.vue"/></div>



<p className="it">títulos de las fichas como se ve en la pantalla después de la modificación</p>

<p className="p">Tab titles as seen on the screen after the modification</p>



<p className="it">Si se inicia al hacer clic en los títulos de las pestañas, los correspondientes paneles de la ficha se abrirá. Pero esto no es lo que esperábamos ver, ¿verdad? Lo que esperábamos es por primera pestaña sea visible (activa) de forma predeterminada. Para que esto suceda, hay que añadí la <code className="literal">active</code> clase a la primera <code className="literal">li</code> ya la primera <code className="literal">tab-pane div</code>. Pero, ¿cómo lo hacemos si el código es el mismo para todas las pestañas, siempre y cuando estamos iteración a través de la array?</p>

<p className="p">If you start clicking on the tabs titles, the corresponding tab panes will open. But this is not what we were expecting to see, right? What we were expecting is for the first tab to be visible (active) by default. For this to happen, we should add the <code class="literal">active</code> class  to the first <code class="literal">li</code> and to the first <code class="literal">tab-pane div</code>. But how can we do it if the code is the same for all the tabs as long as we are iterating through the array?</p>


<p className="it">Afortunadamente, para nosotros, Vue nos permite proporcionar no sólo el <span className="emphasis"><em>elemento iteración</em></span> dentro del <code className="literal">v-for</code> bucle, sino también <code className="literal">index</code>, y luego reutilizar esta <code className="literal">index</code>variable dentro de las expresiones utilizadas en las plantillas. Por lo tanto, podemos usarlo para hacer condicionalmente la <code className="literal">active</code> clase si el índice es "0". Uso de la <code className="literal">index</code>variable dentro de la <code className="literal">v-for</code> bucle es tan fácil como la siguiente:</p>

<p className="p">Fortunately, for us, Vue allows us to provide not only the <span class="emphasis"><em>iteration item</em></span> inside the <code class="literal">v-for</code> loop, but also <code class="literal">index</code>, and then reuse this <code class="literal">index</code> variable inside the expressions used in the templates. Thus, we can use it to conditionally render the <code class="literal">active</code> class if the index is "0". Using the <code class="literal">index</code> variable inside the <code class="literal">v-for</code> loop is as easy as the following:</p>


<pre className="programlisting"><code>{`v-for="<span class="strong"><strong>(list, index)</strong></span> in shoppinglists" 
`}</code></pre>


<p className="it">La sintaxis para la clase de unión es el mismo que para todo lo demás ( <code>{`class`}</code> es también un atributo):</p>

<p className="p">The syntax for class binding is the same as for everything else (<code>{`class`}</code> is also an attribute):</p>


<pre className="programlisting"><code>{`
<span class="strong"><strong>v-bind:class= "active" 
</strong></span>
`}</code></pre>


<p className="it">¿Recuerdas que podemos escribir cualquier expresión de JavaScript dentro de las comillas? En este caso, queremos escribir una condición que evalúa el valor de <code className="literal">index</code> y en caso de que sea "0", el valor de la clase es <code className="literal">active</code>:</p>

<p className="p">Do you remember that we can write any JavaScript expression inside the quotes? In this case, we want to write a condition that evaluates the value of <code class="literal">index</code>, and in case it is "0", the value of class is <code class="literal">active</code>:</p>


<pre className="programlisting"><code>{`v-bind:class= "index===0 ? 'active' : ''" 
`}</code></pre>


<p className="it">Añadir la <code className="literal">index</code>variable para los <code className="literal">v-for</code> modificadores y las <code className="literal">class</code> fijaciones a la <code className="literal">li</code> y al <code className="literal">tab-pane</code> elemento, por lo que el código de la plantilla definitiva se parece a lo siguiente:</p>

<p className="p">Add the <code class="literal">index</code> variable to the <code class="literal">v-for</code> modifiers and the <code class="literal">class</code> bindings to the <code class="literal">li</code> and to the <code class="literal">tab-pane</code> element, so that the final template code looks like following:</p>


<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div id="app" class="container"&gt; 
    &lt;ul class="nav nav-tabs" role="tablist"&gt; 
      &lt;li <span class="strong"><strong>v-bind:class= "index===0 ? 'active' : 
        ''" v-for="(list, index) in shoppinglists"</strong></span> role="presentation"&gt; 
        &lt;a v-bind:href="'#' + list.id" v-bind:aria-controls="list.id" 
          role="tab" data-toggle="tab"&gt;{{ list.title }}&lt;/a&gt; 
      &lt;/li&gt; 
    &lt;/ul&gt; 
    &lt;div class="tab-content"&gt; 
      &lt;div <span class="strong"><strong>v-bind:class= "index===0 ? 'active' : ''" 
        v-for="(list,index) in shoppinglists"</strong></span> class="tab-pane" 
        role="tabpanel" v-bind:id="list.id"&gt; 
        &lt;shopping-list-component v-bind: 
          v-bind:items="list.items"&gt;&lt;/shopping-list-component&gt; 
      &lt;/div&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>



<p className="it">Mira la página. Ahora debería ver bonitas fichas que muestran el contenido de forma predeterminada:</p>

<p className="p">Look at the page. Now you should see nice tabs that display the content by default:</p>



<div class="mediaobject"><img src="/static/image00283.jpeg" width="100%" alt="Modifying App.vue"/></div>



<p className="it">La apariencia de la aplicación lista de la compra después de la unión de la clase correcta</p>

<p className="p">The look and feel of  the shopping list application after the correct class binding</p>



<p className="it">El código de la aplicación lista de la compra final después de estas modificaciones se podes encontrar en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list2">Capítulo 4 / compras-lista2</a> carpeta.</p>

<p className="p">The final shopping list application code after these modifications can be found in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list2">chapter4/shopping-list2</a> folder.</p>


</div></div><div className="section" title="Event listeners using the v-on directive"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec54"></a>Event listeners using the v-on directive</h2></div></div></div>




<p className="it">Es muy fácil de escuchar a los eventos y llamar a las devoluciones de llamada utilizando Vue.js. Escucha evento también se realiza mediante una directiva especial con modificadores específicos para cada uno de los tipos de eventos. La  es <code className="literal">v-on</code>. Los modificadores se aplican después dedirectiva los dos puntos:</p>

<p className="p">It is very easy to listen to the events and call callbacks using Vue.js. Event listening is also done using a special directive with specific modifiers for each of the event types. The directive is <code class="literal">v-on</code>. The modifiers are applied after the colon:</p>



<pre className="programlisting"><code>{`v-on:click="myMethod" 
`}</code></pre>


<p className="it">Ok, se dice, y dónde lo declara este método? Es probable que no me cree, pero todos los métodos del componente se declaran dentro de la <code>{`methods`}</code> propiedad! Por lo tanto, para declarar el método llamado <code>{`methods`}</code>, usted debe hacer lo siguiente:</p>

<p className="p">Ok, you say, and where do I declare this method? You will probably not believe me, but all the component's methods are declared inside the <code>{`methods`}</code> property! So, to declare the method called <code>{`myMethod`}</code>, you should do the following:</p>


<pre className="programlisting"><code>{`&lt;script&gt; 
  export default { 
    methods: { 
      myMethod () { 
        //do something nice  
      }  
    } 
  } 
&lt;/script&gt; 
`}</code></pre>




<p className="it">Todos los <code className="literal">data</code> y <code>{`props`}</code> atributos son accesibles dentro de los métodos que utilizan la <code>{`this`}</code> palabra clave.</p>

<p className="p">All the <code class="literal">data</code> and <code>{`props`}</code> attributes are accessible inside the methods using the <code>{`this`}</code> keyword.</p>



<p className="it">Vamos a añadí un método para añadí un nuevo elemento a la <code className="literal">items</code> array. En realidad, hemos hecho ya en el capítulo anterior, cuando aprendimos cómo pasar datos entre los componentes de los padres y niños que usan los eventos del sistema de emisión. Nos limitaremos a resumir esta parte aquí.</p>

<p className="p">Let's add a method to add a new item to the <code class="literal">items</code> array. We have actually done it already in the previous chapter, when we learned how to pass data between parent and children components using the events emitting system. We will just recap this part here.</p>



<p className="it">Con el fin de poder añadí nuevos elementos dentro <code>{`AddItemComponent`}</code> de la lista de compras que pertenece a <code>{`ShoppingListComponent`}</code>, debemos hacer lo siguiente:</p>

<p className="p">In order to be able to add new items within <code class="literal">AddItemComponent`}</code> to the shopping list that belongs to <code>{`ShoppingListComponent`}</code>, we should do the following:</p>


<div class="itemizedlist"><ul className="itemizedlist">
<li className="listit">Asegúrese de que <code className="literal">AddItemComponent</code> tiene una <code className="literal">data</code> propiedad llamada <code className="literal">newItem</code>.</li>

<li className="listitem">Ensure that <code class="literal">AddItemComponent</code> has a <code class="literal">data</code> property called <code class="literal">newItem</code>.</li>


<li className="listit">Creá un <code className="literal">addItem</code> método en el <code className="literal">AddItemComponent</code> que empuja el <code className="literal">newItem</code> y emite el evento <code className="literal">add</code>.</li>

<li className="listitem">Create an <code class="literal">addItem</code> method inside the <code class="literal">AddItemComponent</code> that pushes the <code class="literal">newItem</code> and emits the event <code class="literal">add</code>.</li>


<li className="listit">Aplicar un detector de eventos al <strong className="userinput"><code>Add!</code></strong>botón mediante la <code className="literal">v-on:click</code>Directiva. Este detector de eventos debe llamar a la definida <code className="literal">addItem</code> método.</li>

<li className="listitem">Apply an event listener to the <strong class="userinput"><code>Add!</code></strong> button using the <code class="literal">v-on:click</code> directive. This event listener should call the defined <code class="literal">addItem</code> method.</li>


<li className="listit">Creá un <code className="literal">addItem</code> método dentro de la <code className="literal">ShoppingListComponent</code> que recibirá el <code className="literal">text</code> como parámetro y empuje hacia la <code className="literal">items</code> array.</li>

<li className="listitem">Create an <code class="literal">addItem</code> method inside the <code class="literal">ShoppingListComponent</code> that will receive the <code class="literal">text</code> as a parameter and push it to the <code class="literal">items</code> array.</li>


<li className="listit">Obligar a la <code className="literal">v-on</code> directiva con una costumbre <code className="literal">add</code> modificador a la <code className="literal">add-item-component</code> invocación dentro de la <code className="literal">ShoppingListComponent</code>. Este oyente llamará al <code className="literal">addItem</code> método definido en este componente.</li>

<li className="listitem">Bind the <code class="literal">v-on</code> directive with a custom <code class="literal">add</code> modifier to the <code class="literal">add-item-component</code> invocation inside the <code class="literal">ShoppingListComponent</code>. This listener will call the <code class="literal">addItem</code> method defined in this component.</li>

</ul></div>




<p className="it">¡Vámonos entonces! Utilice la aplicación de la lista de compras de la <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list2">capítulo4 / compras-lista2</a> carpeta y jugar con él.</p>

<p className="p">Let's go then! Use the shopping list application from the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list2">chapter4/shopping-list2</a> folder and play with it.</p>











<p className="it">Comienza con la apertura <code className="literal">AddItemComponent</code> y añadí la falta <code className="literal">v-on</code> directiva al <strong className="userinput"><code>Add!</code></strong>botón y el <code className="literal">addItem</code> método:</p>

<p className="p">Start by opening <code class="literal">AddItemComponent</code> and add the missing <code class="literal">v-on</code> directive to the <strong class="userinput"><code>Add!</code></strong> button and the <code class="literal">addItem</code> method:</p>






<pre className="programlisting"><code>{`//AddItemComponent.vue 
&lt;template&gt; 
  &lt;div class="input-group"&gt; 
    &lt;input type="text" <span class="strong"><strong>v-model="newItem"</strong></span> 
      placeholder="add shopping list item" class="form-control"&gt; 
    &lt;span class="input-group-btn"&gt; 
      &lt;button <span class="strong"><strong>v-on:click="addItem"</strong></span> class="btn btn-default" 
        type="button"&gt;Add!&lt;/button&gt; 
    &lt;/span&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
  export default { 
    data () { 
      return { 
        <span class="strong"><strong>newItem: ''</strong></span> 
      } 
    }, 
    <span class="strong"><strong>methods: { 
      addItem () { 
        var text 
 
        text = this.newItem.trim() 
        if (text) { 
          this.$emit('add', this.newItem) 
          this.newItem = '' 
        } 
      } 
    }</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>



<p className="it">Cambiar a <code className="literal">ShoppingListComponent</code> y obligar a la <code className="literal">v-on:add</code> directiva a la invocación del <code className="literal">add-item-component</code> interior de la <code className="literal">template</code> etiqueta:</p>

<p className="p">Switch to <code class="literal">ShoppingListComponent</code> and bind the <code class="literal">v-on:add</code> directive to the invocation of <code class="literal">add-item-component</code> inside the <code class="literal">template</code> tag:</p>

<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;template&gt; 
  &lt;div&gt; 
    &lt;h2&gt;{{ title }}&lt;/h2&gt; 
    &lt;add-item-component <span class="strong"><strong>v-on:add="addItem"</strong></span>&gt;&lt;/add-item-component&gt; 
    &lt;items-component v-bind:items="items"&gt;&lt;/items-component&gt; 
    &lt;div class="footer"&gt; 
      &lt;hr /&gt; 
      &lt;change-title-component&gt;&lt;/change-title-component&gt; 
    &lt;/div&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>


<p className="it">Ahora crea el <code className="literal">addItem</code> método dentro de la <code className="literal">ShoppingListComponent</code>. Debe recibir el texto y apenas empuje en la <code className="literal">this.items</code> array:</p>

<p className="p">Now create the <code class="literal">addItem</code> method inside the <code class="literal">ShoppingListComponent</code>. It should receive the text and just push it into the <code class="literal">this.items</code> array:</p>


<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;script&gt; 
  import AddItemComponent from './AddItemComponent' 
  import ItemsComponent from './ItemsComponent' 
  import ChangeTitleComponent from './ChangeTitleComponent' 
 
  export default { 
    components: { 
      AddItemComponent, 
      ItemsComponent, 
      ChangeTitleComponent 
    }, 
    props: ['title', 'items'], 
    <span class="strong"><strong>methods: { 
      addItem (text) { 
        this.items.push({ 
          text: text, 
          checked: false 
        }) 
      } 
    }</strong></span> 
  } 
&lt;/script&gt; 
`}</code></pre>

<p className="it">Abra la página y tratar de añadí los artículos a la lista escribiendo en el cuadro de entrada y haciendo clic en el botón después. ¡Funciona!</p>

<p className="p">Open the page and try to add the items to the list by typing in the input box and clicking the button afterward. It works!</p>


<p className="it">Ahora, me gustaría pedirle que cambiar su papel de desarrollador de la aplicación para su usuario. Escriba el nuevo elemento en el cuadro de entrada. Lo que es evidente la acción del usuario después de que el artículo ha sido introducido? No está usted tratando de golpear el <span className="emphasis"><em>Introduce</em></span> botón? ¡Apuesto que lo eres! Cuando no pasa nada, es un poco frustrante, ¿no es así? No se preocupe, mi amigo, sólo tenemos que añadí una mayor detector de eventos para el cuadro de entrada y llamar al mismo método que hicimos con el <strong className="userinput"><code>Add!</code></strong>botón.</p>

<p className="p">Now, I would like to ask you to switch your role from the application's developer to its user. Type the new item in the input box. What is the obvious user action after the item has been introduced? Aren't you trying to hit the <span class="emphasis"><em>Enter</em></span> button? I bet you are! When nothing is happening, it is a little bit frustrating, isn't it? Don't worry, my friend, we just have to add one more event listener to the input box and call the same method as we did with the <strong class="userinput"><code>Add!</code></strong> button.</p>

<p className="it">Suena fácil, ¿verdad? ¿Qué evento se activa cuando estamos golpeando la <span className="emphasis"><em>Introduzca</em></span> botón? Derecho, es el evento keyup. Por lo tanto, sólo tenemos que utilizar la <code className="literal">v-on</code> directiva con el <code className="literal">keyup</code> método después de los dos puntos delimitador: <code className="literal">v-on:keyup</code>. El problema es que este evento se activa cuando es golpeado cualquier botón del teclado, lo que significa que mientras estamos escribiendo el nuevo elemento de la lista de compras, cada vez se está introduciendo la nueva carta, el método será llamado. Esto no es lo que queremos. Por supuesto, se podría añadí una condición dentro de nuestro <code className="literal">addItem</code> método que comprobar si el <code className="literal">event.code</code> atributo y, sólo en caso de que sea <code className="literal">13</code>(que corresponde a la <span className="emphasis"><em>Introduzca</em></span> la clave), que llamaríamos el resto del método. Afortunadamente, para nosotros, Vue proporciona un mecanismo para proporcionar modificadores de teclado para este método que nos permite sólo para llamar a un método si un determinado código de la llave se vio afectada. Debe ser implementado utilizando el punto ( <code className="literal">.</code> modificador). En nuestro caso, es el siguiente:</p>

<p className="p">Sounds easy, right? What event is fired when we're hitting the <span class="emphasis"><em>Enter</em></span> button? Right, it is the keyup event. So, we just have to use the <code class="literal">v-on</code> directive with the <code class="literal">keyup</code> method after the delimiter colon: <code class="literal">v-on:keyup</code>. The problem is that this event is fired when any keyboard button is hit, which means that while we're typing the new shopping list item, each time the new letter is being introduced, the method will be called. This is not what we want. Of course, we could add a condition inside our <code class="literal">addItem</code> method that would check for the <code class="literal">event.code</code> attribute and, only in case it's <code class="literal">13</code> (which corresponds to the <span class="emphasis"><em>Enter</em></span> key), we would call the rest of the method. Fortunately, for us, Vue provides a mechanism to provide keystroke modifiers to this method that allows us to only call a method if a certain key code was hit. It should be implemented using the dot (<code class="literal">.</code>) modifier. In our case, it is as follows:</p>



<pre className="programlisting"><code>{`v-on:keyup.enter 
`}</code></pre>



<p className="it">Vamos a añadí a nuestro cuadro de entrada. Ir a <code className="literal">AddItemComponent</code> y añadí la <code className="literal">v-on:keyup.enter</code> directiva a la entrada de la siguiente manera:</p>

<p className="p">Let's add it to our input box. Go to <code class="literal">AddItemComponent</code> and add the <code class="literal">v-on:keyup.enter</code> directive to the input as follows:</p>

<pre className="programlisting"><code>{`&lt;template&gt; 
  &lt;div class="input-group"&gt; 
    &lt;input type="text" <span class="strong"><strong>v-on:keyup.enter="addItem"</strong></span> v-model="newItem" 
      placeholder="add shopping list item" class="form-control"&gt; 
    &lt;span class="input-group-btn"&gt; 
      &lt;button v-on:click="addItem" class="btn btn-default" 
        type="button"&gt;Add!&lt;/button&gt; 
    &lt;/span&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
`}</code></pre>


<p className="it">Abra la página y tratar de añadí el artículo a la lista de la compra con el <span className="emphasis"><em>Introduce</em></span> botón. ¡Funciona!</p>

<p className="p">Open the page and try to add the item to the shopping list using the <span class="emphasis"><em>Enter</em></span> button. It works!</p>


<p className="it">Vamos a hacer lo mismo para el cambio de título. La única diferencia es que los elementos de la adición, se utilizó una costumbre <code className="literal">add</code> evento y aquí vamos a utilizar el evento de entrada nativa. Ya hemos hecho. Sólo tenemos que realizar los siguientes pasos:</p>

<p className="p">Let's do the same for title changing. The only difference is that the adding items, we used a custom <code class="literal">add</code> event and here we will use the native input event. We have already done it. We just have to perform the following steps:</p>



<div class="orderedlist"><ol class="orderedlist arabic">
<li className="listit">Enlazar el título modelo usando la <code className="literal">v-model</code> directiva para <code className="literal">change-title-component</code> la plantilla del <code>{`ShoppingListComponent`}</code>.</li>

<li className="listitem">Bind the model title using the <code class="literal">v-model</code> directive to <code class="literal">change-title-component</code> in the template of the <code>{`ShoppingListComponent`}</code>.</li>


<li className="listit">Exportación <code className="literal">value</code> en el <code>{`props`}</code> atributo de la <code className="literal">ChangeTitleComponent`}</code>.</li>

<li className="listitem">Export <code class="literal">value</code> in the <code>{`props`}</code> attribute of the <code>{`ChangeTitleComponent`}</code>.</li>


<li className="listit">Creá un <code className="literal">onInput</code> método en el <code>{`ChangeTitleComponent`}</code> que emitirá el nativo <code className="literal">input</code> método con el valor del destino del evento.</li>

<li className="listitem">Create an <code class="literal">onInput</code> method inside the <code>{`ChangeTitleComponent`}</code> that will emit the native <code class="literal">input</code> method with the value of the event target.</li>


<li className="listit">Obligar <code>{`value`}</code> a <code>{`input`}</code> dentro de la <code>{`ChangeTitleComponent`}</code> plantilla del componente y la <code>{`v-on`}</code> directiva con el <code>{`onInput`}</code> modificador.</li>

<li className="listitem">Bind <code>{`value`}</code> to <code>{`input`}</code> inside the <code>{`ChangeTitleComponent`}</code> component's template and the <code>{`v-on`}</code> directive with the <code>{`onInput`}</code> modifier.</li>

</ol></div>


<p className="it">Por lo tanto, la <code className="literal">change-title-component</code> invocación dentro de la <code>{`ShoppingListComponent`}</code> plantilla se verá como la siguiente:</p>

<p className="p">Thus, the <code class="literal">change-title-component</code> invocation inside the <code>{`ShoppingListComponent`}</code> template will look like the following:</p>


<pre className="programlisting"><code>{`//ShoppingListComponent.vue 
&lt;change-title-component <span class="strong"><strong>v-model="title"</strong></span>&gt;&lt;/change-title-component&gt; 
`}</code></pre>




<p className="it"> <code>{`ChangeTitleComponent`}</code> se verá como la siguiente:</p>

<p className="p">
<code>{`ChangeTitleComponent`}</code> will look like the following:</p>


<pre className="programlisting"><code>{`//ChangeTitleComponent.vue 
&lt;template&gt; 
  &lt;div&gt; 
    &lt;em&gt;Change the title of your shopping list here&lt;/em&gt; 
    &lt;input <span class="strong"><strong>v-bind:value="value" v-on:input="onInput"</strong></span>/&gt; 
  &lt;/div&gt; 
&lt;/template&gt; 
 
&lt;script&gt; 
  export default { 
    props: ['value'], 
    methods: { 
      <span class="strong"><strong>onInput (event) { 
        this.$emit('input', event.target.value) 
      }</strong></span> 
    } 
  } 
&lt;/script&gt;  
`}</code></pre>



<p className="it">El código final de esta parte se podes encontrar en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list3">Capítulo 4 / compras-list3</a> carpeta.</p>

<p className="p">The final code for this part can be found in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list3">chapter4/shopping-list3</a> folder.</p>



</div><div className="section" title="Shorthands"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec55"></a>Shorthands</h2></div></div></div>




<p className="it">Por supuesto, no es mucho tiempo para escribir el <code className="literal">v-bind</code> o <code className="literal">v-on</code> directiva en el código cada vez. Los desarrolladores tienden a pensar que cada vez que se disminuye la cantidad de código, que ganar. Vue.js nos permite ganar! Sólo recuerda que la abreviatura de la <code className="literal">v-bind</code> directiva es de dos puntos ( <code className="literal">:</code>) y la abreviatura de la <code className="literal">v-on</code>Directiva es el <code className="literal">@</code> símbolo. Esto significa que el siguiente código hace lo mismo:</p>

<p className="p">Of course, it is not time consuming to write the <code class="literal">v-bind</code> or <code class="literal">v-on</code> directive in the code each time. Developers tend to think that each time we decrease the amount of code, we win. Vue.js allows us to win! Just remember that the shorthand for the <code class="literal">v-bind</code> directive is a colon (<code class="literal">:</code>) and the shorthand for the <code class="literal">v-on</code> directive is the <code class="literal">@</code> symbol. This means that the following code does the same thing:</p>


<pre className="programlisting"><code>{`v-bind:items="items"  :items="items" 
v-bind:class=' $index === 0 ? "active" : ""'  
:class=' $index===0 ? "active" : ""' 
v-on:keyup.enter="addItem"  @keyup.enter="addItem" 
`}</code></pre></div><div className="section" title="Exercise"><div className="titlepage"><div><div><h2 class="title"><a id="ch04lvl2sec56"></a>Exercise</h2></div></div></div>


<p className="it">Reescribir todos los <code className="literal">v-bind</code> y las <code className="literal">v-on</code> directivas de la aplicación de lista de la compra utilizando los atajos que acabamos de aprender.</p>

<p className="p">Rewrite all the <code class="literal">v-bind</code> and <code class="literal">v-on</code> directives in the shopping list application using the shortcuts we just learned.</p>



<p className="it">Comproba usted mismo por mirar el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list4">Capítulo 4 / compras-lista4</a> carpeta.</p>

<p className="p">Check yourself by looking at the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter4/shopping-list4">chapter4/shopping-list4</a> folder.</p>



</div></div>


</div></div>
<div className='col-md-3'></div>

 <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Kittens</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Kittens" id="aid-1FLS41"><div className="titlepage"><div><div><h1 className="title"><a id="ch04lvl1sec41"></a>Kittens</h1></div></div></div><p className="it">En este capítulo, no hemos tocado mucho en nuestra aplicación Pomodoro con sus gatitos agradables. Les prometo que vamos a hacer una gran cantidad de ella en el siguiente capítulo. Mientras tanto, espero que este gatito le hará feliz:</p>

<p className="p">In this chapter, we haven't touched a lot on our Pomodoro application with its nice kittens. I promise you that we'll do a lot of it in the next chapter. In the meantime, I hope that this kitten will make you happy:</p>

<div class="mediaobject"><img src="/static/image00284.jpeg" width="100%" alt="Kittens"/></div>

<p className="it">"¿Qué sigue?" pregunta el gatito</p>

<p className="p">Kitten asking "What's next?"</p></div>

</div></div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>


<title>Summary</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Summary" id="aid-1GKCM1"><div className="titlepage"><div><div>

<h1 className="title"><a id="ch04lvl1sec42"></a>Summary</h1></div></div></div>

<p className="it">En este capítulo, hemos tenido una amplia visión de conjunto de todas las posibles formas de enlace de datos a nuestra capa de presentación. Ha aprendido a simplemente interpolar datos utilizando manillares paréntesis ( <code>{`{{ }}`}</code>). También ha aprendido a utilizar expresiones y filtros de JavaScript en una interpolación tal. Que ha aprendido y las directivas como aplicado <code className="literal">v-bind</code>, <code className="literal">v-model</code>, <code className="literal">v-for</code>, <code className="literal">v-if</code>, y <code className="literal">v-show</code>.</p>

<p className="p">In this chapter, we had an extensive overview of all the possible ways of binding data to our presentation layer. You learned how to simply interpolate data using handlebars brackets (<code>{`{{ }}`}</code>). You also learned how to use JavaScript expressions and filters in such an interpolation. You learned and applied directives such as <code class="literal">v-bind</code>, <code class="literal">v-model</code>, <code class="literal">v-for</code>, <code class="literal">v-if</code>, and <code class="literal">v-show</code>.</p>

<p className="it">Hemos modificado nuestras aplicaciones para que utilicen la sintaxis de enlace de datos más rica y más eficiente.</p>

<p className="p">We modified our applications so that they use richer and more efficient data-binding syntax.</p>

<p className="p">In the next chapter, we will talk about Vuex<span class="strong"><strong>,</strong></span> the state management architecture inspired by Flux and Redux but with simplified concepts.</p>

<p className="it">En el siguiente capítulo, vamos a hablar de Vuex <span className="strong"><strong>,</strong></span> la arquitectura de gestión de estado inspirado por la fluctuación y Redux pero con conceptos simplificados.</p>

<p className="p">We will create global application state management stores for both of our applications and explore their potential by working with it.</p>

</div>


</div></div>
<div className='col-md-3'></div>

</div>  
   
  
  
  </Layout>
  )