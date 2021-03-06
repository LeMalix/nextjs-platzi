import Layout from '../components/Layout';

const Error = () => (
  <Layout title="Uh-oh! 😨">
    <div className="message">
      <h1>
        Hubo un problema
        <br />
        ☹
      </h1>
      <p>Intenta nuevamente en unos segundos</p>
    </div>
    <style jsx>
      {`
        .message {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 52px);
        }
        h1 {
          margin-bottom: 2em;
          text-align: center;
        }
        span {
          text-align: center;
          color: #591F82;
          cursor: pointer;
        }
      `}
    </style>
  </Layout>
);

export default Error;
