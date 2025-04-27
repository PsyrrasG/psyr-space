const sendEmail = require("../config/email");

const contactController = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Send email to yourself
    await sendEmail(
      process.env.EMAIL_USER,
      `New message from ${name}`, // Subject
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}` // Body
    );

    // Send confirmation email to the user
    await sendEmail(
      email, // User's email
      "Thank you for contacting me!", // Subject
      `Hi ${name},\n\nThank you for reaching out. I'll get back to you soon!\n\nBest,\n[George Psyrras]` // Body
    );

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to send message." });
  }
};

module.exports = contactController;