# 🚀 Memora — Chat With Your Documents in Seconds

Memora is a **modern, AI-powered SaaS platform** that lets you upload PDFs and interact with them like a conversation.  
Built with the latest **Next.js 13.5 App Router**, fully type-safe APIs, and a beautiful UI, Memora is fast, scalable, and production-ready.

![Memora Dashboard Preview](public/dashboard-preview.jpg)

---

## ✨ Features

- 🛠 **Complete SaaS from Scratch** — No boilerplate, fully production-ready
- 💻 **Beautiful Landing & Pricing Pages** — Optimized for conversions
- 💳 **Free & Pro Plans via Stripe** — Subscription-ready payment flow
- 📄 **Advanced PDF Viewer** — Smooth navigation & search
- 🔄 **Real-time Streaming Responses** — Chat updates instantly
- 🔒 **Secure Authentication** — Powered by [Kinde](https://kinde.com/)
- 🎨 **Modern UI** — Built with [shadcn/ui](https://ui.shadcn.com/)
- 🚀 **Optimistic UI Updates** — Feels instant to users
- ⚡ **Infinite Message Loading** — Performance-friendly pagination
- 📤 **Drag & Drop File Uploads** — No friction for users
- ✨ **Instant Loading States** — Perceived speed matters
- 🔧 **tRPC + Zod** — Typesafe APIs from client to server
- 🧠 **LangChain AI Memory** — Persistent conversational context
- 🌲 **Pinecone Vector Storage** — Scalable document embeddings
- 📊 **Prisma ORM** — Database made easy
- 🔤 **100% TypeScript** — Full type safety
- 🎁 **...and much more**

---

## 🏗 Tech Stack

**Frontend**

- [Next.js 13.5 App Router](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

**Backend**

- [tRPC](https://trpc.io/)
- [Prisma](https://www.prisma.io/)
- [Zod](https://zod.dev/)
- [LangChain](https://www.langchain.com/)
- [Pinecone](https://www.pinecone.io/)

**Payments & Auth**

- [Stripe](https://stripe.com/)
- [Kinde](https://kinde.com/)

---

## 📸 Screenshots

| Landing Page                                | Dashboard                                  |
| ------------------------------------------- | ------------------------------------------ |
| ![Landing Page](public/landing-preview.jpg) | ![Dashboard](public/dashboard-preview.jpg) |

---

## ⚡ Quick Start

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/yourusername/memora.git
cd memora
2️⃣ Install Dependencies
bash
Copy
Edit
npm install
3️⃣ Configure Environment Variables
Create a .env file in the root directory and add:

env
Copy
Edit
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/memora"

# Stripe Payments
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."

# Auth (Kinde)
KINDE_CLIENT_ID="your_client_id"
KINDE_CLIENT_SECRET="your_client_secret"
KINDE_ISSUER_URL="https://yourdomain.kinde.com"

# Pinecone
PINECONE_API_KEY="..."

# App
NEXT_PUBLIC_APP_URL="http://localhost:3000"
(See .env.example for a complete reference.)

4️⃣ Setup the Database
bash
Copy
Edit
npx prisma migrate dev
5️⃣ Run the Development Server
bash
Copy
Edit
npm run dev
Your app will be running at: http://localhost:3000

📦 Deployment
Memora is optimized for Vercel.
To deploy:

bash
Copy
Edit
npm install -g vercel
vercel
Make sure to:

Add all .env variables in your Vercel project settings.

Set up Stripe webhook endpoint to https://your-app.vercel.app/api/webhooks/stripe.

🧪 Testing
bash
Copy
Edit
npm run test
📚 Project Structure
csharp
Copy
Edit
memora/
│── app/                # Next.js App Router pages
│── components/         # Reusable UI components
│── server/             # tRPC routers & server logic
│── styles/             # Tailwind styles & config
│── prisma/             # Prisma schema & migrations
│── public/             # Static assets (images, icons)
│── utils/              # Helper functions
│── package.json
│── README.md
🤝 Contributing
We welcome contributions!

Fork the project

Create a feature branch (git checkout -b feature-name)

Commit your changes (git commit -m "Add new feature")

Push to the branch (git push origin feature-name)

Open a Pull Request

📜 License
Licensed under the MIT License — free to use, modify, and distribute.

💡 Inspiration
Memora was built to make document interaction effortless.
From summaries to deep Q&A, it’s designed for speed, clarity, and developer happiness.

yaml
Copy
Edit

---

This README has:
- **Branding + tagline** at the top for first impression.
- **Features & tech stack** cleanly listed with emoji icons.
- **Screenshots** table for visual appeal.
- **Quick start** with full env setup so it’s instantly runnable.
- **Deployment section** for production hosting.
- **Project structure** for dev clarity.
- **Contribution guide** & **MIT license** to make it open for others.

---

If you want, I can also **add a GIF demo at the top** showing PDF upload + chat in action — that makes the README feel *premium* on GitHub and portfolio sites.
That single change can make recruiters and developers instantly interested.
```
