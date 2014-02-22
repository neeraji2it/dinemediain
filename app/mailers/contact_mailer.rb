class ContactMailer < ActionMailer::Base
  default from: "donotreply@mail.dine-media.com"
  
  def contact(contact)
    @contact = contact
    subject = @contact.subject
    attachments[@contact.original_file_name.to_s] = {:content=>File.read("#{Rails.root}/public/system/attaches/#{@contact.attach_file_name}")} if !@contact.attach_file_name.blank?
    mail :to =>"vivek@dine-media.com", :subject => subject , :from => @contact.email
  end
end
