class Contact < ActiveRecord::Base
  attr_accessor :attach

#  has_attached_file :attach, :styles => { :large => "640*480", :medium => "300*300>", :thumb => "100*100>" },
#       :path => ":rails_root/public/system/:attachment/:id/:style/:filename",
#       :url => "/system/:attachment/:id/:style/:filename"
  validates :email, :presence => true, :email_format => true
  validates :name, :subject , :presence => true
# validates_format_of :attach_file_name, :with => %r{\.(docx|doc|pdf)$}i,
# :message => 'Only PDF, doc, docx or TEXT files are allowed. '
# validates_attachment_presence :attach
#  validates_attachment_content_type :attach, :content_type => ['application/pdf', 'text/plain'], :if => Proc.new { |module_file| !module_file.attach_file_name.blank? }, :message => "must be in '.pdf' format"
  after_save :send_mail
  def send_mail
    ContactMailer.contact(self).deliver
  end
end
