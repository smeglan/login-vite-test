export function InputText(props) {
  const { title } = props;
  return (
    <div>
      <label className="block text-sm text-gray-600">{title}</label>
      <input
        type="email"
        className="w-full px-4 py-2 rounded-lg bg-pink-100 text-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-300"
        required
      />
    </div>
  );
}
