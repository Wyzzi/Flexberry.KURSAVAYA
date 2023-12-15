package KURSAVAYA.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import KURSAVAYA.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;
import java.util.Date;

/**
 * Entity implementation class for Entity: Клиент
 */
@Entity(name = "IISKURSAVAYAКлиент")
@Table(schema = "public", name = "Клиент")
public class Klient {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Имя")
    private String имя;

    @Column(name = "ТелНомер")
    private Long телномер;

    @Column(name = "Фамилия")
    private String фамилия;

    @Column(name = "ДатаРожд")
    private Date датарожд;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "BankDannye")
    @Convert("BankDannye")
    @Column(name = "БанкДанные", length = 16, unique = true, nullable = false)
    private UUID _bankdannyeid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "BankDannye", insertable = false, updatable = false)
    private BankDannye bankdannye;


    public Klient() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }

    public Long getТелНомер() {
      return телномер;
    }

    public void setТелНомер(Long телномер) {
      this.телномер = телномер;
    }

    public String getФамилия() {
      return фамилия;
    }

    public void setФамилия(String фамилия) {
      this.фамилия = фамилия;
    }

    public Date getДатаРожд() {
      return датарожд;
    }

    public void setДатаРожд(Date датарожд) {
      this.датарожд = датарожд;
    }


}