import app from './app/app';

/**
 * @var {{}} process
 */

const port = process.env.PORT || 3000;


app.listen(port, (error) => {
    if (error) {
        console.log(error);
    }

    return console.log(`server is listening on port ${port}`);
});