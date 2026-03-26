 function Footer() {
  return (
    <footer style={styles.footer}>
      <h3>ShopZone</h3>
      <p>© 2026 ShopZone. All rights reserved.</p>
      <p>About | Contact | Terms | Privacy</p>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: "#111827",
    color: "white",
    textAlign: "center",
    padding: "30px 20px",
    marginTop: "40px",
  },
};

export default Footer;