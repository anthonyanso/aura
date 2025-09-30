export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-dark py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <p className="text-gray-400">
            &copy; {currentYear} Aura Persona. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
