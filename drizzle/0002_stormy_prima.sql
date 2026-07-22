CREATE TABLE `drama_comments` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`drama_id` text NOT NULL,
	`content` text NOT NULL,
	`created_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`drama_id`) REFERENCES `dramas`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `drama_likes` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`drama_id` text NOT NULL,
	`created_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`drama_id`) REFERENCES `dramas`(`id`) ON UPDATE no action ON DELETE no action
);
