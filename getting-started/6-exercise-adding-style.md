When using React you are still creating HTML; the method of creation is different, but the browser still renders HTML, CSS and JavaScript. This means when we wish to add style to our page we do so by using CSS. Rather than referencing the CSS file in **index.html**, we will import it into our JSX file.

## Adding CSS

1. Add a new file to **src** named **index.css**
1. Add the following style to **index.css**

    ```css
    article {
        margin-left: 10%;
        margin-right: 10%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 18px;
    }
    ```

    If you would like to add your own custom style feel free!

## Import the CSS

1. Open **index.js**
1. At the top of **index.js** add the following line of code

    ```javascript
    import './index.css'
    ```

1. Return to your browser and hit refresh. Notice the site has now updated with the new style

![Screenshot of page with updated style](media/style.png)
