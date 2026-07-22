import { sqliteTable, text, integer, real } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull(),
  name: text('name').notNull(),
  authProvider: text('auth_provider').default('local'),
  vipStatus: text('vip_status').default('none'), // none, active, expired
  vipExpiryDate: integer('vip_expiry_date', { mode: 'timestamp' }),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const dramas = sqliteTable('dramas', {
  id: text('id').primaryKey(),
  title: text('title').notNull(),
  genre: text('genre'),
  tag: text('tag'),
  cover: text('cover'),
  synopsis: text('synopsis'),
  rating: real('rating').default(0),
  totalEpisodes: integer('total_episodes').default(0),
  freeEpisodeCount: integer('free_episode_count').default(2),
  status: text('status').default('DRAFT'), // DRAFT, PUBLISHED
});

export const episodes = sqliteTable('episodes', {
  id: text('id').primaryKey(),
  dramaId: text('drama_id').notNull().references(() => dramas.id),
  epNumber: integer('ep_number').notNull(),
  title: text('title').notNull(),
  description: text('description'),
  bunnyVideoId: text('bunny_video_id'),
  bunnyLibraryId: text('bunny_library_id'),
  playbackUrl: text('playback_url'),
  thumbnailUrl: text('thumbnail_url'),
  durationSec: integer('duration_sec'),
  processingStatus: text('processing_status').default('processing'),
  isFreeDefault: integer('is_free_default', { mode: 'boolean' }).default(false),
  publishStatus: text('publish_status').default('DRAFT'),
});

export const subscriptionPlans = sqliteTable('subscription_plans', {
  id: text('id').primaryKey(),
  name: text('name').notNull(),
  durationDays: integer('duration_days').notNull(),
  price: integer('price').notNull(),
  promoLabel: text('promo_label'),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
});

export const paymentAccounts = sqliteTable('payment_accounts', {
  id: text('id').primaryKey(),
  channelType: text('channel_type').notNull(), // bank, e-wallet, qris
  bankOrProviderName: text('bank_or_provider_name').notNull(),
  accountNumber: text('account_number').notNull(),
  accountHolderName: text('account_holder_name').notNull(),
  qrImageUrl: text('qr_image_url'),
  isActive: integer('is_active', { mode: 'boolean' }).default(true),
});

export const adSettings = sqliteTable('ad_settings', {
  id: text('id').primaryKey(),
  adsEnabled: integer('ads_enabled', { mode: 'boolean' }).default(true),
  freeEpisodeCount: integer('free_episode_count').default(2),
  episodesUnlockedPerAd: integer('episodes_unlocked_per_ad').default(2),
  dailyAdUnlockLimit: integer('daily_ad_unlock_limit').default(10),
  androidUnitId: text('android_unit_id'),
  iosUnitId: text('ios_unit_id'),
});

export const transactions = sqliteTable('transactions', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  packageId: text('package_id').notNull().references(() => subscriptionPlans.id),
  amount: integer('amount').notNull(),
  paymentMethod: text('payment_method'), // manual_transfer, gateway
  status: text('status').default('pending'), // pending, success, rejected
  proofOfPaymentUrl: text('proof_of_payment_url'),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const dramaLikes = sqliteTable('drama_likes', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  dramaId: text('drama_id').notNull().references(() => dramas.id),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

export const dramaComments = sqliteTable('drama_comments', {
  id: text('id').primaryKey(),
  userId: text('user_id').notNull().references(() => users.id),
  dramaId: text('drama_id').notNull().references(() => dramas.id),
  content: text('content').notNull(),
  createdAt: integer('created_at', { mode: 'timestamp' }).$defaultFn(() => new Date()),
});

