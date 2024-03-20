
import Head from 'next/head';

const Contact = ()=> {
  return (
    <>
      <Head>
        {/* Include the script tags in the <head> of the document */}
        <script type="text/javascript" src="//js.hsforms.net/forms/embed/v2.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              hbspt.forms.create({
                region: "na1",
                portalId: "21796752",
                formId: "72aa5490-51ac-4134-b851-16e8c8088245"
              });
            `,
          }}
        />
      </Head>

      {/* Your page content goes here */}
      <div>
        <h1>Contact Page</h1>
        <p>This is the contact page content.</p>
      </div>
    </>
  );
}
export default Contact;
