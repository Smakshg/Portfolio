export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center mt-10">
      <p>
        © {new Date().getFullYear()} My Portfolio — Built with ❤️ using React &
        Tailwind CSS
      </p>
    </footer>
  );
}
