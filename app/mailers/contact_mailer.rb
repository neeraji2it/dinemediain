class ContactMailer < ActionMailer::Base
  default from: "donotreply@mail.dine-media.com"
  
  def contact(contact)
    @contact = contact
    subject = @contact.subject
#    attachments[@contact.attach_file_name.to_s.split('/').last] = {:content=>File.read("#{Rails.root}/public/"+@contact.attach.url.to_s)} if @contact.attach
    mail :to =>"vivek@dine-media.com",:subject => subject , :from => @contact.email
  end
end
