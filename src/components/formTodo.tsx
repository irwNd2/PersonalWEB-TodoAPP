type FormData = {
  title: string;
  todo: string;
  date: string;
  hour: string;
};

type Prop = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  form: FormData;
  setForm: Function;
};

const FormTodo = ({ onSubmit, form, setForm }: Prop) => {
  return (
    <form onSubmit={onSubmit}>
      <label className="block mb-3">
        <span className="text-gray-700">Title</span>
        <input
          type="text"
          className="
          p-1
          block
          w-full
          border-gray-300
          rounded-md
          shadow-sm
        "
          placeholder="Todo's title here"
          value={form.title}
          onChange={(e) => {
            setForm((prev: any) => ({ ...prev, title: e.target.value }));
          }}
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Todo</span>
        <input
          type="text"
          className="
          p-1
          block
          w-full
          border-gray-300
          rounded-md
          shadow-sm
        "
          placeholder="Your todo here"
          required
          value={form.todo}
          onChange={(e) => {
            setForm((prev: any) => ({ ...prev, todo: e.target.value }));
          }}
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Date</span>
        <input
          type="date"
          className="p-1 block w-full rounded-md"
          value={form.date}
          onChange={(e) => {
            setForm((prev: any) => ({ ...prev, date: e.target.value }));
          }}
        />
      </label>
      <label className="block mb-3">
        <span className="text-gray-700">Hour</span>
        <input
          type="time"
          className="p-1 block w-full rounded-md"
          value={form.hour}
          onChange={(e) => {
            setForm((prev: any) => ({ ...prev, hour: e.target.value }));
          }}
        />
      </label>
      <div className="mb-3">
        <button
          type="submit"
          className="
          h-10
          px-5
          text-indigo-100
          bg-peach
          rounded-lg
          transition-colors
          duration-150
          focus:shadow-outline
          hover:bg-darkPeach
          dark:bg-darkPeach
        "
        >
          Create
        </button>
      </div>
    </form>
  );
};

export default FormTodo;
