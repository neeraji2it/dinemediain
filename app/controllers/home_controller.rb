class HomeController < ApplicationController
  def index
    
  end
  
  def services
    
  end
  
  def portfolio
    
  end
  
  def contact
    if request.post?
      @contact = Contact.new(contact_params)
      if params[:contact][:attach].present?
        file_name = params[:contact][:attach].original_filename    
        file = params[:contact][:attach].read    
        file_type = file_name.split('.').last
        new_name_file = Time.now.to_i
        new_file_name_with_type = "#{new_name_file}." + file_type
        File.open("#{Rails.root.to_s}/public/system/attaches/#{new_file_name_with_type}", 'wb') {|f| f.write(file) }
        @contact.original_file_name = file_name
        @contact.attach_file_name = new_file_name_with_type
      end
      if @contact.save
        flash.now[:notice] = 'Your Message Successfully Sent.'
        redirect_to '/'
      else
        render :action => "contact"
      end
    else
      @contact = Contact.new
    end
  end
  
  private
  def contact_params
    params.require(:contact).permit!
  end
end
