/**
 * Created by vinayakshenoyk on 14/08/17.
 */
module.exports = {
    entry: './public/app.jsx',
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        modules:[__dirname,'node_modules'],
        alias: {
            greeter: 'public/components/greeter.jsx',
            greeterForm: 'public/components/greeterForm.jsx',
            greeterMessage: 'public/components/greeterMessage.jsx'
        },
        extensions: ['*', '.js', '.jsx']
    },
    module: {
        loaders: [
            {  //We are asking the babel-loader to parse through react, get the output and run them thorough es2015.
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    }
};