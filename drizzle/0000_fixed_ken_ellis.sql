CREATE TABLE `ad_settings` (
	`id` text PRIMARY KEY NOT NULL,
	`ads_enabled` integer DEFAULT true,
	`free_episode_count` integer DEFAULT 2,
	`episodes_unlocked_per_ad` integer DEFAULT 2,
	`daily_ad_unlock_limit` integer DEFAULT 10,
	`android_unit_id` text,
	`ios_unit_id` text
);
--> statement-breakpoint
CREATE TABLE `dramas` (
	`id` text PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`genre` text,
	`tag` text,
	`cover` text,
	`synopsis` text,
	`rating` real DEFAULT 0,
	`total_episodes` integer DEFAULT 0,
	`free_episode_count` integer DEFAULT 2,
	`status` text DEFAULT 'DRAFT'
);
--> statement-breakpoint
CREATE TABLE `episodes` (
	`id` text PRIMARY KEY NOT NULL,
	`drama_id` text NOT NULL,
	`ep_number` integer NOT NULL,
	`title` text NOT NULL,
	`description` text,
	`bunny_video_id` text,
	`bunny_library_id` text,
	`playback_url` text,
	`thumbnail_url` text,
	`duration_sec` integer,
	`processing_status` text DEFAULT 'processing',
	`is_free_default` integer DEFAULT false,
	`publish_status` text DEFAULT 'DRAFT',
	FOREIGN KEY (`drama_id`) REFERENCES `dramas`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `payment_accounts` (
	`id` text PRIMARY KEY NOT NULL,
	`channel_type` text NOT NULL,
	`bank_or_provider_name` text NOT NULL,
	`account_number` text NOT NULL,
	`account_holder_name` text NOT NULL,
	`is_active` integer DEFAULT true
);
--> statement-breakpoint
CREATE TABLE `subscription_plans` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text NOT NULL,
	`duration_days` integer NOT NULL,
	`price` integer NOT NULL,
	`promo_label` text,
	`is_active` integer DEFAULT true
);
--> statement-breakpoint
CREATE TABLE `transactions` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text NOT NULL,
	`package_id` text NOT NULL,
	`amount` integer NOT NULL,
	`payment_method` text,
	`status` text DEFAULT 'pending',
	`proof_of_payment_url` text,
	`created_at` integer,
	FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`package_id`) REFERENCES `subscription_plans`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `users` (
	`id` text PRIMARY KEY NOT NULL,
	`email` text NOT NULL,
	`name` text NOT NULL,
	`auth_provider` text DEFAULT 'local',
	`vip_status` text DEFAULT 'none',
	`vip_expiry_date` integer,
	`created_at` integer
);
