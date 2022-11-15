import { Entity, PrimaryGeneratedColumn } from 'typeorm';

/***********
model User {
  id                  String              @id @default(cuid())
  name                String?
  email               String?             @unique
  emailVerified       DateTime?
  image               String?
  introduction        String?             @db.Text
  accounts            Account[]
  sessions            Session[]
  requestPosts        RequestPost[]
  requestFundings     RequestFunding[]
  requestComments     RequestComment[]
  requestReactions    RequestReaction[]
  requestBookmarks    RequestBookmark[]
  requestReports      RequestReport[]
  requestInquiries    RequestInquiry[]
  requestinquiryMessages     RequestInquiryMessage[]
  alarms              Alarm[]
  points              Point[]
  rankings            Ranking[]
  creatorReviews      CreatorReview[]
  creator             Creator?

  @@map("users")
}
***********/

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: string;
}
