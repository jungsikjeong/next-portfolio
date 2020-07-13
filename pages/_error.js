import Layout from "../components/Layout";

export default ({ statusCode }) => (
  <Layout title="Error!!!">
    {statusCode
      ? `사용자 데이터를 로드 할 수 없습니다: Status code ${statusCode}`
      : `해당 페이지를 가져올 수 없습니다. 죄송합니다`}
  </Layout>
);
