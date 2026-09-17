import { z } from "zod";

export const registerBodySchema = z.object({
	body: z.object({
		username: z.string().min(2, "Name must be >= 2 chars"),
		email: z.string().email("Incorrect email"),
		password: z.string().min(6, "Password must be >= 6 chars"),
	}),
});

export const loginBodySchema = z.object({
	body: z.object({
		email: z.string().email("Incorrect email"),
		password: z.string().min(6, "Password must be >= 6 chars"),
	})
})