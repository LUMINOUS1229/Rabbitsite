export default function ContactPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-3xl font-bold font-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-[#c0d4ff] to-white">联系 Contact</h1>
      <p className="text-neutral-gray">填写表单以联系合作（Formspree）。</p>
      <form
        action="https://formspree.io/f/yourFormId"
        method="POST"
        className="space-y-4 max-w-lg"
      >
        <label className="block text-deep-sea">
          姓名
          <input
            type="text"
            name="name"
            required
            className="mt-1 w-full glass-input"
          />
        </label>
        <label className="block text-deep-sea">
          邮箱
          <input
            type="email"
            name="email"
            required
            className="mt-1 w-full glass-input"
          />
        </label>
        <label className="block text-deep-sea">
          信息
          <textarea
            name="message"
            required
            rows={5}
            className="mt-1 w-full glass-input"
          />
        </label>
        <button
          type="submit"
          className="rounded btn-gold btn-glow px-4 py-2"
        >
          发送
        </button>
      </form>
    </section>
  );
}