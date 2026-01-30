module Jekyll
  module SpanishDateFilter
    MONTHS = {
      "January" => "enero",
      "February" => "febrero",
      "March" => "marzo",
      "April" => "abril",
      "May" => "mayo",
      "June" => "junio",
      "July" => "julio",
      "August" => "agosto",
      "September" => "septiembre",
      "October" => "octubre",
      "November" => "noviembre",
      "December" => "diciembre"
    }

    MONTHS_SHORT = {
      "Jan" => "ene",
      "Feb" => "feb",
      "Mar" => "mar",
      "Apr" => "abr",
      "May" => "may",
      "Jun" => "jun",
      "Jul" => "jul",
      "Aug" => "ago",
      "Sep" => "sep",
      "Oct" => "oct",
      "Nov" => "nov",
      "Dec" => "dic"
    }

    def spanish_date(date, format = "%d de %B de %Y")
      date = date.to_time if date.is_a?(String)
      formatted = date.strftime(format)
      
      MONTHS.each do |english, spanish|
        formatted = formatted.gsub(english, spanish)
      end
      
      MONTHS_SHORT.each do |english, spanish|
        formatted = formatted.gsub(english, spanish)
      end
      
      formatted
    end
  end
end

Liquid::Template.register_filter(Jekyll::SpanishDateFilter)
