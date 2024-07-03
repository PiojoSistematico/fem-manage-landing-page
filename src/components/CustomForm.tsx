import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const FormSchema = z.object({
  email: z.string().email({ message: "Please insert a valid email" }),
});

type TypeSchema = z.infer<typeof FormSchema>;

const CustomForm = () => {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<TypeSchema>({
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    resolver: zodResolver(FormSchema),
  });

  async function onSubmit(data: TypeSchema) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(data);
    reset();
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="max-w-9/12 flex flex-row items-center justify-center gap-2 md:order-3 md:justify-end"
    >
      <div className="relative">
        <input
          {...register("email")}
          className={`rounded-3xl px-4 py-2 text-sm outline-none border-2 border-solid border-neutral-5 ${errors.email ? "text-red-500 border-red-500" : " text-neutral-1"}`}
          placeholder="Updates in your inbox"
          required
        />
        {errors.email && (
          <p className="absolute text-red-500 text-sm left-4 -bottom-6">
            {errors.email.message}
          </p>
        )}
      </div>

      <button
        disabled={isSubmitting}
        type="submit"
        className="bg-primary-1 px-6 py-2 rounded-3xl text-neutral-5 hover:opacity-80 focus-visible:opacity-80"
      >
        Go
      </button>
    </form>
  );
};

export default CustomForm;
