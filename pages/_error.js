const ErrorPage = ({ statusCode }) => {

    return statusCode ? `An error ${statusCode} on server` : '';

};

export default ErrorPage;
