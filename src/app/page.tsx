import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="mx-auto flex h-screen max-w-4xl flex-col text-center">
      <div className="flex flex-grow flex-col items-center">
        <div className="flex h-full items-center">
          <div className="flex flex-col gap-4">
            <h1 className="w-full text-3xl font-bold">Next.js Starter</h1>
            <ul>
              <li>🔥 TypeScript</li>
              <li>💎 tailwindcss</li>
              <li>🐟 shadcn/ui</li>
              <li>📏 ESLint</li>
              <li>💖 Prettier</li>
              <li>🐶 Husky</li>
              <li>🚫 Lint-staged</li>
              <li>🚓 commitlint</li>
              <li>📚 Storybook</li>
              <li>🃏 Jest</li>
              <li>🤖 Cypress</li>
            </ul>
          </div>
        </div>
        <div className="my-4">
          <Button asChild>
            <a
              href="https://github.com/sugaya24/next-ts-tailwind-starter"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
}
