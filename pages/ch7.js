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

<title>Chapter&nbsp;7.&nbsp;Testing &ndash; Time to Test What We Have Done So Far!</title>

<div className="chapter" title="Chapter&nbsp;7.&nbsp;Testing &ndash; Time to Test What We Have Done So Far!" id="aid-1TVKI1"><div className="titlepage"><div><div>

<h1 className="title"><a id="ch07"></a>Chapter&nbsp;7.&nbsp;Testing &ndash; Time to Test What We Have Done So Far!</h1>

</div></div></div>


<p className="p">In the previous chapter, you learned how to use and create Vue plugins. We used the existing <code className="literal">resource</code> plugin for Vue and created our own <code className="literal">NoiseGenerator</code> plugin.</p><p className="p">In this chapter, we will ensure the&nbsp;quality of both the Pomodoro and shopping list applications. We will test these applications applying different testing techniques. First, we will perform a classic unit test on Vue components and on Vuex-related code such as actions, mutations, and getters. After that, we will learn how to perform end-to-end testing using Nightwatch. So, in this chapter, we will do the following:</p><div className="itemizedlist"><ul className="itemizedlist"><li className="listitem">Talk about the importance of unit and end-to-end tests</li><li className="listitem">Implement unit tests for the Pomodoro and shopping list applications</li><li className="listitem">Learn how to mock server responses in unit tests</li><li className="listitem">Implement end-to-end tests for both applications using Nightwatch</li></ul></div><div className="section" title="Why unit tests?"><div className="titlepage"><div><div><h1 className="title"><a id="ch07lvl1sec56"></a>Why unit tests?</h1></div></div></div><p className="p">Before we start&nbsp;writing unit tests, let's try to understand what we're trying to achieve by writing them. Why is unit testing so important? Sometimes when I write my tests, the only thing I can think about is my code coverage; I want to achieve a level of 100%.</p><p className="p">Code coverage is a very important metric and helps a lot to understand the code flow and what needs to be tested. But it is not a metric of unit test quality. This is not a metric of a good code quality. You can have your code 100% covered just because you call all your functions in your testing code, but if your assertions are wrong, the code might be wrong as well. Writing good unit tests is an art that requires time and patience. But when your unit tests are good enough and when you are concentrating on making good assertions, with regard to&nbsp;corner cases and branch coverage, they provide the following:</p><div className="itemizedlist"><ul className="itemizedlist"><li className="listitem">Help us to identify failures in algorithms and logic</li><li className="listitem">Help us to improve the code quality</li><li className="listitem">Make us write code that is easy to test</li><li className="listitem">Prevent future changes from breaking the functionality</li><li className="listitem">Help us to have more predictable deadlines and estimations</li></ul></div><p className="p">Code that is easy to cover with unit tests is at the same time code that is easy to read. Code that is easy to read is less error-prone and more maintainable. Maintainability is one of the main pillars of an application's quality.</p><div className="note" title="Note"><h3 className="title"><a id="note41"></a>Note</h3><p className="p">Check more about unit testing in the presentation at 
<a className="ulink" href="https://chudaol.github.io/presentation-unit-testing">https://chudaol.github.io/presentation-unit-testing</a>
.</p></div><p className="p">Let's write some unit tests for our applications.</p><p className="p">We will use the&nbsp;Karma test runner,&nbsp;Mocha test framework,&nbsp;Chai expectations library, and&nbsp;Sinon for mocks.</p><p className="p">For more information about these tools, refer to the following:</p><div className="itemizedlist"><ul className="itemizedlist"><li className="listitem"><span className="strong"><strong>Karma</strong></span>: 
<a className="ulink" href="http://karma-runner.github.io/">http://karma-runner.github.io/</a></li><li className="listitem"><span className="strong"><strong>Mocha</strong></span>: 
<a className="ulink" href="https://mochajs.org">https://mochajs.org</a></li><li className="listitem"><span className="strong"><strong>Chaijs</strong></span>: 
<a className="ulink" href="http://chaijs.com/">http://chaijs.com/</a></li><li className="listitem"><span className="strong"><strong>Sinon</strong></span>: 
<a className="ulink" href="http://sinonjs.org/">http://sinonjs.org/</a></li></ul></div><p className="p">If we hadn't bootstrapped our application using <code className="literal">vue-cli webpack</code>&nbsp;scaffolding, we would have to install all these tools via <code className="literal">npm</code>. But in our case, we don't need this installation. Check your <code className="literal">package.json</code>&nbsp;file and you can see that all these things are already there:</p>

<pre className="programlisting"><code>{`  "devDependencies": { 
    &lt;...&gt; 
    "<span className="strong"><strong>chai</strong></span>": "^3.5.0", 
    &lt;...&gt; 
    "<span className="strong"><strong>karma</strong></span>": "^0.13.15", 
    "karma-chrome-launcher": "^2.0.0", 
    "karma-coverage": "^0.5.5", 
    "karma-mocha": "^0.2.2", 
    "karma-phantomjs-launcher": "^1.0.0", 
    "<span className="strong"><strong>karma-sinon-chai</strong></span>": "^1.2.0", 
    "<span className="strong"><strong>mocha</strong></span>": "^2.4.5", 
    &lt;...&gt; 
  } 
`}</code></pre>

<p className="p">You certainly know how simple it is to write unit tests for simple functions. It's almost like speaking human language. It (this function) should return <span className="emphasis"><em>X</em></span> if the input is <span className="emphasis"><em>Y</em></span>. I expect it to be <span className="emphasis"><em>X</em></span>.</p><p className="p">So if we have a module that exports, let's say, a function that returns the sum of two arguments, the unit test for this function must call the function with different arguments and expect some output. So, let's assume we have a function such as the following:</p>


<pre className="programlisting"><code>{`function sum(a, b) { 
  return a + b 
} 
`}</code></pre>

<p className="p">Then our unit test might look like the following:</p>
<pre className="programlisting"><code>{`it('should follow commutative law', () =&gt; { 
  let a = 2; 
  let b = 3; 
 
  expect(sum(a, b)).to.equal(5); 
  expect(sum(b, a)).to.equal(5); 
}) 
`}</code></pre>

<p className="p">We should never be shy when we think about the possible inputs to functions that are being unit tested. Empty inputs, negative inputs, string inputs, everything counts! Have you seen this famous tweet (
<a className="ulink" href="https://twitter.com/sempf/status/514473420277694465">https://twitter.com/sempf/status/514473420277694465</a>
)?</p>

<div className="mediaobject"><img src="../Images/image00303.jpeg" alt="Why unit tests?"/></div>


<p className="p">Viral tweet about QA Engineer's mindset</p><p className="p">Think about all the possible inputs and adequate outputs. Express this in expectations and assertions. Run the tests. See what is failing. Fix your code.</p></div></div>


<div className='col-md-3'></div>
  
  </div>  
  </div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Unit tests for Vue application</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Unit tests for Vue application" id="aid-1UU541"><div className="titlepage"><div><div><h1 className="title"><a id="ch07lvl1sec57"></a>Unit tests for Vue application</h1></div></div></div>


<p className="it">En primer lugar, vamos a ver en algunas particularidades de la unidad de prueba nuestra aplicación Vue y sus componentes. Con el fin de ser capaz de escribir las pruebas para la instancia de componente, en primer lugar, que debería ser instanciada! Bastante lógico, ¿verdad? La cosa es, ¿cómo podemos crear una instancia del componente Vue de manera que sus métodos sean accesibles y fácilmente comprobable? Para probar las afirmaciones básicas del estado inicial del componente, debe simplemente importarlos y hacer valer sus propiedades. Si desea probar dinámicas propiedades de las cosas que cambian una vez que el componente está unido a DOM-que debe hacer sólo las tres cosas siguientes:</p>

<p className="p">First, let's check on some particularities of unit testing our Vue application and its components. In order to be able to write tests for the component instance, first of all, it should be instantiated! Quite logical, right? The thing is, how do we instantiate the Vue component so that its methods become accessible and easily testable? To test basic assertions of the initial state of the component, you must just import them and assert their properties. If you want to test dynamic properties&mdash;things that change once the component is bound to DOM&mdash;you must do just the following three things:</p>




<div class="orderedlist"><ol class="orderedlist arabic">




<li className="listit">Importación de un componente.</li>

<li className="listitem">Import a component.</li>




<li className="listit">Instanciarlo pasándolo a la <code className="literal">Vue</code> función.</li>

<li className="listitem">Instantiate it by passing it to the <code class="literal">Vue</code> function.</li>




<li className="listit">Móntalo.</li>

<li className="listitem">Mount it.</li>



</ol></div><div class="note" title="Note"><h3 class="title"><a id="tip42"></a>Tip</h3>




<p className="it">Cuando la instancia se une a la DOM física, una vez instanciado, la compilación se inicia inmediatamente. En nuestro caso, no son vinculantes para la instancia a cualquier elemento DOM físico real, y por lo tanto tenemos que hacer de forma explícita que compila invocando manualmente el método de montaje ( <code className="literal">$mount</code>).</p>

<p className="p">When the instance is bound to the physical DOM, once instantiated, the compilation is started immediately. In our case, we are not binding the instance to any real physical DOM element, and thus we have to explicitly make it compile it by invoking manually the mount method (<code class="literal">$mount</code>).</p>


</div>


<p className="it">Ahora podes utilizar la instancia creada y acceder a sus métodos. En pseudo-código, se ve algo como lo siguiente</p>

<p className="p">Now you can use the created instance and access its methods. In pseudo-code, it looks something like the following</p>

<pre className="programlisting"><code>{`
<span class="strong"><strong>import</strong></span> MyComponent from &lt;path to my component&gt; 
var vm = <span class="strong"><strong>new Vue</strong></span>(MyComponent).<span class="strong"><strong>$mount() 
</strong></span>
`}</code></pre>




<p className="it">Ahora podemos acceder a todos los <code className="literal">vm</code> métodos de instancia y probarlos. El resto de las cosas, como por ejemplo <code className="literal">data</code>, <code className="literal">props</code> y así sucesivamente podemos simplemente falso. No hay ningún problema con la falsificación de las cosas porque nos ofrece la posibilidad de tratar todo tipo de entrada fácil y probar todas las salidas viables para cada uno de ellos.</p>

<p className="p">Now we can access all <code class="literal">vm</code> instance methods and test them. The rest of the things, such as <code class="literal">data</code>, <code class="literal">props</code>, and so on we can just fake. There is no problem with faking things because it offers us the possibility of trying all sorts of input easily and testing all the viable outputs for each of them.</p>


<p className="it">Si usted quiere tener un escenario más reales mientras que las pruebas que utilizan componentes <code className="literal">props</code>, que vienen unido al componente por su padre, o el acceso a la <code className="literal">vuex</code> tienda, y así sucesivamente, se podes utilizar el <code className="literal">ref</code> atributo para enlazar el componente de la <code className="literal">Vue</code> instancia. Esta <code className="literal">Vue</code> instancia, a su vez, crea la instancia de la tienda y de datos y se une a los elementos de datos del componente de una manera habitual. Después de eso, se accede a la instancia de componente mediante el uso de la <code className="literal">$refs</code> propiedad Vue. Este tipo de unión se verá como la siguiente:</p>

<p className="p">If you want to have a more real scenario while testing components that use <code class="literal">props</code>, which come bound to the component by its parent, or access to the <code class="literal">vuex</code> store, and so on, you can use the <code class="literal">ref</code> attribute to bind the component to the <code class="literal">Vue</code> instance. This <code class="literal">Vue</code> instance, in its turn, instantiates the store and data and binds the data items to the component in a usual way. After that, you access the component instance by using the <code class="literal">$refs</code> Vue property. This kind of binding will look like the following:</p>


<pre className="programlisting"><code>{`import store from &lt;path to store&gt; 
import <span class="strong"><strong>MyComponent</strong></span> from &lt;path to my component&gt; 
// load the component with a vue instance 
var vm = new Vue({ 
  template: '&lt;div&gt;&lt;test :items="items" :id="id" ref=testcomponent&gt;&lt;/test&gt;&lt;/div&gt;', 
  components: { 
    'test': <span class="strong"><strong>MyComponent</strong></span> 
  }, 
  data() { 
    return { 
      items: [], 
      id: 'myId' 
    } 
  }, 
  store 
}).$mount(); 
 
var myComponent = <span class="strong"><strong>vm.$refs.testcomponent</strong></span>; 
`}</code></pre>


<p className="it">Ahora podes probar todos los métodos de <code className="literal">myComponent</code> sin preocuparse por sus imperiosas <code className="literal">props</code>, <code className="literal">methods</code> y otras cosas relacionados con la instancia. Se trata de una buena parte de este enfoque; Sin embargo, como se podes ver, no es la configuración más sencilla y se debe pensar en todo. Por ejemplo, si el componente llama a la acción de alguna tienda que llama a los métodos de algunos API, debe ser capaz de tener que fingir las respuestas del servidor.</p>

<p className="p">Now you can test all the methods of <code class="literal">myComponent</code> without being worried about overriding its <code class="literal">props</code>, <code class="literal">methods</code>, and other instance-related things. This is a good part of this approach; however, as you can see, it is not the easiest setup and you should think about everything. For example, if your component calls some store's action that calls some API's methods, you should be ready to have to fake the server responses.</p>


<p className="it">Personalmente, me gusta mantener las cosas lo más simple posible todas las entradas de datos falsos, y concentrarse en las pruebas posibles salidas de las funciones y de todos los posibles casos extremos. Pero es sólo mi punto de vista personal, y además, debe tratar todo en nuestras vidas, por lo que en este capítulo, vamos a probar diferentes enfoques.</p>

<p className="p">I personally like to keep things as simple as possible, fake all the data inputs, and concentrate on testing the functions' possible outputs and all the possible edge cases. But it is just my personal point of view, and also, we should try everything in our lives, so in this chapter, we will try different approaches.</p>


</div>


</div></div>
<div className='col-md-3'></div>
<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Writing unit tests for the shopping list application</title>
<div className="section" title="Writing unit tests for the shopping list application"><div class="titlepage" id="aid-1VSLM2"><div><div><h1 className="title"><a id="ch07lvl1sec58"></a>Writing unit tests for the shopping list application</h1></div></div></div>




<p className="it">Antes de iniciar la escritura real de nuestras pruebas de unidad, vamos a establecer algunas reglas. Para cada uno de nuestros <code className="literal">.js</code> o <code className="literal">.vue</code> archivos, existirá un archivo de especificaciones de prueba correspondiente, que tendrá el mismo nombre y una <code className="literal">.spec.js</code> extensión. La estructura de estas características va a seguir este enfoque:</p>

<p className="p">Before starting the actual writing of our unit tests, let's establish some rules. For each of our <code class="literal">.js</code> or <code class="literal">.vue</code> files, there will exist a corresponding test spec file, which will have the same name and a <code class="literal">.spec.js</code> extension. The structure of these specs will follow this approach:</p>




<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">It will describe the file we are testing</li><li className="listitem">It will have a <code class="literal">describe</code> method for each of the methods that is being tested</li><li className="listitem">It will have an <code class="literal">it</code> method for each of the cases we are describing</li></ul></div>



<p className="it">Por lo tanto, si tuviéramos un <code className="literal">myBeautifulThing.js</code> archivo de especificación y por ello, podría tener el siguiente aspecto:</p>

<p className="p">So, if we had a <code class="literal">myBeautifulThing.js</code> file and spec for it, it might look like the following:</p>



<pre className="programlisting"><code>{`
<span class="strong"><strong>// myBeautifulThing.js</strong></span> 
export myBeautifulMethod1() { 
  return 'hello beauty' 
} 
 
export myBeautifulMethod2() { 
  return 'hello again' 
} 
 
<span class="strong"><strong>// myBeautifulThing.spec.js</strong></span> 
import myBeautifulThing from &lt;path to myBeautifulThing&gt; 
 
describe('myBeautifulThing', () =&gt; { 
  //define needed variables 
 
  describe('myBeautifulMethod1', () =&gt; { 
    it('should return hello beauty', () { 
      expect(myBeautifulThing.myBeautifulMethod1()).to.equal('hello  
        beauty') 
    }) 
  }) 
}) 
`}</code></pre>




<p className="it">Vamos a empezar cubriendo con unidad de prueba todas las cosas que están dentro de la <code className="literal">vuex</code> carpeta.</p>

<p className="p">Let's start by covering with unit tests all the things that are inside the <code class="literal">vuex</code> folder.</p>














<div className="section" title="Testing actions, getters, and mutations"><div className="titlepage"><div><div><h2 class="title"><a id="ch07lvl2sec75"></a>Testing actions, getters, and mutations</h2></div></div></div>




<p className="it">Para esta sección, utilice el código dentro del <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/shopping-list">Capítulo 7 / lista de compras</a> carpeta. No se olvide de ejecutar el <code className="literal">npm install</code> comando. Tenga en cuenta que hay dos nuevas mutaciones: <code className="literal">ADD_SHOPPING_LIST</code> y <code className="literal">DELETE_SHOPPING_LIST</code>. Estas mutaciones se suman nueva lista de la compra a la lista y eliminar la lista por su ID. Se utilizan en el interior de los <code className="literal">createShoppingList</code> y las <code className="literal">deleteShoppingList</code> acciones dentro de los manipuladores de fallo promesa:</p>

<p className="p">For this section, use the code inside the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/shopping-list">chapter7/shopping-list</a> folder. Do not forget to run the <code class="literal">npm install</code> command. Note that there are two new mutations: <code class="literal">ADD_SHOPPING_LIST</code> and <code class="literal">DELETE_SHOPPING_LIST</code>. These mutations add new shopping list to the list and remove the list by its ID. They are used inside the <code class="literal">createShoppingList</code> and <code class="literal">deleteShoppingList</code> actions inside the promise failure handlers:</p>














<pre className="programlisting"><code>{`//actions.js  
createShoppingList: (store, shoppinglist) =&gt; { 
  api.addNewShoppingList(shoppinglist).then(() =&gt; { 
    store.dispatch('populateShoppingLists') 
  }, () =&gt; { 
    <span class="strong"><strong>store.commit(ADD_SHOPPING_LIST, shoppinglist)</strong></span> 
  }) 
}, 
deleteShoppingList: (store, id) =&gt; { 
  api.deleteShoppingList(id).then(() =&gt; { 
    store.dispatch('populateShoppingLists') 
  }, () =&gt; { 
    <span class="strong"><strong>store.commit(DELETE_SHOPPING_LIST, id)</strong></span> 
  }) 
} 
`}</code></pre>




<p className="it">Por lo tanto, incluso si nuestro servidor back-end se ha reducido, todavía no estamos perdiendo esta funcionalidad.</p>

<p className="p">Thus, even if our backend server is down, we still are not losing this functionality.</p>



















<p className="it">Si marca la estructura del proyecto, se verá que ya existe un directorio existente llamado <code className="literal">test</code>. Dentro de este directorio, hay dos directorios, <code className="literal">unit</code> y <code className="literal">e2e</code>. Por ahora, debemos ir a la <code className="literal">unit</code> carpeta. A continuación, verá otro directorio llamado <code className="literal">specs</code>. Aquí es donde todas nuestras especificaciones de las pruebas unitarias residirán. Vamos a empezar por la creación de un directorio llamado <code className="literal">vuex</code> interior <code className="literal">specs</code>. Aquí es donde todas nuestras especificaciones para archivos de JavaScript relacionados con Vuex vivirán.</p>

<p className="p">If you check your project's structure, you will see that there is already an existing directory named <code class="literal">test</code>. Inside this directory, there are two directories, <code class="literal">unit</code> and <code class="literal">e2e</code>. For now, we should go to the <code class="literal">unit</code> folder. Here, you will see another directory called <code class="literal">specs</code>. This is where all our unit test specifications will reside. Let's start by creating a directory called <code class="literal">vuex</code> inside <code class="literal">specs</code>. Here is where all our specs for Vuex-related JavaScript files will live.</p>



















<p className="it">Vamos a empezar por probar el <code className="literal">mutations.js</code> método.</p>

<p className="p">Let's start by testing the <code class="literal">mutations.js</code> method.</p>



















<p className="it">Creá un <code className="literal">mutations.spec.js</code> archivo. En este archivo, hay que importar <code className="literal">mutations.js</code> y la mutación tipos de modo que podemos invocar fácilmente mutaciones. Echar un vistazo a las mutaciones declarados en <code className="literal">mutations.js</code>. Todos ellos reciben <code className="literal">state</code> y algunos otros parámetros. También vamos a crear un falso <code className="literal">state</code> objeto con la <code className="literal">shoppinglist</code> array en su interior por lo que podemos usarlo en nuestras pruebas.</p>

<p className="p">Create a <code class="literal">mutations.spec.js</code> file. In this file, we should import <code class="literal">mutations.js</code> and mutation types so that we can easily invoke mutations. Have a look at mutations declared in <code class="literal">mutations.js</code>. All of them receive <code class="literal">state</code> and some other parameters. Let's also create a fake <code class="literal">state</code> object with the <code class="literal">shoppinglist</code> array inside it so we can use it in our tests.</p>



















<p className="it">También vamos a restablecerla antes de cada prueba a una array vacía.</p>

<p className="p">Let's also reset it before each test to an empty array.</p>



















<p className="it">Así que, después de todos los preparativos, la especificación de bootstrap <code className="literal">mutations.js</code> tiene el siguiente aspecto:</p>

<p className="p">So, after all the preparations, the bootstrapped spec for <code class="literal">mutations.js</code> looks like the following:</p>














<pre className="programlisting"><code>{`// mutations.spec.js 
import mutations from 'src/vuex/mutations' 
import { ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST, POPULATE_SHOPPING_LISTS, CHANGE_TITLE } from 'src/vuex/mutation_types' 
 
describe('mutations.js', () =&gt; { 
  var state 
 
  beforeEach(() =&gt; { 
    state = { 
      shoppinglists: [] 
    } 
  }) 
}) 
`}</code></pre>




<p className="it">Ahora vamos a añadí pruebas para la <code className="literal">ADD_SHOPPING_LIST</code> mutación.</p>

<p className="p">Let's now add tests for the <code class="literal">ADD_SHOPPING_LIST</code> mutation.</p>



















<p className="it">Puedes volver a lo que está haciendo:</p>

<p className="p">Check again what it is doing:</p>














<pre className="programlisting"><code>{`[types.ADD_SHOPPING_LIST] (state, newList) { 
  state.shoppinglists.push(newList) 
}, 
`}</code></pre>




<p className="it">Esta mutación simplemente empuja el objeto recibido a la <code className="literal">shoppinglists</code> array. Bastante sencillo y fácil de probar.</p>

<p className="p">This mutation just pushes the received object to the <code class="literal">shoppinglists</code> array. Pretty straightforward and easy to test.</p>



















<p className="it">Para comenzar, cree una <code className="literal">describe</code> declaración con el nombre de la función:</p>

<p className="p">Start by creating a <code class="literal">describe</code> statement with the name of the function:</p>














<pre className="programlisting"><code>{`describe(<span class="strong"><strong>'ADD_SHOPPING_LIST'</strong></span>, () =&gt; { 
}) 
`}</code></pre>




<p className="it">Ahora, dentro de esta <code className="literal">describe</code> devolución de llamada, podemos añadí <code className="literal">it</code> las declaraciones con las afirmaciones necesarias. Vamos a pensar en lo que debe suceder cuando añadimos una nueva lista de la compra a la <code className="literal">shoppinglists</code> array. En primer lugar, la longitud de la array aumentará, y también contendrá el objeto de lista de compras que acaba de agregar. Esto es lo más básico para probar. Nuestra <code className="literal">it</code> función con las afirmaciones necesarios se verá como la siguiente:</p>

<p className="p">Now, inside this <code class="literal">describe</code> callback, we can add <code class="literal">it</code> statements with the needed assertions. Let's think what should happen when we add a new shopping list to the <code class="literal">shoppinglists</code> array. First of all, the array's length will increase, and it will also contain the newly added shopping list object. This is the most basic thing to test. Our <code class="literal">it</code> function with the needed assertions will look like the following:</p>














<pre className="programlisting"><code>{`  it('should add item to the shopping list array and increase its 
    length', () =&gt; { 
  //call the add_shopping_list mutations 
  <span class="strong"><strong>mutations[ADD_SHOPPING_LIST](state, {id: '1'})</strong></span> 
  //check that the array now equals array with new object 
  <span class="strong"><strong>expect(state.shoppinglists).to.eql([{id: '1'}])</strong></span> 
  //check that array's length had increased 
  <span class="strong"><strong>expect(state.shoppinglists).to.have.length(1)</strong></span> 
}) 
`}</code></pre>




<p className="it">Después de la creación de esta función, el código de toda la especificación debe ser similar a la siguiente:</p>

<p className="p">After creating this function, the whole spec's code should look like the following:</p>














<pre className="programlisting"><code>{`// mutations.spec.js 
import mutations from 'src/vuex/mutations' 
import { ADD_SHOPPING_LIST, DELETE_SHOPPING_LIST, POPULATE_SHOPPING_LISTS, CHANGE_TITLE } from 'src/vuex/mutation_types' 
 
describe('mutations.js', () =&gt; { 
  var state 
 
  beforeEach(() =&gt; { 
    state = { 
      shoppinglists: [] 
    } 
  }) 
 
  describe('ADD_SHOPPING_LIST', () =&gt; { 
    it('should add item to the shopping list array and increase its 
      length', () =&gt; { 
      mutations[ADD_SHOPPING_LIST](state, {id: '1'}) 
      expect(state.shoppinglists).to.eql([{id: '1'}]) 
      expect(state.shoppinglists).to.have.length(1) 
    }) 
  }) 
}) 
`}</code></pre>




<p className="it">Vamos a ejecutar las pruebas! Abra la consola en el directorio del proyecto y ejecute el siguiente:</p>

<p className="p">Let's run the tests! Open the console in the project's directory and run the following:</p>














<pre className="programlisting"><code>{`
<span class="strong"><strong>npm run unit 
</strong></span>
`}</code></pre>




<p className="it">Debería ver el siguiente resultado:</p>

<p className="p">You should see the following output:</p>




























<div class="mediaobject"><img src="/static/image00304.jpeg" width="100%" alt="Testing actions, getters, and mutations"/></div>
























<p className="it">La salida de funcionamiento de nuestra prueba</p>

<p className="p">The output of running our test</p>



















<p className="it">Recuerde que la broma acerca de un ingeniero de control de calidad? Podemos probar la <code className="literal">add_shopping_list</code> función para todas las entradas posibles. Lo que debería ocurrir, por ejemplo, si lo llamamos sin pasar cualquier objeto? En teoría, no debería añadí a la array de la lista de compras, ¿verdad? Vamos a probarlo. Creá una nueva <code className="literal">it</code> declaración y tratar de llamar a la función sin el segundo parámetro. Valer para una lista vacía.</p>

<p className="p">Remember the joke about a QA engineer? We can test the <code class="literal">add_shopping_list</code> function for all possible inputs. What should happen, for example, if we call it without passing any object? In theory, it should not add it to the shopping list array, right? Let's test it. Create a new <code class="literal">it</code> statement and try to call the function without the second parameter. Assert for an empty list.</p>



















<p className="it">Esta prueba se verá algo como lo siguiente:</p>

<p className="p">This test will look something like the following:</p>














<pre className="programlisting"><code>{`it('should not add the item if item is empty', () =&gt; { 
  mutations[ADD_SHOPPING_LIST](state) 
  <span class="strong"><strong>expect(state.shoppinglists).to.have.length(0)</strong></span> 
}) 
`}</code></pre>




<p className="it">Ejecutar las pruebas con el <code className="literal">npm run unit</code> comando. Oh, no! ¡Falló! El error es como sigue:</p>

<p className="p">Run the tests with the <code class="literal">npm run unit</code> command. Oh, snap! It failed! The error is as follows:</p>














<pre className="programlisting"><code>{`expected [ undefined ] to have a length of 0 but got 1 
 
`}</code></pre>




<p className="it">¿Por qué? Echar un vistazo a la mutación correspondiente. Es simplemente empuja el parámetro recibido a la array sin ningún control. Es por eso que somos capaces de añadí cualquier basura, cualquier indefinido, y cualquier otro valor apropiado! ¿Recuerdas cuando dije que escribir las pruebas unitarias buenas nos ayuda a crear menos código propenso a errores? Este es el caso. Ahora nos damos cuenta de que, probablemente, debemos hacer algunas comprobaciones antes de empujar el nuevo elemento a la array. Vamos a añadí el cheque que el artículo recibido es un objeto. Abra la <code className="literal">ADD_SHOPPING_LIST</code> mutación en el <code className="literal">mutations.js</code> archivo y volver a escribir de la siguiente manera:</p>

<p className="p">Why? Have a look at the corresponding mutation. It just pushes the received parameter to the array without any checks. That's why we are able to add any garbage, any undefined, and any other inappropriate value! Do you remember when I said that writing good unit tests helps us to create less error-prone code? This is the case. Now we realize that we should probably run some checks before pushing the new item to the array. Let's add the check that the received item is an object. Open the <code class="literal">ADD_SHOPPING_LIST</code> mutation in the <code class="literal">mutations.js</code> file and rewrite it as follows:</p>














<pre className="programlisting"><code>{`//mutations.js 
[types.ADD_SHOPPING_LIST](state, newList) { 
  if (<span class="strong"><strong>_.isObject(newList)</strong></span>) { 
    state.shoppinglists.push(newList) 
  } 
} 
`}</code></pre>




<p className="it">Ejecutar las pruebas ahora. Todos ellos están pasando!</p>

<p className="p">Run the tests now. They are all passing!</p>



















<p className="it">Por supuesto, podríamos ser aún más preciso. Podríamos comprobar y probar los objetos vacíos y también podríamos hacer algunas validaciones para este objeto para contener propiedades tales como <code className="literal">id</code>, <code className="literal">items</code>, y <code className="literal">title</code>. Voy a dejar a usted como un pequeño ejercicio. Trate de pensar en todas las posibles entradas y todas las salidas posibles, escribir todas las posibles afirmaciones, y hacer que el código para corresponder a ellos.</p>

<p className="p">Of course, we could be even more precise. We could check and test for empty objects and we could also run some validations for this object to contain properties such as <code class="literal">id</code>, <code class="literal">items</code>, and <code class="literal">title</code>. I will leave it to you as a small exercise. Try to think about all possible inputs and all possible outputs, write all the possible assertions, and make the code to correspond to them.</p>














</div><div className="section" title="Good test criteria"><div className="titlepage"><div><div><h2 class="title"><a id="ch07lvl2sec76"></a>Good test criteria</h2></div></div></div>




<p className="it">Una buena prueba de la unidad es la que fallaría cuando cambie su código. Imaginemos, por ejemplo, que decidimos asignar un título predeterminado para la nueva lista de la compra antes de empujar a la array. Por lo tanto, la mutación se vería como la siguiente:</p>

<p className="p">A good unit test is one that would fail when you change your code. Imagine, for example, that we decide to assign a default title to the new shopping list before pushing it to the array. So, the mutation would look like the following:</p>














<pre className="programlisting"><code>{`[types.ADD_SHOPPING_LIST](state, newList) { 
  if (_.isObject(newList)) { 
    <span class="strong"><strong>newList.title = 'New Shopping List'</strong></span>     
    state.shoppinglists.push(newList) 
  } 
} 
`}</code></pre>




<p className="it">Si ejecuta las pruebas, se producirá un error:</p>

<p className="p">If you run the tests, they will fail:</p>






























<div class="mediaobject"><img src="/static/image00305.jpeg" width="100%" alt="Good test criteria"/></div>





















<p className="it">Unidad de prueba falla cuando el código cambia</p>

<p className="p">Unit test fails when the code changes</p>



















<p className="it">Y esto es muy bueno. Cuando sus pruebas fallan después de los cambios en el código, el posible resultado es que usted fija la prueba debido a que el código está realizando el comportamiento previsto, o fijar su código.</p>

<p className="p">And this is very good. When your tests fail after the changes in the code, the possible outcome is that you fix the test because the code is performing the intended behavior, or you fix your code.</p>














</div><div className="section" title="Code coverage"><div className="titlepage"><div><div><h2 class="title"><a id="ch07lvl2sec77"></a>Code coverage</h2></div></div></div>




<p className="it">Estoy seguro de que usted ha notado algunas estadísticas de prueba en la salida de la consola después de ejecutar las pruebas. Estas estadísticas muestran diferentes tipos de cobertura que nuestros ensayos efectuados en el momento de ejecución. En este momento, se ve como la siguiente:</p>

<p className="p">I am sure that you have noticed some test statistics in the console output after running the tests. These statistics display different types of coverage that our tests achieved at the time of running. Right now, it looks like the following:</p>



























<div class="mediaobject"><img src="/static/image00306.jpeg" width="100%" alt="Code coverage"/></div>




















<p className="it">la cobertura de código de mutations.js después de escribir dos pruebas para la mutación ADD_SHOPPING_LIST</p>

<p className="p">Code coverage of mutations.js after writing two tests for the ADD_SHOPPING_LIST mutation</p>



















<p className="it">¿Recuerdas cuando dije que la buena cobertura de código no significa que nuestras pruebas y el código son perfectos? De hecho, tenemos declaraciones un tanto agradables, las ramas y la cobertura de líneas, pero todavía sólo probamos sólo una función de un solo archivo, y ni siquiera hemos cubierto todas las posibles entradas de esta función. Pero los números no mienten. Tenemos casi el 100% de cobertura ramas porque casi no tenemos sucursales en nuestro código.</p>

<p className="p">Do you remember when I said that good code coverage doesn't mean that our tests and code are perfect? We actually have somewhat nice statements, branches, and lines coverage, but we still just tested only one function of only one file, and we haven't even covered all possible inputs of this function. But numbers do not lie. We have almost 100% branches coverage because we almost do not have branches in our code.</p>



















<p className="it">Si quieres ver un informe más detallado, basta con abrir el <code className="literal">index.html</code> archivo desde el <code className="literal">test/unit/coverage/lcov-report</code> directorio en su navegador. Se le dará una imagen completa y total de su código y qué es exactamente lo que está cubierto y cómo. Actualmente, se ve como la siguiente:</p>

<p className="p">If you want to see a more detailed report, just open the <code class="literal">index.html</code> file from the <code class="literal">test/unit/coverage/lcov-report</code> directory in your browser. It will give you a complete and full picture of your code and what exactly is covered and how. Currently, it looks like the following:</p>































<div class="mediaobject"><img src="/static/image00307.jpeg" width="100%" alt="Code coverage"/></div>





















<p className="it">El cuadro completo de nuestra cobertura código base</p>

<p className="p">The whole picture of our codebase coverage</p>



















<p className="it">Podes profundizar en las carpetas, abra los archivos, y comprobar exactamente cómo está cubierto nuestro código. Vamos a ver <code className="literal">mutations.js</code>:</p>

<p className="p">You can drill down to the folders, open the files, and check how exactly our code is covered. Let's check <code class="literal">mutations.js</code>:</p>





























<div class="mediaobject"><img src="/static/image00308.jpeg" width="100%" alt="Code coverage"/></div>






















<p className="it">informe de cobertura para actions.js mostrar exactamente qué código fue cubierto y que no era</p>

<p className="p">Coverage report for actions.js show exactly which code was covered and which was not</p>



















<p className="it">Ahora ver lo que todavía tiene que ser probado. ¿Quieres ver cómo se informa de la <code className="literal">if…else</code> cobertura de sucursales que falta? Omita nuestra segunda prueba:</p>

<p className="p">Now you see what still has to be tested. Do you want to see how it reports the <code class="literal">if&hellip;else</code> missing branch coverage? Just skip our second test:</p>














<pre className="programlisting"><code>{`it.<span class="strong"><strong>skip</strong></span>('should not add the item if item is empty', () =&gt; { 
  mutations[ADD_SHOPPING_LIST](state) 
  expect(state.shoppinglists).to.have.length(0) 
}) 
`}</code></pre>




<p className="it">Ejecutar las pruebas y actualizar el informe para <code className="literal">actions.js</code>. Verá un <strong className="userinput"><code>E</code></strong>icono de la izquierda de la <code className="literal">if</code> declaración:</p>

<p className="p">Run the tests and refresh the report for <code class="literal">actions.js</code>. You will see an <strong class="userinput"><code>E</code></strong> icon on the left of the <code class="literal">if</code> statement:</p>



























<div class="mediaobject"><img src="/static/image00309.jpeg" width="100%" alt="Code coverage"/></div>





















<p className="it">El icono E, cerca de la sentencia if indica que la rama else no estaba cubierto por las pruebas</p>

<p className="p">The E icon near the if statement indicates that the else branch was not covered by tests</p>



















<p className="it">Esto indica que no hemos cubierto la <code className="literal">else</code> rama. Si se salta la primera prueba y dejar el uno con el objeto vacío, verá el <strong className="userinput"><code>I</code></strong>icono que está indicando que se ha saltado la <code className="literal">if</code> rama:</p>

<p className="p">This indicates that we haven't covered the <code class="literal">else</code> branch. If you skip the first test and leave the one with the empty object, you will see the <strong class="userinput"><code>I</code></strong> icon that is indicating that we have skipped the <code class="literal">if</code> branch:</p>





























<div class="mediaobject"><img src="/static/image00310.jpeg" width="100%" alt="Code coverage"/></div>




















<p className="it">El icono que cerca de la sentencia if indica que la rama si no estaba cubierto por las pruebas</p>

<p className="p">The I icon near the if statement indicates that the if branch was not covered by tests</p>



















<p className="it">Escribir pruebas para el resto de las mutaciones. Realizar al menos las siguientes comprobaciones:</p>

<p className="p">Write tests for the rest of the mutations. Perform at least the following checks:</p>














<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">For the <code class="literal">DELETE_SHOPPING_LIST</code> mutation, check that the list with the ID we pass is actually deleted if it existed before in the list, and that calling the mutation with the ID that doesn't exist in the list will not cause any change</li><li className="listitem">For the <code class="literal">POPULATE_SHOPPING_LISTS</code> mutation, check that the <code class="literal">shoppinglist</code> array is overridden with the array we pass when call this mutation</li><li className="listitem">For the <code class="literal">CHANGE_TITLE</code> mutation, check that when we pass the new title and the ID, exactly this object's title is changed</li></ul></div>




<p className="it">Al final, el <code className="literal">mutation.spec.js</code> archivo será probablemente parecerse a lo esencial en <a className="ulink" href="https://gist.github.com/chudaol/befd9fc5701ff72dff7fb68ef1c7f06a">https://gist.github.com/chudaol/befd9fc5701ff72dff7fb68ef1c7f06a</a> .</p>

<p className="p">In the end, your <code class="literal">mutation.spec.js</code> file will probably look like the gist at 
<a class="ulink" href="https://gist.github.com/chudaol/befd9fc5701ff72dff7fb68ef1c7f06a">https://gist.github.com/chudaol/befd9fc5701ff72dff7fb68ef1c7f06a</a>
.</p>



















<p className="it">Después de estas pruebas, la cobertura de <code className="literal">mutation.js</code> apariencia bastante agradable, en realidad:</p>

<p className="p">After these tests, the coverage of <code class="literal">mutation.js</code> looks pretty nice, actually:</p>






























<div class="mediaobject"><img src="/static/image00311.jpeg" width="100%" alt="Code coverage"/></div>


















<p className="it">una cobertura del 100% para mutations.js después de escribir pruebas unitarias para todas las mutaciones</p>

<p className="p">100% coverage for mutations.js after writing unit tests for all the mutations</p>



















<p className="it">De la misma manera exacta, podemos probar nuestra <code className="literal">getters.js</code>. Creá un <code className="literal">getters.spec.js</code> archivo y llenarlo de pruebas para poner a prueba nuestras dos funciones captadores. Al final, podes parecer que lo esencial en <a className="ulink" href="https://gist.github.com/chudaol/e89dd0f77b1563366d5eec16bd6ae4a9">https://gist.github.com/chudaol/e89dd0f77b1563366d5eec16bd6ae4a9</a> .</p>

<p className="p">In the exact same way, we can test our <code class="literal">getters.js</code>. Create a <code class="literal">getters.spec.js</code> file and fill it with tests to test our two getters functions. In the end, it might look like the gist at 
<a class="ulink" href="https://gist.github.com/chudaol/e89dd0f77b1563366d5eec16bd6ae4a9">https://gist.github.com/chudaol/e89dd0f77b1563366d5eec16bd6ae4a9</a>
.</p>



















<p className="it">El único componente de almacén importante que falta en la unidad de pruebas es <code className="literal">actions.js</code>. Sin embargo, nuestros <code className="literal">actions.js</code> usos ampliamente la API que, a su vez, realiza peticiones HTTP. Sus funciones también son asíncronas. ¿Podes este tipo de cosas se unidad de prueba de la misma manera flexible y fácil ya que los captadores y las acciones con sólo probamos? ¡Sí puede! Vamos a ver, ¿cómo podemos falsas respuestas del servidor usando <code className="literal">sinon.js</code> y cómo podemos escribir pruebas asíncronos con <code className="literal">mocha.js</code>.</p>

<p className="p">The only important store component that is missing in unit testing is <code class="literal">actions.js</code>. But our <code class="literal">actions.js</code> uses extensively the API that, in turn, performs HTTP requests. Its functions are also asynchronous. Can this kind of thing be unit tested in the same flexible and easy way as we just tested getters and actions? Yes, it can! Let's see how can we fake server responses using <code class="literal">sinon.js</code> and how can we write asynchronous tests with <code class="literal">mocha.js</code>.</p>














</div><div className="section" title="Faking server responses and writing asynchronous tests"><div className="titlepage"><div><div><h2 class="title"><a id="ch07lvl2sec78"></a>Faking server responses and writing asynchronous tests</h2></div></div></div>




<p className="it">Abra el <code className="literal">actions.js</code> archivo y comprobar el primer método de acción:</p>

<p className="p">Open the <code class="literal">actions.js</code> file and check the very first action method:</p>














<pre className="programlisting"><code>{`//actions.js 
populateShoppingLists: ({ commit }) =&gt; { 
  api.fetchShoppingLists().then(response =&gt; { 
    commit(POPULATE_SHOPPING_LISTS, response.data) 
  }) 
} 
`}</code></pre>




<p className="it">En primer lugar, vamos a añadí una <code className="literal">return</code> declaración a esta función para hacerlo volver una promesa. Lo hacemos que nos permita llamar al <code className="literal">.then</code> método una vez que la promesa se resuelve de manera que podemos probar todo lo que sucede en el ínterin. Por lo tanto, nuestra función tiene el siguiente aspecto:</p>

<p className="p">First of all, let's add a <code class="literal">return</code> statement to this function to make it return a promise. We do it to enable us to call the <code class="literal">.then</code> method once the promise resolves so that we can test everything that happens in the meantime. So, our function looks like the following:</p>














<pre className="programlisting"><code>{`//actions.js 
populateShoppingLists: ({ commit }) =&gt; { 
  <span class="strong"><strong>return</strong></span> api.fetchShoppingLists().then(response =&gt; { 
    commit(POPULATE_SHOPPING_LISTS, response.data) 
  }) 
} 
`}</code></pre>




<p className="it">Ahora, comprobar lo que está sucediendo aquí:</p>

<p className="p">Now, check what is happening here:</p>














<div class="orderedlist"><ol class="orderedlist arabic"><li className="listitem">This function receives <code class="literal">store</code> with its <code class="literal">dispatch</code> method.</li><li className="listitem">It performs a call to the API. The API, in turn, calls the resource <code class="literal">get</code> method that just performs an HTTP request to our server.</li><li className="listitem">After the API's <code class="literal">fetchShoppingLists</code> promise is resolved, our method is calling the store's <code class="literal">commit</code> method with two parameters: a <code class="literal">POPULATE_SHOPPING_LISTS</code> string and the data that came in response.</li></ol></div>




<p className="it">¿Cómo podemos probar esta unidad de flujo de trabajo? Si hemos sido capaces de atrapar la solicitud y se burlan de la respuesta, podríamos comprobar si el <code className="literal">commit</code> método (pasado por nosotros, lo que significa que también podes ser burlado) se llama con la respuesta que le proporcionamos en simulacro de nuestro servidor. Suena confuso? ¡De ningún modo! Los pasos son los siguientes:</p>

<p className="p">How can we unit test this workflow? If we were able to catch the request and mock the response, we could check if the <code class="literal">commit</code> method (passed by us, which means that it can also be mocked) is called with the response that we provide in our server's mock. Sounds confusing? Not at all! The steps are the following:</p>














<div class="orderedlist"><ol class="orderedlist arabic"><li className="listitem">Create a mock for the <code class="literal">store</code> and its <code class="literal">commit</code> method.</li><li className="listitem">Create a mock for the hypothetical server response.</li><li className="listitem">Create a fake server that will intercept the GET request and return the mocked response.</li><li className="listitem">Check the <code class="literal">commit</code> method is called with our mocked response and the <code class="literal">POPULATE_SHOPPING_LISTS</code> string.</li></ol></div>




<p className="it">Esto significa que nuestra prueba podría ser algo como lo siguiente:</p>

<p className="p">It means that our test could look something like the following:</p>














<pre className="programlisting"><code>{`it('should test that commit is called with correct parameters', () =&gt; { 
  actions.populateShoppingLists({ commit }).then(() =&gt; { 
    expect(commit).to.have.been.calledWith(&lt;...&gt;) 
  }) 
}) 
`}</code></pre>




<p className="it">El problema aquí es que nuestras pruebas son síncronas, es decir, el código nunca se llegará a lo que está dentro de nuestro <code className="literal">.then</code> devolución de llamada. Por suerte para nosotros, <code className="literal">mocha.js</code> proporciona soporte para las pruebas asíncrona. Compruébelo usted mismo en <a className="ulink" href="https://mochajs.org/#asynchronous-code">https://mochajs.org/#asynchronous-code</a> . Lo único que tiene que hacer es pasar <code className="literal">done</code> de devolución de llamada <code className="literal">it()</code> y llamarlo cuando la prueba se ha completado. De esta manera, nuestra pseudo-código para esta prueba sería la siguiente:</p>

<p className="p">The problem here is that our tests are synchronous, meaning the code will never reach what is inside our <code class="literal">.then</code> callback. Luckily for us, <code class="literal">mocha.js</code> provides support for asynchronous testing. Check it out at 
<a class="ulink" href="https://mochajs.org/#asynchronous-code">https://mochajs.org/#asynchronous-code</a>
. The only thing you have to do is to pass <code class="literal">done</code> callback to <code class="literal">it()</code> and call it when the test is complete. In this way, our pseudo-code for this test would look the following:</p>














<pre className="programlisting"><code>{`it('should test that commit is called with correct parameters', 
(<span class="strong"><strong>done</strong></span>) =&gt; { 
  actions.populateShoppingLists({ commit }).then(() =&gt; { 
   expect(commit).to.have.been.calledWith(&lt;...&gt;) 
   <span class="strong"><strong>done()</strong></span> 
  }) 
}) 
`}</code></pre>




<p className="it">Vamos código ahora! Creá una especificación de prueba y llamarlo <code className="literal">actions.spec.js</code>, y escribir todo el código de programa previo necesario:</p>

<p className="p">Let's code now! Create a test spec and call it <code class="literal">actions.spec.js</code>, and write all the needed bootstrapping code:</p>














<pre className="programlisting"><code>{`// actions.spec.js 
import actions from 'src/vuex/actions' 
import { CHANGE_TITLE, POPULATE_SHOPPING_LISTS } from 'src/vuex/mutation_types' 
 
describe('actions.js', () =&gt; { 
  describe('populateShoppingLists', () =&gt; { 
    //here we will add our test case 
  }) 
}) 
`}</code></pre>




<p className="it">Ahora vamos a seguir nuestros pasos. En primer lugar, vamos a burlarse de la respuesta del servidor. Basta con crear la <code className="literal">lists</code>variable y inicializarlo en el <code className="literal">beforeEach</code> método:</p>

<p className="p">Now let's follow our steps. First of all, let's mock the server response. Just create the <code class="literal">lists</code> variable and initialize it in the <code class="literal">beforeEach</code> method:</p>














<pre className="programlisting"><code>{`//actions.spec.js 
describe('actions.js', () =&gt; { 
  <span class="strong"><strong>var lists</strong></span> 
   
  beforeEach(() =&gt; { 
    <span class="strong"><strong>// mock shopping lists 
    lists = [{ 
      id: '1', 
      title: 'Groceries' 
    }, { 
      id: '2', 
      title: 'Clothes' 
    }]</strong></span> 
  }) 
   
  describe('populateShoppingLists', () =&gt; { 
  }) 
}) 
`}</code></pre>




<p className="it">Ahora, vamos a burlan de la tienda <code className="literal">commit</code> método:</p>

<p className="p">Now, let's mock the store's <code class="literal">commit</code> method:</p>














<pre className="programlisting"><code>{`// actions.spec.js 
describe('actions.js', () =&gt; { 
  var lists, <span class="strong"><strong>store</strong></span> 
 
  beforeEach(() =&gt; { 
    &lt;...&gt; 
    //mock store commit method 
    <span class="strong"><strong>store = { 
      commit: (method, data) =&gt; {}, 
      state: { 
        shoppinglists: lists 
      } 
    }</strong></span> 
  }) 
  &lt;...&gt; 
}) 
`}</code></pre>




<p className="it">Ahora, tenemos que espiar a este <code className="literal">commit</code> método con el fin de poder afirmar que se ha llamado con los parámetros requeridos. Vamos a utilizar el <code className="literal">sinon.stub</code> método para esto. Consulte la documentación sobre <code className="literal">sinon.js</code> este asunto en <a className="ulink" href="http://sinonjs.org/docs/#stubs">http://sinonjs.org/docs/#stubs</a> . La creación de un talón en una función dada es muy fácil. Sólo tiene que llamar al <code className="literal">sinon.stub</code> método y pasar a que el objeto y su método que queremos espiar a:</p>

<p className="p">Now, we have to spy on this <code class="literal">commit</code> method in order to be able to assert that it was called with the required parameters. We will use the <code class="literal">sinon.stub</code> method for this. Check the documentation on <code class="literal">sinon.js</code> on this matter at 
<a class="ulink" href="http://sinonjs.org/docs/#stubs">http://sinonjs.org/docs/#stubs</a>
. Creating a stub on a given function is very easy. Just call the <code class="literal">sinon.stub</code> method and pass to it the object and its method that we want to spy on:</p>














<pre className="programlisting"><code>{`sinon.stub(store, 'commit')  
`}</code></pre>




<p className="it">Por lo tanto, nuestra <code className="literal">beforeEach</code> función se verá como la siguiente:</p>

<p className="p">So, our <code class="literal">beforeEach</code> function will look like the following:</p>














<pre className="programlisting"><code>{`beforeEach(() =&gt; { 
    &lt;...&gt; 
    // mock store commit method 
    store = { 
      commit: (method, data) =&gt; {}, 
      state: { 
        shoppinglists: lists 
      } 
    } 
     
    sinon.stub(store, 'commit') 
}) 
`}</code></pre>




<p className="it">Es muy importante que después de cada método, que <span className="emphasis"><em>restaurar</em></span> el talón de manera que cada método de prueba se ejecuta en un entorno limpio que no está afectada por otras pruebas. Para ello, cree un <code className="literal">afterEach</code> método y añadí la siguiente línea:</p>

<p className="p">It's very important that after each method, we <span class="emphasis"><em>restore</em></span> the stub so that each testing method runs in a clean environment that is not affected by other tests. For this, create an <code class="literal">afterEach</code> method and add the following line:</p>














<pre className="programlisting"><code>{`afterEach(function () { 
  //restore stub 
  store.commit.restore() 
}) 
`}</code></pre>




<p className="it">Ahora lo único que tenemos que hacer es falsa nuestra respuesta del servidor con nuestros datos burlado. Vamos a usar Sinon de <code className="literal">fakeServer</code> para este propósito. Consulte la documentación del sinon en <a className="ulink" href="http://sinonjs.org/docs/#fakeServer">http://sinonjs.org/docs/#fakeServer</a> . Sólo tenemos que crear <code className="literal">fakeServer</code> y decirle que responder con nuestra respuesta burlado a la solicitud GET:</p>

<p className="p">Now the only thing we need to do is fake our server response with our mocked data. Let's use Sinon's <code class="literal">fakeServer</code> for this purpose. Check sinon's documentation at 
<a class="ulink" href="http://sinonjs.org/docs/#fakeServer">http://sinonjs.org/docs/#fakeServer</a>
. We just need to create <code class="literal">fakeServer</code> and tell it to respond with our mocked response to the GET request:</p>














<pre className="programlisting"><code>{`describe('actions.js', () =&gt; { 
  var lists, store, server 
 
  beforeEach(() =&gt; { 
    &lt;...&gt; 
    //mock server 
    <span class="strong"><strong>server = sinon.fakeServer.create() 
    server.respondWith('GET', /shoppinglists/, xhr =&gt; { 
      xhr.respond(200, {'Content-Type': 'application/json'}, 
      JSON.stringify(lists)) 
    })</strong></span> 
  }) 
  &lt;...&gt; 
}) 
`}</code></pre>




<p className="it">Después de estos preparativos, cada prueba que de alguna manera va a realizar una solicitud debe llamar al servidor de <code className="literal">respond</code> método para invocar la funcionalidad del servidor.</p>

<p className="p">After these preparations, each test that will somehow perform a request should call the server's <code class="literal">respond</code> method in order to invoke the server's functionality.</p>





<p className="it">Sin embargo, podemos simplificar esto simplemente diciendo al servidor de auto-responder cada solicitud atrapado:</p>

<p className="p">However, we can simplify this by just telling the server to auto-respond each caught request:</p>



<pre className="programlisting"><code>{`server.autoRespond = true 
`}</code></pre>




<p className="it">Por lo tanto, nuestro código por burlarse del servidor se verá como la siguiente:</p>

<p className="p">So, our code for mocking the server will look like the following:</p>














<pre className="programlisting"><code>{`beforeEach(() =&gt; { 
    &lt;...&gt; 
    //mock server 
    server = sinon.fakeServer.create() 
    server.respondWith('GET', /shoppinglists/, xhr =&gt; { 
      xhr.respond(200, {'Content-Type': 'application/json'}, 
      JSON.stringify(lists) 
    }) 
    <span class="strong"><strong>server.autoRespond = true</strong></span>   
}) 
`}</code></pre>




<p className="it">Es muy importante que después de cada prueba, restauramos nuestro servidor falso de modo que ninguna otra prueba se ve afectada por nuestros burla en esta prueba. Así que añadí la siguiente línea al <code className="literal">afterEach</code> método:</p>

<p className="p">It is very important that after each test, we restore our fake server so that no other test is affected by our mocks in this test. So add the following line to the <code class="literal">afterEach</code> method:</p>


<pre className="programlisting"><code>{`afterEach(() =&gt; { 
  //restore stubs and server mock 
  store.commit.restore() 
  <span class="strong"><strong>server.restore()</strong></span> 
}) 
`}</code></pre>




<p className="it">Ahora que hemos burlado de todo lo que era posible para burlarse, por fin podemos escribir nuestro caso de prueba! Por lo tanto, usted recuerda, creamos una <code className="literal">it()</code> declaración con <code className="literal">done</code> devolución de llamada, llamamos nuestro <code className="literal">populateShoppingLists</code> método, y comprobar que la respuesta resuelta es la misma que nuestra burlado <code className="literal">list</code> objeto. Entra en el <code className="literal">describe</code> método y traducimos en el código de lo que acabamos de describir:</p>

<p className="p">Now that we have mocked everything that it was possible to mock, we can finally write our test case! So, you remember, we create an <code class="literal">it()</code> statement with <code class="literal">done</code> callback, call our <code class="literal">populateShoppingLists</code> method, and check that the resolved response is the same as our mocked <code class="literal">list</code> object. Step into the <code class="literal">describe</code> method and just translate into the code what we've just described:</p>














<pre className="programlisting"><code>{`it('should call commit method with POPULATE_SHOPPING_LIST and with mocked lists', done =&gt; { 
  actions.populateShoppingLists(store).then(() =&gt; { 
    <span class="strong"><strong>expect(store.commit).to.have.been.calledWith(POPULATE_SHOPPING_LISTS,
    lists) 
    done()</strong></span> 
  }).catch(done) 
}) 
`}</code></pre>




<p className="it">Nuestra especificación de prueba entera ahora se ve como la esencia en <a className="ulink" href="https://gist.github.com/chudaol/addb6657095406234bc6f659970f3eb8">https://gist.github.com/chudaol/addb6657095406234bc6f659970f3eb8</a> . </p>

<p className="p">Our whole test spec now looks like the gist at 
<a class="ulink" href="https://gist.github.com/chudaol/addb6657095406234bc6f659970f3eb8">https://gist.github.com/chudaol/addb6657095406234bc6f659970f3eb8</a>.
</p>



















<p className="it">Ejecutar las pruebas con <code className="literal">npm run unit</code>. ¡Funciona!</p>

<p className="p">Run the tests with <code class="literal">npm run unit</code>. It works!</p>



















<p className="it">Ahora sólo tenemos que burlarse de las respuestas del servidor para el PUT, POST y eliminar los métodos. Estos métodos no devuelve ningún dato; Sin embargo, con el fin de ser capaz de probar las respuestas, volvamos falsos mensajes de éxito, y en cada prueba, verifique que los datos devueltos se corresponde con estas respuestas. Añadir las siguientes variables en la parte superior de la especificación:</p>

<p className="p">Now we just have to mock the server's responses for the PUT, POST, and DELETE methods. These methods do not return any data; however, in order to be able to test the responses, let's return faked success messages, and in each test, check that the returned data corresponds to these responses. Add the following variables on top of the spec:</p>




<pre className="programlisting"><code>{`  var server, store, lists, successPut, successPost, successDelete 
 
  <span class="strong"><strong>successDelete = {'delete': true} 
  successPost = {'post': true} 
  successPut = {'put': true} 
</strong></span>
`}</code></pre>




<p className="it">Y añadí los siguientes métodos respuestas falsas a nuestro servidor:</p>

<p className="p">And add the following fake responses methods to our server:</p>


<pre className="programlisting"><code>{`    server.respondWith(<span class="strong"><strong>'POST'</strong></span>, /shoppinglists/, xhr =&gt; { 
      xhr.respond(200, {'Content-Type': 'application/json'}, 
        JSON.stringify(<span class="strong"><strong>successPost</strong></span>)) 
    }) 
    server.respondWith(<span class="strong"><strong>'PUT'</strong></span>, /shoppinglists/, xhr =&gt; { 
      xhr.respond(200, {'Content-Type': 'application/json'}, 
        JSON.stringify(<span class="strong"><strong>successPut</strong></span>)) 
    }) 
    server.respondWith(<span class="strong"><strong>'DELETE'</strong></span>, /shoppinglists/, xhr =&gt; { 
      xhr.respond(200, {'Content-Type': 'application/json'}, 
        JSON.stringify(<span class="strong"><strong>successDelete</strong></span>)) 
    }) 
`}</code></pre>




<p className="it">Vamos a ver cómo va a trabajar, por ejemplo, para el <code className="literal">changeTitle</code> método. En esta prueba, queremos probar que el <code className="literal">commit</code> método será llamado con el ID y el título dado. Nuestra prueba, por lo tanto, se verá como la siguiente:</p>

<p className="p">Let's see how it'll work, for example, for the <code class="literal">changeTitle</code> method. In this test, we want to test that the <code class="literal">commit</code> method will be called with the given ID and title. Our test, therefore will look like the following:</p>














<pre className="programlisting"><code>{`describe(<span class="strong"><strong>'changeTitle'</strong></span>, () =&gt; { 
  it('should call commit method with CHANGE_TITLE string', (done) =&gt; { 
    let title = 'new title' 
 
    actions.changeTitle(store, {title: title, id: '1'}).then(() =&gt; { 
      <span class="strong"><strong>expect(store.commit).to.have.been.calledWith(CHANGE_TITLE, 
      {title: title, id: '1'})</strong></span> 
      done() 
    }).catch(done) 
  }) 
}) 
`}</code></pre>




<p className="it">Para que esto funcione correctamente, también hay que burlarse de la tienda <code className="literal">dispatch</code> método, ya que está siendo utilizado dentro de la <code className="literal">changeTitle</code> acción. Sólo tiene que añadí la <code className="literal">dispatch</code> propiedad a simulacro de nuestra tienda y devolver una promesa resuelto:</p>

<p className="p">For this to work properly, we should also mock the store's <code class="literal">dispatch</code> method since it's being used inside the <code class="literal">changeTitle</code> action. Just add the <code class="literal">dispatch</code> property to our store's mock and return a resolved promise:</p>



<pre className="programlisting"><code>{`// mock store commit and dispatch methods 
store = { 
  commit: (method, data) =&gt; {}, 
  <span class="strong"><strong>dispatch: () =&gt; { 
    return Promise.resolve() 
  },</strong></span> 
  state: { 
    shoppinglists: lists 
  } 
} 
`}</code></pre>




<p className="it">Comproba el código final de las pruebas de unidad en este momento en el <a className="ulink" href="https://gist.github.com/chudaol/1405dff6a46b84c284b0eae731974050">https://gist.github.com/chudaol/1405dff6a46b84c284b0eae731974050</a> .</p>

<p className="p">Check the final code for unit tests at this moment at 
<a class="ulink" href="https://gist.github.com/chudaol/1405dff6a46b84c284b0eae731974050">https://gist.github.com/chudaol/1405dff6a46b84c284b0eae731974050</a>
.</p>




<p className="it">Terminar la prueba para <code className="literal">actions.js</code> mediante la adición de pruebas unitarias para los <code className="literal">updateList</code>, <code className="literal">createShoppingList</code> y <code className="literal">deleteShoppingList</code> métodos. Comproba el código de conjunto de pruebas unitarias hasta ahora en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/shopping-list2">Capítulo 7 / compras-lista2</a> carpeta.</p>

<p className="p">Finish the testing for <code class="literal">actions.js</code> by adding unit tests for the <code class="literal">updateList</code>, <code class="literal">createShoppingList</code>, and <code class="literal">deleteShoppingList</code> methods. Check the whole code for unit tests until now in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/shopping-list2">chapter7/shopping-list2</a> folder.</p>





</div><div className="section" title="Testing components"><div className="titlepage"><div><div><h2 class="title"><a id="ch07lvl2sec79"></a>Testing components</h2></div></div></div>




<p className="it">Ahora que todas nuestras funciones relacionadas con Vuex son probados unidad, es el momento de aplicar técnicas específicas de pruebas de componentes Vue para probar los componentes de nuestra aplicación lista de compras.</p>

<p className="p">Now that all our Vuex-related functions are unit tested, it is time to apply specific Vue components testing techniques to test components of our shopping list application.</p>


<p className="it">Que recuerda de la primera sección de este capítulo que con el fin de preparar la <code className="literal">Vue</code> instancia a ensayar unidad, hay que importar, iniciar (que pasa a novedades <code className="literal">Vue</code> ejemplo), y montarlo. ¡Vamos a hacerlo! Creá una <code className="literal">components</code> carpeta dentro de la <code className="literal">test/unit/specs</code> directorio. Vamos a empezar por probar el <code className="literal">AddItemComponent</code> componente. Creá un <code className="literal">AddItemComponent.spec.js</code> archivo e importación <code className="literal">Vue</code> y <code className="literal">AddItemComponent</code>:</p>

<p className="p">You remember from the first section of this chapter that in order to prepare the <code class="literal">Vue</code> instance to be unit tested, we must import, initiate (passing it to new <code class="literal">Vue</code> instance), and mount it. Let's do it! Create a <code class="literal">components</code> folder inside the <code class="literal">test/unit/specs</code> directory. Let's start by testing the <code class="literal">AddItemComponent</code> component. Create an <code class="literal">AddItemComponent.spec.js</code> file and import <code class="literal">Vue</code> and <code class="literal">AddItemComponent</code>:</p>



<pre className="programlisting"><code>{`//AddItemComponent.spec.js 
import Vue from 'vue' 
import AddItemComponent from 'src/components/AddItemComponent' 
 
describe('AddItemComponent.vue', () =&gt; { 
   
}) 
`}</code></pre>




<p className="it">La variable <code className="literal">AddItemComponent</code> se podes utilizar para acceder directamente a todos los datos iniciales del componente. Por lo tanto podemos afirmar, por ejemplo, que los datos del componente se inicializa con una <code className="literal">newItem</code> propiedad que es igual a la cadena vacía:</p>

<p className="p">The variable <code class="literal">AddItemComponent</code> can be used to access directly all the component's initial data. So we can assert, for example, that the component data is initialized with a <code class="literal">newItem</code> property that equals to empty string:</p>

<pre className="programlisting"><code>{`describe('initialization', () =&gt; { 
  it('should initialize the component with empty string newItem', () =&gt; { 
    <span class="strong"><strong>expect(AddItemComponent.data()).to.eql({ 
      newItem: '' 
    })</strong></span> 
  }) 
}) 
`}</code></pre>




<p className="it">Ahora vamos a comprobar qué métodos de este componente, podemos cubrir con las pruebas unitarias.</p>

<p className="p">Let's now check which methods of this component we can cover with unit tests.</p>



<p className="it">Este componente tiene sólo un método, que es <code className="literal">addItem</code> método. Vamos a ver lo que hace este método:</p>

<p className="p">This component has only one method, which is <code class="literal">addItem</code> method. Let's check what this method does:</p>


<pre className="programlisting"><code>{`//AddItemComponent.vue 
addItem () { 
  var text 
 
  text = this.newItem.trim() 
  if (text) { 
    this.$emit('add', this.newItem) 
    this.newItem = '' 
    this.$store.dispatch('updateList', this.id) 
  } 
} 
`}</code></pre>



<p className="it">Este método de acceso a la tienda, por lo que, tenemos que utilizar otra estrategia de inicializar el componente en lugar de directamente utilizando el valor importado. En este caso, debemos inicializar componente principal Vue con <code className="literal">AddItemComponent</code> como un niño, pasar todos los atributos necesarios para ello, y acceder a ella mediante el <code className="literal">$refs</code> atributo. Por lo tanto, la inicialización del componente dentro del método de prueba se verá como la siguiente:</p>

<p className="p">This method access to the store, so, we have to use another strategy of initializing the component rather than just directly using the imported value. In this case, we should initialize Vue main component with <code class="literal">AddItemComponent</code> as a child, pass all the necessary attributes to it, and access it using the <code class="literal">$refs</code> attribute. So, the component's initialization inside the test method will look like the following:</p>



<pre className="programlisting"><code>{`var vm, addItemComponent; 
 
vm = new Vue({ 
  template: '&lt;add-item-component :items="items" :id="id" 
  <span class="strong"><strong>ref="additemcomponent"</strong></span>&gt;' + 
  '&lt;/add-item-component&gt;', 
  components: { 
    AddItemComponent 
  }, 
  data() { 
    return { 
      items: [], 
      id: 'niceId' 
    } 
  }, 
  store 
}).$mount(); 
 
<span class="strong"><strong>addItemComponent = vm.$refs.additemcomponent 
</strong></span>
`}</code></pre>




<p className="it">Volver a la funcionalidad del método. Por lo tanto, el <code className="literal">addItem</code> método de toma de la instancia de <code className="literal">newItem</code> la propiedad, lo recorta, cheques si no está Falsy y, si no, emite el evento personalizado <code className="literal">add</code>, restablece la <code className="literal">newItem</code> propiedad, y envía la <code className="literal">updateList</code> acción en la tienda. Podemos probar este método mediante la asignación de valores diferentes <code className="literal">component.newItem</code>, <code className="literal">component.id</code> y comprobar si la salida se corresponde con lo que esperamos de él.</p>

<p className="p">Back to the method's functionality. So, the <code class="literal">addItem</code> method grabs the instance's <code class="literal">newItem</code> property, trims it, checks if it's not falsy and, if not, emits the custom event <code class="literal">add</code>, resets the <code class="literal">newItem</code> property, and dispatches the <code class="literal">updateList</code> action on store. We can test this method by assigning different values <code class="literal">component.newItem</code>, <code class="literal">component.id</code> and checking if the output corresponds to what we are expecting of it.</p>



<div class="note" title="Note"><h3 class="title"><a id="tip43"></a>Tip</h3>




<p className="it"> <span className="strong"><strong>Un análisis positivo</strong></span> significa probar un sistema dándole datos válidos. <span className="strong"><strong>Prueba negativa</strong></span> significa probar un sistema dándole datos no válidos.</p>

<p className="p">
<span class="strong"><strong>Positive testing</strong></span> means testing a system by giving it valid data. <span class="strong"><strong>Negative testing</strong></span> means testing a system by giving it invalid data.</p>



</div>




<p className="it">En nuestra prueba positiva, debemos inicializar la <code className="literal">component.newItem</code> propiedad con una cadena válida. Después de llamar al método, debemos asegurarnos de varias cosas:</p>

<p className="p">In our positive test, we should initialize the <code class="literal">component.newItem</code> property with a valid string. After calling the method, we should ensure various things:</p>



<div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">The <code class="literal">$emit</code> method of the component has been called with <code class="literal">add</code> and the text we assigned to the <code class="literal">newItem</code> property</li><li className="listitem"><code class="literal">component.newItem</code> was reset to the empty string </li></ul></div><div class="itemizedlist"><ul className="itemizedlist"><li className="listitem">The store's <code class="literal">dispatch</code> method has been called with the <code class="literal">id</code> property of the component</li></ul></div>




<p className="it">¡Vamonos! Vamos a empezar por la adición de describir el método para la <code className="literal">addItem</code> función:</p>

<p className="p">Let's go! Let's start by adding the describe method for the <code class="literal">addItem</code> function:</p>


<pre className="programlisting"><code>{`describe(<span class="strong"><strong>'addItem'</strong></span>, () =&gt; { 
 
}) 
`}</code></pre>




<p className="it">Ahora podemos añadí el <code className="literal">it()</code> método en el que vamos a asignar un valor a <code className="literal">component.newItem</code>, llamar al <code className="literal">addItem</code> método, y comprobar todo lo que necesitamos para comprobar:</p>

<p className="p">Now we can add the <code class="literal">it()</code> method where we will assign a value to <code class="literal">component.newItem</code>, call the <code class="literal">addItem</code> method, and check everything we need to check:</p>



<pre className="programlisting"><code>{`//AddItemComponent.spec.js 
it('should call $emit method', () =&gt; { 
  let newItem = 'Learning Vue JS' 
  // stub $emit method 
  sinon.stub(component, '$emit') 
  // stub store's dispatch method 
  sinon.stub(store, 'dispatch') 
  // set a new item 
  <span class="strong"><strong>component.newItem = newItem</strong></span> 
  component.addItem() 
  // newItem should be reset 
  <span class="strong"><strong>expect(component.newItem).to.eql('')</strong></span> 
  // $emit should be called with custom event 'add' and a newItem value 
  <span class="strong"><strong>expect(component.$emit).to.have.been.calledWith('add', newItem)</strong></span> 
  // dispatch should be called with updateList and the id of the list 
  <span class="strong"><strong>expect(store.dispatch).to.have.been.calledWith('updateList', 
  'niceId')</strong></span> 
  store.dispatch.restore() 
  component.$emit.restore() 
}) 
`}</code></pre>



<p className="it">Ejecutar las pruebas y comprobar que están pasando y todo está bien. Comproba el código final para <code className="literal">AddItemComponent</code> en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/shopping-list3">Capítulo 7 / compras-list3</a> carpeta.</p>

<p className="p">Run the tests and check that they are passing and everything is okay. Check the final code for <code class="literal">AddItemComponent</code> in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/shopping-list3">chapter7/shopping-list3</a> folder.</p>


<p className="it">Trate de escribir pruebas unitarias para el resto de los componentes de la aplicación de la lista de compras. Recuerde escribir pruebas unitarias para cubrir su código para que se rompe si lo cambia.</p>

<p className="p">Try to write unit tests for the rest of the components of the shopping list application. Remember to write unit tests to cover your code so that it breaks if you change it.</p>



</div></div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Writing unit tests for our Pomodoro application</title><link rel="stylesheet" href="../Styles/style0001.css" type="text/css"/><meta name="generator" content="DocBook XSL Stylesheets V1.75.2"/><div className="section" title="Writing unit tests for our Pomodoro application"><div class="titlepage" id="aid-20R682"><div><div><h1 className="title"><a id="ch07lvl1sec59"></a>Writing unit tests for our Pomodoro application</h1></div></div></div>





<p className="it">¡De acuerdo! Vamos a pasar a nuestra aplicación Pomodoro! Por cierto, ¿cuándo fue la última vez que tomó un descanso? Probablemente, es el momento de abrir la aplicación en el navegador, esperar unos minutos del temporizador Pomodoro período de trabajo, y compruebe si hay algunos gatitos.</p>


<p className="p">Ok! Let's move to our Pomodoro application! By the way, when was the last time you took a break? Probably, it is time to open the application in your browser, wait a few minutes of the Pomodoro working period timer, and check for some kittens.</p>


<p className="it">Sólo lo hice y me hizo sentir muy agradable y bonito:</p>


<p className="p">I just did it and it made me feel really nice and cute:</p>




<div class="mediaobject"><img src="/static/image00312.jpeg" width="100%" alt="Writing unit tests for our Pomodoro application"/></div>



<p className="it">No soy su ropa ... Por favor tener algo de descanso</p>


<p className="p">I'm not your clothes... please have some rest</p>



<p className="it">Vamos a empezar con las mutaciones. Abrir el código en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/pomodoro">Capítulo 7 / pomodoro</a> carpeta. Abra el <code className="literal">mutations.js</code> archivo y comprobar lo que está pasando ahí fuera. Hay cuatro mutaciones que suceden: <code className="literal">START</code>, <code className="literal">STOP</code>, <code className="literal">PAUSE</code>, y <code className="literal">TOGGLE_SOUND</code>. Adivinar cuál vamos a empezar. Sí, está bien, vamos a empezar con el <code className="literal">start</code> método. Creá una <code className="literal">vuex</code> subcarpeta dentro de la <code className="literal">test/unit/specs</code> carpeta y añadí el <code className="literal">mutations.spec.js</code> archivo. Vamos a Bootstrap que estar preparados para las pruebas:</p>


<p className="p">Let's start with mutations. Open the code in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/pomodoro">chapter7/pomodoro</a> folder. Open the <code class="literal">mutations.js</code> file and check what is happening out there. There are four mutations happening: <code class="literal">START</code>, <code class="literal">STOP</code>, <code class="literal">PAUSE</code>, and <code class="literal">TOGGLE_SOUND</code>. Guess which one we will start with. Yes, you are right, we will start with the <code class="literal">start</code> method. Create a <code class="literal">vuex</code> subfolder inside the <code class="literal">test/unit/specs</code> folder and add the <code class="literal">mutations.spec.js</code> file. Let's bootstrap it to be ready for tests:</p>




<pre className="programlisting"><code>{`// mutations.spec.js 
import Vue from 'vue' 
import mutations from 'src/vuex/mutations' 
import * as types from 'src/vuex/mutation_types' 
 
describe('mutations', () =&gt; { 
  var state 
 
  beforeEach(() =&gt; { 
    state = {} 
    // let's mock Vue noise plugin 
    //to be able to listen on its methods 
    <span class="strong"><strong>Vue.noise = { 
      start: () =&gt; {}, 
      stop: () =&gt; {}, 
      pause: () =&gt; {} 
    }</strong></span> 
    sinon.spy(Vue.noise, 'start') 
    sinon.spy(Vue.noise, 'pause') 
    sinon.spy(Vue.noise, 'stop') 
  }) 
 
  afterEach(() =&gt; { 
    <span class="strong"><strong>Vue.noise.start.restore() 
    Vue.noise.pause.restore() 
    Vue.noise.stop.restore()</strong></span> 
  }) 
 
  describe(<span class="strong"><strong>'START'</strong></span>, () =&gt; { 
  }) 
}) 
`}</code></pre>


<p className="it">Tenga en cuenta que burlado todos los métodos del plugin generador de ruido. Esto se debe a que en esta especificación, no necesitamos para probar la funcionalidad del plugin (de hecho, hay que hacerlo en el ámbito del propio plugin antes de publicarla). Para el alcance de esta prueba, hay que comprobar que los métodos del plugin se llaman cuando necesitan ser llamados.</p>


<p className="p">Note that I mocked all the methods of the noise generator plugin. This is because in this spec, we don't need to test the plugin's functionality (in fact, we must do it in the scope of the plugin itself before publishing it). For the scope of this test, we should test that the plugin's methods are called when they need to be called.</p>


<p className="it">Con el fin de ser capaz de probar el <code className="literal">start</code> método, vamos a pensar en lo que debería suceder. Después de hacer clic en el botón de inicio, sabemos que de la aplicación <code className="literal">started</code>, <code className="literal">paused</code> y <code className="literal">stopped</code> los estados deben tener algunos valores específicos (en realidad, <code className="literal">true</code>, <code className="literal">false</code>, y <code className="literal">false</code>, respectivamente). También sabemos intervalo de la aplicación debe iniciarse. También sabemos que si el estado del Pomodoro es <code className="literal">working</code> y si está activado el sonido, el <code className="literal">start</code> método del plugin generador de ruido debe ser llamado. De hecho, esto es lo que nuestro método es en realidad haciendo:</p>


<p className="p">In order to be able to test the <code class="literal">start</code> method, let's think what should happen. After the start button is clicked, we know that the application's <code class="literal">started</code>, <code class="literal">paused</code>, and <code class="literal">stopped</code> states must gain some specific values (actually, <code class="literal">true</code>, <code class="literal">false</code>, and <code class="literal">false</code>, respectively). We also know the application's interval should be started. We also know that if the Pomodoro's state is <code class="literal">working</code> and if the sound is enabled, the <code class="literal">start</code> method of the noise generator plugin should be called. In fact, this is what our method is actually doing:</p>




<pre className="programlisting"><code>{`[types.START] (state) { 
  state.started = true 
  state.paused = false 
  state.stopped = false 
  state.interval = setInterval(() =&gt; tick(state), 1000) 
  if (state.isWorking &amp;&amp; state.soundEnabled) { 
    Vue.noise.start() 
  } 
}, 
`}</code></pre>


<p className="it">Pero incluso si no lo hiciera todas estas cosas y hemos escrito la prueba para probarlo, hemos de entender inmediatamente que algo falta en nuestro código y solucionarlo. Vamos a continuación, escribir nuestra prueba. Vamos a empezar por definir el <code className="literal">it()</code> método que las pruebas de que todas las propiedades se establecen correctamente. Con el fin de estar seguros de que no están ya establecidos antes de llamar al método, también vamos a afirmar que todas estas propiedades no están definidas en el inicio de la prueba:</p>


<p className="p">But even if it didn't do all these things and we have written the test to test it, we would immediately understand that something is missing in our code and fix it. Let's then write our test. Let's start by defining the <code class="literal">it()</code> method that tests that all the properties were correctly set. In order to be sure that they are not already set before calling the method, let's also assert that all these properties are not defined at the start of the test:</p>



<pre className="programlisting"><code>{`it('should set all the state properties correctly after start', () =&gt; { 
  // ensure that all the properties are undefined 
  // before calling the start method 
  expect(state.started).to.be.undefined 
  expect(state.stopped).to.be.undefined 
  expect(state.paused).to.be.undefined 
  expect(state.interval).to.be.undefined 
  // call the start method 
  mutations[types.START](state) 
  // check that all the properties were correctly set 
  expect(state.started).to.be.true 
  expect(state.paused).to.be.false 
  expect(state.stopped).to.be.false 
  expect(state.interval).not.to.be.undefined 
}) 
`}</code></pre>


<p className="it">Ahora vamos a comprobar en el <code className="literal">Vue.noise.start</code> método. Sabemos que sólo se debe llamar si <code className="literal">state.isWorking</code> es <code className="literal">true</code> y <code className="literal">state.soundEnabled</code> es <code className="literal">true</code>. Vamos a escribir una prueba positiva. En esta prueba, nos inicializar ambos estados booleanos para <code className="literal">true</code> y comprobar si el <code className="literal">noise.start</code> método se llama:</p>


<p className="p">Let's now check on the <code class="literal">Vue.noise.start</code> method. We know that it should only be called if <code class="literal">state.isWorking</code> is <code class="literal">true</code> and <code class="literal">state.soundEnabled</code> is <code class="literal">true</code>. Let's write a positive test. In this test, we would initialize both Boolean states to <code class="literal">true</code> and check that the <code class="literal">noise.start</code> method is called:</p>




<pre className="programlisting"><code>{`it('should call Vue.noise.start method if both state.isWorking and state.soundEnabled are true', () =&gt; { 
  state.<span class="strong"><strong>isWorking</strong></span> = true 
  state.<span class="strong"><strong>soundEnabled</strong></span> = true 
  mutations[types.START](state) 
  expect(Vue.noise.start).<span class="strong"><strong>to.have.been.called</strong></span> 
}) 
`}</code></pre>


<p className="it">Vamos a añadí dos pruebas negativas para cada uno de los estados, con <code className="literal">isWorking</code> y <code className="literal">soundEnabled</code> siendo <code className="literal">false</code>:</p>


<p className="p">Let's add two negative tests for each of the states, with <code class="literal">isWorking</code> and <code class="literal">soundEnabled</code> being <code class="literal">false</code>:</p>




<pre className="programlisting"><code>{`it('should not call Vue.noise.start method if state.isWorking is not true', () =&gt; { 
  <span class="strong"><strong>state.isWorking = false</strong></span> 
  state.soundEnabled = true 
  mutations[types.START](state) 
  expect(Vue.noise.start).<span class="strong"><strong>to.not.have.been.called</strong></span> 
}) 
 
it('should not call Vue.noise.start method if state.soundEnabled is not true', () =&gt; { 
  state.isWorking = true 
  <span class="strong"><strong>state.soundEnabled = false</strong></span> 
  mutations[types.START](state) 
  expect(Vue.noise.start).<span class="strong"><strong>to.not.have.been.called</strong></span> 
}) 
`}</code></pre>


<p className="it">Nuestra <code className="literal">start</code> mutación está muy bien probado! Comprobar el estado final del código en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/pomodoro2">Capítulo 7 / pomodoro2</a> carpeta. Le sugiero que ahora escribe el resto de las pruebas de unidad no sólo para las mutaciones, sino también para todas las funciones relacionadas con la tienda-que residen en captadores y acciones. Después de eso, aplicar las técnicas para probar los componentes Vue que acabamos de aprender y probar algunos de los componentes de nuestra aplicación Pomodoro.</p>


<p className="p">Our <code class="literal">start</code> mutation is nicely tested! Check the final state of the code in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/pomodoro2">chapter7/pomodoro2</a> folder. I suggest that you now write the rest of the unit tests not only for the mutations, but also for all the store-related functions that reside in getters and actions. After that, apply the techniques to test Vue components that we just learned and test some of the components of our Pomodoro application.</p>



<p className="it">En este punto, hemos terminado con la unidad de pruebas!</p>


<p className="p">At this point, we are done with unit testing!</p>


</div>

</div>
</div>
<div className='col-md-3'></div>

 <div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>
<title>What is end- to-end testing?</title><div className="section" title="What is end- to-end testing?" id="aid-21PMQ1"><div className="titlepage"><div><div><h1 className="title"><a id="ch07lvl1sec60"></a>What is end- to-end testing?</h1></div></div></div>


<p className="it">
<span className="strong"><strong>End-to-end</strong></span> (<span className="strong"><strong> e2e</strong></span> ) la prueba es una técnica en la que está siendo probado todo el flujo de la aplicación. En este tipo de pruebas, se utilizan ni se burla ni talones, y el sistema real es estar bajo la prueba. La realización de pruebas E2E nos permite probar todos los aspectos de la aplicación a las API, frontend, backend, bases de datos, carga del servidor, asegurando así la calidad de la integración de sistemas.</p>


<p className="p">
<span class="strong"><strong>End-to-end</strong></span> (<span class="strong"><strong>e2e</strong></span>) testing is a technique in which the whole flow of the application is being tested. In this kind of testing, neither mocks nor stubs are used, and the real system is being under the test. Performing e2e testing allows us to test all the aspects of the application&mdash;APIs, frontend, backend, databases, server load, assuring thus the quality of the system integration.</p>



<p className="it">En el caso de las aplicaciones web, estas pruebas se realizan a través de pruebas de interfaz de usuario. Cada prueba se describen todos los pasos desde la apertura del navegador hasta el cierre de la misma. Todos los pasos necesarios para llevar a cabo con el fin de lograr la funcionalidad de algún sistema deben ser descritos. De hecho, este es el mismo que el que haga clic y haciendo algunas operaciones en la página de la aplicación, pero está automatizado y rápido. En esta sección, vamos a ver que es lo WebDriver selenio es, y lo que es sombra de la noche, y la forma en que se podes utilizar para crear pruebas E2E para nuestras aplicaciones.</p>

<p className="p">In the case of web applications, these tests are performed via UI testing. Each test describes all the steps from opening the browser until closing it. All the steps needed to perform in order to achieve some system's functionality must be described. In fact, this is the same as you clicking and doing some operations on your application's page, but is automated and fast. In this section, we will see what a Selenium webdriver is, and what Nightwatch is, and how they can be used to create e2e tests for our applications.</p></div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Nightwatch for e2e</title><div className="section" title="Nightwatch for e2e" id="aid-22O7C1"><div className="titlepage"><div><div><h1 className="title"><a id="ch07lvl1sec61"></a>Nightwatch for e2e</h1></div></div></div>




<p className="it">Si ya ha trabajado con la automatización de pruebas o si ha trabajado con alguien que ha trabajado con la automatización de pruebas, por cierto, ya ha oído la palabra mágica Selenio-selenio se abre el navegador, haga clic, escribe, hace todo como un ser humano, en un paralelo, muy bien distribuido, multiplataforma, y ​​la forma de cross-browser. De hecho, el selenio es simplemente un archivo JAR que contiene una API para realizar diferentes operaciones en un navegador (pulse, el tipo de desplazamiento, y así sucesivamente).</p>


<p className="p">If you have already worked with test automation or if you have worked with someone who has worked with test automation, for sure, you have already heard the magic word Selenium&mdash;Selenium opens the browser, clicks, writes, does everything like a human, in a parallel, nicely distributed, multiplatform, and cross-browser way. In fact, Selenium is just a JAR file that contains an API to perform different operations on a browser (click, type, scroll, and so on).</p>


<div class="note" title="Note"><h3 class="title"><a id="note44"></a>Note</h3>




<p className="it">Echa un vistazo a la documentación de selenio en <a className="ulink" href="http://www.seleniumhq.org/">http://www.seleniumhq.org/</a> .</p>


<p className="p">Check out Selenium's documentation at 
<a class="ulink" href="http://www.seleniumhq.org/">http://www.seleniumhq.org/</a>
.</p>

</div>


<p className="it">Cuando se ejecuta este archivo JAR, se conecta al navegador especificado, se abre la API, y espera a que los comandos para realizar en el navegador. Los comandos enviados al servidor de selenio se pueden realizar en toneladas de diferentes formas y lenguajes.</p>


<p className="p">When this JAR file is executed, it connects to the specified browser, opens the API, and waits for the commands to be performed on the browser. The commands sent to the Selenium server can be performed in tons of different ways and languages.</p>



<p className="it">Hay una gran cantidad de implementaciones y frameworks que te permiten llamar comandos de selenio con par de líneas de código existentes:</p>


<p className="p">There are a lot of existing implementations and frameworks that allow you to call selenium commands with couple lines of code:</p>



<div class="itemizedlist"><ul className="itemizedlist">


<li className="listit">Se podes utilizar el framework de selenio nativo para Java (<a className="ulink" href="http://seleniumhq.github.io/selenium/docs/api/java/">http://seleniumhq.github.io/selenium/docs/api/java/</a> )</li>

<li className="listitem">You can use the native Selenium's framework for Java (
<a class="ulink" href="http://seleniumhq.github.io/selenium/docs/api/java/">http://seleniumhq.github.io/selenium/docs/api/java/</a>
)</li>



<li className="listit">Podes utilizar el plugin de Firefox para los navegadores (<a className="ulink" href="https://addons.mozilla.org/en-us/firefox/addon/selenium-ide/">https://addons.mozilla.org/en-us/firefox/addon/selenium-ide/</a> )</li>

<li className="listitem">You can use the Firefox plugin for browsers (
<a class="ulink" href="https://addons.mozilla.org/en-us/firefox/addon/selenium-ide/">https://addons.mozilla.org/en-us/firefox/addon/selenium-ide/</a>
)</li>



<li className="listit">Podes utilizar <span className="strong"><strong>Selenide</strong></span> , que es otra aplicación para Java, pero mucho más fácil de usar que el framework de selenio (<a className="ulink" href="http://selenide.org/">http://selenide.org/</a> )</li>

<li className="listitem">You can use <span class="strong"><strong>Selenide</strong></span>, which is yet another implementation for Java but a lot easier to use than Selenium's framework (
<a class="ulink" href="http://selenide.org/">http://selenide.org/</a>
)</li>


<li className="listit">Si sos un desarrollador AngularJS, podes utilizar transportador, que es un muy buen framework de pruebas para aplicaciones E2E AngularJS que también utiliza el WebDriver selenio (<a className="ulink" href="http://www.protractortest.org/">http://www.protractortest.org/</a> )</li>

<li className="listitem">If you are an AngularJS developer, you can use Protractor, which is a very nice e2e test framework for AngularJS applications that also uses the Selenium webdriver (
<a class="ulink" href="http://www.protractortest.org/">http://www.protractortest.org/</a>
)</li></ul></div>




<p className="it">En nuestro caso, utilizaremos sombra de la noche, que es un framework de pruebas agradable y muy fácil de usar para llamar a comandos de selenio utilizando JavaScript.</p>


<p className="p">In our case, we will use Nightwatch, which is a nice and very easy-to-use testing framework to call Selenium's commands using JavaScript.</p>












<p className="it">Consulte la documentación de sombra de la noche a <a className="ulink" href="http://nightwatchjs.org/">http://nightwatchjs.org/</a> .</p>


<p className="p">Check Nightwatch's documentation at 
<a class="ulink" href="http://nightwatchjs.org/">http://nightwatchjs.org/</a>
.</p>












<p className="it">Aplicaciones Vue, cuando bootstrap utilizando el <code className="literal">vue-cli webpack</code> método, ya contiene soporte para escribir pruebas Nightwatch de inmediato sin necesidad de instalar nada. Básicamente, cada especificación de prueba será algo así como lo siguiente:</p>


<p className="p">Vue applications, when bootstrapped using the <code class="literal">vue-cli webpack</code> method, already contains support for writing Nightwatch tests right away without the need to install anything. Basically, each test spec will look somewhat like the following:</p>










<pre className="programlisting"><code>{`module.exports = { 
  'e2e test': function (browser) { 
    browser 
    .<span class="strong"><strong>url</strong></span>('http://localhost:8080') 
      .<span class="strong"><strong>waitForElementVisible</strong></span>('#app', 5000) 
      .assert.<span class="strong"><strong>elementPresent</strong></span>('.logo') 
      .assert.<span class="strong"><strong>containsText</strong></span>('h1', 'Hello World!') 
      .assert.<span class="strong"><strong>elementCount</strong></span>('p', 3) 
      .end() 
  } 
} 
`}</code></pre>








<p className="it">La sintaxis es agradable y fácil de entender. Cada uno de los métodos resaltados es un comando de sombra de la noche que detrás de las escenas se transforma en el comando de selenio y se invoca como tal. Comproba la lista completa de los comandos Nightwatch en la página oficial de la documentación en <a className="ulink" href="http://nightwatchjs.org/api#commands">http://nightwatchjs.org/api#commands</a> .</p>


<p className="p">The syntax is nice and easy to understand. Each of the highlighted methods is a Nightwatch command that behind the scenes is transformed into the Selenium command and invoked as such. Check the full list of the Nightwatch commands in the official documentation page at 
<a class="ulink" href="http://nightwatchjs.org/api#commands">http://nightwatchjs.org/api#commands</a>
.</p>







</div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Writing e2e tests for the Pomodoro application</title><div className="section" title="Writing e2e tests for the Pomodoro application"><div class="titlepage" id="aid-23MNU2"><div><div><h1 className="title"><a id="ch07lvl1sec62"></a>Writing e2e tests for the Pomodoro application</h1></div></div></div>



<p className="it">Así que, ahora que sabemos que toda la teoría detrás de la interfaz de usuario de prueba, podemos crear nuestra primera prueba de extremo a extremo para nuestra aplicación Pomodoro. Vamos a definir los pasos que vamos a realizar y las cosas que hay que probar. Así, en primer lugar, hay que abrir el navegador. Entonces, probablemente deberíamos comprobar que nuestro contenedor (que tiene el <code className="literal">#app</code>ID) está en la página.</p>


<p className="p">So, now that we know all the theory behind the UI testing, we can create our first end-to-end test for our Pomodoro application. Let's define the steps that we will perform and the things that we should test. So, first of all, we should open the browser. Then, we should probably check that our container (that has the <code class="literal">#app</code> ID ) is on the page.</p>


<p className="it">También podemos tratar de comprobar que la pausa y detener botones están desactivados y que el botón de activación de sonido no existir en la página.</p>


<p className="p">We can also try to check that the pause and stop buttons are disabled and that the sound toggle button does not exist on the page.</p>


<p className="it">A continuación, podemos hacer clic en el botón de inicio y compruebe que el botón de activación de sonido ha aparecido, el botón de inicio se ha convertido en discapacitados, y la pausa y botones de paro se han convertido habilitado. Hay una serie de posibilidades de innumerous más pulsando y comprobación, pero vamos a realizar los pasos descritos al menos el. Vamos a ellos escriben en forma de viñetas:</p>


<p className="p">Then we can click on the start button and check that the sound toggle button has appeared, the start button has become disabled, and the pause and stop buttons have become enabled. There is an innumerous number of possibilities of further clicking and checking, but let's perform at least the described steps. Let's just write them in the form of bullet points:</p>


<div class="orderedlist"><ol class="orderedlist arabic">

<li className="listit">Abrir el navegador en <code className="literal">http://localhost:8080</code>.</li>

<li className="listitem">Open the browser at <code class="literal">http://localhost:8080</code>.</li>


<li className="listit">Comproba que el <code className="literal">#app</code> elemento te encontras  en la página.</li>

<li className="listitem">Check that the <code class="literal">#app</code> element is on the page.</li>


<li className="listit">Comproba que el <code className="literal">.toggle-volume</code> icono no es visible.</li>

<li className="listitem">Check that the <code class="literal">.toggle-volume</code> icon is not visible.</li>


<li className="listit">Comproba que el <code className="literal">'[title=pause]'</code> y <code className="literal">'[title=stop]'</code> botones están desactivados y la <code className="literal">'[title=start]'</code> está habilitado botón.</li>

<li className="listitem">Check that the <code class="literal">'[title=pause]'</code> and <code class="literal">'[title=stop]'</code> buttons are disabled and the <code class="literal">'[title=start]'</code> button is enabled.</li>


<li className="listit">Haga clic en el <code className="literal">'[title=start]'</code> botón.</li>

<li className="listitem">Click on the <code class="literal">'[title=start]'</code> button.</li>


<li className="listit">Comproba que el <code className="literal">'[title=pause]'</code> y <code className="literal">'[title=stop]'</code> botones ahora están habilitados y el <code className="literal">'[title=start]'</code> botón está desactivado.</li>

<li className="listitem">Check that the <code class="literal">'[title=pause]'</code> and <code class="literal">'[title=stop]'</code> buttons are now enabled and the <code class="literal">'[title=start]'</code> button is disabled.</li>


<li className="listit">Comproba que el <code className="literal">.toggle-volume</code> icono es ahora visible.</li>

<li className="listitem">Check that the <code class="literal">.toggle-volume</code> icon is now visible.</li>




</ol></div>






<p className="it">¡Vamos a hacerlo! Sólo tiene que abrir el <code className="literal">test.js</code> archivo dentro de la <code className="literal">tests/e2e/specs</code> carpeta, borrar su contenido, y agregue el código siguiente:</p>


<p className="p">Let's do it! Just open the <code class="literal">test.js</code> file inside the <code class="literal">tests/e2e/specs</code> folder, delete its content, and add the following code:</p>




<pre className="programlisting"><code>{`module.exports = { 
  'default e2e tests': (browser) =&gt; { 
    // open the browser and check that #app is on the page 
    browser.url('http://localhost:8080') 
      .waitForElementVisible('#app', 5000); 
    // check that toggle-volume icon is not visible 
    browser.expect.element('.toggle-volume') 
      .to.not.be.visible 
    // check that pause button is disabled 
    browser.expect.element('[title=pause]') 
      .to.have.attribute('disabled') 
    // check that stop button is disabled 
    browser.expect.element('[title=stop]') 
      .to.have.attribute('disabled') 
    // check that start button is not disabled            
    browser.expect.element('[title=start]') 
      .to.not.have.attribute('disabled') 
    // click on start button, check that toggle volume 
    // button is visible 
    browser.click('[title=start]') 
      .waitForElementVisible('.toggle-volume', 5000) 
    // check that pause button is not disabled 
    browser.expect.element('[title=pause]') 
      .to.not.have.attribute('disabled') 
    // check that stop button is not disabled 
    browser.expect.element('[title=stop]') 
      .to.not.have.attribute('disabled') 
    // check that stop button is disabled 
    browser.expect.element('[title=start]') 
      .to.have.attribute('disabled') 
    browser.end() 
  } 
} 
`}</code></pre>






<p className="it">¿Ves como súper humana de usar este lenguaje es? Ahora vamos a realizar una comprobación para ver si, después del período de tiempo de trabajo, aparece el elemento gatito en la pantalla. Con el fin de hacer la prueba más corta y no esperar mucho tiempo para la prueba de pasar, vamos a establecer el período de trabajo como 6 segundos. Cambiar este valor en nuestro <code className="literal">config.js</code> archivo:</p>


<p className="p">Do you see how super human-friendly this language is? Let's now perform a check to see whether, after the period of working time, the kitten element appears on the screen. In order to make the test shorter and not wait for a long time for test to pass, let's establish the working period as 6 seconds. Change this value in our <code class="literal">config.js</code> file:</p>




<pre className="programlisting"><code>{`//config.js 
export const WORKING_TIME = 0.1 * 60 
`}</code></pre>






<p className="it">El elemento que contiene las imágenes de gatos tiene un <code className="literal">'div.well.kittens'</code> selector, así que vamos a comprobar si es visible. También vamos a comprobar que en esta prueba después de que aparezca el elemento gatito, la fuente de la imagen contiene la <code className="literal">'thecatapi'</code> cadena. Esta prueba será tan simple como la siguiente:</p>


<p className="p">The element that contains the cat images has a <code class="literal">'div.well.kittens'</code> selector, so we will check whether it is visible. Let's also check in this test that after the kitten element appears, the source of the image contains the <code class="literal">'thecatapi'</code> string. This test will be as simple as the following:</p>




<pre className="programlisting"><code>{`'wait for kitten test': (browser) =&gt; { 
  browser.url('http://localhost:8080') 
    .waitForElementVisible('#app', 5000) 
  // initially the kitten element is not visible 
  browser.expect.element('.well.kittens') 
    .to.not.be.visible 
  // click on the start button and wait for 7s for 
  //kitten element to appear 
  browser.click('[title=start]') 
    .waitForElementVisible('.well.kittens', 7000) 
  // check that the image contains the src element 
  //that matches thecatapi string 
  browser.expect.element('.well.kittens img') 
    .to.have.attribute('src') 
    .which.matches(/thecatapi/); 
  browser.end() 
} 
`}</code></pre>


<p className="it">Ejecutar las pruebas. Con el fin de hacer eso, invocar el <code className="literal">e2e</code> comando NPM:</p>


<p className="p">Run the tests. In order to do that, invoke the <code class="literal">e2e</code> npm command:</p>

<pre className="programlisting"><code>{`
<span class="strong"><strong>npm run e2e 
</strong></span>
`}</code></pre>


<p className="it">Verá cómo el navegador se abre y se lleva a cabo todas las operaciones por sí mismo.</p>
<p className="p">You will see how the browser opens and performs all the operations by itself.</p>

<p className="it"> <span className="emphasis"><em>¡Es un tipo de magia!</em></span> </p>
<p className="p">
<span class="emphasis"><em>It's a kind of magic!</em></span>
</p>

<p className="it">Todas nuestras pruebas han pasado y se cumplen todas las expectativas; echa un vistazo a la consola:</p>

<p className="p">All our tests have passed and all expectations are fulfilled; check out the console:</p>

<div class="mediaobject"><img src="/static/image00313.jpeg" width="100%" alt="Writing e2e tests for the Pomodoro application"/></div>

<p className="it">Todas las pruebas están pasando!</p>

<p className="p">All tests are passing!</p>

<p className="it">¡Felicitaciones! Que acaba de aprender cómo usar sombra de la noche para escribir pruebas E2E. Comproba el código en el <a className="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/pomodoro3">Capítulo 7 / pomodoro3</a> carpeta. Escribir más casos de prueba para nuestra aplicación Pomodoro. No se olvide de nuestra aplicación de lista de la compra, lo que podría tener aún más escenarios para las pruebas de interfaz de usuario. Escribir a todos y comprobar cómo selenio hace el trabajo por ti. Si decide para mejorar el código, no sólo es la calidad de su código protegido por las pruebas unitarias, sino que también tiene ahora pruebas de regresión que se le aplica. Cada vez que se cambia el código, ejecute los dos tipos de pruebas acaba con un comando:</p>

<p className="p">Congratulations! You've just learned how to use Nightwatch to write e2e tests. Check the code in the <a class="ulink" href="https://github.com/PacktPublishing/Learning-Vue.js-2/tree/master/chapter7/pomodoro3">chapter7/pomodoro3</a> folder. Write more test cases for our Pomodoro application. Do not forget about our shopping list application, which might have even more scenarios for UI tests. Write them all and check how Selenium does the work for you. If you decide to enhance the code, not only is your code quality protected by unit tests, but it also now has regression testing applied to it. Each time you change the code, run both types of tests just with one command:</p>

<pre className="programlisting"><code>{`
<span class="strong"><strong>npm test 
</strong></span>
`}</code></pre>

<p className="it">Ahora que sin duda se merece un descanso. Tomar una taza de café o té, abra su navegador en la página de la aplicación Pomodoro, espere 6 segundos, y apreciar nuestros pequeños amigos mullidos:</p>

<p className="p">Now you certainly deserve some rest. Take a cup of coffee or tea, open your browser on the Pomodoro application page, wait for 6 seconds, and appreciate our little fluffy friends:</p>

<div class="mediaobject"><img src="/static/image00314.jpeg" width="100%" alt="Writing e2e tests for the Pomodoro application"/></div>

<p className="it">En realidad, esto no es un gatito de thecatapi. Este es mi gato Patuscas que todos los que deseen tener un buen tiempo de descanso!</p>
<p className="p">Actually, this is not a kitten from thecatapi. This is my cat Patuscas wishing you all to have a good rest time!</p>

</div>

</div>
</div>
<div className='col-md-3'></div>

<div className='home'>
      
  <div className='col-md-3'></div>
<div className='col-md-6'>

<title>Summary</title>

<div className="section" title="Summary" id="aid-24L8G1"><div className="titlepage"><div><div><h1 className="title"><a id="ch07lvl1sec63"></a>Summary</h1></div></div></div>

<p className="it">En este capítulo, hemos probado tanto de nuestras aplicaciones. Hemos escrito las pruebas unitarias para los métodos y componentes Vuex Vue. Hemos utilizado las pruebas unitarias simples y pruebas unitarias asíncronos y conseguimos familiarizado con Sinon burlarse de técnicas tales como espiar a los métodos y falsificar las respuestas del servidor. También aprendimos cómo crear las pruebas de interfaz de usuario mediante sombra de la noche. Nuestras aplicaciones están probados y preparados para ser desplegados en la producción! Vamos a descubrir cómo implementar en el siguiente capítulo, que se dedicará a la Distribución de aplicaciones con la plataforma de aplicaciones de nube Heroku.</p>

<p className="p">In this chapter, we've tested both of our applications. We have written unit tests for Vuex methods and Vue components. We have used simple unit tests and asynchronous unit tests and we got familiar with Sinon mocking techniques such as spying on methods and faking server responses. We also learned how to create UI tests using Nightwatch. Our applications are now tested and prepared to be deployed to production! We will discover how to deploy them in the next chapter, which will be devoted to deploying applications using the Heroku cloud application platform.</p></div>

</div>
</div>
<div className='col-md-3'></div>

  </div>
  </Layout>
  )