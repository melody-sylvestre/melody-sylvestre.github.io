export const ContactBar: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap gap-12 justify-center pt-8">
      <a href="mailto:melody.sylvestre@outlook.com">
        <img
          src="images/email_logo.png"
          alt="An email logo"
          className="h-12 w-12 object-cover rounded-md"
        />
      </a>
      <a href="https://www.linkedin.com/in/melody-sylvestre/">
        <img
          src="images/linkedin_logo.png"
          alt="LinkedIn logo"
          className="h-12 rounded-md"
        />
      </a>
      <a href="https://github.com/melody-sylvestre">
        <img
          src="images/GitHub_logo.png"
          alt="GitHub logo"
          className="h-12 rounded-md"
        />
      </a>
    </div>
  );
};

//TODO: add another component for the footer

{
  /* <footer>
	<p>Illustration by <a
		href="https://www.freepik.com/free-vector/hand-drawn-business-coffee-illustration_28924485.htm#query=programming%20hands&position=33&from_view=search&track=ais">Freepik</a>
		- © Copyright 2024</p>
</footer> */
}
